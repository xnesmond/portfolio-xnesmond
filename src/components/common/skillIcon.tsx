import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';
import IconDescription from './iconDescription';
import { useState } from 'react';
interface ImageProps {
  src: StaticImport;
  alt: string;
}
const SkillIcon = ({ src, alt }: ImageProps) => {
  const [descriptionVisibility, setDescriptionVisibility] =
    useState<boolean>(false);
  function showDescription() {
    setDescriptionVisibility(true);
  }
  function hideDescription() {
    setDescriptionVisibility(false);
  }
  return (
    <div onMouseEnter={showDescription} onMouseLeave={hideDescription}>
      <Image src={src} alt={alt} width={50} height={50} />
      {descriptionVisibility && (
        <div className="z-10 absolute ">
          <IconDescription description={alt} />
        </div>
      )}
    </div>
  );
};

export default SkillIcon;
