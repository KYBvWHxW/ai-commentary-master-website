'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState } from 'react'

export default function AIAgentFamily() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [hoveredAgent, setHoveredAgent] = useState<number | null>(null)
  const [clickedAgent, setClickedAgent] = useState<number | null>(null)

  const agents = [
    {
      id: 1,
      name: '字幕翻译AI智能体',
      description: '精准识别多语种字幕，实时翻译转换',
      icon: '🌐',
      qrCode: '/qr-subtitle.png',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      id: 2,
      name: '学霸解读AI智能体',
      description: '深度理解剧情内容，智能生成解说文案',
      icon: '🎓',
      qrCode: '/qr-study.png',
      color: 'from-purple-500 to-pink-500',
    },
    {
      id: 3,
      name: '小说翻译AI智能体',
      description: '保持原作风格，多语言精准翻译',
      icon: '📖',
      qrCode: '/qr-novel.png',
      color: 'from-green-500 to-emerald-500',
    },
  ]

  const handleAgentClick = (agentId: number) => {
    if (clickedAgent === agentId) {
      setClickedAgent(null)
    } else {
      setClickedAgent(agentId)
    }
  }

  return (
    <section className="py-20 bg-black relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 to-black"></div>
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
            <span className="text-green-400 text-sm font-medium">AI AGENT FAMILY</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
              智能体家族
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            7×24小时不间断工作，为您提供全方位的智能解说服务
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {agents.map((agent, index) => (
            <motion.div
              key={agent.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative"
              onMouseEnter={() => setHoveredAgent(agent.id)}
              onMouseLeave={() => setHoveredAgent(null)}
              onClick={() => handleAgentClick(agent.id)}
            >
              <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700 hover:border-green-500/50 transition-all duration-300 cursor-pointer">
                {/* 背景渐变 */}
                <div className={`absolute inset-0 bg-gradient-to-br ${agent.color} opacity-0 hover:opacity-10 transition-opacity duration-500 rounded-2xl`}></div>

                {/* 内容 */}
                <div className="relative z-10 text-center">
                  {/* 图标容器 */}
                  <div className="relative inline-block mb-6">
                    <div className="text-6xl transform hover:scale-110 transition-transform duration-300">
                      {agent.icon}
                    </div>

                    {/* 电脑端悬停显示二维码 */}
                    <AnimatePresence>
                      {hoveredAgent === agent.id && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.8, y: 20 }}
                          animate={{ opacity: 1, scale: 1, y: 0 }}
                          exit={{ opacity: 0, scale: 0.8, y: 20 }}
                          className="hidden md:block absolute top-full left-1/2 transform -translate-x-1/2 mt-4 z-50"
                        >
                          <div className="bg-white rounded-xl p-4 shadow-2xl">
                            <div className="w-32 h-32 bg-gray-200 rounded-lg flex items-center justify-center">
                              <span className="text-gray-600 text-xs">扫码体验</span>
                            </div>
                            <p className="text-gray-800 text-xs mt-2 font-medium text-center">扫码使用小程序</p>
                          </div>
                          <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white rotate-45"></div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3">
                    {agent.name}
                  </h3>

                  <p className="text-gray-400 text-sm">
                    {agent.description}
                  </p>

                  {/* 移动端点击提示 */}
                  <div className="md:hidden mt-4 text-green-400 text-xs">
                    点击查看小程序码
                  </div>
                </div>

                {/* 装饰光效 */}
                <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${agent.color} opacity-20 rounded-full blur-2xl`}></div>
              </div>

              {/* 移动端点击显示二维码 */}
              <AnimatePresence>
                {clickedAgent === agent.id && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="md:hidden absolute inset-0 bg-black/90 rounded-2xl flex items-center justify-center z-50"
                    onClick={(e) => {
                      e.stopPropagation()
                      setClickedAgent(null)
                    }}
                  >
                    <div className="bg-white rounded-xl p-4">
                      <div className="w-40 h-40 bg-gray-200 rounded-lg flex items-center justify-center">
                        <span className="text-gray-600 text-sm">扫码体验</span>
                      </div>
                      <p className="text-gray-800 text-sm mt-2 font-medium text-center">扫码使用小程序</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* 统计数据 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="text-center p-6 bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl border border-gray-700">
            <div className="text-4xl font-bold text-green-400 mb-2">7×24h</div>
            <div className="text-gray-400">不间断运行</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl border border-gray-700">
            <div className="text-4xl font-bold text-green-400 mb-2">10万+</div>
            <div className="text-gray-400">小时素材积累</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl border border-gray-700">
            <div className="text-4xl font-bold text-green-400 mb-2">50万+</div>
            <div className="text-gray-400">精调文案</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}