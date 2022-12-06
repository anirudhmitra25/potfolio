import Head from "next/head";
import { useState, useEffect,useRef } from "react";
import Banner from "../components/Banner";
import { Skills } from "../components/Skills";
import { Projects } from "../components/Projects";
import { NavBar } from "../components/NavBar";
import { ContactMe } from "../components/ContactMe";
import {CSSTransition} from 'react-transition-group'

export default function Home() {

  const [darkMode,setDarkMode] = useState(false);
  const [bannerIn,setBannerIn] = useState(true);
  const contactMeRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null)

  const scrollToSection=(elementRef)=>{
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth"
    })
  }
  return (
    <>
      <div className={darkMode ? "dark" : ""}>
        <Head>
        <title>Anirudh Mitra</title>
      </Head>
        <main className="bg-white dark:bg-gray-900">
          {/* <section className="min-h-screen px-10 md:px-20 lg:px-40"> */}
            <NavBar contactMeRef={contactMeRef} projectsRef={projectsRef} skillsRef={skillsRef} scrollToSection={scrollToSection} setDarkMode={setDarkMode} darkMode={darkMode} />
              <Banner />
          <Skills skillsRef={skillsRef}  />
          <Projects projectsRef={projectsRef} />
          <ContactMe contactMeRef={contactMeRef} />
        </main>
      </div>
    </>
  );
}
