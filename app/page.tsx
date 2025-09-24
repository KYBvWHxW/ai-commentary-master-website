import NavbarV2 from '@/components/NavbarV2'
import HeroLanhu from '@/components/HeroLanhu'
import FourServices from '@/components/FourServices'
import AIAgentFamily from '@/components/AIAgentFamily'
import ThreeEnginesLanhu from '@/components/ThreeEnginesLanhu'
import SuccessCases from '@/components/SuccessCases'
import TestimonialsScroll from '@/components/TestimonialsScroll'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <NavbarV2 />
      <HeroLanhu />
      <FourServices />
      <AIAgentFamily />
      <ThreeEnginesLanhu />
      <SuccessCases />
      <TestimonialsScroll />
      <Footer />
    </main>
  )
}