mint to win11

软件
---

linux & win 多平台程序
vscode 云同步扩展等配置信息
windterm .wind 目录 ssh远程客户端
filezilla sftp客户端
dbeaver DBeaverData\workspace6 工作空间
chrome 谷歌账号魔法同步浏览器信息
wps
thunderbird 邮箱客户端 https://www.thunderbird.net/zh-CN/
git
svn 
meld 对比软件 https://meldmerge.org/
python 3.11
java 8 11 17
ZY-Player 视频播放器 https://github.com/Hunlongyu/ZY-Player 需要链接，不能本地
vnc viewer vnc客户端 https://www.realvnc.com/en/connect/download/viewer/
obs studio 实时流媒体和屏幕录制软件 https://projectobs.com/
wireshark 可视化抓包、分析工具

--

listary 全局搜索 https://www.listary.com/
utools 新一代效率工具平台 https://www.u.tools/
quicker 自定义动作 https://getquicker.net/
Snipaste 截图工具 图片可以贴到桌面 https://zh.snipaste.com/

runcat for windows CPU使用率展示工具，CPU越高动的越快
fadetop 提醒休息的APP
ElevenClock 定制Windows 11任务栏时钟 https://github.com/marticliment/ElevenClock
startallback 开始菜单美化工具 https://www.startallback.com/ 专业版：W269N-WFGWX-YVC9B-4J6C9-T83GX
ScreenToGif 从名字就可以看出这是一款录制GIF图片的软件，非常的小巧 https://www.screentogif.com/
EVCapture 录屏软件，常驻我任务栏的软件，解答学员问题的时候就用它录制视频，快速方便。 https://www.ieway.cn/evcapture.html
Keyviz 按键可视化工具，可实时显示键盘当前按下的按键，还可以自定义按键的风格、样式，非常适合演示键盘操作使用 https://github.com/mulaRahul/keyviz
quicklook 快速查看文件 https://github.com/QL-Win/QuickLook
quicklook插件 https://github.com/QL-Win/QuickLook/wiki/Available-Plugins 使用空格安装
    OfficeViewer https://github.com/QL-Win/QuickLook.Plugin.OfficeViewer/releases
    EpubViewer https://github.com/QL-Win/QuickLook.Plugin.EpubViewer/releases
RDCMan 远程桌面连接管理器 https://learn.microsoft.com/zh-cn/sysinternals/downloads/rdcman

官方 windows 实用小工具 https://learn.microsoft.com/zh-cn/sysinternals/

字体
---
Hack https://sourcefoundry.org/hack/
设置-


需求
---
微软拼音输入法 更改为默认英文模式，输入法候选字体大一点
Windows默认字体更改
黑色主题
黑色任务栏
任务栏居左
任务栏时间日期格式自定义 年-月-日 时:分:秒 星期X %Y-%M-%d 
卸载默认安装的不需要的windows应用程序
远程桌面、防火墙开启对应规则(关闭防火墙)
一键安装基础环境批处理脚本
修改注册表
关闭防火墙
关闭自动更新
    方案一：使用组策略编辑器关闭Win11更新
    方案二：使用注册表编辑器关闭Win11更新
    方案三：使用Windows设置关闭Win11更新
    方案四：使用本地服务关闭Win11更新
    网络-按量计费
    定时任务
退出OneDriver、关闭开机启动
永久不睡眠(插入电源闲置)
接入电源永久不关闭屏幕
最佳性能
空白桌面(没有安装的程序需要将启动文件固定到开始屏幕，才可以使用win唤出菜单弹窗使用关键字启动程序)
空白桌面-回收站的隐藏
指纹
贴靠窗口-关闭建议
贴靠窗口-标题栏窗口摇动
剪贴板-打开历史记录
登录选项-自动保存可重启的应用，并在我重新登录时将他们重启
按一次ctrl 光标有个圈
输入法候选字体大小为 中
停止计划任务中的更新项

待测试
---
explorer.exe
资源管理器

远程桌面
http://t.csdn.cn/qVvX1

已成功
---
rem 激活win 11
slmgr.vbs /upk
slmgr /ipk W269N-WFGWX-YVC9B-4J6C9-T83GX
slmgr /skms win.kms.pub
slmgr /ato

rem 清理任务栏托盘无效的图标, 重启 Windows资源管理器 进程
reg delete "HKEY_CURRENT_USER\Software\Classes\Local Settings\Software\Microsoft\Windows\CurrentVersion\TrayNotify" /v IconStreams /f
reg delete "HKEY_CURRENT_USER\Software\Classes\Local Settings\Software\Microsoft\Windows\CurrentVersion\TrayNotify" /v PastIconsStream /f
taskkill /F /IM explorer.exe
start explorer.exe

win菜单开始按钮图标更改 https://zhutix.com/ico/mo-tie-win-an/
鼠标指针设为 "青蓝色" 大小增大到2
    自定义图标主题
        晶莹剔透 半透明光标 https://zhutix.com/ico/crystal-clear-v5-aero/
        黄色笑脸 动态光标 https://zhutix.com/ico/huang-xiaolian/
快捷键打开程序: 右键点击桌面图标，点击最下方的属性选项，打开的对话框选择快捷方式标签，里面有一个快捷热键,然后你就可以选择 `ctrl + alt + 自定义按键` 啦

录制教学视频: 录屏软件(EVCapture)+按键可视化软件(Keyviz)

没效果
---
https://blog.csdn.net/smtsuan/article/details/79940679
reg add 注册表路径 /v 值名 /t 要修改的数值类型 /d 想要输入的数据 /f（这个选项可根据情况自行添加，意为不用提示就强行改写现有注册表项)

reg add HKLM\桌面 /v 从桌面删除回收站 /t REG_SZ /d 1
