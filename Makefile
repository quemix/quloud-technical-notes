# Minimal makefile for Sphinx documentation
#

# You can set these variables from the command line, and also
# from the environment for the first two.
SPHINXOPTS    ?=
SPHINXBUILD   ?= sphinx-build
SOURCEDIR     = .
BUILDDIR      = docs
#BUILDDIR      = _build

html:
	@$(SPHINXBUILD) -b html "$(SOURCEDIR)" "$(BUILDDIR)"

# meta/codex/AGENTS.md にある非公開の作業ルールを参照するリンクを張る。
agent-link:
	@test -f meta/codex/AGENTS.md || { echo "meta/ が無い。先に README.md の手順で clone する"; exit 1; }
	@test ! -e AGENTS.md -o -L AGENTS.md || { echo "AGENTS.md が実ファイルとして存在する。退避してから実行する"; exit 1; }
	ln -sfn meta/codex/AGENTS.md AGENTS.md

# Put it first so that "make" without argument is like "make help".
help:
	@$(SPHINXBUILD) -M help "$(SOURCEDIR)" "$(BUILDDIR)" $(SPHINXOPTS) $(O)

.PHONY: help agent-link Makefile

# Catch-all target: route all unknown targets to Sphinx using the new
# "make mode" option.  $(O) is meant as a shortcut for $(SPHINXOPTS).
%: Makefile
	@$(SPHINXBUILD) -M $@ "$(SOURCEDIR)" "$(BUILDDIR)" $(SPHINXOPTS) $(O)
