# F2 主题按钮修复与 K6 问题材料

环境为 Windows、Microsoft Edge 158.0.4370.33，页面没有外部依赖。将题目中的 HTML 存为文件，在浏览器打开后点击主题按钮。预期背景从白色变深，实际仍然是白色。通过浏览器开发者工具协议采集到页面初始化时的异常：

    TypeError: Cannot read properties of null (reading 'addEventListener')

HTML 中按钮的 id 是 theme-toggle，脚本却查找 #theme。查询返回 null，监听器在注册时就报错，点击自然没有反应。最小修复是将选择器改成 #theme-toggle。

修好的文件是 [F2-theme.html](F2-theme.html)。在同一浏览器连续点击两次，通过计算样式读取到背景色依次为 rgb(32, 32, 32) 和 rgb(255, 255, 255)，修复页没有出现新的异常。

若要保留选择，可在按钮切换时将主题名写进 localStorage，页面加载时读回并应用。实际网站在 site/theme.js 中实现，并对存储受限的情况做了处理。

## K6 求助信息参考

我在 Edge 打开题目给的静态 HTML，点击“切换主题”没有反应。预期第一次点击变深，第二次恢复。重新加载时已经出现上述空值报错。相关代码只有带 id="theme-toggle" 的按钮、querySelector("#theme") 和下一行 addEventListener。怎样确认选择器是否找到了页面上的按钮？修改后应该观察哪些变化才能确定两次切换都成功？
