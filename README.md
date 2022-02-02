# gas-blank-rows

スプレッドシートから空行を削除する Googl Apps Script 用ライブラリー。

AppSheet 利用時に発生する空行の削除が主な目的です。

## Setup

ライブラリーは App Script で利用できる状態になっています。
Apps Script のコードエディターで以下の手順を実行するとプロジェクトへ追加できます。

1. コードエディターのファイル名一覧が表示される部分の「ライブラリ +」をクリック
1. 「スクリプト ID」フィールドに `1Z_jGkRnqLfC4xq713qLPsEXidJdFx4UheREs_ck7XopFyuULek9PPrOo` を入力し検索をクリック
1. バージョンを選択(通常は最新版)
1. 「ID」を `BlankRows` へ変更
1. 「追加」をクリック

上記以外にも Release ページから `gas-balnk-rows.zip` をダウンロードし、`/dist` ディレクトリーをプロジェクトへコピーできます。

## Usage

AppSheet で利用しているスプレッドシートから空行を削除する場合は、以下のようなコードを「変更時」などのトリガーに設定します。

```js
function onChange(e) {
    if (e.changeType !== 'INSERT_ROW') {
        const sheet = SpreadsheetApp.getActiveSheet();
        BlankRows.deleteBlankRows(sheet)
    }
}
```

## TypeScript

TypeScript(clasp) でコードを記述している場合は、以下の方法で型定義を設定できます。

型定義パッケージをインストールします。

```console
$ npm install --save-dev  @hankei6km/gas-blank-row
```

`tsconfig.json` に定義を追加します。

```json
{
  "compilerOptions": {
    "target": "ES2019",
    "module": "ES2020",
    "lib": [ "ESNext" ],
    "types": [
       "@types/google-apps-script",
       "@hankei6km/gas-blank-row"
    ],


```

## License

MIT License

Copyright (c) 2022 hankei6km
