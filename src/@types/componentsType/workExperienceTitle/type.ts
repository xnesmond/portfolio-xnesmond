import { StaticImport } from 'next/dist/shared/lib/get-img-props';

type IconTitle = {
  src: StaticImport;
  alt: string;
};
type WorkExperienceTitleProps = {
  title: string;
  icons: IconTitle[];
};

export type { IconTitle, WorkExperienceTitleProps };
