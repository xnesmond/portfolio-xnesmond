'use client';
import { useTranslation } from 'react-i18next';

const Title = () => {
  const { t } = useTranslation();
  return (
    <div className="m-5">
      <h1 className="text-7xl font-black mobile-title">{t('title')}</h1>
    </div>
  );
};
export default Title;
