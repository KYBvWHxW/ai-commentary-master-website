'use client'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { EXTERNAL_LINKS } from '@/constants/links'

export default function HeroSectionV2() {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0)

  // 视频展示数据（可以替换为实际视频）
  const videos = [
    { id: 1, title: '电影解说展示', thumbnail: '/video-thumb-1.jpg' },
    { id: 2, title: '短剧解说展示', thumbnail: '/video-thumb-2.jpg' },
    { id: 3, title: '动漫解说展示', thumbnail: '/video-thumb-3.jpg' },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideoIndex((prev) => (prev + 1) % videos.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [videos.length])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 动态背景 */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10"></div>
        <div className="absolute top-0 -left-4 w-96 h-96 bg-green-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* 左侧文案区 */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-500/10 to-emerald-500/10 px-4 py-2 rounded-full mb-6"
            >
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              <span className="text-green-400 text-sm font-medium">AI驱动的智能解说平台</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
            >
              AI解说大师
              <span className="block text-3xl md:text-4xl lg:text-5xl mt-2 bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
                智能解说 · 一键成片
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-gray-300 text-lg md:text-xl mb-8 leading-relaxed"
            >
              让每个视频都有专业级的解说体验
              <br />
              助力内容创作者提升效率，打造爆款内容
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href={EXTERNAL_LINKS.bookDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-gradient-to-r from-green-500 to-emerald-600 rounded-full shadow-xl hover:shadow-green-500/50 hover:scale-105 transition-all duration-300"
              >
                <span>预约演示</span>
                <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>

              <button className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-green-400 border-2 border-green-500/50 rounded-full hover:bg-green-500/10 hover:border-green-400 transition-all duration-300">
                <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                观看介绍
              </button>
            </motion.div>

            {/* 数据展示 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-3 gap-6 mt-12"
            >
              <div>
                <div className="text-3xl md:text-4xl font-bold text-green-400">10万+</div>
                <div className="text-gray-400 text-sm mt-1">服务创作者</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-green-400">500万+</div>
                <div className="text-gray-400 text-sm mt-1">日生成视频</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-green-400">100+</div>
                <div className="text-gray-400 text-sm mt-1">覆盖国家</div>
              </div>
            </motion.div>
          </motion.div>

          {/* 右侧展示区 */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-video rounded-2xl overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 shadow-2xl">
              {/* 视频播放器占位 */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform cursor-pointer">
                    <svg className="w-12 h-12 text-white ml-2" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                    </svg>
                  </div>
                  <p className="text-white font-semibold text-lg">点击播放演示视频</p>
                  <p className="text-gray-400 text-sm mt-2">了解AI解说大师的强大功能</p>
                </div>
              </div>

              {/* 装饰元素 */}
              <div className="absolute top-4 right-4 bg-red-600 text-white text-xs px-3 py-1 rounded-full font-semibold">
                HOT
              </div>
            </div>

            {/* 浮动卡片 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1 }}
              className="absolute -bottom-6 -left-6 bg-white/10 backdrop-blur-xl rounded-xl p-4 shadow-xl"
            >
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <div className="text-white font-semibold">极速生成</div>
                  <div className="text-gray-400 text-sm">平均3分钟完成</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2 }}
              className="absolute -top-6 -right-6 bg-white/10 backdrop-blur-xl rounded-xl p-4 shadow-xl"
            >
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                  </svg>
                </div>
                <div>
                  <div className="text-white font-semibold">多语言支持</div>
                  <div className="text-gray-400 text-sm">覆盖30+语种</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}