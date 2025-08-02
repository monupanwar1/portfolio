import { DotPattern } from '@/components/magicui/dot-pattern';

import AboutSection from '@/components/AboutSection';
import ProjectsSection from '@/components/ProjectsSection';
import ContactSection from '@/components/ContactSection';
import HomePage from '@/components/Homepage';
import Navbar from '@/components/Navbar';

export default function Page() {
  return (
    <>
    <Navbar/>
      <HomePage />
      <main className="relative z-10 min-h-screen overflow-hidden w-full px-16 sm:px-8 md:px-16 lg:px-24 xl:px-40 flex flex-col justify-center md:items-center">
        <section id="about">
          <AboutSection />
        </section>
        <section id="projects">
          <ProjectsSection />
        </section>
        <section id="contact">
          <ContactSection />
        </section>
      </main>
    </>
  );
}
