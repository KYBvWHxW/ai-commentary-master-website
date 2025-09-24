'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    产品: [
      { name: '功能介绍', href: '#' },
      { name: '价格方案', href: '#' },
      { name: 'API文档', href: '#' },
      { name: '更新日志', href: '#' },
    ],
    关于: [
      { name: '关于我们', href: '#' },
      { name: '联系我们', href: '#' },
      { name: '加入我们', href: '#' },
      { name: '媒体报道', href: '#' },
    ],
    支持: [
      { name: '帮助中心', href: '#' },
      { name: '常见问题', href: '#' },
      { name: '服务条款', href: '#' },
      { name: '隐私政策', href: '#' },
    ],
    联系方式: [
      { name: '商务合作：bd@aimaster.com', href: 'mailto:bd@aimaster.com' },
      { name: '技术支持：support@aimaster.com', href: 'mailto:support@aimaster.com' },
      { name: '客服热线：400-888-9999', href: 'tel:400-888-9999' },
      { name: '工作时间：9:00-21:00', href: '#' },
    ],
  }

  return (
    <footer className="bg-black border-t border-gray-800 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-emerald-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">AI</span>
              </div>
              <span className="text-white font-semibold text-lg">AI解说大师</span>
            </Link>
            <p className="text-gray-400 text-sm mb-4">
              专业的AI智能解说平台，助力内容创作者提升效率
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z"/>
                </svg>
              </a>
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-white font-semibold mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-green-400 transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} AI解说大师. All rights reserved.
            </p>
            <div className="flex items-center space-x-4">
              <img
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 120 40'%3E%3Crect width='120' height='40' rx='4' fill='%23333'/%3E%3Ctext x='60' y='25' text-anchor='middle' fill='%23999' font-size='12' font-family='monospace'%3E扫码关注%3C/text%3E%3C/svg%3E"
                alt="QR Code"
                className="w-24 h-8 opacity-50"
              />
              <img
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 120 40'%3E%3Crect width='120' height='40' rx='4' fill='%23333'/%3E%3Ctext x='60' y='25' text-anchor='middle' fill='%23999' font-size='12' font-family='monospace'%3E下载APP%3C/text%3E%3C/svg%3E"
                alt="Download App"
                className="w-24 h-8 opacity-50"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}