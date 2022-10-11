# le-shi.github.io

Thank you very much :
[**erikdubois**](https://github.com/erikdubois)
| [**Linux发行版软件**](https://www.lulinux.com/archives/2787)
| [**为Linux Mint设置为雅黑字体**](https://blog.csdn.net/wangrui1573/article/details/81973919)

---
<!-- 时间格式: %A %m月%d日 %H:%M:%S -->
日历显示时间格式:

```text
时:分:秒 年-月-日 周
%H:%M:%S %Y-%m-%d %A
```

---

个性化配置的备份和还原:smiling_imp:

+ 个性化配置项:
  + 键盘快捷键
  + 面板设置
  + 已安装的软件包列表
  + 主题
  + 字体
  + 输入法设置
  + 自定义环境变量(/etc/profile.d/lshi-env.sh)

+ 备份

    Pending...

+ 还原

    Pending...

+ 命令行修改系统配置

    ```bash
    # 设置游标大小(默认: 24)
    gsettings set org.cinnamon.desktop.interface cursor-size 108
    ```

软件包的备份和还原:

```bash
# 保存系统中已存在的软件包完整列表
sudo dpkg --get-selections > all_package.list
# 还原已保存的软件包完整列表
sudo dpkg --set-selections all_package.list && sudo apt-get dselect-upgrade
```

---

+ 搜狗拼音和wps已经支持Mint20版本啦:tada::tada:
+ deepin-terminal只兼容2.9版本:cupid:

---

> LinuxMint 18.x, 19.x, 20.x

![marionxue's github stats](https://github-readme-stats.vercel.app/api?username=le-shi&show_icons=true&theme=radical)

## LinuxMint下工具的安装

> 基于Apt的软件

1. 聊天工具: 微信, TIM, Tencent QQ
2. 远程ssh工具: Remmina, deepin-terminal, electerm, Tabby, WindTerm
3. 远程sftp: FileZilla
4. 终端: terminator
5. 复古终端: cool-retro-term
6. 浏览器: Chromium, Firefox, Chrome, Brave
7. 科学工具: shadowsocks, chrome插件[setupvpn]
8. 文本编辑器: atom, vsCode, Unity
9. wps: 自带的LibreOffice, wps
10. vpn: openvpn, esayconnect
11. pdf查看器: okular
12. 远程工具: teamviewer, 向日葵
13. 信息收取(email和rss): thunderbird
14. py工具: pycharm, pip2, pip3, py2, py3
15. go工具: go, liteIDE
16. node工具: node, npm, vue-cli
17. 开发工具箱: JetBrains ToolBox(jet全家桶)
18. 版本控制客户端: git, gitkraken, svn, RapidSVN, kdesvn
19. git仓库概览工具: onefetch
20. 数据库客户端: dbeaver
21. 打包工具: tar, zip
22. 下载工具: wget, uget, aria2
23. 局域网端口侦测工具: nmap, tcping
24. 连接windows: rdesktop, krdc
25. 文件对比工具: meld(GUI), diff(command)
26. 笔记同步: nixnote2(印象笔记客户端), 坚果云
27. 光盘刻录: Brasero
28. 护眼: fluxgui
29. 输入法: sougoupinyin, 谷歌拼音, 百度输入法
30. MD预览: typora
31. 系统监视: conky
32. 录屏: SimpleScreenRecorder
33. wine
34. 容器: docker
35. 剪贴板管理器: copyq
36. 多显示器使用不同壁纸: nitrogen
37. 多功能top: bashtop
38. 系统字体: Hack
39. shell: zsh
40. 视频编辑器: OpenShot
41. 其他的东西: 下拉式终端tilda, 下拉GNOME终端guake, HTTP协议文件共享服务Chfs, MAC主题包Cairo-dock, 截图工具flameshot, 磁盘使用分析baobab
42. 一些有趣的linux命令

---
> 基于**snap**的软件(安装服务后需要重启才能使用)

安装snap: `sudo apt install snapd snapcraft`

安装snap商店: `sudo snap install snap-store`

1. redis客户端: RedisDesktopManager
1. git客户端: GitKraken

---

+ 安装记录：
  + 更新: apt update
  + 解决依赖: sudo apt-get --fix-broken -y install

1. 聊天工具
    1. TIM，微信
    下载对应的包

        ```bash
        # 前置条件:
        # 1. 需要安装[deepin-wine环境](https://github.com/wszqkzqk/deepin-wine-ubuntu)
        # 2. 然后去[Deepin-wine 容器的存档](https://gitee.com/wszqkzqk/deepin-wine-containers-for-ubuntu/)
        git clone https://gitee.com/wszqkzqk/deepin-wine-for-ubuntu.git
        cd deepin-wine-for-ubuntu
        yes | ./install.sh
        wget -qO- https://deepin-wine.i-m.dev/setup.sh | sudo sh

        # 支持安装的软件列表
        https://deepin-wine.i-m.dev/
        ```

    1. wine-微信:

        ```bash
        sudo apt install -y deepin.com.wechat
        
        设置键盘快捷键，自定义快捷键
        先准备一个shell脚本，添加执行权限，内容如下:
        #!/bin/sh
        #在当前运行的应用中找到名为WeChat.exe的应用程序，并向它发送按键事件"ctrl+alt+W"
        #WeChat的可执行文件名为WeChat.exe，如果是其它应用程序就修改成其它应用程序的可执行文件名, 应用名称大小写敏感, 一个字母都不能错!
        xdotool key --window $(xdotool search --limit 1 --all --pid $(pgrep WeChat.exe)) "ctrl+alt+W"

        快捷键指定命令: /绝对路径/脚本的名字
        键盘绑定: Ctal+Alt+W
        ```

    2. wine-TIM: `sudo apt install -y deepin.com.qq.office`
    3. Tencent QQ
        
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

    2. 深度终端: 
        
        ```bash
        # deepin-terminal 2.9.2
        sudo apt-get --fix-broken install
        sudo apt install -y deepin-menu expect lrzsz zssh
        wget -Nc http://kr.archive.ubuntu.com/ubuntu/pool/universe/d/deepin-terminal/deepin-terminal_2.9.2-1_amd64.deb
        sudo dpkg -i deepin-terminal_2.9.2-1_amd64.deb

        # deepin-terminal 5.0.0 --mint 20 --pass
        sudo apt-get --fix-broken install
        sudo apt upgrade -y deepin-menu expect lrzsz zssh
        wget -Nc http://kr.archive.ubuntu.com/ubuntu/pool/universe/d/deepin-terminal/deepin-terminal_5.0.0+ds1-2_amd64.deb
        sudo dpkg -i deepin-terminal_5.0.0+ds1-2_amd64.deb

        # deepin-terminal 3.0以上版本依赖libc6 (>= 2.29)
        ```

    3. electerm:
       
       ```bash
       wget -Nc https://github.com/electerm/electerm/releases/download/v1.4.2/electerm-1.4.2-linux-amd64.deb
       sudo dpkg -i electerm-1.4.2-linux-amd64.deb
       ```

    4. Tabby:
       
       ```bash
       wget --content-disposition https://packagecloud.io/eugeny/tabby/packages/ubuntu/focal/tabby-terminal_1.0.169_amd64.deb/download.deb
       sudo dpkg -i tabby-terminal_1.0.169_amd64.deb
       ```

    5. [WindTerm](https://github.com/kingToolbox/WindTerm):
       
       ```bash
       wget --content-disposition https://github.com/kingToolbox/WindTerm/releases/download/2.5.0/WindTerm_2.5.0_Linux_Portable_x86_64.tar.gz
       tar -zxf WindTerm_2.5.0_Linux_Portable_x86_64.tar.gz
       ```



3. 终端 - 支持选中复制
    1. terminator:

        ```bash
        sudo apt install -y terminator
        设置为默认终端：首选项-首选应用程序-终端
        选择刚刚安装的这个终端(红色的Logo)
        ```

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
    4. brave:
    
        ```bash
        sudo apt install apt-transport-https curl
        # 这里会涉及到网络问题，必要时需要科学上网
        sudo curl -fsSLo /usr/share/keyrings/brave-browser-archive-keyring.gpg https://brave-browser-apt-release.s3.brave.com/brave-browser-archive-keyring.gpg

        echo "deb [signed-by=/usr/share/keyrings/brave-browser-archive-keyring.gpg arch=amd64] https://brave-browser-apt-release.s3.brave.com/ stable main"|sudo tee /etc/apt/sources.list.d/brave-browser-release.list

        sudo apt update

        sudo apt install brave-browser
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

    2. vsCode:
        
        ```bash
        curl https://packages.microsoft.com/keys/microsoft.asc | gpg --dearmor > packages.microsoft.gpg
        sudo install -o root -g root -m 644 packages.microsoft.gpg /etc/apt/trusted.gpg.d/
        sudo sh -c 'echo "deb [arch=amd64 signed-by=/etc/apt/trusted.gpg.d/packages.microsoft.gpg] https://packages.microsoft.com/repos/vscode stable main" > /etc/apt/sources.list.d/vscode.list'
        sudo apt install -y apt-transport-https
        sudo apt update
        sudo apt install -y code
        ```

    3. Unity:
        
        ```bash
        wget -Nc https://public-cdn.cloud.unity3d.com/hub/prod/UnityHubSetup.AppImage
        chmod +x UnityHubSetup.AppImage
        ./UnityHubSetup.AppImage
        # 启动 Unity Hub 后，它会要求你使用 Unity ID 登录（或注册）以激活许可证。
        # 使用 Unity ID 登录后，进入 “Installs” 选项（如上图所示）并添加所需的版本/组件。
        ```

8. wps
    1. LibreOffice: Mint系统自带

       ```diff
       - 中文问题
       ```

    2. wps:
        
        ```bash
        wget -Nc https://wdl1.cache.wps.cn/wps/download/ep/Linux2019/9719/wps-office_11.1.0.9719_amd64.deb
        sudo dpkg -i wps-office_11.1.0.9719_amd64.deb
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
    2. esayconnect:
    
        ```bash
        wget -Nc http://download.sangfor.com.cn/download/product/sslvpn/pkg/linux_01/EasyConnect_x64.deb
        sudo dpkg -i EasyConnect_x64.deb
        # 安装好之后，点击图标打开 EasyConnect 没反应#
        # 然后通过命令行运行: /usr/share/sangfor/EasyConnect/EasyConnect 提示: Harfbuzz version too old (1.3.1) ，看样子是版本问题导致的
        # 有网友发现可以通过降级pango等依赖解决问题。错误信息提示Harfbuzz版本太旧了，实际上是因为pango版本太新了。需要做的不是升级Harfbuzz,而是降级pango。为了防止修改系统库带来的风险，直接将相关的so库文件解压到easyconnect同目录下即可。具体来说，涉及的so文件为： 
        ldd EasyConnect | grep pango
            libpangocairo-1.0.so.0 => /usr/lib/x86_64-linux-gnu/libpangocairo-1.0.so.0 (0x00007f9713518000)
            libpango-1.0.so.0 => /usr/lib/x86_64-linux-gnu/libpango-1.0.so.0 (0x00007f971337e000)
            libpangoft2-1.0.so.0 => /usr/lib/x86_64-linux-gnu/libpangoft2-1.0.so.0 (0x00007f97116d8000)
        
        # 开始解决
        # 下载：
        wget https://mirrors.tuna.tsinghua.edu.cn/ubuntu/pool/main/p/pango1.0/libpango-1.0-0_1.36.3-1ubuntu1_amd64.deb
        wget https://mirrors.tuna.tsinghua.edu.cn/ubuntu/pool/main/p/pango1.0/libpangocairo-1.0-0_1.36.3-1ubuntu1_amd64.deb
        wget https://mirrors.tuna.tsinghua.edu.cn/ubuntu/pool/main/p/pango1.0/libpangoft2-1.0-0_1.36.3-1ubuntu1_amd64.deb

        mkdir pango/

        # 解压
        dpkg -X libpango-1.0-0_1.36.3-1ubuntu1_amd64.deb pango/
        dpkg -X libpangocairo-1.0-0_1.36.3-1ubuntu1_amd64.deb pango/
        dpkg -X libpangoft2-1.0-0_1.36.3-1ubuntu1_amd64.deb pango/

        # 移动 so.0 文件到 EasyConnet 目录
        sudo cp pango/usr/lib/x86_64-linux-gnu/*.so.0 /usr/share/sangfor/EasyConnect

        # 现在的so库文件已经是从 EasyConnect 目录读取的了
        ldd /usr/share/sangfor/EasyConnect/EasyConnect | grep pango
            libpangocairo-1.0.so.0 => /usr/share/sangfor/EasyConnect/libpangocairo-1.0.so.0 (0x00007fb5577a5000)
            libpango-1.0.so.0 => /usr/share/sangfor/EasyConnect/libpango-1.0.so.0 (0x00007fb55740d000)
            libpangoft2-1.0.so.0 => /usr/share/sangfor/EasyConnect/libpangoft2-1.0.so.0 (0x00007fb555567000)

        # 再次运行 /usr/share/sangfor/EasyConnect/EasyConnect 就可以了，也可以通过图标点击打开了

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

    2. 向日葵
    
        ```bash
        # https://blog.csdn.net/weixin_43746424/article/details/119877044
        # 下载
        wget -Nc https://down.oray.com/sunlogin/linux/sunloginclient-11.0.0.36662-amd64.deb
        # 因为直接安装会因为系统版本问题失败，所以在安装前处理一下操作系统版本信息，安装好之后还原回来
        # 1. 备份相关文件
        sudo mv -v /etc/os-release /etc/os-release.bak
        sudo mv -v /etc/issue /etc/issue.bak
        sudo mv -v /etc/upstream-release /etc/upstream-release.bak
        # 2. 修改 issue 文件，指定版本
        echo "Ubuntu 20.04 LTS \n \l" | sudo tee /etc/issue
        # 安装
        sudo dpkg -i sunloginclient-11.0.0.36662-amd64.deb
        # 3. 还原备份的文件
        sudo mv -v /etc/os-release.bak /etc/os-release
        sudo mv -v /etc/issue.bak /etc/issue
        sudo mv -v /etc/upstream-release.bak /etc/upstream-release
        # 通过菜单-找到向日葵图标-打开使用
        ```

12. 信息收取(email和rss):
    1. thunderbird
    
    ```bash
    # Mint系统自带
    sudo apt install thunderbird
    ```


13. py工具,py环境
    1. pycharm：
    
        ```bash
        wget -Nc https://download.jetbrains.8686c.com/python/pycharm-community-2019.2.3.tar.gz
        sudo tar -zxf pycharm-community-2019.2.3.tar.gz -C /usr/local/share
        ln -s /usr/local/share/pycharm-community-2019.2.3/bin/pycharm.sh ~/桌面
        # 运行时选择运行
        ```
    2. py2: Mint系统自带, python -V
    3. pip2: Mint系统自带, pip2 -V
    4. py3: Mint系统自带, python3 -V
    5. pip3: `sudo apt install -y python3-pip`， pip3 -V

14. go工具: 
    1. go
    
        ```bash
        wget -Nc https://dl.google.com/go/go1.13.1.linux-amd64.tar.gz
        sudo tar -zxf go1.13.1.linux-amd64.tar.gz -C  /usr/local
        echo -e '#go\nexport GOPATH=/usr/local/go\nexport PATH=$PATH:$GOPATH/bin' >> ~/.bashrc
        ```

    2. liteIDE
        
        ```bash
        wget -Nc https://github.com/visualfc/liteide/releases/download/x36.1/liteidex36.1.linux64-qt5.5.1.tar.gz
        sudo tar -zxf liteidex36.1.linux64-qt5.5.1.tar.gz -C /usr/local
        ln -s /usr/local/liteide/bin/liteide ~/桌面/
        ```

15. node工具:
    1. node,npm
        
        ```bash
        wget -Nc https://cdn.npm.taobao.org/dist/node/v12.13.0/node-v12.13.0-linux-x64.tar.xz
        sudo tar -xf node-v12.13.0-linux-x64.tar.xz -C /usr/local/
        sudo ln -s /usr/local/node-v12.13.0-linux-x64/bin/{node,npm,cnpm} /usr/local/bin/
        sudo npm install -g cnpm --registry=https://registry.npm.taobao.org
        # echo -e '# node\nexport NODEPATH=/usr/local/node-v12.13.0-linux-x64\nexport PATH=$PATH:$NODEPATH/bin' >> ~/.bashrc
        ```

    2. vue-cli: `cnpm install -g vue-cli`


16. 开发工具箱:
    1. JetBrains ToolBox `[Pycharm, IDEA, GoLand, DataGrip, WebStorm]`
        
        ```bash
        wget -Nc https://download.jetbrains.8686c.com/toolbox/jetbrains-toolbox-1.15.5796.tar.gz
        sudo tar -zxf jetbrains-toolbox-1.15.5796.tar.gz -C /usr/local/share/
        ```

17. JetBrains公司的CI/CD工具
    1. TeamCity:
        
        ```bash
        wget -Nc https://download.jetbrains.8686c.com/teamcity/TeamCity-2019.1.4.tar.gz
        sudo tar -zxf TeamCity-2019.1.4.tar.gz -C /usr/local/share/
        ```

18. 版本控制客户端
    1. git: `sudo apt install -y git`
    2. gitkraken:
        
        ```bash
        wget -Nc https://release.axocdn.com/linux/gitkraken-amd64.deb
        sudo dpkg -i gitkraken-amd64.deb
        ```

    3. svn: `sudo apt install -y subversion`
    4. RapidSVN: `sudo apt install -y rapidsvn`
    5. kdesvn: `sudo apt install -y kdesvn`

19. git仓库概览工具
    1. onefetch
        
        ```bash
        wget -Nc https://github.com/o2sh/onefetch/releases/download/1.7.0/onefetch_linux_x86-64.zip
        sudo unzip onefetch_linux_x86-64.zip -d /usr/local/bin/
        # 使用：在每个仓库下使用此命令
        ```


20. 数据库客户端
    1. dbeaver:
        
        ```bash
        wget -Nc https://github.com/dbeaver/dbeaver/releases/download/7.1.3/dbeaver-ce_7.1.3_amd64.deb
        sudo dpkg -i dbeaver-ce_7.1.3_amd64.deb
        ```

21. 打包工具
    1. tar: Mint系统自带
    2. zip: Mint系统自带
    3. rar: `sudo apt install -y rar`

22. 下载工具
    1. wget: Mint系统自带
    2. uget: `sudo apt install -y uget`
    3. aria2: 两种方法
        1. `sudo apt install -y aria2`
        2. Linux源码编译, [Github](https://github.com/aria2/aria2)

            ```bash
            # 下载源码包
            wget https://github.com/aria2/aria2/releases/download/release-1.35.0/aria2-1.35.0.tar.xz
            # 解压
            tar -xf aria2-1.35.0.tar.xz
            # 安装依赖
            sudo apt install nettle-dev libgmp-dev libssh2-1-dev libc-ares-dev libxml2-dev zlib1g-dev libsqlite3-dev pkg-config libunistring-dev lzma lzma-alone lzma-dev
            # 运行以下命令来生成配置脚本和其他文件需要构建程序
            autoreconf -i
            # 建立aria2的最快方法是首先运行configure脚本
            ./configure
            # 配置完成后,运行make来编译程序 -j使用多线程进行编译
            make -j 4
            # 安装
            sudo make install
            ```

23. 局域网端口侦测工具
    1. nmap: `sudo apt install -y nmap`
    2. tcping: 

        ```bash
        wget -Nc https://github.com/cloverstd/tcping/releases/download/v0.1.1/tcping-linux-amd64-v0.1.1.tar.gz
        tar -zxf tcping-linux-amd64-v0.1.1.tar.gz
        chmod +x tcping
        sudo mv tcping /usr/bin/
        # tcping www.baidu.com 443
        ```

24. 其他的东西
    1. 下拉式终端 tilda: `sudo apt install -y tilda`
    2. 下拉式GNOME终端: `sudo apt install guake`
    3. HTTP 协议文件共享服务 Chfs:
    
        ```bash
        wget -Nc http://iscute.cn/tar/chfs/1.10/chfs-linux-amd64-1.10.zip
        unzip chfs-linux-amd64-1.10.zip
        chmod +x chfs
        ./chfs --port 8080 --path /path/to
        ```

    4. MAC主题包 Cairo-dock:
    
        ```bash
        系统管理-软件管理器-搜索'Cairo-dock'
        安装,设置开机自启动
        ```

    5. 截图工具
        + ~~Shutter: `sudo apt install -y shutter`~~ --不好用
        + flameshot:
        
        ```bash
        sudo apt install -y flameshot
        # 取消显示托盘图标
        flameshot config
        # 设置系统快捷键：菜单-键盘-快捷键-添加自定义快捷键
        定义快捷键名称：flameshot-截图
        快捷键指定命令: '/usr/bin/flameshot gui'
        添加后，设置键盘绑定: Alt+A
        ```

    6. 磁盘使用分析
    
        ```bash
        sudo apt install -y baobab
        ```       

25. sftp工具
    1. FileZilla: `sudo apt install -y filezilla`

26. 连接windows
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

    2. krdc:
    
        ```bash
        sudo apt install -y krdc
        ```

27. 文件对比工具
    1. meld:
    `sudo apt install -y meld`
    1. diff: 系统自带

28. 笔记
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

29. 光盘刻录
    1. Brasero: `sudo apt install -y brasero`

30. 护眼
    1. fluxgui:
        
        ```bash
        sudo add-apt-repository ppa:nathan-renniewaldock/flux
        sudo apt update
        sudo apt install -y fluxgui
        ```

31. 输入法
    1. sougoupinyin:

        ```bash
        # Help - https://pinyin.sogou.com/linux/help.php
        # 依赖于Fcitx框架
        wget -Nc https://ime.sogoucdn.com/dl/index/1612260778/sogoupinyin_2.4.0.3469_amd64.deb
        sudo dpkg -i sogoupinyin_2.4.0.3469_amd64.deb
        # 如果不能反配置，使用下面的命令
        sudo dpkg --auto-deconfigure -i sogoupinyin_2.4.0.3469_amd64.deb
        # 可能会有一些包没有安装，通过--fix-broken来解决冲突，并安装上sougoupinyin; 如果这一步解决不了，使用`fcitx -r`重新加载，再次执行上面的反配置命令，进行安装
        sudo apt-get --fix-broken -y install
        # 1. 安装后，需要重启加载fcitx配置；重启机器，我是重启了
        # 2. 安装后，需要重启加载fcitx配置；不重启机器，重新加载配置文件 --这个好
        fcitx -r
        ```

    2. 谷歌拼音:

        ```bash
        # 依赖于Fcitx框架
        sudo apt install -y fcitx-googlepinyin
        # 重启，我是重启了
        ```

    3. 百度输入法:

        ```bash
        # 下载安装包
        wget -Nc https://imeres.baidu.com/imeres/ime-res/guanwang/img/Ubuntu_Deepin-fcitx-baidupinyin-64.zip
        # 解压
        unzip Ubuntu_Deepin-fcitx-baidupinyin-64.zip
        # 安装
        sudo dpkg -i Ubuntu_Deepin-fcitx-baidupinyin-64/fcitx-baidupinyin.deb
        # 重启，我是重启了
        
        # 候选框乱码问题
        # 1. 使用命令: sudo killall fcitx
        # 2. 注销重新登录
        ```

32. MD预览
    1. typora:
        
        ```bash
        wget -qO - https://typora.io/linux/public-key.asc | sudo apt-key add -
        sudo add-apt-repository 'deb https://typora.io/linux ./'
        sudo apt update
        sudo apt install -y typora
        ```

33. 系统监视
    1. [conky](https://github.com/brndnmtthws/conky/) | [configure](https://github.com/erikdubois/Aureola) : `sudo apt install -y hddtemp curl lm-sensors conky-all conky`
    
34. 录屏
    1. SimpleScreenRecorder
        
        ```bash
        sudo add-apt-repository ppa:maarten-baert/simplescreenrecorder
        sudo apt update
        sudo apt install -y simplescreenrecorder
        ```

35. wine
    
    ```bash
    sudo dpkg --add-architecture i386
    wget -nc https://dl.winehq.org/wine-builds/winehq.key
    sudo apt-key add winehq.key 
    sudo apt-add-repository 'deb https://dl.winehq.org/wine-builds/ubuntu/ bionic main'
    sudo apt update
    sudo apt install --install-recommends winehq-stable winbind
    #运行"winecfg", 你至少需要运行一次winecfg来设置wine的目录和硬件
    ```

36. 容器: 
    1.  docker
      ```bash
      # 安装之前清理旧的版本
      sudo apt remove docker docker-engine docker.io containerd runc
      # 安装依赖
      sudo apt install -y apt-transport-https ca-certificates curl gnupg-agent software-properties-common
      # 添加Docker的GPG key
      curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
      # 添加Docker的repository,这里系统的版本不能使用官方提供的命令获取,因为获取的是Mint的版本,需要使用自定义的命令
      sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(awk -F 'UBUNTU_CODENAME=' '/UBUNTU_CODENAME=/{print $2}' /etc/os-release) stable"
      sudo apt update
      # 安装dockerc-ce docker-ce-cli containerd.io
      sudo apt install -y docker-ce docker-ce-cli containerd.io
      ```

37. 剪贴板管理器: 
    1.  copyq
   
      ```bash
      sudo add-apt-repository ppa:hluk/copyq
      sudo apt update
      sudo apt install -y copyq
      ```

38. 多显示器使用不同壁纸: 
    1. nitrogen: `sudo apt install -y nitrogen`

39. 多功能top: 
    1. bashtop

        ```bash
        sudo add-apt-repository ppa:bashtop-monitor/bashtop
        sudo apt update
        sudo apt install -y bashtop
        ```

40. 系统字体:
   1. Hack
   
    ```bash
    sudo apt install -y fonts-hack-ttf
    # 清理并重新加载字体缓存和索引，输出详情
    fc-cache -f -v
    # 查看字体列表
    fc-list | grep "Hack"
    ```

41. shell:
   2. zsh

    ```bash
    # 安装zsh
    sudo apt install -y zsh
    # 安装主题包
    sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
    ```

42. 视频编辑器: OpenShot
    
    ```bash
    sudo add-apt-repository ppa:openshot.developers/ppa
    sudo apt update
    sudo apt install openshot-qt python3-openshot
    ```


43. 一些有趣的linux命令
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
    9. 那个牛说什么？ -字符牛
       - Install: `sudo apt install cowsay` 
       - Run: `cowsay "this is good"`
    10. 那个牛说什么？ -图形牛
       - Install: `sudo apt install xcowsay` 
       - Run: `xcowsay -t 1 "this is good"`
    11. 得到一个新的身份
       - Install: `sudo apt install rig` 
       - Run: `rig`
    12. 显示由普通屏幕字符组成的大字
       - Install: `sudo apt install figlet`
       - Run: `figlet "Hello World"`
    13. 彩虹字
       - Install: `sudo apt install lolcat`
       - Run: `echo "Hello World" | lolcat`

## 基于snap的软件

1. redis客户端
    1. RedisDesktopManager: `sudo snap install redis-desktop-manager`
1. git客户端
    1. GitKraken: `sudo snap install gitkraken`


---




```bash
# 1.配置字体-雅黑
curl -L https://github.com/le-shi/packages/raw/master/yaheiFont_CHS.zip -O yaheiFont_CHS.zip
unzip yaheiFont_CHS.zip
sudo mkdir /usr/share/fonts/msyh
sudo cp msyh.ttf msyhbd.ttf /usr/share/fonts/msyh
sudo fc-cache -fv
sudo rm -f /usr/share/fonts/truetype/arphic/{ukai.ttc,uming.ttc}
# 2. 更新apt源
sudo apt update
sudo apt upgrade -y
# 3. 安装软件
sudo apt install -y vim git zsh tree jq nmap iotop python-pip shellcheck wget curl 
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

# electerm:
wget -Nc https://github.com/electerm/electerm/releases/download/v1.4.2/electerm-1.4.2-linux-amd64.deb
sudo dpkg -i electerm-1.4.2-linux-amd64.deb

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
wget -Nc https://wdl1.cache.wps.cn/wps/download/ep/Linux2019/9604/wps-office_11.1.0.9604_amd64.deb
sudo dpkg -i wps-office_11.1.0.9604_amd64.deb

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

# install svn kdesvn
sudo apt install -y subversion kdesvn

# install dbeaver
wget -Nc https://github.com/dbeaver/dbeaver/releases/download/7.1.3/dbeaver-ce_7.1.3_amd64.deb
sudo dpkg -i dbeaver-ce_7.1.3_amd64.deb

# install rar
sudo apt install -y rar

# install uget
sudo apt install -y uget

# install aria2
sudo apt install -y aria2

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
wget -Nc http://cdn2.ime.sogou.com/dl/index/1571302197/sogoupinyin_2.3.1.0112_amd64.deb
sudo dpkg -i sogoupinyin_2.3.1.0112_amd64.deb
sudo apt-get --fix-broken -y install

# 谷歌拼音
sudo apt install -y fcitx-googlepinyin

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

# docker
sudo apt remove docker docker-engine docker.io containerd runc
sudo apt install -y apt-transport-https ca-certificates curl gnupg-agent software-properties-common
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(awk -F 'UBUNTU_CODENAME=' '/UBUNTU_CODENAME=/{print $2}' /etc/os-release) stable"
sudo apt update
sudo apt install -y docker-ce docker-ce-cli containerd.io

# copyq
sudo add-apt-repository ppa:hluk/copyq
sudo apt update
sudo apt install -y copyq

# nitrogen
sudo apt install -y nitrogen

# OpenShot
sudo add-apt-repository ppa:openshot.developers/ppa
sudo apt update
sudo apt install -y openshot-qt python3-openshot

# bashtop
sudo add-apt-repository ppa:bashtop-monitor/bashtop
sudo apt update
sudo apt install -y bashtop
```


## 安装这里记录的所有的有趣的命令

```bash
# (-y免交互)

# 向桌面发送通知,自定义提醒功能(结合定时任务crontab实现定时提醒)
sudo apt install -y libnotify-bin
# 使用: notify-send "标题" "内容"

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

## 强迫症设置

```bash
1. 不显示桌面图标(默认会显示计算机，主目录): 系统设置-首选项-桌面-桌面图标(关掉不想要显示的图标)
2. 禁用移动窗口的特殊键(默认是Alt): 系统设置-首选项-窗口-行为-移动并调整窗口-窗口移动和调整大小的特殊键(选择: 已禁用)
3. 窗口透明度(默认没有透明度): 系统设置-首选项-窗口-标题栏-动作-鼠标滚动时标题栏上的动作(选择: 调整不透明度)

# --- 分割线 ---
1. 输入法卡死,无法切换的解决办法: fcitx -r
```
