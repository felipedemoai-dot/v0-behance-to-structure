import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { BrandMarquee } from '@/components/brand-marquee'
import { WorkSection } from '@/components/work-section'
import { ServicesSection } from '@/components/services-section'
import { AboutSection } from '@/components/about-section'
import { ContactSection } from '@/components/contact-section'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <BrandMarquee />
        <WorkSection />
        <ServicesSection />
        <AboutSection />
        <ContactSection />
      </main>
    </>
  )
}
