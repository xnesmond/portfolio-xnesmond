import Image from 'next/image';
import MailIcon from '../../../public/assets/svg/plugins/mail.svg';
import LinkedinIcon from '../../../public/assets/svg/plugins/linkedin.svg';
import { useTranslation } from 'react-i18next';

const ContactPlugins = () => {
  const { t } = useTranslation();
  const mail: string = 'xavier.nesmond@gmail.com';
  const linkedin: string = 'www.linkedin.com/in/xavier-nesmond-80801718b';
  function copyToClipboard(textToCopy: string) {
    navigator.clipboard.writeText(textToCopy);
    alert(`${t('copiedToClipboard')} ${textToCopy}`);
  }
  return (
    <div className="flex flex-row gap-2 justify-end w-full">
      <div className="hover:shadow-xl">
        <Image
          src={MailIcon}
          alt={'mail'}
          onClick={() => copyToClipboard(mail)}
        />
      </div>
      <div className="hover:shadow-xl">
        <Image
          src={LinkedinIcon}
          alt={'linkedin'}
          onClick={() => copyToClipboard(linkedin)}
        />
      </div>
    </div>
  );
};

export default ContactPlugins;
