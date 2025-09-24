'use client'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function ThreeEngines() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const engines = [
    {
      title: '电影解说',
      description: '批量、精准快速电影AI解说',
      features: [
        '智能剧情提取与重组',
        '多语言字幕自动生成',
        '专业级配音合成',
        '爆款文案智能创作'
      ],
      icon: '🎬',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: '短剧解说',
      description: '口播解说、多语言支配生成标题封面',
      features: [
        '精彩片段自动识别',
        '情感高潮智能捕捉',
        '吸睛标题一键生成',
        '封面图片智能匹配'
      ],
      icon: '🎭',
      color: 'from-purple-500 to-pink-500',
    },
    {
      title: '短剧速看',
      description: '解说、串头尾跟踪配置',
      features: [
        '剧集快速概览生成',
        '关键剧情串联解说',
        '片头片尾智能识别',
        '多集连续处理支持'
      ],
      icon: '⚡',
      color: 'from-orange-500 to-red-500',
    },
  ]

  return (
    <section className="py-20 bg-black relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-green-900/10 via-transparent to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">三大AI引擎</span>
            <span className="text-white"> · 全链路打造爆款</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            强大的AI引擎矩阵，覆盖内容创作全流程，助您快速产出优质内容
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {engines.map((engine, index) => (
            <motion.div
              key={engine.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-3xl blur-xl"
                style={{
                  backgroundImage: `linear-gradient(to bottom right, var(--tw-gradient-stops))`,
                  '--tw-gradient-from': engine.color.split(' ')[1],
                  '--tw-gradient-to': engine.color.split(' ')[3],
                } as React.CSSProperties}
              />

              <div className="relative bg-gradient-to-b from-gray-900 to-gray-950 border border-gray-800 rounded-3xl p-8 hover:border-gray-700 transition-all duration-300">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-5xl">{engine.icon}</span>
                  <div className={`w-20 h-20 bg-gradient-to-br ${engine.color} rounded-full opacity-20 blur-2xl`}></div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-3">
                  {engine.title}
                </h3>

                <p className="text-gray-400 mb-6">
                  {engine.description}
                </p>

                <ul className="space-y-3">
                  {engine.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mt-1 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`mt-8 w-full py-3 px-6 bg-gradient-to-r ${engine.color} text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300`}
                >
                  了解更多
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}