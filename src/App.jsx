import { useEffect, useRef, useState } from 'react'
import './App.css'
import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills'
import Nav from './components/Nav'
import data from './data/MyData'
import { MainContext } from './components/MainContext'
import Projects from './components/Projects'
import Contact from './components/Contact'


import { useGSAP } from '@gsap/react'
import { ScrollTrigger, SplitText } from 'gsap/all'
import gsap from 'gsap'
import { Timeline } from 'gsap/gsap-core'
gsap.registerPlugin(ScrollTrigger, SplitText)


function App() {


  const [lang, setLang] = useState(localStorage.getItem('lang') || 'en')
  const [currentTheme, setCurrentTheme] = useState(localStorage.getItem('theme') || 'gray')



  useEffect(() => {
    localStorage.setItem('lang', lang)
    localStorage.setItem('theme', currentTheme)
  }, [lang, currentTheme])


  // الروابط (ids + labels حسب اللغة)
  const links = Object.entries(data.nav.links).map(([key, value]) => ({
    id: key,
    label: value[lang]
  }))

  // علشان نحدد القسم النشط
  const [activeSection, setActiveSection] = useState('')

  const hash = location.hash.slice(1)
  useEffect(() => {
    if (!hash) {
      location.hash = '#home'
    }
  }, [])


  // أول ما الصفحة تفتح يروح للـ hash لو موجود
  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.replace('#', '')
      const el = document.getElementById(id)
      if (el) {
        el.scrollIntoView({ behavior: 'instant' })
      }
    }
  }, [])

  // نستخدم IntersectionObserver نحدد السكشن النشط
  useEffect(() => {
    const sections = document.querySelectorAll('section')
    let handler
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            if (handler) clearTimeout(handler);

            handler = setTimeout(() => {
              setActiveSection(entry.target.id)
              window.location.hash = entry.target.id // يغير الهاش تلقائي
            }, 1000);
          }
        })
      },
      { threshold: 0.25 }
    )
    sections.forEach(section => observer.observe(section))
    return () => {
      observer.disconnect()
      if (handler) clearTimeout(handler)
    }

  }, [])










  return (
    <MainContext.Provider
      value={{
        data,
        links,
        lang,
        setLang,
        currentTheme,
        setCurrentTheme,
        activeSection
      }}
    >
      <main
        className={`theme-${currentTheme} h-lvh w-full overflow-y-auto snap-y snap-mandatory scroll-smooth`}
      >
        <Nav />
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </MainContext.Provider>
  )
}

export default App
