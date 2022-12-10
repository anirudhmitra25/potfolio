import { useState, useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";

export const NavBar = (props) => {
  const [menu, setMenu] = useState(false);

  const [screenWidth, setScreenWidth] = useState();

  useEffect(() => {
    setScreenWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => {
        setScreenWidth(window.innerWidth);
      },
      false
    );
  }, []);

  return (
    <nav className="pt-10 flex justify-between mx-10">
      <h1 className="lg:text-xl md:text-xl sm:text-lg text-lg text-slate-500 font-mono font-semibold">
        {"<anirudhMitra/>"}
      </h1>
      {screenWidth < 800 ? (
        <div className="flex flex-col gap-y-4 items-end">
          <AiOutlineMenu
            className="text-xl text-right  hover:transition duration-300 ease-in-out hover:scale-125 cursor-pointer"
            onClick={() => setMenu(!menu)}
          />
          {menu && (
            <div className="flex flex-col gap-y-4 ">
              <button
                className="font-semibold hover:text-slate-400 px-4 hover:transition duration-300 ease-in-out hover:scale-125"
                onClick={() => props.scrollToSection(props.skillsRef)}
              >
                Resume
              </button>
              <button
                className="font-semibold hover:text-slate-400 px-4 hover:transition duration-300 ease-in-out hover:scale-125"
                onClick={() => props.scrollToSection(props.projectsRef)}
              >
                Projects
              </button>
              <button
                className="font-semibold hover:text-slate-400 px-4 hover:transition duration-300 ease-in-out hover:scale-125"
                onClick={() => props.scrollToSection(props.contactMeRef)}
              >
                Contact me
              </button>
            </div>
          )}
        </div>
      ) : (
        <div className="flex md:flex-row">
          <button
            className="bg-transparent hover:transition duration-300 ease-in-out hover:scale-125 bg-transparent hover:bg-gradient-to-r from-cyan-500 to-teal-500 text-cyan-500 font-semibold hover:text-white py-2 px-4 border border-cyan-500 hover:transition duration-800 border-transparent rounded-xl mx-3 "
            onClick={() => props.scrollToSection(props.skillsRef)}
          >
            Resume
          </button>
          <button
            className="bg-transparent hover:transition duration-300 ease-in-out hover:scale-125 bg-transparent hover:bg-gradient-to-r from-cyan-500 to-teal-500 text-cyan-500 font-semibold hover:text-white py-2 px-4 border border-cyan-500 hover:transition duration-800 border-transparent rounded-xl mx-3"
            onClick={() => props.scrollToSection(props.projectsRef)}
          >
            Projects
          </button>
          <button
            className="bg-transparent hover:transition duration-300 ease-in-out hover:scale-125 bg-transparent hover:bg-gradient-to-r from-cyan-500 to-teal-500 text-cyan-500 font-semibold hover:text-white py-2 px-4 border border-cyan-500 hover:transition duration-800 border-transparent rounded-xl mx-3"
            onClick={() => props.scrollToSection(props.contactMeRef)}
          >
            Contact me
          </button>
        </div>
      )}
    </nav>
  );
};
