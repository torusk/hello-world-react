#!/bin/bash

# hello-world-reactプロジェクト専用の更新・デプロイスクリプト

# プロジェクトディレクトリの設定
PROJECT_DIR="$(pwd)"

# プロジェクトディレクトリに移動
cd "$PROJECT_DIR" || { echo "エラー: プロジェクトディレクトリが見つかりません"; exit 1; }

# 以下、スクリプトの残りの部分...
# 現在のブランチを確認
CURRENT_BRANCH=$(git rev-parse --abbrev-ref HEAD)
if [ "$CURRENT_BRANCH" != "main" ]; then
    echo "警告: mainブランチではありません。現在のブランチ: $CURRENT_BRANCH"
    read -p "続行しますか？ (y/n) " -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        exit 1
    fi
fi

# 最新の変更を取得
git pull origin main

# 変更をステージングに追加
git add .

# 変更をコミット
git commit -m "Update: Minor changes"

# GitHub にプッシュ
git push origin main

echo "変更がプッシュされました。GitHub Actionsでのデプロイを確認してください。"
echo "デプロイ後、以下のURLで変更を確認できます："
echo "https://hello-world-react-adaa0.web.app"

#実行は、./update_hello_world_react.sh