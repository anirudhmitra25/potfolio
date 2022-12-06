import {memo, useMemo} from 'react';
const SkillItem= memo(({skill}) => {
    const {name, level, max = 10} = skill;
    console.log("HEREEE",skill)
    const percentage = useMemo(() => Math.round((level / max) * 100), [level, max]);
  
    return (
      <div className="flex flex-col">
        <span className="ml-2 text-sm font-medium">{name}</span>
        <div className="h-5 w-full overflow-hidden rounded-full bg-neutral-300">
          <div className="h-full rounded-full bg-orange-400" style={{width: `${percentage}%`}} />
        </div>
      </div>
    );
  });

  export default SkillItem;