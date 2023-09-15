# アプリの概要

### 1, テーマ
47都道府県からランダムで旅行先を決定するアプリ

<img src='https://github.com/Apocalyptic-Wonderboiled/wonder-app/assets/63830279/a7159de9-486b-4842-ab4e-cd2eb5bc4b8a' width='50%'><img src='https://github.com/Apocalyptic-Wonderboiled/wonder-app/assets/63830279/8f17d461-1038-4e58-b532-52ddca7c2f96' width='50%'>

### 2, 仕様詳細
- TOPの「はじめる」ボタンを押すと都道府県画像のシャッフルが始まり、「STOP」ボタンを押すと都道府県が決定する
- その際、chatGPTからその都道府県のおすすめを教えてもらえる

### 3, 使用技術
#### フロントエンド
- React
  - version: 18系

#### インフラ
- Vercel

#### 外部API
- openAI

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
