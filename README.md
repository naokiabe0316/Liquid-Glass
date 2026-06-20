# Liquid-Glass

白黒チェッカー背景の上に、透明なシリコン／ゼリー質感の球が重力で落ちてくる
Three.js のインタラクティブなページです。画面をタップ／クリックすると球が増えます。

## プレビュー（ローカル）

```bash
python3 -m http.server 8000
# ブラウザで http://localhost:8000 を開く
```

## GitHub Pages で公開

`main` ブランチに push すると `.github/workflows/pages.yml` が自動でデプロイします。

公開URL: https://naokiabe0316.github.io/Liquid-Glass/

## ファイル構成

| ファイル | 役割 |
| --- | --- |
| `index.html` | ページ本体（背景・マテリアル・物理すべて内包） |
