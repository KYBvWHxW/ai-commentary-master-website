'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function HeroSection() {
  const videoThumbnails = [
    { id: 1, title: '大唐狄公案', type: '古装悬疑', duration: '解说时长 12:30', image: '/thumb1.jpg' },
    { id: 2, title: '繁花', type: '都市剧情', duration: '解说时长 15:20', image: '/thumb2.jpg' },
    { id: 3, title: '三体', type: '科幻巨制', duration: '解说时长 18:45', image: '/thumb3.jpg' },
    { id: 4, title: '漫长的季节', type: '悬疑推理', duration: '解说时长 14:10', image: '/thumb4.jpg' },
    { id: 5, title: '去有风的地方', type: '治愈田园', duration: '解说时长 11:25', image: '/thumb5.jpg' },
    { id: 6, title: '狂飙', type: '犯罪动作', duration: '解说时长 16:30', image: '/thumb6.jpg' },
    { id: 7, title: '人世间', type: '年代史诗', duration: '解说时长 20:15', image: '/thumb7.jpg' },
    { id: 8, title: '开端', type: '循环悬疑', duration: '解说时长 13:50', image: '/thumb8.jpg' },
  ]

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>

      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-500/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-6xl lg:text-8xl font-bold text-white mb-6 tracking-tight">
            AI解说大师
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl text-gray-200 mb-10 font-light">
            一键成片助力智能影视剪辑
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-10 py-4 rounded-full text-lg font-semibold shadow-2xl hover:shadow-green-500/50 transition-all duration-300 hover:from-green-400 hover:to-emerald-500"
          >
            预约演示
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto"
        >
          {videoThumbnails.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group cursor-pointer"
            >
              <div className="aspect-[3/4] rounded-lg overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 shadow-xl group-hover:shadow-2xl transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>

                <div className="absolute top-2 right-2 bg-red-600 text-white text-xs px-2 py-1 rounded-md font-semibold">
                  {video.type}
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/90 via-black/60 to-transparent">
                  <h3 className="text-white font-bold text-sm mb-1 line-clamp-1">{video.title}</h3>
                  <p className="text-green-400 text-xs opacity-90">
                    {video.duration}
                  </p>
                </div>

                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-16 h-16 bg-green-500/90 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                    </svg>
                  </div>
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-green-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}