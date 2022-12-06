import { FaReact, FaNode } from "react-icons/fa";
import { SiJavascript, SiReduxsaga } from "react-icons/si";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";
import { useState } from "react";
import { AiFillPropertySafety } from "react-icons/ai";
import { projectItems } from "../data/data";

export const Projects = (props) => {

  return (
    <div ref={props.projectsRef} className="mt-20">
      <div className="text-center px-4">
        <h1 className="text-3xl font-semibold">My Recent Projects</h1>
        <p className='text-xl mt-4'>Here are a few past projects I've worked on.</p>
      </div>
      <div className="grid lg:grid-cols-2 lg:gap-4 md:grid-cols-2 md:gap-4 mt-10" >
        {projectItems.map((item) => (     
                <div className="img-wrapper px-4 mt-5">
              <Image class="my-blur rounded-2xl" src={item.project}/>
              <div className="project-content fade text-slate-50 mx-auto text-center my-3">
                <p className="md:text-lg text-sm px-5 font-semibold">{item.description}</p>
                <div className="w-3/5 h-3/5 mx-auto">
                  <button onClick={()=>{
                     window.open(item.source,'_blank','noopener,noreferrer')
                  }} className="mx-5 text-sm bg-transparent hover:bg-indigo-900 text-white font-semibold hover:text-white py-2 px-4 border-2 border-blue-500 hover:border-transparent rounded-3xl">Source Code</button>
                  <button onClick={()=>{
                     window.open(item.preview,'_blank','noopener,noreferrer')
                  }} className="mx-5 text-sm bg-transparent hover:bg-indigo-900 text-white font-semibold hover:text-white py-2 px-4 border-2 border-blue-500 hover:border-transparent rounded-3xl">Preview</button>
                </div>
                </div>
                </div>
            
          )
        )}
      </div>
      {/* </Carousel> */}
      {/* </div> */}
    </div>
  );
};
