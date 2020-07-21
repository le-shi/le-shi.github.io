# keke-cat.github.io

Thank you very much :
[**erikdubois**](https://github.com/erikdubois)
| [**Linux发行版软件**](https://www.lulinux.com/archives/2787)
| [**为Linux Mint设置为雅黑字体**](https://blog.csdn.net/wangrui1573/article/details/81973919)

<!-- 时间格式: %A %m月%d日 %H:%M:%S -->
> LinuxMint 18.x, 19.x, 20.x

# LinuxMint下工具的安装
基于Apt的软件
1. 聊天工具， 微信; TIM; Tencent QQ
1. ssh工具，Remmina; deepin-terminal
1. 终端， terminator
1. 复古终端, cool-retro-term
1. 浏览器， Chromium; Firefox; chrome
1. 科学工具，shadowsocks; chrome插件[setupvpn]
1. 文本编辑器， atom; vsCode; Unity
1. wps， 自带的; wps
1. vpn，openvpn; esayconnect
1. pdf查看器， okular
1. 远程工具，teamviewer
1. py工具， pycharm; pip2; pip3; py2; py3
1. go工具， go; liteIDE
1. node工具， node,npm; vue-cli
1. 开发工具箱，JetBrains ToolBox
1. 版本控制客户端， git;gitkraken;svn;RapidSVN
1. git仓库概览工具， onefetch
1. 数据库客户端， dbeaver
1. 打包工具， tar;zip
1. 下载工具, wget, uget
1. 局域网端口侦测工具, zenmap
1. 其他的东西, 下拉式终端tilda;下拉GNOME终端guake; HTTP 协议文件共享服务Chfs; MAC主题包Cairo-dock; 截图工具~~Shutter~~, flameshot
1. ftp工具，FileZilla
1. 连接windows，rdesktop
1. 文件对比工具， meld(GUI); diff(command)
1.  笔记， nixnote2（印象笔记客户端）
1. 光盘刻录，Brasero
1. 护眼，fluxgui
1. 输入法，sougoupinyin
1. MD预览，typora
1. 系统监视，conky
1. 录屏，SimpleScreenRecorder
1. wine
1. 一些有趣的linux命令

---
基于**snap**的软件(安装服务后需要重启才能使用)
安装snap: sudo apt install snapd snapcraft
安装snap商店: sudo snap install snap-store
1. redis客户端: RedisDesktopManager
1. git客户端: GitKraken

---

+ 安装记录：
  + 更新: apt update
  + 解决依赖: sudo apt-get --fix-broken -y install

1. 聊天工具
    1. TIM，微信: 需要安装[deepin-wine环境](https://github.com/wszqkzqk/deepin-wine-ubuntu);
    然后去[Deepin-wine 容器的存档](https://gitee.com/wszqkzqk/deepin-wine-containers-for-ubuntu/);
    下载对应的包

        ```bash
        git clone https://gitee.com/wszqkzqk/deepin-wine-for-ubuntu.git
        cd deepin-wine-for-ubuntu
        yes | ./install.sh
        wget -qO- https://deepin-wine.i-m.dev/setup.sh | sudo sh
        ```

    1. wine-微信: `sudo apt install -y deepin.com.wechat`
    1. wine-TIM: `sudo apt install -y deepin.com.qq.office`
    1. Tencent QQ
        
        ```bash
        wget -Nc https://qd.myapp.com/myapp/qqteam/linuxQQ/linuxqq_2.0.0-b1-1024_amd64.deb
        sudo dpkg -i linuxqq_2.0.0-b1-1024_amd64.deb
        ```

2. ssh工具
    1. Remmina:
        
        ```bash
        sudo apt-add-repository ppa:remmina-ppa-team/remmina-next
        sudo apt update
        sudo apt install -y remmina remmina-plugin-rdp remmina-plugin-secret remmina-plugin-spice
        ```

    1. 深度终端: 
        
        ```bash
        # deepin-terminal 2.9.2
        sudo apt-get --fix-broken install
        sudo apt install -y deepin-menu expect lrzsz zssh
        wget -Nc http://kr.archive.ubuntu.com/ubuntu/pool/universe/d/deepin-terminal/deepin-terminal_2.9.2-1_amd64.deb
        sudo dpkg -i deepin-terminal_2.9.2-1_amd64.deb

        # deepin-terminal 3.0以上版本依赖libc6 (>= 2.29)
        ```

3. 终端 - 支持选中复制
    1. terminator: `sudo apt install -y terminator`

4. 复古终端
    1. cool-retro-term:

        ```bash
        sudo add-apt-repository ppa:vantuz/cool-retro-term
        sudo apt update
        sudo apt install -y cool-retro-term
        ```

5. 浏览器
    1. Chromium: `sudo apt install chromium-browser`
        + 问题1: 长时间不关闭，会导致物理和虚拟内存的占用非常高，需要重启浏览器
    2. Firefox: Mint系统自带
    3. chrome: 
        
        ```bash
        wget -Nc https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb
        sudo dpkg -i google-chrome-stable_current_amd64.deb
        ```

6. 科学工具
    1. shadowsocks: `pip install shadowsocks privoxy`
    2. chrome插件:
        + setupvpn:
        
        ```bash
        wget -Nc https://baseserver.io/sv/client/download/Chrome-SetupVPN-3.7.0.crx
        拖拽到浏览器chrome安装
        ```

7. 文本编辑器
    1. atom:

        ```bash
        wget -Nc https://github.com/atom/atom/releases/download/v1.38.1/atom-amd64.deb
        sudo dpkg -i atom-amd64.deb
        ```

    1. vsCode:
        
        ```bash
        curl https://packages.microsoft.com/keys/microsoft.asc | gpg --dearmor > packages.microsoft.gpg
        sudo install -o root -g root -m 644 packages.microsoft.gpg /etc/apt/trusted.gpg.d/
        sudo sh -c 'echo "deb [arch=amd64 signed-by=/etc/apt/trusted.gpg.d/packages.microsoft.gpg] https://packages.microsoft.com/repos/vscode stable main" > /etc/apt/sources.list.d/vscode.list'
        sudo apt install -y apt-transport-https
        sudo apt update
        sudo apt install -y code
        ```

    1. Unity:
        
        ```bash
        wget -Nc https://public-cdn.cloud.unity3d.com/hub/prod/UnityHubSetup.AppImage
        chmod +x UnityHubSetup.AppImage
        ./UnityHubSetup.AppImage
        # 启动 Unity Hub 后，它会要求你使用 Unity ID 登录（或注册）以激活许可证。
        # 使用 Unity ID 登录后，进入 “Installs” 选项（如上图所示）并添加所需的版本/组件。
        ```

8. wps
    1. LibreOffice: Mint系统自带
    2. wps:
        
        ```bash
        wget -Nc https://wdl1.cache.wps.cn/wps/download/ep/Linux2019/8392/wps-office_11.1.0.8392_amd64.deb
        sudo dpkg -i wps-office_11.1.0.8392_amd64.deb
        ```

9. vpn
    1. openvpn: [官网下载客户端](https://www.techspot.com/downloads/5182-openvpn.html)
    
        ```bash
        wget -Nc https://files02.tchspt.com/storage2/temp/openvpn-2.4.7.tar.gz
        sudo apt install -y openssl libssl-dev net-tools liblzo2-dev libpam0g-dev
        tar -zxf openvpn-2.4.7.tar.gz
        cd openvpn-2.4.7
        ./configure
        make
        sudo make install
        ```
    1. esayconnect:
    
        ```bash
        wget -Nc http://download.sangfor.com.cn/download/product/sslvpn/pkg/linux_01/EasyConnect_x64.deb
        sudo dpkg -i EasyConnect_x64.deb
        #rpm的 http://download.sangfor.com.cn/download/product/sslvpn/pkg/linux_01/EasyConnect_x64.rpm
        ```

10. pdf查看器
    1. okular: `sudo apt install -y okular`

11. 远程工具
    1. teamviewer:
    
        ```bash
        wget -Nc https://download.teamviewer.com/download/linux/teamviewer_amd64.deb
        sudo dpkg -i teamviewer_amd64.deb
        sudo apt-get --fix-broken -y install
        ```

12. py工具,py环境
    1. pycharm：
    
        ```bash
        wget -Nc https://download.jetbrains.8686c.com/python/pycharm-community-2019.2.3.tar.gz
        sudo tar -zxf pycharm-community-2019.2.3.tar.gz -C /usr/local/share
        ln -s /usr/local/share/pycharm-community-2019.2.3/bin/pycharm.sh ~/桌面
        # 运行时选择运行
        ```
    1. py2: Mint系统自带, python -V
    2. pip2: Mint系统自带, pip2 -V
    3. py3: Mint系统自带, python3 -V
    4. pip3: `sudo apt install -y python3-pip`， pip3 -V

13. go工具: 
    1. go
    
        ```bash
        wget -Nc https://dl.google.com/go/go1.13.1.linux-amd64.tar.gz
        sudo tar -zxf go1.13.1.linux-amd64.tar.gz -C  /usr/local
        echo -e '#go\nexport GOPATH=/usr/local/go\nexport PATH=$PATH:$GOPATH/bin' >> ~/.bashrc
        ```

    1. liteIDE
        
        ```bash
        wget -Nc https://github.com/visualfc/liteide/releases/download/x36.1/liteidex36.1.linux64-qt5.5.1.tar.gz
        sudo tar -zxf liteidex36.1.linux64-qt5.5.1.tar.gz -C /usr/local
        ln -s /usr/local/liteide/bin/liteide ~/桌面/
        ```

14. node工具:
    1. node,npm
        
        ```bash
        wget -Nc https://cdn.npm.taobao.org/dist/node/v12.13.0/node-v12.13.0-linux-x64.tar.xz
        sudo tar -xf node-v12.13.0-linux-x64.tar.xz -C /usr/local/
        sudo ln -s /usr/local/node-v12.13.0-linux-x64/bin/{node,npm,cnpm} /usr/local/bin/
        sudo npm install -g cnpm --registry=https://registry.npm.taobao.org
        # echo -e '# node\nexport NODEPATH=/usr/local/node-v12.13.0-linux-x64\nexport PATH=$PATH:$NODEPATH/bin' >> ~/.bashrc
        ```

    1. vue-cli: `cnpm install -g vue-cli`


15. 开发工具箱:
    1. JetBrains ToolBox `[Pycharm, IDEA, GoLand, DataGrip, WebStorm]`
        
        ```bash
        wget -Nc https://download.jetbrains.8686c.com/toolbox/jetbrains-toolbox-1.15.5796.tar.gz
        sudo tar -zxf jetbrains-toolbox-1.15.5796.tar.gz -C /usr/local/share/
        ```

16. JetBrains公司的CI/CD工具
    1. TeamCity:
        
        ```bash
        wget -Nc https://download.jetbrains.8686c.com/teamcity/TeamCity-2019.1.4.tar.gz
        sudo tar -zxf TeamCity-2019.1.4.tar.gz -C /usr/local/share/
        ```

17. 版本控制客户端
    1. git: `sudo apt install -y git`
    2. gitkraken:
        
        ```bash
        wget -Nc https://release.axocdn.com/linux/gitkraken-amd64.deb
        sudo dpkg -i gitkraken-amd64.deb
        ```

    1. svn: `sudo apt install -y subversion`
    2. RapidSVN: `sudo apt install -y rapidsvn`

18. git仓库概览工具
    1. onefetch
        
        ```bash
        wget -Nc https://github.com/o2sh/onefetch/releases/download/1.7.0/onefetch_linux_x86-64.zip
        sudo unzip onefetch_linux_x86-64.zip -d /usr/local/bin/
        # 使用：在每个仓库下使用此命令
        ```


19. 数据库客户端
    1. dbeaver:
        
        ```bash
        wget -Nc https://github.com/dbeaver/dbeaver/releases/download/6.3.1/dbeaver-ce_6.3.1_amd64.deb
        sudo dpkg -i dbeaver-ce_6.3.1_amd64.deb
        ```

20. 打包工具
    1. tar: Mint系统自带
    2. zip: Mint系统自带
    3. rar: `sudo apt install -y rar`

21. 下载工具
    1. wget: Mint系统自带
    2. uget: `sudo apt install -y uget`

22. 局域网端口侦测工具
    1. zenmap: `sudo apt install -y zenmap`

23. 其他的东西
    1. 下拉式终端 tilda: `sudo apt install -y tilda`
    2. 下拉式GNOME终端: `sudo apt install guake`
    3. HTTP 协议文件共享服务 Chfs:
    
        ```bash
        wget -Nc http://iscute.cn/tar/chfs/1.10/chfs-linux-amd64-1.10.zip
        unzip chfs-linux-amd64-1.10.zip
        chmod +x chfs
        ./chfs --port 8080 --path /path/to
        ```

    1. MAC主题包 Cairo-dock:
    
        ```bash
        系统管理-软件管理器-搜索'Cairo-dock'
        安装,设置开机自启动
        ```

    1. 截图工具
        + ~~Shutter: `sudo apt install -y shutter`~~ --不好用
        + flameshot:
        
        ```bash
        sudo apt install -y flameshot
        设置系统快捷键，可取消显示托盘图标
        快捷键指定命令: '/usr/bin/flameshot gui'
        ```

24. ftp工具
    1. FileZilla: `sudo apt install -y filezilla`

25. 连接windows
    1. rdesktop: *either-or*
        apt(1.8.3-2build1): `sudo apt install -y rdesktop`
        source(1.9.0):
        
        ```bash
        sudo apt install -y gcc libkrb5-dev libtasn1-6 libtasn1-6-dev nettle-dev  ibgnutls28-dev libpcsclite-dev
        wget -Nc https://github.com/rdesktop/rdesktop/releases/download/v1.9.0/rdesktop-1.9.0.tar.gz
        tar -zxf rdesktop-1.9.0.tar.gz
        cd rdesktop-1.9.0
        ./configure # default: /usr/local
        make
        sudo make install
        hash rdesktop
        ```

26. 文件对比工具
    1. meld:
    `sudo apt install -y meld`
    1. diff: 系统自带

27. 笔记
    1. nixnote2:
        
        ```bash
        sudo add-apt-repository ppa:nixnote/nixnote2-daily
        sudo apt update
        sudo apt install nixnote2
        # 然后在'file文件'中建立账户,然后使用建立的账户，
        # 选择“印象笔记”（这个是国服），使用'工具'中的同步，这时会进入印象笔记大陆的服务器，
        # 如果选择的是印象笔记国际版，进入的就是国际版。
        # 两个域名是不一样的，在没登录前可以在~/.nixnote/accounts.conf中看到。
        # 登录页面左上角也不一样，国际版是Eventnote，国服是印象笔记。
        # 在登录国服时候，输入完邮箱地址一直不会显示密码框，
        # 这个时候点击左上角的“印象笔记”链接，然后会打开网页版的印象笔记页面，在里面找到登录页面，正常登录。
        # 然后关闭登录框，再从'工具'中的同步进入，这个时候就会看到授权提示了。
        ```

28. 光盘刻录
    1. Brasero: `sudo apt install -y brasero`

29. 护眼
    1. fluxgui:
        
        ```bash
        sudo add-apt-repository ppa:nathan-renniewaldock/flux
        sudo apt update
        sudo apt install -y fluxgui
        ```

30. 输入法
    1. sougoupinyin:
        
        ```bash
        # 依赖于Fcitx框架
        wget -Nc http://cdn2.ime.sogou.com/dl/index/1524572264/sogoupinyin_2.2.0.0108_amd64.deb
        sudo dpkg -i sogoupinyin_2.2.0.0108_amd64.deb
        # 可能会有一些包没有安装，通过--fix-broken来解决冲突，并安装上sougoupinyin
        sudo apt-get --fix-broken -y install
        # 重启，我是重启了
        ```

31. MD预览
    1. typora:
        
        ```bash
        wget -qO - https://typora.io/linux/public-key.asc | sudo apt-key add -
        sudo add-apt-repository 'deb https://typora.io/linux ./'
        sudo apt update
        sudo apt install -y typora
        ```

32. 系统监视
    1. [conky](https://github.com/brndnmtthws/conky/) | [configure](https://github.com/erikdubois/Aureola) : `sudo apt install -y hddtemp curl lm-sensors conky-all conky`
    
33. 录屏
    1. SimpleScreenRecorder
        
        ```bash
        sudo add-apt-repository ppa:maarten-baert/simplescreenrecorder
        sudo apt update
        sudo apt install -y simplescreenrecorder
        ```

34. wine
    
    ```bash
    sudo dpkg --add-architecture i386
    wget -nc https://dl.winehq.org/wine-builds/winehq.key
    sudo apt-key add winehq.key 
    sudo apt-add-repository 'deb https://dl.winehq.org/wine-builds/ubuntu/ bionic main'
    sudo apt update
    sudo apt install --install-recommends winehq-stable winbind
    #运行"winecfg", 你至少需要运行一次winecfg来设置wine的目录和硬件
    ```

35. 一些有趣的linux命令
    1. 在终端开一辆火车
       - Install: `sudo apt install sl`
       - Run: `sl` or `sl -F`
    2. Linux 终端加上黑客帝国效果
       - Install: `sudo apt install cmatrix` 
       - Run: `cmatrix`
    3. 燃起来
       - Install: `sudo apt install libaa-bin` 
       - Run: `aafire`
    4. 幸运饼干命令
       - Install: `sudo apt install fortune` 
       - Run: `fortune`
    5. 宠物爱好者？这是给你准备的
       - Install: `sudo apt install oneko` 
       - Run: `oneko` or `oneko -dog`
    6. 有个小兄弟在看着你
       - Install: `sudo apt install xeyes` 
       - Run: `xeyes`
    7. 让终端帮你讲话
       - Install: `sudo apt install espeak` 
       - Run: `espeak "this is good"` 
    8. Toilet
       - Install: `sudo apt install toilet` 
       - Run: `toilet "this is good"` 
    9. 那个牛说什么？
       - Install: `sudo apt install cowsay` 
       - Run: `cowsay "this is good"`
    10. 得到一个新的身份
       - Install: `sudo apt install rig` 
       - Run: `rig`

## 基于snap的软件

1. redis客户端
    1. RedisDesktopManager: `sudo snap install redis-desktop-manager`
1. git客户端
    1. GitKraken: `sudo snap install gitkraken`


---




```bash
# 1.配置字体-雅黑
curl http://ftp-idc.pconline.com.cn/6bdd4de6de0e47545d1f0631a868eb73/pub/download/201010/yaheiFont_CHS.zip -O yaheiFont_CHS.zip
unzip yaheiFont_CHS.zip
sudo mkdir /usr/share/fonts/msyh
sudo cp msyh.ttf msyhbd.ttf /usr/share/fonts/msyh
sudo fc-cache -fv
sudo rm -f /usr/share/fonts/truetype/arphic/{ukai.ttc,uming.ttc}
# 2. 更新apt源
sudo apt update
sudo apt upgrade -y
# 3. 安装软件
sudo apt install -y vim git zsh tree jq nmap iotop python-pip shellcheck
# deepin-wine-ubuntu
git clone https://gitee.com/wszqkzqk/deepin-wine-for-ubuntu.git
cd deepin-wine-for-ubuntu
yes | ./install.sh
wget -qO- https://deepin-wine.i-m.dev/setup.sh | sudo sh


# install wine-tim
sudo apt install -y deepin.com.qq.office

# install wine-wechat
sudo apt install -y deepin.com.wechat

# install deepin-terminal
sudo apt-get --fix-broken install
sudo apt install -y deepin-menu expect lrzsz zssh
wget -Nc http://kr.archive.ubuntu.com/ubuntu/pool/universe/d/deepin-terminal/deepin-terminal_2.9.2-1_amd64.deb
sudo dpkg -i deepin-terminal_2.9.2-1_amd64.deb

# terminator
sudo apt install -y terminator

# cool-retro-term
sudo add-apt-repository ppa:vantuz/cool-retro-term
sudo apt update
sudo apt install -y cool-retro-term

# install chrome
wget -Nc https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb
sudo dpkg -i google-chrome-stable_current_amd64.deb

# install vscode
curl https://packages.microsoft.com/keys/microsoft.asc | gpg --dearmor > packages.microsoft.gpg
sudo install -o root -g root -m 644 packages.microsoft.gpg /etc/apt/trusted.gpg.d/
sudo sh -c 'echo "deb [arch=amd64 signed-by=/etc/apt/trusted.gpg.d/packages.microsoft.gpg] https://packages.microsoft.com/repos/vscode stable main" > /etc/apt/sources.list.d/vscode.list'
sudo apt install -y apt-transport-https
sudo apt update
sudo apt install -y code

# install wps
wget -Nc https://wdl1.cache.wps.cn/wps/download/ep/Linux2019/8392/wps-office_11.1.0.8392_amd64.deb
sudo dpkg -i wps-office_11.1.0.8392_amd64.deb

# install vpn
wget -Nc https://files02.tchspt.com/storage2/temp/openvpn-2.4.7.tar.gz
sudo apt install -y openssl libssl-dev net-tools liblzo2-dev libpam0g-dev
tar -zxf openvpn-2.4.7.tar.gz
cd openvpn-2.4.7
./configure
make
sudo make install
cd -

# install pdf
sudo apt install -y okular

# install teamviewer
wget -Nc https://download.teamviewer.com/download/linux/teamviewer_amd64.deb
sudo dpkg -i teamviewer_amd64.deb
sudo apt-get --fix-broken -y install

# install go
wget -Nc https://dl.google.com/go/go1.13.1.linux-amd64.tar.gz
sudo tar -zxf go1.13.1.linux-amd64.tar.gz -C  /usr/local
echo 'export PATH=$PATH:/usr/local/go/bin' >> ~/.bashrc

# install liteIDE
wget -Nc https://github.com/visualfc/liteide/releases/download/x36.1/liteidex36.1.linux64-qt5.5.1.tar.gz
sudo tar -zxf liteidex36.1.linux64-qt5.5.1.tar.gz -C /usr/local

# install gitkraken
wget -Nc https://release.axocdn.com/linux/gitkraken-amd64.deb
sudo dpkg -i gitkraken-amd64.deb

# install svn rapidsvn
sudo apt install -y subversion rapidsvn

# install dbeaver
wget -Nc https://github.com/dbeaver/dbeaver/releases/download/6.1.0/dbeaver-ce_6.1.0_amd64.deb
sudo dpkg -i dbeaver-ce_6.1.0_amd64.deb

# install rar
sudo apt install -y rar

# install uget
sudo apt install -y uget

# install flameshot
sudo apt install -y flameshot

# install FileZilla
sudo apt install -y filezilla

# install rdesktop
sudo apt install -y gcc libkrb5-dev libtasn1-6 libtasn1-6-dev nettle-dev  ibgnutls28-dev libpcsclite-dev
wget -Nc https://github.com/rdesktop/rdesktop/releases/download/v1.9.0/rdesktop-1.9.0.tar.gz
tar -zxf rdesktop-1.9.0.tar.gz
cd rdesktop-1.9.0
./configure # default: /usr/local
make
sudo make install

# install meld 
sudo apt install -y meld

# install brasero
sudo apt install -y brasero

# install sougoupinyin
wget -Nc http://cdn2.ime.sogou.com/dl/index/1524572264/sogoupinyin_2.2.0.0108_amd64.deb
sudo dpkg -i sogoupinyin_2.2.0.0108_amd64.deb
sudo apt-get --fix-broken -y install

# install typora
wget -qO - https://typora.io/linux/public-key.asc | sudo apt-key add -
sudo add-apt-repository 'deb https://typora.io/linux ./'
sudo apt update
sudo apt install -y typora

# install conky
sudo apt install -y hddtemp curl lm-sensors conky-all conky

# SimpleScreenRecorder
sudo add-apt-repository ppa:maarten-baert/simplescreenrecorder
sudo apt update
sudo apt install -y simplescreenrecorder
```


## 安装这里记录的所有的有趣的命令

```bash
# (这里使用-y免交互了，注意一下)
# 在终端开一辆火车
sudo apt install -y sl

# Linux 终端加上黑客帝国效果
sudo apt install -y cmatrix

# 燃起来
sudo apt install -y libaa-bin

# 幸运饼干命令
sudo apt install -y fortune

# 宠物爱好者？这是给你准备的
sudo apt install -y oneko

# 有个小兄弟在看着你
sudo apt install -y xeyes

# 让终端帮你讲话
sudo apt install -y espeak

# Toilet
sudo apt install -y toilet

# 那个牛说什么？
sudo apt install -y cowsay

# 得到一个新的身份
sudo apt install -y rig

# 看起来很忙 - 慢慢地、无限期地"编译"你的代码
version=0.7.0
wget -Nc https://github.com/svenstaro/genact/releases/download/${version}/genact-linux
chmod +x genact-linux
sudo mv genact-linux /usr/local/bin/genact-linux

# 看起来很忙 - 在终端中创建一个随机数和拆分屏幕的配置,并启动看起来很忙的应用程序
# 这是个shell脚本,需要依赖一些命令,自己去探索吧
# https://github.com/dustinkirkland/hollywood

# 看起来很忙 - 不仅仅是假装工作,还可以使用 fulded contrib 库来做一些实际的工作
git clone https://github.com/yaronn/blessed-contrib.git
cd blessed-contrib
npm install
# node ./examples/dashboard.js
```
