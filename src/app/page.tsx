import Header from '@/components/Header'
import Banner from '@/components/Banner'
import Hero from '@/components/Hero'
import Programs from '@/components/Programs'
import Team from '@/components/Team'
import Schedule from '@/components/Schedule'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import FloatingWhatsApp from '@/components/FloatingWhatsApp'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Banner />
      <Hero />
      <Programs />
      <Team />
      <Schedule />
      <Contact />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}