"use client"
import { useTranslation } from "react-i18next";
import Paragraph from "@/components/common/paragraph";
import WorkExperienceTitle from "@/components/common/workExperienceTitle";
import Separator from "@/components/separator";
import BackButton from "@/components/common/backButton";
import aboutIllustration from "../../../public/assets/svg/illustrations/aboutMe.svg"

const AboutMe = () => {
    const { t } = useTranslation();
    return (
        <div className="w-full flex flex-col">
            <WorkExperienceTitle title={t("about")} icons={[]}/>
            <Separator />
            <Paragraph text={t("aboutFirstParagraph")}/>
            <Paragraph text={t("aboutSecondParagraph")}/>
            <Paragraph 
                text={t("aboutThirdParagraph")}
                photo={aboutIllustration}
                photoHeight={200}
                photoWidth={200}
                description="cloud illustration"
                paragraphView="rightIcon"/>
            <Paragraph text={t("aboutFourthParagraph")}/>
            <Paragraph text={t("aboutFifthParagraph")}/>
            <div className="mx-auto">
                <BackButton/>
            </div>
        </div>
    )
}
export default AboutMe;