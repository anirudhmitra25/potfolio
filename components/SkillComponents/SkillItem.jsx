import {useMemo,useState,useEffect} from 'react';

function SkillItem({skill,inView}){

  const [loaded,setLoaded]=useState(false);

    const {name, level, max = 10} = skill;
    const percentage = useMemo(() => Math.round((level / max) * 100), [level, max]);

    useEffect(()=>{
      if(inView){
      setLoaded(true);
      }
    },[inView])
  
    return (
      <div className="flex flex-col">
        <span className="ml-2 text-sm font-medium">{name}</span>
        <div className="h-5 w-full overflow-hidden rounded-full bg-neutral-300">
          <div className={loaded?"progress h-full rounded-full bg-orange-400":"h-full rounded-full bg-orange-400"} style={{width: `${percentage}%`}} />
        </div>
      </div>
    );
};

  export default SkillItem;