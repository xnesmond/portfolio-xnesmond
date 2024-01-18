import { useTranslation } from 'react-i18next';
import SkillsGrid from './skillsGrid';
import Separator from './separator';
const Skills = () => {
  const { t } = useTranslation();
  return (
    <div className="w-full">
      <div className="my-5">
        <h1 className="text-5xl mobile-subtitle font-black text-center">
          {t('skills')}
        </h1>
      </div>
      <div className="w-full">
        <Separator />
      </div>
      <div>
        <SkillsGrid />
      </div>
    </div>
  );
};

export default Skills;
