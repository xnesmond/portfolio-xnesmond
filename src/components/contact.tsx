import { useTranslation } from 'react-i18next';
import ContactPlugins from './common/contactPlugins';

const Contact = () => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-row w-full my-5 items-center">
      <div className="ml-0 w-8/12">
        <h1 className="text-5xl mobile-subtitle font-black text-start">{t('contact')}</h1>
      </div>
      <div className="w-4/12 ">
        <ContactPlugins />
      </div>
    </div>
  );
};
export default Contact;
