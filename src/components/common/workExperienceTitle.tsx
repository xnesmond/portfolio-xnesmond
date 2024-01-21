import Image from 'next/image';
import type {
  IconTitle,
  WorkExperienceTitleProps,
} from '@/@types/componentsType/workExperienceTitle/type';
import BackButton from '@/components/common/backButton';
const WorkExperienceTitle = ({ title, icons }: WorkExperienceTitleProps) => {
  return (
    <div className="w-full my-5 flex flex-row mobile-work-experience-title items-center">
      <div className="-ml-24 pr-5 mobile-center">
        <BackButton />
      </div>
      <p className="text-5xl font-black text-start">{title}</p>
      <div className="flex flex-row ml-auto gap-2 mobile-center">
        {icons.map((icon: IconTitle) => (
          <div key={icon.alt} className='my-auto'>
            <Image src={icon.src} alt={icon.alt} width={65} height={65} />
          </div>
        ))}
      </div>
    </div>
  );
};
export default WorkExperienceTitle;
