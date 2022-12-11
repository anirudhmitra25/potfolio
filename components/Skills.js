// import webDev from '../public/webDev.png'
import webdev from "../public/webdev.png";
import Image from "next/image";
import ResumeSection from "./SkillComponents/ResumeSection";
import TimelineItem from "./SkillComponents/TimelineItem";
import SkillItem from "./SkillComponents/SkillItem";
import { education, experience, skills } from "../data/data";
import me from "../public/me.png";
import { useInView } from "react-intersection-observer";

const line_1 = " Since beginning my journey as a Software Developer 1.5 years ago,";
const line_2="I've had the oppurtunity to work with Startups as well as MNCs, collaborated";
const line_3="with alot of smart people to create products for both buisness and commercial use.";
const line_4="I'm quietly confident, naturally curious, and perpetually working on";

export const Skills = (props) => {
  const [ref, inView, entry] = useInView({
    /* Optional options */
    threshold: 0,
  });
  return (
    <div ref={props.skillsRef}>
      <section
        className="pb-4 bg-gradient-to-r from-teal-400 to-cyan-700 text-center sm:py-4"
        id="skills"
      >
        <div className="text-center pt-10 pb-20 mb-32 lg:flex md:flex px-10">
          <div className="mx-auto rounded-full relative overflow-hidden lg:h-72 lg:w-72 md:h-72 md:w-72 sm:h-40 sm:w-40 h-40 w-40">
            <Image src={me} layout="fill" objectFit="cover" />
          </div>
          <div className="mx-auto">
            <h2 className="text-white md:text-4xl lg:text-4xl font-semibold pt-2 text-3xl pb-3">
              Hi, nice to meet you
            </h2>
            <p className="text-white md:text-lg lg:text-lg font-semibold sm:text-md text-md">
             {line_1}
              <br></br>
              {line_2}
              <br></br>
              {line_3}
              <br></br> 
              {line_4}
              <br></br>
              improving my chops one problem at a time.
            </p>
          </div>
        </div>
      </section>
      <section className="px-4 py-16 md:py-24 lg:px-8 -mt-28 rounded-xl mx-10 bg-neutral-50 shadow-md">
        <div className="flex flex-col divide-y-2 divide-neutral-300">
          <ResumeSection title="Education">
            {education.map((item, index) => (
              <TimelineItem item={item} key={`${item.title}-${index}`} />
            ))}
          </ResumeSection>
          <ResumeSection title="Work">
            {experience.map((item, index) => (
              <TimelineItem item={item} key={`${item.title}-${index}`} />
            ))}
          </ResumeSection>
          <ResumeSection title="Skills">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2" ref={ref}>
              {skills.map((skillgroup, index) => (
                <div className="flex flex-col" key={index}>
                  <span className="text-center text-lg font-bold">
                    {skillgroup.name}
                  </span>
                  <div className="flex flex-col gap-y-2">
                    {skillgroup.skills.map((item,index) => (
                      <SkillItem key={index} skill={item} inView={inView} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </ResumeSection>
        </div>
      </section>
    </div>
  );
};
