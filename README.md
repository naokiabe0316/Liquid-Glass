# Liquid-Glass

リキッドグラス（すりガラス）風のデザインを使ったシンプルな Hello World ページです。

## プレビュー（ローカル）

リポジトリのルートで任意の静的サーバーを立てて開けます。

```bash
python3 -m http.server 8000
# ブラウザで http://localhost:8000 を開く
```

`index.html` をブラウザで直接開いてもOKです。

## GitHub Pages で公開

このリポジトリには `.github/workflows/pages.yml` を同梱しており、`main` ブランチに
push すると自動で GitHub Pages にデプロイされます。

初回のみ、リポジトリの **Settings → Pages → Build and deployment → Source** を
**GitHub Actions** に設定してください。

公開後の URL の例:

```
https://<ユーザー名>.github.io/Liquid-Glass/
```

## ファイル構成

| ファイル | 役割 |
| --- | --- |
| `index.html` | ページ本体 |
| `style.css`  | リキッドグラスのスタイル |
| `script.js`  | ボタンで挨拶を切り替える処理 |
