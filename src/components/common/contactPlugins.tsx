import Image from 'next/image';
import MailIcon from '../../../public/assets/svg/plugins/mail.svg';
import LinkedinIcon from '../../../public/assets/svg/plugins/linkedin.svg';
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/navigation';

const ContactPlugins = () => {
  const { t } = useTranslation();
  const router = useRouter();
  const mail: string = 'xavier.nesmond@gmail.com';
  const linkedin: string = 'https://www.linkedin.com/in/xavier-nesmond-80801718b';
  function copyToClipboard(textToCopy: string) {
    navigator.clipboard.writeText(textToCopy);
    alert(`${t('copiedToClipboard')} ${textToCopy}`);
  }
  function goToLinkedin(){
    router.push(linkedin);
  }
  return (
    <div className="flex flex-row gap-2 justify-end w-full">
      <div className="hover:shadow-xl cursor-pointer">
        <Image
          src={MailIcon}
          alt={'mail'}
          onClick={() => copyToClipboard(mail)}
        />
      </div>
      <div className="hover:shadow-xl cursor-pointer">
        <Image
          src={LinkedinIcon}
          alt={'linkedin'}
          onClick={goToLinkedin}
        />
      </div>
    </div>
  );
};

export default ContactPlugins;
