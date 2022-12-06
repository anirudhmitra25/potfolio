import {FC, memo, PropsWithChildren} from 'react';
import { ImBooks } from "react-icons/im";
import { GiSkills } from "react-icons/gi";
import { MdOutlineWork } from "react-icons/md";

const ResumeSection = memo(({title, children}) => {
  return (
    <div className="grid grid-cols-1 gap-y-4 py-8 first:pt-0 last:pb-0  md:grid-cols-4">
      <div className="col-span-1 flex justify-center md:justify-start">
        <div className="relative h-max">
          <div>
          {title==="Education"?(
          <ImBooks className="w-14 h-14"/>
          ): title==="Work"?(
            <MdOutlineWork className='w-14 h-14'/>
          ):(
            <GiSkills className='w-14 h-14'/>
          )
          }
          <h2 className="text-xl font-bold uppercase text-neutral-800">{title}</h2>
          </div>
          <span className="absolute inset-x-0 -bottom-1 border-b-2 border-orange-400" />
        </div>
      </div>
      <div className="col-span-1 flex flex-col md:col-span-3">{children}</div>
    </div>
  );
});

ResumeSection.displayName = 'ResumeSection';
export default ResumeSection;