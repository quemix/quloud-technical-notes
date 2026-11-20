# Configuration file for the Sphinx documentation builder.
#
# For the full list of built-in configuration values, see the documentation:
# https://www.sphinx-doc.org/en/master/usage/configuration.html

# -- Project information -----------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#project-information

project = 'Quloud Technical Notes'
copyright = '2025, Quemix inc'
author = 'Jun-Ichi Iwata'
version = '2025.8.25'

# -- General configuration ---------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#general-configuration

import os
import sys

sys.path.insert(0, os.path.abspath('_ext'))

# cjk_linebreak: 日本語の文の途中で改行した原稿で、表示に空白が入らないようにする。
# volume_numbering: 図表と式の番号を巻ごとに数え直す（巻をまたいで通し番号にならないようにする）。
extensions = ['sphinx.ext.mathjax', 'sphinx.ext.githubpages', 'cjk_linebreak', 'volume_numbering']

templates_path = ['_templates']
# Sphinx does not use .gitignore; keep the private meta checkout out of the document scan.
exclude_patterns = ['_build', 'docs', 'meta/**', '.claude', 'Thumbs.db', '.DS_Store']

language = 'ja'

numfig = True
numfig_secnum_depth = 2
#math_number_all = True
#math_numfig = True
#math_eqref_format = "Eq.{number}"

# -- Options for HTML output -------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#options-for-html-output

html_theme = 'pydata_sphinx_theme'
# sphinx.ext.githubpages writes CNAME from this URL; without it the build deletes CNAME.
html_baseurl = 'https://technical-notes.quemix.com/'
html_static_path = ['_static']
html_css_files = ['custom.css']
html_title = project
html_sidebars = {'index': []}
html_theme_options = {
    'navigation_depth': 2,
    'search_bar_text': '技術ノートを検索',
    'secondary_sidebar_items': ['page-toc'],
    'shorten_urls': False,
}


def add_solid_styles(app, pagename, _templatename, _context, _doctree):
    if pagename.startswith('solid/'):
        app.add_css_file('solid-links.css')


def setup(app):
    app.connect('html-page-context', add_solid_styles)
