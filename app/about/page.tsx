'use client';
import { FaSmile, FaTerminal } from 'react-icons/fa';
import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5';
import { Projects } from '../projects/page';

const About = () => {
  return (
    <>
      <section className="min-h-screen sm:w-full p-24 sm:p-20 md:p-24 lg:px-24 bg-[#111111]">
        <div className="flex items-center justify-center gap-5 p-4">
          <h1 className="text-white font-bold text-6xl">
            About<span className="text-[#0AFF9D] font-bold">.</span>
          </h1>
          <div className="lg:block h-[1px] w-full bg-white"></div>
        </div>

        <div className="flex flex-col lg:flex-row items-start justify-center p-4">
          <div className="left w-full lg:w-1/2 text-white gap-4 px-4 py-8 flex flex-col">
            <p>
              Hey! I'm Bob, if you haven't already gathered that by now. I'm a
              painter turned software engineer from Daytona, Florida. I
              specialize in the backend, primarily Node and Rust, but love
              building with whatever tools are right for the job.
            </p>
            <p>
              I currently work for Google on Google Photos. I also contribute to
              design systems teams from time to time (once an artist, always an
              artist, amirite?).
            </p>
            <p>
              Outside of work, I still love to paint. Any given Sunday you'll
              find me scribbling some happy clouds with my son ☁️ I even teach
              courses online if you're looking to learn!
            </p>
            <p>
              I'm passively looking for new positions where I can merge my love
              for code with my love for the canvas. If you think you've got an
              opening that I might like, let's connect 🔗
            </p>

            <div className="flex items-center justify-center gap-4 mt-8 lg:mt-0">
              <h1 className="text-[#0AFF9D] mt-10">My Links →</h1>
              <div className="mt-8 items-center justify-center flex gap-4">
                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#EBECF3] hover:text-[#0AFF9D] transition duration-300"
                >
                  <IoLogoLinkedin className="text-3xl" />
                </a>
                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#EBECF3] hover:text-[#0AFF9D] transition duration-300"
                >
                  <IoLogoGithub className="text-3xl" />
                </a>
              </div>
            </div>
          </div>

          <div className="right w-full lg:w-1/2 flex flex-col items-start mt-8 lg:mt-0 px-4 lg:px-24 py-6">
            <div className="w-full">
              <div className="flex items-center mb-5">
                <FaTerminal className="text-[#0AFF9D] mr-2 text-3xl" />
                <h1 className="text-white font-bold text-3xl">Use at Work</h1>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-white">
                <h5 className="bg-[#232323] px-3 py-2 rounded-lg text-center">
                  React
                </h5>
                <h5 className="bg-[#232323] px-3 py-2 rounded-lg text-center">
                  Node.js
                </h5>
                <h5 className="bg-[#232323] px-3 py-2 rounded-lg text-center">
                  Next.js
                </h5>
                <h5 className="bg-[#232323] px-3 py-2 rounded-lg text-center">
                  GitHub
                </h5>
                <h5 className="bg-[#232323] px-3 py-2 rounded-lg text-center">
                  Jira
                </h5>
                <h5 className="bg-[#232323] px-3 py-2 rounded-lg text-center">
                  Prisma
                </h5>
              </div>

              <div className="flex items-center mt-10 mb-4">
                <FaSmile className="text-[#0AFF9D] mr-2 text-3xl" />
                <h1 className="text-white font-bold text-3xl">Use for Fun</h1>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-white">
                <h5 className="bg-[#232323] px-3 py-2 rounded-md text-center">
                  Shadcn UI
                </h5>

                <h5 className="bg-[#232323] px-3 py-2 rounded-md text-center">
                  Figma
                </h5>
                <h5 className="bg-[#232323] px-1 py-2 rounded-md text-center">
                  Firebase
                </h5>
                <h5 className="bg-[#232323] px-3 py-2 rounded-md text-center">
                  PHP
                </h5>
                <h5 className="bg-[#232323] px-3 py-2 rounded-md text-center">
                  Angular
                </h5>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Include the Project component */}
      <Projects />
    </>
  );
};

export default About;
