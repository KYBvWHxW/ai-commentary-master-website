'use client'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'

export default function ThreeEnginesLanhu() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const engines = [
    {
      title: '电影解说',
      subtitle: '叙影·爆款复刻解说AI模型',
      image: '/images/FigmaDDSSlicePNGed7b3c23ffafd9b95384e945ac819dd5.png',
      bgImage: '/images/FigmaDDSSlicePNG5fa8ea21758ada7bd3936ca46a5dd891.png',
      features: [
        '百万爆款训练库，动态学习智能对标',
        '第一人称解说，10s采样建模，原声精准克隆',
        '分钟级响应，批量复刻爆款节奏',
      ],
      bgColor: 'from-blue-50 to-blue-100',
    },
    {
      title: '短剧译制',
      subtitle: '雅译·本地化翻译模型',
      image: '/images/FigmaDDSSlicePNGea4199e872e8dab9cfd4aa70d890cf97.png',
      features: [
        '千万语料+术语库支撑，本土化行业领先',
        '一站式译制，AI全托管，0人工干预',
        '情感对照+语义动态调优，更接地气',
      ],
      bgColor: 'from-purple-50 to-purple-100',
    },
    {
      title: '短剧速看',
      subtitle: '速看·智能剪辑AI模型',
      image: '/images/FigmaDDSSlicePNGb147b16c399c1f0ce9f9975f5e349522.png',
      features: [
        '智能识别精彩片段，自动剪辑高光时刻',
        '多维度内容理解，精准把握剧情节奏',
        '批量处理能力，快速生成速看版本',
      ],
      bgColor: 'from-green-50 to-green-100',
    },
  ]

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            <span className="text-green-500">三大AI引擎</span>
            <br />
            <span className="text-black text-3xl md:text-4xl lg:text-5xl">全链路打造爆款</span>
          </h2>
        </motion.div>

        <div className="space-y-8">
          {engines.map((engine, index) => (
            <motion.div
              key={engine.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`flex flex-col lg:flex-row gap-8 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* 内容区 */}
              <div className="flex-1">
                <div className={`bg-gradient-to-br ${engine.bgColor} rounded-2xl p-8 shadow-lg`}>
                  {/* 标题图片 */}
                  {engine.image && (
                    <div className="relative h-32 mb-6">
                      <Image
                        src={engine.image}
                        alt={engine.title}
                        fill
                        className="object-contain"
                      />
                    </div>
                  )}

                  {/* 标题 */}
                  <div className="mb-8">
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
                      {engine.title}
                    </h3>
                    <p className="text-lg text-gray-600">{engine.subtitle}</p>
                  </div>

                  {/* 特性列表 */}
                  <div className="space-y-4">
                    {engine.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0 mt-1">
                          <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <p className="text-gray-700 leading-relaxed">{feature}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* 图片区 */}
              {engine.bgImage && (
                <div className="flex-1">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="relative h-[300px] lg:h-[400px] rounded-2xl overflow-hidden shadow-xl"
                  >
                    <Image
                      src={engine.bgImage}
                      alt={`${engine.title}展示`}
                      fill
                      className="object-cover"
                    />
                    {/* 悬停遮罩 */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <div className="p-6 text-white">
                        <p className="text-lg font-semibold">{engine.title}</p>
                        <p className="text-sm opacity-90">{engine.subtitle}</p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* 底部CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 mb-6 text-lg">
            体验AI解说的强大能力，开启智能创作新时代
          </p>
          <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-full font-semibold text-lg shadow-xl hover:shadow-green-500/50 hover:scale-105 transition-all duration-300">
            立即免费试用
            <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </motion.div>
      </div>
    </section>
  )
}