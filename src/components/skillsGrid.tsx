import SkillIcon from './common/skillIcon';
import KendoUIIcon from '../../public/assets/svg/icons/KendoUI-Icon.svg';
import GitLabIcon from '../../public/assets/svg/icons/Gitlab-Icon.svg';
import VuetifyIcon from '../../public/assets/svg/icons/Vuetify-Icon.svg';
import FireBaseIcon from '../../public/assets/svg/icons/Firebase-Icon.svg';
import EslintrcIcon from '../../public/assets/svg/icons/Eslintrc-Icon.svg';
import NginxIcon from '../../public/assets/svg/icons/Nginx-Icon.svg';
import NextIcon from '../../public/assets/svg/icons/Next-Icon.svg';
import GitHubIcon from '../../public/assets/svg/icons/GitHub-Icon.svg';
import VisualStudioIcon from '../../public/assets/svg/icons/VisualStudio-Icon.svg';
import SonarQubeIcon from '../../public/assets/svg/icons/Sonarqube-Icon.svg';
import DockerIcon from '../../public/assets/svg/icons/Docker-Icon.svg';
import PostgresIcon from '../../public/assets/svg/icons/Postgres-Icon.svg';
import ViteIcon from '../../public/assets/svg/icons/Vite-Icon.svg';
import NodeIcon from '../../public/assets/svg/icons/Node-Icon.svg';
import JestIcon from '../../public/assets/svg/icons/Jest-Icon.svg';
import AwsIcon from '../../public/assets/svg/icons/Aws-Icon.svg';
import SequelizeIcon from '../../public/assets/svg/icons/SequelizeUmzug-Icon.svg';
import MongoDbIcon from '../../public/assets/svg/icons/MongoDb-Icon.svg';
import VisualStudioCodeIcon from '../../public/assets/svg/icons/VisualStudioCode-Icon.svg';
import FigmaIcon from '../../public/assets/svg/icons/Figma-Icon.svg';
import PiniaIcon from '../../public/assets/svg/icons/Pinia-Icon.svg';
import AndroidStudioIcon from '../../public/assets/svg/icons/AndroidStudio-Icon.svg';
import TailwindIcon from '../../public/assets/svg/icons/Tailwind-Icon.svg';

const SkillsGrid = () => {
  return (
    <div className="grid grid-cols-9 my-5">
      {/* 1st Line */}
      <SkillIcon src={KendoUIIcon} alt="Kendo Ui" />
      <div></div>
      <div>
        <SkillIcon src={GitLabIcon} alt="GitLab" />
      </div>
      <div></div>
      <div>
        <SkillIcon src={VuetifyIcon} alt="Vuetify" />
      </div>
      <div></div>
      <div>
        <SkillIcon src={FireBaseIcon} alt="Firebase" />
      </div>
      <div></div>
      <div>
        <SkillIcon src={EslintrcIcon} alt="EsLint" />
      </div>
      {/* 2nd Line */}
      <div></div>
      <div>
        <SkillIcon src={NginxIcon} alt="Nginx" />
      </div>
      <div></div>
      <div>
        <SkillIcon src={NextIcon} alt="Next Js" />
      </div>
      <div></div>
      <div>
        <SkillIcon src={GitHubIcon} alt="GitHub" />
      </div>
      <div></div>
      <div>
        <SkillIcon src={VisualStudioIcon} alt="Visual Studio" />
      </div>
      <div></div>
      {/* 3rd Line */}
      <div>
        <SkillIcon src={SonarQubeIcon} alt="SonarQube" />
      </div>
      <div></div>
      <div>
        <SkillIcon src={DockerIcon} alt="Docker" />
      </div>
      <div></div>
      <div>
        <SkillIcon src={PostgresIcon} alt="Postgres" />
      </div>
      <div></div>
      <div>
        <SkillIcon src={ViteIcon} alt="Vite" />
      </div>
      <div></div>
      <div>
        <SkillIcon src={AndroidStudioIcon} alt="Android Studio" />
      </div>
      {/* 4th Line */}
      <div></div>
      <div>
        <SkillIcon src={NodeIcon} alt="Node Js" />
      </div>
      <div></div>
      <div>
        <SkillIcon src={JestIcon} alt="Jest" />
      </div>
      <div></div>
      <div>
        <SkillIcon src={AwsIcon} alt="Amazon Web Services" />
      </div>
      <div></div>
      <div>
        <SkillIcon src={SequelizeIcon} alt="Sequelize/Umzug" />
      </div>
      <div></div>
      {/* 5th line */}
      <div>
        <SkillIcon src={MongoDbIcon} alt="MongoDB" />
      </div>
      <div></div>
      <div>
        <SkillIcon src={VisualStudioCodeIcon} alt="Visual Studio Code" />
      </div>
      <div></div>
      <div>
        <SkillIcon src={FigmaIcon} alt="Figma" />
      </div>
      <div></div>
      <div>
        <SkillIcon src={PiniaIcon} alt="Pinia" />
      </div>
      <div></div>
      <div>
        <SkillIcon src={TailwindIcon} alt="Tailwind" />
      </div>
    </div>
  );
};
export default SkillsGrid;
