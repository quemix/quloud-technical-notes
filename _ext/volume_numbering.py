"""図表と式の番号を巻ごとに数え直す。

各巻の目次（``:numbered:``）は章番号を1から振るので、別の巻にも同じ番号の
記事がある。Sphinxは図表・式の番号を記事番号ごとのカウンターで数えるが、
カウンターはプロジェクト全体で1つなので、例えば熱化学の1.1の最初の図が、
固体物理の1.1の図の続きの番号になっていた。

番号を振る間だけ、各記事の節番号の先頭に巻の番号を付けて別のカウンターを
使わせ、振り終えたら取り除く。番号の付いていないページ（付録など）は、
ページごとに1から数える。
"""

from sphinx.environment.collectors.toctree import TocTreeCollector

_original_assign_figure_numbers = TocTreeCollector.assign_figure_numbers

# 番号の付いていないページに使う仮の巻番号。実際の巻の数より十分大きくする。
_UNNUMBERED_BASE = 1_000_000


def _volume_of_docs(env):
    """各ページが、ルート目次のどの巻（何番目の項目）の下にあるかを返す。"""
    volume_of = {}
    root = env.config.root_doc
    for volume, top in enumerate(env.toctree_includes.get(root, []), start=1):
        stack = [top]
        while stack:
            docname = stack.pop()
            if docname in volume_of:
                continue
            volume_of[docname] = volume
            stack.extend(env.toctree_includes.get(docname, []))
    return volume_of


def assign_figure_numbers(self, env):
    old_fignumbers = env.toc_fignumbers
    saved_secnumbers = env.toc_secnumbers
    saved_depth = env.config.numfig_secnum_depth

    volume_of = _volume_of_docs(env)
    prefixed = {}
    for index, docname in enumerate(sorted(env.found_docs), start=1):
        secnumbers = saved_secnumbers.get(docname)
        if secnumbers and any(secnumbers.values()):
            # 番号の無い小見出しは () のままにして、記事の番号を引き継がせる。
            volume = volume_of.get(docname, 0)
            prefixed[docname] = {
                anchor: (volume, *secnum) if secnum else ()
                for anchor, secnum in secnumbers.items()
            }
        else:
            prefixed[docname] = {'': (_UNNUMBERED_BASE + index,)}

    env.toc_secnumbers = prefixed
    env.config.numfig_secnum_depth = saved_depth + 1
    try:
        _original_assign_figure_numbers(self, env)
    finally:
        env.toc_secnumbers = saved_secnumbers
        env.config.numfig_secnum_depth = saved_depth

    env.toc_fignumbers = {
        docname: {
            figtype: {node_id: number[1:] for node_id, number in numbers.items()}
            for figtype, numbers in fignumbers.items()
        }
        for docname, fignumbers in env.toc_fignumbers.items()
    }
    return [
        docname
        for docname, fignumbers in env.toc_fignumbers.items()
        if fignumbers != old_fignumbers.get(docname)
    ]


def setup(app):
    TocTreeCollector.assign_figure_numbers = assign_figure_numbers
    return {'parallel_read_safe': True, 'parallel_write_safe': True}
