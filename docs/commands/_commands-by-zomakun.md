# コマンド一覧 by zomakun

これから紹介するのはkuromaruサーバー内で使える主要のコマンドです
(一部コマンドではないものを含む)

## テレポートコマンド一覧

### mvtp

:::info 大前提
mvtpとは各ディメンション間を移動するコマンドです。
:::

- `/mvtp sigen` 資源を集めるワールドです
- `/mvtp tt` 共用のTTがあるワールドです
- `/mvtp nett` ホグリントラップがあるワールドです
- `/mvtp endtt` 高性能経験値トラップがあります
- `/mvtp ott` [共用ではないいろいろなIGTや施設があります」
- `/mvtp world_nether` 「ネザーのワールドです。MOBがわきます」
- `/mvtp world_the_end` エンドのワールドです。MOBがわきます

### その他tp

- `/mvs` world(各ワールド)の初期スポーンへTPします
- `/mvtp world` 通常の建築ワールドへTPします(観覧車の場所)

## ペットコマンド一覧

:::info 大前提
ペットはそのMOBに対してリードで殺すことでできる。
(エンダードラゴン・ウィザーは例外)
:::

- `/pc` ペットを自分のところへ呼び出す
- `/psa` ペットをしまう（いなくなるわけではない）
- `/petname ○○` ペットの名前を決める(○○に名前を入力)
- `/peti` ペットのインベントリを開く
- `/ps` ペットにMOBに対しての攻撃をやめさせる
- `/pcst` ペットのスキルを設定する
- `/pinfo` ペットの様々な情報を見る
- `/petbeacon` ペットビーコンのON・OFF切り替え
- `/petlist` 自分の持っているペットの一覧
- `/petresource` そのペットを野生にする

## HOMEコマンド一覧

:::info 大前提
homeコマンドとは対象の場所をhomeとして登録して、
コマンドを入力するとその対象の場所へtpするコマンドです。
:::

- `/sethome ○○` その今いる場所をhomeとして登録する(○○に名前)
- `/home ○○` 対象のhomeへtpする(○○は先ほど/sethomeで登録した名前)
- `/homeslist` 設定したhomeの一覧が表示される(羊毛をクリックでその場所へ)

## lockコマンド一覧

:::info 大前提
lockとはチェストなどに向けて看板で[private]とロックをするものある。
:::

- `/lock 行数 プレイヤーネーム` privateの看板の中に名前を追加する(more usersも同様)
  - `[everyone]` みんな開ける
  - `[timer:秒数]` ドアなどでその秒数が立つと閉まるようにする

## dynmapマップでその場所を表示させる

:::info 大前提
コマンドでやるものではない。リンク:http://kuromaru.ml:8123/#
:::

看板に

```
[dynmap]
名前 (その場所の名前)
icon:アイコン名 (下記リンクで見てください)
```

を入力する

### 例

```
[dynmap]
○○の家
icon:house
```

icon名一覧: https://mcmminafy.wiki.fc2.com/upload_dir/m/mcmminafy/51d9182c0d6eec5e45ff39fb50a8ea61.png
