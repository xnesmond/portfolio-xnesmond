import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import ProfilePicture from '../../public/assets/svg/picture/cvPicture.svg';
import ReaactIcon from '../../public/assets/svg/icons/ReactJS-Icon.svg';
import VueIcon from '../../public/assets/svg/icons/Vue-Icon.svg';
import JavascriptIcon from '../../public/assets/svg/icons/Javascript-Icon.svg';
import TYpeScriptIcon from '../../public/assets/svg/icons/Typescript-Icon.svg';

const Welcome = () => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-row w-full my-5 mobile-paragraph">
        <div className="flex flex-col w-3/4">
          <h1 className="text-5xl mobile-subtitle font-black mb-2">
            {t('welcome')}
          </h1>
          <div className="text-xl text-justify">{t('welcomeText')}</div>
        </div>
        <div className="pl-10 flex items-center">
          <Image
            src={ProfilePicture}
            alt={'xavier nesmond'}
            width={174}
            height={186}
          />
        </div>
      </div>
      <div className="flex flex-row gap-5 px-5 ml-36 mb-5">
        <div>
          <Image
            src={ReaactIcon}
            alt={'xavier nesmond'}
            width={50}
            height={54}
          />
        </div>
        <div>
          <Image src={VueIcon} alt={'xavier nesmond'} width={50} height={54} />
        </div>
        <div>
          <Image
            src={JavascriptIcon}
            alt={'xavier nesmond'}
            width={50}
            height={54}
          />
        </div>
        <div>
          <Image
            src={TYpeScriptIcon}
            alt={'xavier nesmond'}
            width={50}
            height={54}
          />
        </div>
      </div>
    </div>
  );
};
export default Welcome;
