import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import IndustrySolutions from '@/components/IndustrySolutions'
import AIServices from '@/components/AIServices'
import ThreeEngines from '@/components/ThreeEngines'
import SuccessCases from '@/components/SuccessCases'
import Testimonials from '@/components/Testimonials'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      <HeroSection />
      <IndustrySolutions />
      <AIServices />
      <ThreeEngines />
      <SuccessCases />
      <Testimonials />
      <Footer />
    </main>
  )
}