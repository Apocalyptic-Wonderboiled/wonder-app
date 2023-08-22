# ローカルでのアプリケーションの起動方法
### 1, git clone リポジトリ
### 2, プロジェクトのルート（package.jsonがあるディレクトリ）で下記コマンドを実行

```
# プロジェクトのルートに移動
cd wonder-app

# package.jsonをもとにnode_modulesをインストール
npm install

# サーバーを立ち上げる
npm start

*node.jsが入ってない場合はインストールする
参照：https://it-kyujin.jp/article/detail/344/
```

# 開発の流れ
### 1, Issues に対する ```feature``` ブランチを ```develop``` から切る

```
git checkout develop
git pull origin develop
git checkout -b feature/#7_update_readme
```

**tips**
- 最新の ```develop``` を pull してから ```feature``` ブランチを切る
- ブランチ名は ```feature/#[Issue 番号]_XXXXXX``` 

<br />

### 2, ```feature``` ブランチで開発する

```
git add .
git status
git commit -m "#7 update readme"
git push origin feature/#7_update_readme
```

**tips**
- コミット時のメッセージを ```#[Issue 番号] XXXXXX``` に統一することで Issue とコミットを紐付けられます

<br />

### 3, 開発終了後、```develop``` へプルリクを作成する

<br />
