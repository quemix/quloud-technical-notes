# Minimal makefile for Sphinx documentation
#

# You can set these variables from the command line, and also
# from the environment for the first two.
SPHINXOPTS    ?=
SPHINXBUILD   ?= sphinx-build
SPHINXINTL    ?= sphinx-intl
SOURCEDIR     = .
BUILDDIR      = _build
# update-po で翻訳カタログ（.po）を更新する記事。既定は .po のある記事すべて。
# 新しく訳す記事は make update-po EN_DOCS="thermo/index thermo/..." で .po を作る。
EN_DOCS       ?= $(patsubst locales/en/LC_MESSAGES/%.po,%,$(shell find locales/en/LC_MESSAGES -name '*.po' | sort))

# 手元のPythonにテーマが無ければ（apt版Sphinxなど）、requirements.txt の版を
# Git管理外の PYLIB に pip で入れて使う。requirements.txt を変えると入れ直す。
# GitHub Actions は先に pip install するので、こちらは使わない。
PYLIB ?= $(or $(XDG_CACHE_HOME),$(HOME)/.cache)/quloud-technical-notes/pylib
ifneq ($(shell python3 -c "import sphinx, pydata_sphinx_theme" 2>/dev/null && echo ok),ok)
SPHINXBUILD = PYTHONPATH="$(PYLIB)" python3 -m sphinx
SPHINXINTL = PYTHONPATH="$(PYLIB)" python3 -m sphinx_intl
SPHINXDEPS  = $(PYLIB)/requirements.txt
endif

$(PYLIB)/requirements.txt: requirements.txt
	python3 -m pip install -q --upgrade --target "$(PYLIB)" -r requirements.txt --break-system-packages
	cp requirements.txt "$@"

# 末尾の「%: Makefile」がSphinxに渡さないよう、ソースファイルとして扱う。
requirements.txt: ;

# 手元での確認用。公開はtechnical-notesブランチへのpushでGitHub Actionsが行う。
serve:
	python3 -m http.server -d "$(BUILDDIR)/html" 8001

# meta/codex/AGENTS.md にある非公開の作業ルールを参照するリンクを張る。
agent-link:
	@test -f meta/codex/AGENTS.md || { echo "meta/ が無い。先に README.md の手順で clone する"; exit 1; }
	@test ! -e AGENTS.md -o -L AGENTS.md || { echo "AGENTS.md が実ファイルとして存在する。退避してから実行する"; exit 1; }
	ln -sfn meta/codex/AGENTS.md AGENTS.md

# Put it first so that "make" without argument is like "make help".
help:
	@$(SPHINXBUILD) -M help "$(SOURCEDIR)" "$(BUILDDIR)" $(SPHINXOPTS) $(O)

.PHONY: help html gettext update-po html-en agent-link serve Makefile

# Always rebuild every page (-E). An incremental build rewrites only the pages whose
# source changed, so after the toctree changes the sidebar of the other pages stays stale.
html: $(SPHINXDEPS)
	@$(SPHINXBUILD) -M html "$(SOURCEDIR)" "$(BUILDDIR)" -E $(SPHINXOPTS) $(O)

gettext: $(SPHINXDEPS)
	@$(SPHINXBUILD) -b gettext -E -d "$(BUILDDIR)/doctrees-gettext" $(SPHINXOPTS) $(O) "$(SOURCEDIR)" "$(BUILDDIR)/gettext"

# Update only the catalogs of EN_DOCS; the other articles have no English translation yet.
update-po: gettext
	@set -e; catalog_dir=$$(mktemp -d "$(BUILDDIR)/gettext-selected.XXXXXX"); \
	trap 'rm -rf "$$catalog_dir"' EXIT; \
	for doc in $(EN_DOCS); do \
		install -D "$(BUILDDIR)/gettext/$$doc.pot" "$$catalog_dir/$$doc.pot"; \
	done; \
	$(SPHINXINTL) update -p "$$catalog_dir" -d locales -l en

html-en: $(SPHINXDEPS)
	@QULOUD_DOC_LANGUAGE=en $(SPHINXBUILD) -b html -E -d "$(BUILDDIR)/doctrees-en" $(SPHINXOPTS) $(O) "$(SOURCEDIR)" "$(BUILDDIR)/html/en"

# Catch-all target: route all unknown targets to Sphinx using the new
# "make mode" option.  $(O) is meant as a shortcut for $(SPHINXOPTS).
%: Makefile
	@$(SPHINXBUILD) -M $@ "$(SOURCEDIR)" "$(BUILDDIR)" $(SPHINXOPTS) $(O)
