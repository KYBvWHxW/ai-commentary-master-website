'use client'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { EXTERNAL_LINKS } from '@/constants/links'
import { useState } from 'react'

export default function FourServices() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const services = [
    {
      title: '电影/短剧解说',
      description: '智能剪辑配音，快速生成专业解说视频',
      link: EXTERNAL_LINKS.movieDrama,
      icon: '🎬',
      features: ['智能剧情提取', 'AI配音合成', '字幕自动生成'],
      gradient: 'from-blue-500 to-purple-600',
    },
    {
      title: '动态漫解说',
      description: '漫画动态化，配合精准解说提升观看体验',
      link: EXTERNAL_LINKS.animatedComics,
      icon: '🎨',
      features: ['画面智能识别', '动态转场效果', '情感化配音'],
      gradient: 'from-purple-500 to-pink-600',
    },
    {
      title: '短剧出海翻译',
      description: '多语种翻译配音，助力内容全球化传播',
      link: EXTERNAL_LINKS.dramaTranslation,
      icon: '🌍',
      features: ['100+语种支持', '文化本土化', '口型同步技术'],
      gradient: 'from-green-500 to-teal-600',
    },
    {
      title: '网文小说翻译',
      description: '小说智能翻译，保持原作风格精髓',
      link: EXTERNAL_LINKS.novelTranslation,
      icon: '📚',
      features: ['语境智能理解', '角色音色定制', '情节精准把控'],
      gradient: 'from-orange-500 to-red-600',
    },
  ]

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section className="py-20 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-5"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-500/10 to-emerald-500/10 px-4 py-2 rounded-full mb-4"
          >
            <span className="text-green-400 text-sm font-medium">CORE SERVICES</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="text-white">四大核心业务</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            全方位覆盖影视、动漫、小说等内容领域，为创作者提供一站式智能解说解决方案
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="relative group"
            >
              <a
                href={service.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block h-full"
              >
                <div className="relative h-full bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 border border-gray-700 hover:border-green-500/50 transition-all duration-300 overflow-hidden">
                  {/* 背景渐变动效 */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>

                  {/* 图标 */}
                  <div className="relative z-10">
                    <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>

                    <h3 className="text-xl font-bold text-white mb-2">
                      {service.title}
                    </h3>

                    <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                      {service.description}
                    </p>

                    {/* 特性列表 */}
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-300">
                          <svg className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>

                    {/* 查看详情按钮 */}
                    <div className="flex items-center text-green-400 text-sm font-medium group-hover:text-green-300 transition-colors">
                      <span>查看详情</span>
                      <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </div>
                  </div>

                  {/* 悬停光效 */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-500/20 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-x-8 -translate-y-8"></div>
                </div>
              </a>
            </motion.div>
          ))}
        </div>

        {/* 查看样片区域 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-6 p-8 bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl border border-gray-700">
            <div className="text-left">
              <h3 className="text-white font-bold text-xl mb-2">想要了解更多？</h3>
              <p className="text-gray-400">扫码或点击按钮查看AI解说样片展示</p>
            </div>

            <a
              href={EXTERNAL_LINKS.sampleVideo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-full font-medium shadow-xl hover:shadow-green-500/30 hover:scale-105 transition-all duration-300"
            >
              <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              查看样片
            </a>

            <div className="w-32 h-32 bg-white rounded-xl p-2">
              <div className="w-full h-full bg-gray-200 rounded-lg flex items-center justify-center">
                <span className="text-gray-500 text-xs">样片二维码</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}