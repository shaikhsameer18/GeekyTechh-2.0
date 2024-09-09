'use client'

import { useState, useEffect } from 'react'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import ServicesSection from './components/ServicesSection'
import SkillsSection from './components/SkillsSection'
import ProjectsSection from './components/ProjectsSection'
import TeamSection from './components/TeamSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'
// import CursorTrail from './components/CursorTrail'
import Preloader from './components/Preloader'

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 3500) // Set this slightly longer than the Preloader's duration

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <Preloader />
      {!isLoading && (
        <main className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
          {/* <CursorTrail /> */}
          <Header />
          <HeroSection />
          <ServicesSection />
          <SkillsSection />
          <ProjectsSection />
          <TeamSection />
          <ContactSection />
          <Footer />
        </main>
      )}
    </>
  )
}