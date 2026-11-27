# 个人游乐厅

深蓝实验室电控组二轮考核前端方向个人网站。首页可切换主题，并进入十秒挑战、节奏回声和校园岔路口。联系入口为项目 Issues。

## 启动
环境为 Windows、Python 3.13 和支持 JavaScript 的现代浏览器。项目使用原生 HTML、CSS 和 JavaScript，无依赖安装或构建步骤。在仓库根目录运行：

    python -m http.server 8174 --bind 127.0.0.1 --directory site

打开 http://127.0.0.1:8174/ ，保持终端运行。按 Ctrl+C 关闭。若端口已占用，可换为 8175 并相应调整访问地址。

## 目录
- site/index.html 为首页，projects.js 保存游戏数据，lobby.js 负责显示游戏卡片。
- site/game.html、rhythm.html、story.html 分别为三个游戏入口。
- docs/ 保存 Git 基础说明、试玩截图及验收记录。
