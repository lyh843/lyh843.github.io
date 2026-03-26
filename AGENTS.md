# AGENTS.md - 开发指南

## 项目概述

这是一个静态个人主页网站，由 HTML、CSS 和少量 JavaScript 组成。没有构建系统、包管理器或测试框架。

## 文件结构

```
├── index.html          # 主首页
├── style.css          # 全局样式
├── tools.html         # 工具页面
├── preClass.html      # 课前资源页面
├── nju.html           # 南大相关链接页面
├── todo.html          # 待办事项页面
├── js/
│   └── table.js       # 表格操作（已废弃）
└── background1.png   # 背景图片
```

## 命令

由于是静态站点，没有构建命令。本地预览：

- **本地服务**：使用任意静态文件服务器，如 `python -m http.server 8000` 或 VS Code Live Server
- **单文件测试**：直接在浏览器中打开 HTML 文件或使用本地服务器

## 代码风格指南

### HTML

- 使用语义化 HTML5 元素（`<nav>`、`<header>`、`<main>`、`<section>`、`<article>`）
- `<html>` 标签必须包含 `lang` 属性：`<html lang="zh-CN">`
- 在区块和表单上使用 `aria-label` 和 `aria-labelledby` 提高可访问性
- 外链必须包含 `rel="noopener noreferrer"` 确保安全
- 标签和属性使用小写
- 属性值使用双引号
- 空元素使用自闭合形式（如 `<meta>`、`<link>`、`<br>`）

### CSS

- 使用 CSS 变量（自定义属性）存储颜色和共享值
- 遵循模式：`:root { --primary-color: #0078D4; }`
- 使用 flexbox 和 CSS Grid 布局，避免浮动
- 字体大小使用 `rem`，边框和阴影使用 `px`
- 移动端优先的响应式设计，使用 `@media` 查询
- 将相关样式放在一起，谨慎使用注释
- 除非绝对必要，否则避免使用 !important
- 使用描述性类名，必要时采用 BEM 风格

### JavaScript

- 使用现代 ES6+ 语法：用 `const`/`let` 替代 `var`
- 使用模板字符串替代字符串拼接
- 回调函数使用箭头函数
- 在 JS 文件顶部添加 `'use strict'`
- 使用前先声明变量
- 优雅处理错误，避免静默失败

### 命名规范

- **文件**：小写加连字符（如 `index.html`、`style.css`、`table.js`）
- **类名/ID**：小写加连字符（如 `.nav-links`、`#search-form`）
- **CSS 变量**：小写加连字符（如 `--primary-color`）
- **JS 函数**：驼峰命名（如 `addRow()`、`deleteRow()`）

### 可访问性

- 所有图片应有 `alt` 文本
- 表单输入必须有关联的 `<label>` 元素
- 使用语义化 HTML 确保屏幕阅读器兼容
- 确保足够的颜色对比度（WCAG AA 最低标准）
- 键盘导航应能正常使用

### 安全

- 带 `target="_blank"` 的外链必须包含 `rel="noopener noreferrer"`
- 切勿在 HTML 或客户端 JS 中暴露敏感信息
- 验证和清理任何用户输入

### 错误处理

- HTML：确保所有标签正确闭合
- CSS：检查语法错误，使用浏览器开发者工具
- JS：检查控制台错误，处理边界情况

### 格式化

- 使用 4 空格缩进（或 2 空格，保持一致）
- 去除尾部空格
- 保持行宽在 120 字符以内
- 用空行分隔相关代码区块

### 最佳实践

- 保持 HTML、CSS、JS 分离（除非必要，否则不使用内联样式/脚本）
- 尽量减少外部依赖
- 添加图片前先优化
- 在多种浏览器和设备上测试
- 使用 git 进行版本控制

## 注意事项

- 这是一个个人导航页面，不是复杂的 Web 应用
- 未配置自动化测试或代码检查
- `js/table.js` 文件已标记为废弃（废案）