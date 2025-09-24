'use client'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function IndustrySolutions() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const solutions = [
    {
      title: '电影/视频解说',
      description: '专业电影解说AI，快速生成高质量解说文案',
      features: ['智能剧情提取', '情感分析', '专业配音'],
      icon: '🎬',
      gradient: 'from-blue-500 to-purple-600',
    },
    {
      title: '动态漫画解说',
      description: '动漫内容智能解说，精准捕捉画面亮点',
      features: ['场景识别', '角色分析', '情节串联'],
      icon: '🎨',
      gradient: 'from-green-500 to-teal-600',
    },
    {
      title: '短视频速览解说',
      description: '快速生成短视频解说，提高内容传播效率',
      features: ['关键帧提取', '智能剪辑', '爆款文案'],
      icon: '📱',
      gradient: 'from-orange-500 to-red-600',
    },
    {
      title: '网文小说解说',
      description: '小说内容可视化解说，提升阅读体验',
      features: ['章节概括', '人物关系', '情节推进'],
      icon: '📚',
      gradient: 'from-purple-500 to-pink-600',
    },
  ]

  return (
    <section id="solutions" className="py-20 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 to-black"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">四大业务</span>
            <span className="text-white"> · 解说翻译全覆盖</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            覆盖影视、动漫、短视频、网文等多个领域，满足不同场景的解说需求
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl blur-xl"
                style={{
                  backgroundImage: `linear-gradient(to right, var(--tw-gradient-stops))`,
                  '--tw-gradient-from': solution.gradient.split(' ')[1],
                  '--tw-gradient-to': solution.gradient.split(' ')[3],
                } as React.CSSProperties}
              />

              <div className="relative bg-gray-900/80 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 hover:border-green-500/50 transition-all duration-300 h-full">
                <div className="text-4xl mb-4">{solution.icon}</div>

                <h3 className="text-xl font-semibold text-white mb-3">
                  {solution.title}
                </h3>

                <p className="text-gray-400 text-sm mb-4">
                  {solution.description}
                </p>

                <ul className="space-y-2">
                  {solution.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-gray-300">
                      <svg className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className="mt-6 w-full py-2 px-4 bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/30 rounded-lg text-green-400 text-sm font-medium hover:border-green-500 hover:bg-green-500/20 transition-all duration-300">
                  查看详情
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}