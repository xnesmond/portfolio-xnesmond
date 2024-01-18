'use client';
import Separator from '@/components/separator';
import { useTranslation } from 'react-i18next';
import NextIcon from '../../../../public/assets/svg/icons/Next-Icon.svg';
import AwsIcon from '../../../../public/assets/svg/icons/Aws-Icon.svg';
import JavascriptIcon from '../../../../public/assets/svg/icons/Javascript-Icon.svg';
import ReactIcon from '../../../../public/assets/svg/icons/React-Icon.svg';
import CicdIllustration from '../../../../public/assets/svg/illustrations/cicd.svg';
import ReworkIllustration from '../../../../public/assets/svg/illustrations/applicationRework.svg';
import '../../../i18n/config';
import Paragraph from '@/components/common/paragraph';
import WorkExperienceTitle from '@/components/common/workExperienceTitle';
import type {IconTitle } from '@/@types/componentsType/workExperienceTitle/type';
import BackButton from '@/components/common/backButton';

const FinalInternship = () => {
  const { t } = useTranslation();
  const icons: IconTitle[]  = [
    {
        src: NextIcon,
        alt: ""
    },
    {
        src: ReactIcon,
        alt: ""
    },
    {
        src: AwsIcon,
        alt: ""
    },
    {
        src: JavascriptIcon,
        alt: ""
    }
]
  return (
    <div className="w-full flex flex-col">
      <WorkExperienceTitle title={t('finalIntershipTitle')} icons={icons}/>
      <Separator />
      <Paragraph text="" />
      <Paragraph
        text={t('finalIntershipFirstParagraph')}
        photo={ReworkIllustration}
        photoHeight={124}
        photoWidth={124}
        description="sapphire illustration"
        paragraphView="rightIcon"
      />
      <Paragraph text={t('finalIntershipSecondParagraph')} />
      <Paragraph text={t('finalIntershipSecondBParagraph')} />
      <Paragraph text={t('finalIntershipThirdParagraph')} />
      <Paragraph text={t('finalIntershipFourthParagraph')} />
      <Paragraph text={t('finalIntershipFifthParagraph')} />
      <Paragraph
        text={t('finalIntershipSixthParagraph')}
        photo={CicdIllustration}
        photoHeight={124}
        photoWidth={124}
        description="cloud illustration"
        paragraphView="leftIcon"
      />
      <Paragraph text={t('finalIntershipSeventhParagraph')} />
      <Paragraph text={t('finalIntershipEighthParagraph')} />
      <div className='mx-auto'>
        <BackButton/>
      </div>
    </div>
  );
};

export default FinalInternship;
