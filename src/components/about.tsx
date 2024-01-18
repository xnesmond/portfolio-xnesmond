import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import Saturn from '../../public/assets/svg/illustrations/saturn.svg';
import { useRouter } from 'next/navigation';
const About = () => {
  const { t } = useTranslation();
  const router = useRouter();
  function goToAbout(){
    router.push('/aboutMe');
  }
  return (
    <div className="flex flex-row my-5">
      <div className="w-4/12 flex items-center">
        <Image src={Saturn} alt={'my world'} width={252} height={91} />
      </div>
      <div className="w-8/12 hover:shadow-xl" onClick={goToAbout} >
        <div className="text-4xl mobile-subtitle font-black">{t('about')}</div>
        <div className="text-xl">
          <p>
            {t('aboutText')}{" "}
            <a className='font-black'>{t("aboutPageLink")}</a>
          </p>
          </div>
      </div>
    </div>
  );
};
export default About;
