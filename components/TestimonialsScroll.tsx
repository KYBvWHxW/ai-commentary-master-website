'use client'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState } from 'react'
import { TESTIMONIALS } from '@/constants/links'

export default function TestimonialsScroll() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [isPaused, setIsPaused] = useState(false)

  // 复制数组以实现无缝循环
  const testimonialsList = [...TESTIMONIALS, ...TESTIMONIALS]

  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
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
            <span className="text-green-400 text-sm font-medium">TESTIMONIALS</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="text-white">选择我们的理由</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            来自全球创作者的真实反馈，见证AI解说大师的强大能力
          </p>
        </motion.div>

        {/* 滚动容器 */}
        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* 左侧渐变遮罩 */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-900 to-transparent z-10 pointer-events-none"></div>

          {/* 右侧渐变遮罩 */}
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-900 to-transparent z-10 pointer-events-none"></div>

          {/* 第一行：从右到左 */}
          <div className="overflow-hidden mb-6">
            <motion.div
              className="flex gap-6"
              animate={{
                x: isPaused ? 0 : '-50%',
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: 'loop',
                  duration: 40,
                  ease: 'linear',
                },
              }}
            >
              {testimonialsList.slice(0, 20).map((testimonial, index) => (
                <TestimonialCard key={`row1-${index}`} testimonial={testimonial} />
              ))}
            </motion.div>
          </div>

          {/* 第二行：从左到右 */}
          <div className="overflow-hidden">
            <motion.div
              className="flex gap-6"
              initial={{ x: '-50%' }}
              animate={{
                x: isPaused ? '-50%' : '0%',
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: 'loop',
                  duration: 45,
                  ease: 'linear',
                },
              }}
            >
              {testimonialsList.slice(10, 30).map((testimonial, index) => (
                <TestimonialCard key={`row2-${index}`} testimonial={testimonial} />
              ))}
            </motion.div>
          </div>
        </div>

        {/* CTA 区域 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-400 mb-6">加入10万+创作者的选择</p>
          <button className="inline-flex items-center px-8 py-4 text-lg font-medium text-white bg-gradient-to-r from-green-500 to-emerald-600 rounded-full shadow-xl hover:shadow-green-500/50 hover:scale-105 transition-all duration-300">
            立即开始使用
            <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </motion.div>
      </div>
    </section>
  )
}

// 评价卡片组件
function TestimonialCard({ testimonial }: { testimonial: typeof TESTIMONIALS[0] }) {
  return (
    <div className="flex-shrink-0 w-80 bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-6 border border-gray-700 hover:border-green-500/50 transition-all duration-300">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h4 className="text-white font-semibold">{testimonial.name}</h4>
          <p className="text-green-400 text-sm">{testimonial.title}</p>
        </div>
        <div className="text-yellow-400">
          {'★★★★★'}
        </div>
      </div>
      <p className="text-gray-300 text-sm leading-relaxed">
        "{testimonial.content}"
      </p>
    </div>
  )
}