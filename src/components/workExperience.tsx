import { useTranslation } from 'react-i18next';
import Separator from './separator';
import { useRouter } from 'next/navigation';

const WorkExperience = () => {
  const { t } = useTranslation();
  const router = useRouter();
  function goToWorkExperiencePage(workExperience: string) {
    router.push(`/workExperience/${workExperience}`);
  }
  return (
    <div className="flex flex-col w-full my-2">
      <div className="my-5">
        <h1 className="text-5xl mobile-subtitle font-black text-center">
          {t('workExperience')}
        </h1>
      </div>
      <Separator />
      <div className="flex flex-row gap-2 mobile-work-experience-title">
        <div className="flex flex-col w-4/12 mobile-work-experience-section-width">
          <div>
            <h2 className="text-2xl font-black my-2 break-words">
              {t('sapphireSpaceTitle')}
            </h2>
          </div>
          <div
            onClick={() => goToWorkExperiencePage('sapphireSpace')}
            className="hover:shadow-xl"
          >
            <p>
              {t('sapphireSpaceResume')}{' '}
              <a className="font-black">{t('sapphireSpaceResumeLink')}</a>
            </p>
          </div>
        </div>
        <div className="flex flex-col w-4/12 mobile-work-experience-section-width">
          <div>
            <h2 className="text-2xl font-black my-2 break-words">
              {t('colibriSOPTitle')}
            </h2>
          </div>
          <div
            onClick={() => goToWorkExperiencePage('colibriSOP')}
            className="hover:shadow-xl"
          >
            <p>
              {t('colibriSOPText')}{' '}
              <a className="font-black">{t('colibriSOPLink')}</a>
            </p>
          </div>
        </div>
        <div className="flex flex-col w-4/12 mobile-work-experience-section-width">
          <div>
            <h2 className="text-2xl font-black my-2 break-words">
              {t('finalIntershipTitle')}
            </h2>
          </div>
          <div
            onClick={() => goToWorkExperiencePage('finalInternship')}
            className="hover:shadow-xl"
          >
            <p>
              {t('finalInternshipResume')}{' '}
              <a className="font-black">{t('finalInternshipResumeLink')}</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default WorkExperience;
