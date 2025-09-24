import NavbarV2 from '@/components/NavbarV2'
import HeroSectionV2 from '@/components/HeroSectionV2'
import FourServices from '@/components/FourServices'
import AIAgentFamily from '@/components/AIAgentFamily'
import ThreeEngines from '@/components/ThreeEngines'
import SuccessCases from '@/components/SuccessCases'
import TestimonialsScroll from '@/components/TestimonialsScroll'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <NavbarV2 />
      <HeroSectionV2 />
      <FourServices />
      <AIAgentFamily />
      <ThreeEngines />
      <SuccessCases />
      <TestimonialsScroll />
      <Footer />
    </main>
  )
}