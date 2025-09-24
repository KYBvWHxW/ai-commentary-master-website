# AI解说大师 - 官网

基于 Next.js 14 和 Tailwind CSS 构建的高质量响应式官网。

## 🚀 Replit 部署指南

### 方式一：直接导入（推荐）

1. 登录 [Replit](https://replit.com)
2. 点击 "Create Repl"
3. 选择 "Import from GitHub" 或上传项目文件夹
4. Replit 会自动检测 `.replit` 配置文件并安装依赖
5. 点击 "Run" 按钮启动项目

### 方式二：手动创建

1. 在 Replit 创建新的 Node.js 项目
2. 上传所有项目文件
3. 在 Shell 中运行：
```bash
npm install
npm run dev
```

### 方式三：使用 Git

```bash
# 在 Replit Shell 中
git clone [your-repo-url]
cd ai-commentary-master-website
npm install
npm run dev
```

## 📁 项目结构

```
ai-commentary-master-website/
├── app/                    # Next.js 应用目录
│   ├── layout.tsx         # 根布局
│   ├── page.tsx           # 首页
│   └── globals.css        # 全局样式
├── components/            # React 组件
│   ├── Navbar.tsx        # 导航栏
│   ├── HeroSection.tsx   # 主视觉区
│   ├── IndustrySolutions.tsx  # 解决方案
│   ├── AIServices.tsx    # AI服务
│   ├── ThreeEngines.tsx  # 三大引擎
│   ├── SuccessCases.tsx  # 成功案例
│   ├── Testimonials.tsx  # 用户评价
│   └── Footer.tsx        # 页脚
├── public/               # 静态资源
├── .replit              # Replit 配置
├── package.json         # 项目依赖
└── tailwind.config.js   # Tailwind 配置
```

## ✨ 功能特点

- 🎨 **精美设计**：完全还原 UI 设计稿
- 📱 **响应式布局**：适配所有设备尺寸
- ⚡ **高性能**：Next.js 14 优化，加载速度快
- 🎬 **流畅动画**：Framer Motion 动效
- 🌐 **SEO 优化**：完整的元数据配置
- 🔧 **易于定制**：组件化开发，便于修改

## 🛠 技术栈

- **框架**: Next.js 14 (App Router)
- **语言**: TypeScript
- **样式**: Tailwind CSS
- **动画**: Framer Motion
- **图标**: Lucide React
- **轮播**: Swiper

## 📝 环境变量

如需配置环境变量，创建 `.env.local` 文件：

```env
# API 端点（如需要）
NEXT_PUBLIC_API_URL=https://api.example.com

# 其他配置
NEXT_PUBLIC_SITE_NAME=AI解说大师
```

## 🚀 本地开发

```bash
# 安装依赖
npm install

# 开发模式
npm run dev

# 构建生产版本
npm run build

# 启动生产服务
npm run start
```

## 📱 浏览器支持

- Chrome (最新版)
- Firefox (最新版)
- Safari (最新版)
- Edge (最新版)

## 🔄 更新部署

在 Replit 中更新代码后：

1. 如果修改了依赖，运行 `npm install`
2. 点击 "Stop" 然后 "Run" 重启服务
3. 或在 Shell 中运行 `npm run dev`

## ⚙️ 性能优化建议

1. **图片优化**：使用 WebP 格式，配置 Next.js Image 组件
2. **字体优化**：使用 Next.js Font 优化字体加载
3. **代码分割**：利用动态导入减少首屏加载
4. **缓存策略**：配置适当的缓存头

## 📞 联系支持

如有问题，请联系技术支持团队。

---

Made with ❤️ by AI解说大师团队