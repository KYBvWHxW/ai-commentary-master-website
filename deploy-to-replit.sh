#!/bin/bash

echo "🚀 AI解说大师网站部署脚本"
echo "========================="

# 清理旧文件
echo "📦 清理旧文件..."
rm -rf node_modules .next package-lock.json

# 检查 Node.js 版本
echo "🔍 检查 Node.js 版本..."
node --version

# 安装依赖
echo "📥 安装项目依赖..."
npm install

# 确保所有依赖都安装
echo "📥 安装缺失的依赖..."
npm install next@14.0.4 react@18.2.0 react-dom@18.2.0
npm install framer-motion@10.16.16 react-intersection-observer@9.5.3
npm install tailwindcss@3.4.0 autoprefixer@10.4.16 postcss@8.4.32
npm install -D @types/node@20 @types/react@18 @types/react-dom@18 typescript@5

# 创建必要的目录
echo "📁 创建必要的目录..."
mkdir -p public

# 创建 public 文件夹的占位文件
echo "📄 创建占位文件..."
cat > public/favicon.ico << 'EOF'
EOF

# 构建项目
echo "🔨 构建项目..."
npm run build

# 启动项目
echo "✅ 启动 Next.js 服务器..."
npm run dev