'use client';
import { FaSmile, FaTerminal } from 'react-icons/fa';
import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5';

const workTools = [
  'React',
  'Node.js',
  'Next.js',
  'GitHub',
  'Jira',
  'Prisma',
  'Tailwind',
];
const funTools = ['Shadcn', 'Figma', 'Firebase', 'PHP', 'Angular'];

export default function AboutSection() {
  return (
    <section className=" container min-h-screen w-full mt-20 ">
      <div className="flex items-center justify-center gap-5 px-4   ">
        <h1 className="text-white font-bold text-6xl">
          About<span className="text-[#0AFF9D]">.</span>
        </h1>
        <div className="lg:block h-[1px] w-full bg-white"></div>
      </div>

      <div className="flex flex-col lg:flex-row items-start justify-center p-4">
        <div className="left w-full lg:w-1/2 text-white gap-4 px-4 py-8 flex flex-col">
          <p>
            Hey! I&apos;m Monu, a frontend developer who loves building
            interactive websites using modern tools like React, Next.js, and
            Tailwind.
          </p>
          <p>
            I&apos;m currently focused on improving my UI skills and working on
            personal projects.
          </p>
          <p>
            In my free time, I explore UI design with Figma and experiment with
            different frameworks.
          </p>
          <p>
            I&apos;m actively looking for frontend developer roles where I
            can apply my skills and grow faster 🚀
          </p>

          <div className="flex items-center justify-center gap-4 mt-8 lg:mt-0">
            <h1 className="text-[#0AFF9D] mt-10">My Links →</h1>
            <div className="mt-8 flex gap-4">
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#EBECF3] hover:text-[#0AFF9D] transition"
              >
                <IoLogoLinkedin className="text-3xl" />
              </a>
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#EBECF3] hover:text-[#0AFF9D] transition"
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
              <h1 className="text-white font-bold text-3xl text-nowrap">
                Use at Work
              </h1>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 text-white">
              {workTools.map((tool, index) => (
                <h5
                  key={index}
                  className="bg-[#232323] px-2  py-2 rounded-lg text-center"
                >
                  {tool}
                </h5>
              ))}
            </div>

            <div className="flex items-center mt-10 mb-4">
              <FaSmile className="text-[#0AFF9D] mr-2 text-3xl" />
              <h1 className="text-white font-bold text-3xl text-nowrap">
                Use for Fun
              </h1>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2  text-white">
              {funTools.map((tool, index) => (
                <h5
                  key={index}
                  className="bg-[#232323] px-2 py-2  rounded-md text-center"
                >
                  {tool}
                </h5>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
