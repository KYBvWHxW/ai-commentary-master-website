/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost'],
    unoptimized: true, // Replit环境下禁用图片优化以避免性能问题
  },
  // 支持静态导出
  output: 'standalone',
}

module.exports = nextConfig