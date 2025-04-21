import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { FeaturesSection } from "@/components/features-section"
import { ComparisonSection } from "@/components/comparison-section"
import { CommunitySection } from "@/components/community-section"
import { GallerySection } from "@/components/gallery-section"
import { MarinaServicesSection } from "@/components/marina-services-section"
import { PartnersSection } from "@/components/partners-section"
import { ContactForm } from "@/components/contact-form"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <FeaturesSection />
        <ComparisonSection />
        <MarinaServicesSection />
        <CommunitySection />
        <GallerySection />
        <PartnersSection />
        <ContactForm />
      </main>
      <Footer />
    </div>
  )
}
