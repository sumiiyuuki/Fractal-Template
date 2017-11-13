---
title: コーディング規約
---

## 共通ルール

HTML, CSS, JavaScriptに共通するルール。

### 対応ブラウザ

本案件は、下記の環境にて正常に表示・動作することを保証する。

- PC : Internet Explorer 10〜、Firefox最新バージョン、Google Chrome最新バージョン
- SP : Android 4.0〜、iOS Safari最新バージョン

### コメントの書式

コメントには`//`は使用しない。

```CSS
/* ====================
--- > ブロック
==================== */

/* --------------------
- > エレメント
-------------------- */

/* -- 状態変化など -- */
```

### 画像ファイル

画像ファイルは種類に応じて下記に記す文言を接頭辞として、以降の文字列をアンダースコアで接続して命名する。

| 種類| 表記 |
|:---|:---|
| 写真 | img |
| ボタン | btn |
| アイコン | ico |
| テキスト | txt |
| バナー | bnr |
| 背景 | bg |
| ロゴ | logo |

### ディレクトリ

ディレクトリ名は下記にする。

| 種類| 表記 |
|:---|:---|
| SCSSディレクトリ | scss |
| CSSディレクトリ | css |
| 画像ディレクトリ | images |
| jsディレクトリ | js |
| images/css/js 格納ディレクトリ | static |
| 開発ディレクトリ | src |
| 出力ディレクトリ | build |

## HTMLルール

- HTML5でのマークアップ
- インデントは半スペ2で統一
- セマンティックなマークアップを心がける
- 各ブロックのあとに閉じコメントを書く
  - 例）`<!-- /.block -->`
- 不要な属性は省略する
  - NG)`<link rel="stylesheet" type="text/css" href="style.css">`
  - OK)`<link rel="stylesheet" href="style.css">`
- 要素毎に改行する

### 命名規則

- 基本的にBEMの命名規則を使用する。
- Modifireに関しては、アクセシビリティを考慮してWAI-ARIAを使用する。
- Jsのトリガー要素には`js-`の接頭辞を使用する。
- レイアウト要素には`l-`の接頭辞を使用する。
- テーマ要素には`theme-`の接頭辞を使用する。

```HTML
<header class="l-header">
  <nav class="nav">
    <button type="button" class="nav__btn js-btn">
      <span></span>
      <span></span>
      <span></span>
    </button>
    <!-- /.nav__btn -->

    <ul class="nav__inner">
      <li class="nav__item">
        <a href="" aria-current="false">項目1</a>
      </li>
      <li class="nav__item">
        <a href="" aria-current="true">項目2</a>
      </li>
      <li class="nav__item">
        <a href="" aria-current="false">項目2</a>
      </li>
    </ul>
  </nav>
</header>
<!-- /.l-header -->
```

## CSSルール

- SCSS記法で書くこと
  - コンパイル形式は`expanded`を使用
- インデントは半スペ2で統一
- カラーコードは小文字でHEX値を使用
  - 不透明度を表現したい場合はRGBA値も使用可能

### リセットCSS

このプロジェクトでは 「Eric Meyer’s “Reset CSS” 2.0」 を使用。

### 設計

```
scss
　├ base
    ├ variables
      ├ _color.scss
      ├ _family.scss
      ├ _size..scss
    ├ _mixin.scss
    ├ _reset.scss
    └ _base.scss
　├ layout
    ├ _header.scss
    ├ _footer.scss
    └ _grid.scss
　├ module
    ├ _nav.scss
    └ _logo.scss
　└ theme
    └ _top.scss
```

ディレクトリ | 用途
---------- | ---------------------------------- |
base       | ベースとなるスタイルを格納。
layout     | レイアウトスタイルを格納。
module     | モジュールスタイルを格納。
theme      | テーマによって切り替える際のスタイルを格納。

## 禁止事項

- セレクタのネストは3階層で留める
- クラス名になるべく見た目を反映しない
  - 見た目以外の理由がない場合は最終手段として可能とする
- HTML内にスタイルは記述しない
