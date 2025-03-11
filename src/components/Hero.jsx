'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { FlipWords } from './ui/flip-words'
import { ArrowRight, Link, Mail } from 'lucide-react'
import AnimatedShinyText from './ui/animated-shiny-text'
import Lottie from 'lottie-react' // Import Lottie
import modernCharacterAnimation from '../../public/animation/modern-character.json.json' // Import your Lottie JSON file

gsap.registerPlugin(ScrollTrigger)

export default function Hero() {
  const heroRef = useRef(null)

  useEffect(() => {
    const hero = heroRef.current

    gsap.fromTo(
      hero.querySelector('.hero-title'),
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
    )

    gsap.fromTo(
      hero.querySelector('.hero-subtitle'),
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        delay: 0.3,
      }
    )

    gsap.fromTo(
      hero.querySelector('.cta-buttons'),
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        delay: 0.6,
      }
    )

    gsap.fromTo(
      hero.querySelector('.hero-animation'),
      { scale: 0.8, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1.2, ease: 'elastic.out(1, 0.5)' }
    )
  }, [])

  const words = ['creative', 'interactive', 'beautiful', 'modern']

  return (
    <div ref={heroRef} className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div className="container relative z-10 mx-auto px-4 py-24 sm:px-6 lg:px-8">
        <motion.div className="max-w-4xl mx-auto">
          <motion.div className="space-y-8">
            <div className="space-y-4">
              <motion.div className="inline-block px-4 py-1.5 rounded-full bg-green-300/50 text-primary text-sm font-medium">
                🎉 | Available for freelance work
              </motion.div>

              <h1 className="hero-title text-4xl font-bold text-primary sm:text-5xl lg:text-6xl">
                Hi, I&apos;m Nilay patel.
                <AnimatedShinyText text="Nilay Patel" className="text-green-300" />
                
              </h1>

              <div className="hero-subtitle text-2xl sm:text-3xl lg:text-4xl text-black font-medium">
                I build{' '}
                <FlipWords
                  className="bg-gradient-to-r from-green-500 to-green-400 text-white px-4 py-2 rounded-xl shadow-lg"
                  words={words}
                />{' '}
                <span className="block sm:inline text-black">websites and apps</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="cta-buttons mt-8 flex space-x-4">
              <a href='/contact'>

              <Button className="px-6 py-3 text-lg font-semibold bg-green-500 hover:bg-green-600 transition-all flex items-center gap-2">
                Contact Me <Mail size={18} />
              </Button>
              </a>
              <a href='/projects'>
              <Button variant="outline" className="px-6 py-3 text-lg font-semibold flex items-center gap-2">
                See My projects <ArrowRight size={18} />
              </Button>
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Lottie Animation */}
      <div className="hero-animation absolute right-10 top-32 w-[400px] max-w-full">
        <Lottie animationData={modernCharacterAnimation} loop={true} />
      </div>
    </div>
  )
}