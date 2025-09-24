'use client'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function Testimonials() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const testimonials = [
    {
      content: '使用AI解说大师后，我的视频制作效率提升了5倍，每天可以产出10个高质量解说视频。系统智能识别剧情重点，配音自然流畅，完全改变了我的创作方式。',
      author: '张明',
      role: 'B站知名UP主',
      avatar: '👨‍💼',
      stats: '粉丝200万+',
    },
    {
      content: '作为MCN机构，我们需要大量优质内容。AI解说大师的批量处理功能让我们的产能翻了3倍，而且每个视频的质量都很稳定，ROI提升明显。',
      author: '李娜',
      role: '某头部MCN运营总监',
      avatar: '👩‍💼',
      stats: '月产1000+视频',
    },
    {
      content: '海外市场的本地化一直是难题。AI解说大师的多语言翻译精准度高，文化适配做得很好，帮助我们快速打开了东南亚市场。',
      author: '王磊',
      role: '跨境电商内容负责人',
      avatar: '👨‍💻',
      stats: '覆盖10+国家',
    },
    {
      content: '智能剪辑功能太强大了！自动识别高光时刻，配合爆款文案模板，视频完播率提升了40%。这个工具是内容创作者的福音。',
      author: '赵芳',
      role: '抖音百万博主',
      avatar: '👩‍🎤',
      stats: '单视频播放破千万',
    },
  ]

  const reasons = [
    '专业团队持续优化算法，确保领先的技术优势',
    '7×24小时技术支持，随时解决您的问题',
    '灵活的定价方案，满足不同规模的业务需求',
    '严格的数据安全保障，让您安心使用',
    '持续的产品迭代，不断推出新功能',
    '丰富的API接口，轻松集成现有系统',
  ]

  return (
    <section className="py-20 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/20 to-black"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="text-white">选择我们的理由</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            超过10万+创作者的共同选择，用专业服务助力您的内容创作
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 hover:border-green-500/50 transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="text-3xl mr-3">{testimonial.avatar}</div>
                <div>
                  <div className="font-semibold text-white">{testimonial.author}</div>
                  <div className="text-sm text-gray-400">{testimonial.role}</div>
                </div>
              </div>

              <p className="text-gray-300 text-sm mb-4 italic">
                "{testimonial.content}"
              </p>

              <div className="text-green-400 text-sm font-semibold">
                {testimonial.stats}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-8 md:p-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reasons.map((reason, index) => (
              <div key={index} className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-300">{reason}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}