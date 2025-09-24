'use client'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function AIServices() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const stats = [
    { value: '7×24h', label: '打造爆款内容', description: 'Agent智能助力24小时不停创作' },
    { value: '10万+', label: '小时素材累积', description: '海量视频资源智能分析处理' },
    { value: '50万+', label: '字幕文案精调', description: '专业团队精心调优每一句解说' },
  ]

  const engines = [
    {
      title: '字幕智能提取AI智能体',
      description: '高精度语音识别，自动生成时间轴字幕',
      icon: (
        <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      ),
    },
    {
      title: '学霸智能AI智能体',
      description: '深度学习算法，智能理解内容精髓',
      icon: (
        <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
    },
    {
      title: '小说翻译AI智能体',
      description: '多语言实时翻译，保持原作精神内核',
      icon: (
        <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
        </svg>
      ),
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">智能体家族</span>
            <span className="text-white"> · 7×24h打造爆款内容</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                {stat.value}
              </div>
              <div className="text-xl text-white font-semibold mb-1">
                {stat.label}
              </div>
              <div className="text-sm text-gray-400">
                {stat.description}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {engines.map((engine, index) => (
            <motion.div
              key={engine.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group"
            >
              <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 hover:border-green-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-green-500/10">
                <div className="flex justify-center mb-6">
                  <div className="p-4 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-2xl text-green-400 group-hover:scale-110 transition-transform duration-300">
                    {engine.icon}
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-white mb-3 text-center">
                  {engine.title}
                </h3>

                <p className="text-gray-400 text-sm text-center">
                  {engine.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}