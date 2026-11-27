# K4 技术建议核验材料

原说法是 localStorage 能让所有浏览器和设备自动同步，而且适合保存 API 密钥。

| 核验点 | 结论与资料依据 | 验证方法 |
|---|---|---|
| 刷新后是否保留，换设备能否依赖它同步 | 数据按网站来源保存于当前浏览器的存储空间。同一来源刷新后可继续读取，跨设备同步需要另外实现。[MDN 的 Description 和 Exceptions](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage#description) | 本项目已在同一浏览器刷新后读回主题。可再用另一个全新浏览器配置打开相同地址，检查初始主题。 |
| 能否保存私密 API 密钥 | 可在同源页面运行的脚本有机会访问该存储，前端无法借此保守服务端密钥。[OWASP HTML5 Security Cheat Sheet 的 Local Storage 一节](https://cheatsheetseries.owasp.org/cheatsheets/HTML5_Security_Cheat_Sheet.html#local-storage) | 只写入虚构标记，用自己的页面或开发者工具读取该标记，验证脚本可读性。 |
| 用户阻止浏览器存储后怎么办 | 访问可能抛出异常。MDN 的 Exceptions 列出 SecurityError。 | Edge 自动测试中模拟读取存储抛错，实际点击主题按钮仍能切换。 |
