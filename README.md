# Quloud Technical Notes

公開中のSphinx技術ノートです。科学的な概念・前提・手法・結果の解釈を扱い、
Quloudの具体的な計算事例は[`quloud-examples`](https://github.com/quemix/quloud-examples)、
画面操作はQuloudオンラインマニュアルに置きます。

## ビルド

```bash
sphinx-build -b html -E -W -d /tmp/quloud-technical-notes-doctrees . /tmp/quloud-technical-notes-html
```

`-E`でSphinxの保存済み環境を使わずに再読込し、`-W`で警告をビルド失敗として扱います。
Sphinxは`.gitignore`を入力除外として扱わないため、ローカルに非公開の`meta/`チェックアウトがある場合は、
`conf.py`の`exclude_patterns`にも`meta/**`を含めてください。

## 内部の作業方針とエージェント設定

調査記録や編集方針は、公開リポジトリへ入れず、非公開の
`quloud-technical-notes-meta`を`meta/`としてチェックアウトして管理します。

```bash
git clone git@github.com:quemix/quloud-technical-notes-meta.git meta
make agent-link
```

`meta/`は`.gitignore`対象です。公開リポジトリには内部資料やエージェント設定を含めません。
