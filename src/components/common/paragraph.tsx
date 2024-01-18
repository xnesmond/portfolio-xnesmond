import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';

export interface ParagraphProps {
  text: string;
  photo?: StaticImport;
  description?: string;
  photoHeight?: number;
  photoWidth?: number;
  paragraphView?: string;
}
export interface ParagraphPropsWithIcon {
  text: string;
  photo: StaticImport;
  photoHeight: number;
  photoWidth: number;
  description: string;
}
export interface ParagraphPropsWithoutIcon {
  text: string;
}
const ParagraphWithNoPhoto = ({ text }: ParagraphPropsWithoutIcon) => {
  return <div className="text-xl my-2 text-justify">{text}</div>;
};
const ParagraphWithRightIcon = ({
  text,
  photo,
  photoHeight,
  photoWidth,
  description,
}: ParagraphPropsWithIcon) => {
  return (
    <div className="flex flex-row w-full items-center">
      <div className="text-xl my-2 text-justify w-10/12">{text}</div>
      <div className="mx-auto px-4">
        <Image
          src={photo}
          alt={description}
          height={photoHeight}
          width={photoWidth}
        />
      </div>
    </div>
  );
};
const ParagraphWithLeftIcon = ({
  text,
  photo,
  photoHeight,
  photoWidth,
  description,
}: ParagraphPropsWithIcon) => {
  return (
    <div className="flex flex-row w-full items-center">
      <div className="px-2">
        <Image
          src={photo}
          alt={description}
          height={photoHeight}
          width={photoWidth}
        />
      </div>
      <div className="text-xl my-2 text-justify w-10/12">{text}</div>
    </div>
  );
};
const Paragraph = ({
  text,
  photo,
  description,
  photoHeight,
  photoWidth,
  paragraphView,
}: ParagraphProps) => {
  let ParagraphComponent: JSX.Element = <div></div>;
  switch (paragraphView) {
    case 'rightIcon':
      if (photo && description && photoHeight && photoWidth) {
        ParagraphComponent = (
          <ParagraphWithRightIcon
            text={text}
            photo={photo}
            photoHeight={photoHeight}
            photoWidth={photoWidth}
            description={description}
          />
        );
      }
      break;

    case 'leftIcon':
      if (photo && description && photoHeight && photoWidth) {
        ParagraphComponent = (
          <ParagraphWithLeftIcon
            text={text}
            photo={photo}
            photoHeight={photoHeight}
            photoWidth={photoWidth}
            description={description}
          />
        );
      }
      break;

    default:
      ParagraphComponent = <ParagraphWithNoPhoto text={text} />;
      break;
  }

  return ParagraphComponent;
};
export default Paragraph;
