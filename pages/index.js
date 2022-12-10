import Head from "next/head";
import { useState, useRef } from "react";
import Banner from "../components/Banner";
import { Skills } from "../components/Skills";
import { Projects } from "../components/Projects";
import { NavBar } from "../components/NavBar";
import { ContactMe } from "../components/ContactMe";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const contactMeRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };
  return (
    <>
      <div className={darkMode ? "dark" : ""}>
        <Head>
          <title>Anirudh Mitra</title>
        </Head>
        <main className="">
          <NavBar
            contactMeRef={contactMeRef}
            projectsRef={projectsRef}
            skillsRef={skillsRef}
            scrollToSection={scrollToSection}
            setDarkMode={setDarkMode}
            darkMode={darkMode}
          />
          <Banner />
          <Skills skillsRef={skillsRef} />
          <Projects projectsRef={projectsRef} />
          <ContactMe contactMeRef={contactMeRef} />
        </main>
      </div>
    </>
  );
}
