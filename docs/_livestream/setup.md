---
title: 遠隔で生放送する場合の手順
---

VPSを使って遠隔で生放送する場合の手順をまとめました。

## 生放送サーバーの用意

Ubuntu 20.04で、最低RAM2GBのVPSを用意する。

IPとルートのパスワードをメモする。

```bash
adduser live
```

ここで`live`のパスワード設定する。

```bash
usermod -aG sudo live
su - live
```

### Ubuntu Desktop

```bash
sudo apt-get update
sudo apt-get -y install ubuntu-desktop
sudo apt-get install lxde
```

gmd3を選ぶ。

```bash
sudo apt install -y language-pack-ja-base language-pack-ja fcitx-mozc
sudo localectl set-locale LANG=ja_JP.UTF-8 LANGUAGE="ja_JP:ja"
sudo rm -rf /etc/localtime
sudo ln -s /usr/share/zoneinfo/Asia/Tokyo /etc/localtime
sudo shutdown -r now
```

`live`でssh接続しなおす。

### TigerVNC

```bash
sudo apt install tightvncserver
vncserver
```

ここでVNCパスワードを設定する。

```bash
vncserver -kill :1
vi ~/.vnc/xstartup
```

```diff title="~/.vnc/xstartup"
+ /usr/bin/startlxde
```

```bash
sudo vi /etc/systemd/system/vncserver@.service
```

```toml title="vncserver@.service"
[Unit]
Description=Start TightVNC server at startup
After=syslog.target network.target

[Service]
Type=forking
User=live
Group=live
WorkingDirectory=/home/live

PIDFile=/home/live/.vnc/%H:%i.pid
ExecStartPre=-/usr/bin/vncserver -kill :%i > /dev/null 2>&1
ExecStart=/usr/bin/vncserver -depth 24 -geometry 1280x800 -localhost :%i
ExecStop=/usr/bin/vncserver -kill :%i

[Install]
WantedBy=multi-user.target
```

```bash
sudo systemctl daemon-reload
sudo systemctl enable vncserver@1.service
sudo systemctl start vncserver@1
```

### OBS

```bash
sudo apt-get install ffmpeg
sudo add-apt-repository ppa:obsproject/obs-studio
sudo apt update
sudo apt-get update && sudo apt-get install obs-studio
```

これでOBS Studioが用意できた。

## 遠隔操作

OBS Studioを、`live`ユーザーとして操作してもらう。ファイルの移動などはGoogle Drive等を使う。

### Windows

#### ステップ1. PuTTYをインストール

SSHトンネルを使のために必要。

https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html

大抵のPCでは`64-bit x86`をダウンロードすればいい

を上の表に書いてあるIPにする。

以下のように設定する。

|項目|内容|
|---|---|
|「Session」→Host Name|サーバーのIP|
|「Connection」→「Data」→Auto-login username|`live`|
|「Connection」→「SSH」→「Tunnels」→Source Port|`59000`|
|「Connection」→「SSH」→「Tunnels」→Destination|`localhost:5901`|

SSHトンネルについては`Add`のクリックを忘れずに。

「Session」の「Saved Sessions」に、適当な名前をつけて「Save」すれば設定が保存できる。

保存できたら、下の「Open」を押す。初回接続では警告が出るが、「Accept」をクリックする。

`login as:`と出たら`live`と入力。`live`ユーザのパスワードを入力する。VNCパスワードではない！

ログインできたら、VNCを使う間だけ、その状態で放置する。その間は`localhost:59000`がVNCになる。(VNCを使い終わったら、PuTTYを終了していい)

#### ステップ2. RealVNCをインストール

https://www.realvnc.com/en/connect/download/viewer/windows/

Windows版をインストールする。

「New connection」を選んで接続先を追加。サーバーを`localhost:59000`にする。

### Mac

Windowsより簡単。

#### ステップ1. SSHコマンド

```bash
ssh -L 59000:localhost:5901 -C -N -l live サーバーのIP
```

#### ステップ2. VNC

FinderでCmd+Kを押し、`vnc://localhost:59000`に接続する。
