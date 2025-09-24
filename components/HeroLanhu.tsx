'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { EXTERNAL_LINKS } from '@/constants/links'

export default function HeroLanhu() {
  return (
    <section className="relative w-full min-h-screen bg-black overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute inset-0">
        {/* 左侧装饰图 */}
        <Image
          src="/images/FigmaDDSSlicePNGd4c3861fd87e5e51faf8b26744f84d48.png"
          alt=""
          width={130}
          height={231}
          className="absolute left-[-36px] top-[312px] md:top-[625px]"
        />
        {/* 右侧装饰图 */}
        <Image
          src="/images/FigmaDDSSlicePNG3e19a7df532021c3767d281cf3d5e95d.png"
          alt=""
          width={130}
          height={231}
          className="absolute right-[-36px] top-[312px] md:top-[625px]"
        />
      </div>

      {/* 主要内容区 */}
      <div className="relative z-10 container mx-auto px-4 pt-20 pb-16">
        {/* Logo和标题区域 */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center justify-center mb-8">
            <div className="w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-green-400 to-emerald-600 rounded-2xl flex items-center justify-center shadow-2xl">
              <span className="text-white font-bold text-2xl md:text-3xl">AI</span>
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4">
            AI解说大师
          </h1>

          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8">
            一键成片助力智能影视剪辑
          </p>

          {/* CTA按钮 */}
          <motion.a
            href={EXTERNAL_LINKS.bookDemo}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-full font-semibold text-lg shadow-xl hover:shadow-green-500/50 transition-all duration-300"
          >
            预约演示
            <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </motion.a>
        </motion.div>

        {/* 视频展示区域 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative max-w-6xl mx-auto"
        >
          <div className="relative w-full h-[260px] md:h-[400px] lg:h-[520px] rounded-2xl overflow-hidden">
            <Image
              src="/images/FigmaDDSSlicePNG177d2652c231367473d8e9ff3c62f733.png"
              alt="AI解说大师展示"
              fill
              className="object-cover"
              priority
            />

            {/* 播放按钮覆盖层 */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition-colors cursor-pointer group">
              <div className="w-20 h-20 md:w-24 md:h-24 bg-white/90 rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                <svg className="w-10 h-10 md:w-12 md:h-12 text-green-600 ml-1" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                </svg>
              </div>
            </div>
          </div>

          {/* 底部功能标签 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-wrap justify-center gap-4 mt-8"
          >
            {['电影解说', '电视剧解说', '动态漫解说', '短剧出海', '网文小说'].map((item, index) => (
              <motion.span
                key={item}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                className="px-4 py-2 bg-gray-900/80 border border-gray-700 rounded-full text-sm text-gray-300 hover:border-green-500 hover:text-green-400 transition-all cursor-pointer"
              >
                {item}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>

        {/* 数据统计 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-3 gap-8 max-w-4xl mx-auto mt-16"
        >
          <div className="text-center">
            <div className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
              10万+
            </div>
            <div className="text-sm md:text-base text-gray-400 mt-2">创作者使用</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
              500万+
            </div>
            <div className="text-sm md:text-base text-gray-400 mt-2">日生成视频</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
              100+
            </div>
            <div className="text-sm md:text-base text-gray-400 mt-2">覆盖国家</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}