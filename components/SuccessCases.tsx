'use client'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState } from 'react'

export default function SuccessCases() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [activeTab, setActiveTab] = useState('movie')

  const cases = {
    movie: {
      title: '赋能内容视频精风版权合规',
      description: '助力影视内容创作者快速生产高质量解说视频',
      stats: [
        { label: '平均制作时间', value: '减少80%' },
        { label: '内容产出效率', value: '提升5倍' },
        { label: '视频播放量', value: '增长300%' },
      ],
      image: '/case-movie.jpg',
      features: [
        '智能版权检测，规避侵权风险',
        '专业解说文案，提升内容质量',
        '批量处理能力，规模化生产',
      ],
    },
    top3: {
      title: '助力TOP3短视平台出海爆款',
      description: '为海外市场定制化内容解决方案，助力平台快速增长',
      stats: [
        { label: '海外用户增长', value: '200%' },
        { label: '内容本土化率', value: '95%' },
        { label: '用户留存率', value: '提升40%' },
      ],
      image: '/case-platform.jpg',
      features: [
        '多语言实时翻译，覆盖全球市场',
        '本土化内容适配，提升用户体验',
        '智能推荐算法，精准内容分发',
      ],
    },
  }

  return (
    <section id="cases" className="py-20 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">客户案例</span>
            <span className="text-white"> · 效果看得见</span>
          </h2>
        </motion.div>

        <div className="mb-8 flex justify-center">
          <div className="inline-flex bg-gray-900 rounded-lg p-1">
            <button
              onClick={() => setActiveTab('movie')}
              className={`px-6 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                activeTab === 'movie'
                  ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              01. 赋能内容视频精风版权合规
            </button>
            <button
              onClick={() => setActiveTab('top3')}
              className={`px-6 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                activeTab === 'top3'
                  ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              02. 助力TOP3短视平台出海爆款
            </button>
          </div>
        </div>

        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-3xl p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  {cases[activeTab as keyof typeof cases].title}
                </h3>
                <p className="text-gray-400 mb-8">
                  {cases[activeTab as keyof typeof cases].description}
                </p>

                <div className="grid grid-cols-3 gap-4 mb-8">
                  {cases[activeTab as keyof typeof cases].stats.map((stat) => (
                    <div key={stat.label} className="text-center">
                      <div className="text-2xl md:text-3xl font-bold gradient-text">
                        {stat.value}
                      </div>
                      <div className="text-xs text-gray-400 mt-1">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>

                <ul className="space-y-3">
                  {cases[activeTab as keyof typeof cases].features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative">
                <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center">
                        <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <p className="text-white font-semibold">案例展示视频</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}