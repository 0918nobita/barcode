# バーコード画像生成プログラム

標準入力で指定された 12 桁の数字をもとに、SVG 形式のバーコード画像を生成します。

13 桁目のチェックデジットは自動で算出されて結果に反映されます。

Deno (TypeScript) で実装しています。

```bash
echo "490136033585" | deno run main.ts > out.svg
```

## インストール方法

以下のように `deno install` コマンドを実行すると、この CLI ツールは `barcode` コマンドとしてインストールされます。

```bash
deno install --name barcode main.ts
```

```bash
echo "490136033585" | barcode > out.svg
```
