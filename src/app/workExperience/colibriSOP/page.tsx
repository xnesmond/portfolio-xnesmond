'use client';
import Separator from '@/components/separator';
import { useTranslation } from 'react-i18next';
import VueIcon from '../../../../public/assets/svg/icons/Vue-Icon.svg';
import KendoUIIcon from '../../../../public/assets/svg/icons/KendoUI-Icon.svg';
import JavascriptIcon from '../../../../public/assets/svg/icons/Javascript-Icon.svg';
import '@/i18n/config';
import Paragraph from '@/components/common/paragraph';
import WorkExperienceTitle from '@/components/common/workExperienceTitle';
import type {IconTitle } from '@/@types/componentsType/workExperienceTitle/type';
import BackButton from '@/components/common/backButton';

const ColibriSOP = () => {
  const { t } = useTranslation();
  const icons: IconTitle[]  = [
    {
        src: VueIcon,
        alt: ""
    },
    {
      src: JavascriptIcon,
      alt: ""
    },
    {
        src: KendoUIIcon,
        alt: ""
    },
  ]
  return (
    <div className="w-full flex flex-col">
      <WorkExperienceTitle title={t('colibriSOPTitle')} icons={icons}/>
      <Separator />
      <Paragraph text={t("colibriSOPFirstParagraph")}/>
      <Paragraph text={t('colibriSOPSecondParagraph')} />
      <div className='mx-auto'>
        <BackButton/>
      </div>
    </div>
  );
};

export default ColibriSOP;
