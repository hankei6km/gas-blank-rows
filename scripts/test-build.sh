#!/bin\bash
set -e

BASENAME="blank-rows"

# ビルドされたコードにテスト用のコードを結合する.
# ビルドされたコードはエクスポートされていないための対応.
cat "test/build/${BASENAME}_src.js" "build/${BASENAME}".js > "test/build/${BASENAME}.spec.js"