import { BsFillMoonStarsFill } from "react-icons/bs";
export const NavBar = (props) =>{
    return(
        <nav className="py-10 mb-12 flex justify-between mx-10">
            <h1 className="lg:text-xl md:text-xl sm:text-lg text-lg text-slate-500 font-mono font-semibold">{"<anirudhMitra/>"}</h1>
            <ul className="lg:flex-col md:flex-col">
              {/* <li>
                <BsFillMoonStarsFill onClick={()=>props.setDarkMode(!props.darkMode)} className="cursor-pointer" />
              </li> */}
              <li>
              <button
                  className="bg-transparent hover:bg-gradient-to-r from-cyan-500 to-teal-500 text-cyan-500 font-semibold hover:text-white py-2 px-4 border border-cyan-500 hover:border-transparent rounded-xl mx-3"
                  onClick={()=>props.scrollToSection(props.skillsRef)}
                >
                  Resume
                </button>
                <button
                  className="bg-transparent hover:bg-gradient-to-r from-cyan-500 to-teal-500 text-cyan-500 font-semibold hover:text-white py-2 px-4 border border-cyan-500 hover:border-transparent rounded-xl mx-3"
                  onClick={()=>props.scrollToSection(props.projectsRef)}
                >
                  Projects
                </button>
                <button
                  className="bg-transparent hover:bg-gradient-to-r from-cyan-500 to-teal-500 text-cyan-500 font-semibold hover:text-white py-2 px-4 border border-cyan-500 hover:border-transparent rounded-xl mx-3"
                  onClick={()=>props.scrollToSection(props.contactMeRef)}
                >
                  Contact me
                </button>
              </li>
            </ul>
          </nav>
    )
}