---
sidebar_position: 2
---

# サーバーへの入り方

サーバーへ最初に接続する前に、サーバールールをご確認ください。サーバーへ接続した時点で、サーバールールの内容を確認したものとみなします。

## Java版マイクラ(Minecaft Java Edition)から

Get started by **creating a new site**.

Or **try Docusaurus immediately** with **[docusaurus.new](https://docusaurus.new)**.

## スマホ・タブレット・Windowsの統合版マイクラ(Minecraft)から
**サーバーへの接続には、Xbox Liveアカウントが必要です。**

Generate a new Docusaurus site using the **classic template**:

```shell
npm init docusaurus@latest my-website classic
```

## コンソール(Switch/PS4/PS5)の統合版マイクラ(Minecraft)から
ほかの統合版マイクラ(Minecraft)と同様、サーバーへの接続にはXbox Liveアカウントでログインする必要があります。また、それに加えて、Nintendo Switchでサーバーにアクセスする場合はNintendo Switch Online、PlayStationシリーズからアクセスする場合はPlayStation Networkへの加入がそれぞれ必要です。
### 本体のDNS設定を変更する
現在、コンソール向けのMinecraftでは、そのままの状態では特集サーバー以外のサーバーに接続できないため、少し細工をします。

#### Nintendo Switchの場合

Run the development server:

```shell
cd my-website

npx docusaurus start
```

Your site starts at `http://localhost:3000`.

Open `docs/intro.md` and edit some lines: the site **reloads automatically** and displays your changes.
