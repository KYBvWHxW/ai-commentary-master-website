import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AI解说大师 - 一键成片助力智能影视剪辑',
  description: '专业的AI智能解说平台，提供电影解说、电视剧解说、动态漫解说等多种解说服务，7x24小时智能爆款内容生成',
  keywords: 'AI解说,智能剪辑,影视解说,短视频制作,AI配音',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN">
      <body className={inter.className}>{children}</body>
    </html>
  )
}