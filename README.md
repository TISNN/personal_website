# Tianhao Xu - Personal Website

一个基于 Next.js 的个人网站项目，支持中英文切换与主题切换，页面风格参考极简个人作品集布局。

## 线上地址
- PathTree 官网：<https://path-tree.vercel.app/>

## 功能概览
- 首页展示：
  - 个人信息与联系方式（LinkedIn / GitHub / ORCID / Email）
  - 探索（Explore）
  - 研究经历（Research Experience）
  - 论文出版物（Publications）
  - 教育经历（Education）
  - 职业经历（Career）
  - 其他（Other）
- 交互：
  - 条目点击展开 / 收起
  - Hover 高亮提示
  - 中英文语言切换
  - 明暗主题切换
- 顶部导航：
  - Home
  - Projects

## 技术栈
- Next.js 14
- React 18
- TypeScript
- Tailwind CSS

## 项目结构

```text
src/
├── app/
│   ├── globals.css
│   ├── icon.svg
│   ├── layout.tsx
│   ├── page.tsx
│   └── projects/
│       └── page.tsx
├── components/
│   └── TopNav.tsx
├── context/
│   ├── LanguageContext.tsx
│   └── ThemeContext.tsx
└── public/
    └── Tulipa.jpg
```

## 本地开发

### 1) 安装依赖

```bash
npm install
```

### 2) 启动开发环境

```bash
npm run dev
```

默认访问：<http://localhost:3000>

### 3) 生产构建

```bash
npm run build
npm run start
```

## 维护说明
- 若开发环境出现 `.next` 缓存导致的模块缺失问题（例如 `Cannot find module './xxx.js'`），可清理或重建 `.next` 后重新启动。
- 站点标签页图标使用 `src/app/icon.svg`。

## License
MIT
