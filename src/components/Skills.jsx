import { SkillButton } from './SkillButton';
import skills from './skills';

export const Skills = () => {
  return (
    <div className='flex flex-col items-center mt-20'>
      <div className="flex flex-wrap gap-6 items-center justify-center">
        {skills.map((skill) => {
          return (
            <SkillButton key={skill} name={skill.name} icon={skill.icon} />
          );
        })}
      </div>
    </div>
  );
};
