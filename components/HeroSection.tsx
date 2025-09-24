'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function HeroSection() {
  const videoThumbnails = [
    { id: 1, title: '大唐狄公案', type: '古装悬疑', views: '2.3M' },
    { id: 2, title: '繁花', type: '都市剧情', views: '1.8M' },
    { id: 3, title: '三体', type: '科幻', views: '3.1M' },
    { id: 4, title: '漫长的季节', type: '悬疑', views: '2.5M' },
    { id: 5, title: '去有风的地方', type: '治愈', views: '1.2M' },
    { id: 6, title: '狂飙', type: '犯罪', views: '4.2M' },
    { id: 7, title: '人世间', type: '年代', views: '2.8M' },
    { id: 8, title: '开端', type: '悬疑', views: '2.1M' },
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
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            AI解说大师
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            一键成片助力智能影视剪辑
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-green-500/50 transition-all duration-300"
          >
            试约演示
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

                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-white font-semibold text-sm mb-1">{video.title}</h3>
                  <p className="text-gray-300 text-xs flex items-center">
                    <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                      <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                    </svg>
                    {video.views}
                  </p>
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