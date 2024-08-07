import FeaturedCourses from '@/components/FeaturedCourses'
import HeroSection from '@/components/HeroSection'
import MusicSchoolTestimonials from '@/components/TestimonialCards'
import UpcomingWebinars from '@/components/UpcomingWebinars'
import WhyChooseUs from '@/components/WhyChooseUs'
import Instructors from '@/components/instructors'
import React from 'react'

function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
     <HeroSection/>
     <FeaturedCourses/>
     <WhyChooseUs/>
     <MusicSchoolTestimonials/>
     <UpcomingWebinars/>
     <Instructors/>
    </main>
  )
}

export default Home