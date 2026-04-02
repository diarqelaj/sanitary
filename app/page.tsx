import { Navbar } from '@/components/Navbar'
import { Hero } from '@/components/Hero'
import { Services } from '@/components/Services'
import { WhyUs } from '@/components/WhyUs'
import { ContactSection } from '@/components/ContactSection'
import { Footer } from '@/components/Footer'

export default function HomePage() {
  return (
    <>
    
      <main>
        <Hero />
        <Services />
        <WhyUs />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
