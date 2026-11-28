# Configuration file for the Sphinx documentation builder.
#
# For the full list of built-in configuration values, see the documentation:
# https://www.sphinx-doc.org/en/master/usage/configuration.html

# -- Project information -----------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#project-information

project = 'Quloud Technical Notes'
copyright = '2026, Quemix inc'
author = 'Jun-Ichi Iwata'
version = '2025.8.25'

# -- General configuration ---------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#general-configuration

import os
import sys

sys.path.insert(0, os.path.abspath('_ext'))

# cjk_linebreak: 日本語の文の途中で改行した原稿で、表示に空白が入らないようにする。
# volume_numbering: 図表と式の番号を巻ごとに数え直す（巻をまたいで通し番号にならないようにする）。
# english_edition: 英語版（locales/en/published.txt の記事）と日本語版を相互にリンクし、未訳の記事は原文への案内にする。
# partner_links: 英語版で、計算事例へのリンクを計算事例の英語版へ向ける（英語版のあるページだけ）。
# english_edition.py と partner_links.py は計算事例（quloud-examples）と同じファイルに保つ。
extensions = [
    'sphinx.ext.mathjax', 'sphinx.ext.githubpages', 'cjk_linebreak', 'volume_numbering',
    'english_edition', 'partner_links',
]

templates_path = ['_templates']
# Sphinx does not use .gitignore; keep the private meta checkout out of the document scan.
exclude_patterns = ['_build', 'docs', 'meta/**', '.claude', 'Thumbs.db', '.DS_Store']

language = os.environ.get('QULOUD_DOC_LANGUAGE', 'ja')
locale_dirs = ['locales/']
gettext_compact = False
# 日本語の原文が少し変わった文は、訳し直すまで前の英訳を出す（英語のページに日本語の段落を混ぜない）。
# 古い訳の残るページには english_edition が注記を出し、ビルドで警告する。
gettext_allow_fuzzy_translations = True
# コードブロックも翻訳の対象にし、英語版ではコメントを英語にする（日本語のコメントを含むのは固体物理の2つだけ。2026-11-28）。
gettext_additional_targets = ['literal-block']

numfig = True
# 図表と式の番号は記事ごとに数える。機械学習・数学は巻→章→節→記事の3段なので3にする。
# 2段の巻（固体物理など）は記事の番号が2段なので、番号は変わらない。
numfig_secnum_depth = 3
#math_number_all = True
#math_numfig = True
#math_eqref_format = "Eq.{number}"

# -- Options for HTML output -------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#options-for-html-output

html_theme = 'pydata_sphinx_theme'
# sphinx.ext.githubpages writes CNAME from this URL; without it the build deletes CNAME.
quloud_japanese_baseurl = 'https://technical-notes.quemix.com/'
quloud_english_baseurl = quloud_japanese_baseurl + 'en/'
# canonical のURLもここから作るので、英語版は /en/ を指す。
html_baseurl = quloud_english_baseurl if language == 'en' else quloud_japanese_baseurl
# 計算事例の英語版で公開しているページの一覧（partner_links）。
quloud_examples_baseurl = 'https://example.quloud-platform.quemix.com/'
quloud_partner_sites = {
    quloud_examples_baseurl: quloud_examples_baseurl + 'en/published.json',
}
html_static_path = ['_static']
html_css_files = ['custom.css', 'language-switcher.css']
html_js_files = ['js/language-switcher.js']
html_title = project
html_sidebars = {'index': []}
html_theme_options = {
    'navbar_end': ['theme-switcher', 'language-switcher', 'navbar-icon-links'],
    'navigation_depth': 2,
    'search_bar_text': 'Search Technical Notes' if language == 'en' else '技術ノートを検索',
    'secondary_sidebar_items': ['page-toc'],
    'shorten_urls': False,
    # Link to the sister site; quloud-examples links back with 「技術ノート」.
    # The English edition links to the English top page of the examples (published since 2026-11-28).
    'external_links': [
        {
            'name': 'Calculation Examples' if language == 'en' else '計算事例',
            'url': quloud_examples_baseurl + ('en/' if language == 'en' else ''),
        },
    ],
    # Five volumes plus the external link; the default (5) would hide one under "More".
    'header_links_before_dropdown': 6,
    # Same footer as quloud-examples: copyright only, without the Sphinx/theme credits.
    'footer_start': ['copyright'],
    'footer_end': [],
}


def localize_navigation(app, env):
    """Use fixed labels for links to articles outside the translated catalogs."""
    if app.config.language != 'en' or app.builder.name != 'html':
        return

    import json
    from pathlib import Path

    from docutils import nodes

    label_path = Path(app.confdir) / '_static/translations/en.json'
    labels = json.loads(label_path.read_text(encoding='utf-8'))

    def localize(node):
        key = ' '.join(node.astext().split())
        label = labels.get(key)
        if label:
            node[:] = [nodes.Text(label)]

    for docname, title in env.titles.items():
        # Keep each article's own long title independent of its navigation link.
        title = title.deepcopy()
        localize(title)
        env.titles[docname] = title

    for toc in env.tocs.values():
        for link in toc.findall(nodes.reference):
            if not link.get('anchorname'):
                localize(link)


def add_solid_styles(app, pagename, _templatename, _context, _doctree):
    if pagename.startswith('solid/'):
        app.add_css_file('solid-links.css')


def add_volume_link(app, pagename, _templatename, context, _doctree):
    """Give the sidebar the volume (e.g. 固体物理) that the page belongs to."""
    env = app.env
    parents = {}
    for parent, children in env.toctree_includes.items():
        for child in children:
            parents.setdefault(child, parent)
    root = app.config.root_doc
    doc = pagename
    while parents.get(doc) not in (None, root):
        doc = parents[doc]
    if parents.get(doc) == root and doc in env.titles:
        context['volume_title'] = env.titles[doc].astext()
        context['volume_url'] = context['pathto'](doc)


def setup(app):
    app.connect('env-updated', localize_navigation)
    app.connect('html-page-context', add_solid_styles)
    app.connect('html-page-context', add_volume_link)
