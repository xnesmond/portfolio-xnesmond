'use client';
import Separator from '@/components/separator';
import { useTranslation } from 'react-i18next';
import NextIcon from '../../../../public/assets/svg/icons/Next-Icon.svg';
import AwsIcon from '../../../../public/assets/svg/icons/Aws-Icon.svg';
import JavascriptIcon from '../../../../public/assets/svg/icons/Javascript-Icon.svg';
import ReactIcon from '../../../../public/assets/svg/icons/React-Icon.svg';
import SapphireIllustration from '../../../../public/assets/svg/illustrations/sapphire.svg';
import CloudIllustration from '../../../../public/assets/svg/illustrations/cloud.svg';
import '../../../i18n/config';
import Paragraph from '@/components/common/paragraph';
import WorkExperienceTitle from '@/components/common/workExperienceTitle';
import type { IconTitle } from '@/@types/componentsType/workExperienceTitle/type';
import BackButton from '@/components/common/backButton';

const SapphireSpace = () => {
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
  const { t } = useTranslation();
  return (
    <div className="w-full flex flex-col">
      <WorkExperienceTitle title={t("sapphireSpaceTitle")} icons={icons}/>
      <Separator />
      <Paragraph
        text={t('sapphireSpaceFirstParagraph')}
        photo={SapphireIllustration}
        photoHeight={124}
        photoWidth={124}
        description="sapphire illustration"
        paragraphView="rightIcon"
      />
      <Paragraph text={t('sapphireSpaceSecondParagraph')} />
      <Paragraph text={t('sapphireSpaceThirdParagraph')} />
      <Paragraph
        text={t('sapphireSpaceFourthParagraph')}
        photo={CloudIllustration}
        photoHeight={124}
        photoWidth={124}
        description="cloud illustration"
        paragraphView="leftIcon"
      />
      <Paragraph text={t('sapphireSpaceFifthParagraph')} />
      <div className='mx-auto'>
        <BackButton/>
      </div>
    </div>
  );
};

export default SapphireSpace;
