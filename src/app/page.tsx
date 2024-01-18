'use client';
import About from '@/components/about';
import Contact from '@/components/contact';
import Separator from '@/components/separator';
import Skills from '@/components/skills';
import Welcome from '@/components/welcome';
import WorkExperience from '@/components/workExperience';
import Title from '@/components/common/title';
import '../i18n/config';

const Home = () => {
  return (
    <div className="mx-auto flex flex-col items-center mobile-body">
      <Title />
      <Separator />
      <Welcome />
      <Separator />
      <About />
      <Separator />
      <Contact />
      <Separator />
      <WorkExperience />
      <Separator />
      <Skills />
    </div>
  );
};
export default Home;
