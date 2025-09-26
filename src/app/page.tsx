import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Programs from '@/components/Programs'
import Team from '@/components/Team'
import Schedule from '@/components/Schedule'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Programs />
      <Team />
      <Schedule />
      <Contact />
      <Footer />
    </div>
  );
}