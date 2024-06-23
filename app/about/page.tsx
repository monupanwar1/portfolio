import { FaSmile, FaTerminal } from 'react-icons/fa';
import Project from '../projects/page'; // Ensure correct import path

const About = () => {
  return (
    <>
      <section className="min-h-screen w-full px-4 sm:px-6 md:px-12 lg:px-24 bg-[#111111]">
        <div className="flex items-center justify-center gap-5 p-4">
          <h1 className="text-white font-bold text-6xl">
            About<span className="text-[#0AFF9D] font-bold">.</span>
          </h1>
          <div className="hidden lg:block h-[1px] w-full bg-white"></div>
        </div>

        <div className="flex flex-col lg:flex-row items-start justify-center p-4">
          <div className="left w-full lg:w-1/2 text-white gap-4 px-4 py-8 flex flex-col">
            <p>
              Hey! Im Bob, if you havent already gathered that by now. Im a painter turned software engineer from Daytona, Florida. I specialize in the backend, primarily Node and Rust, but love building with whatever tools are right for the job.
            </p>
            <p>
              I currently work for Google on Google Photos. I also contribute to design systems teams from time to time (once an artist, always an artist, amirite?).
            </p>
            <p>
              Outside of work, I still love to paint. Any given Sunday youll find me scribbling some happy clouds with my son ☁️ I even teach courses online if you're looking to learn!
            </p>
            <p>
              Im passively looking for new positions where I can merge my love for code with my love for the canvas. If you think you've got an opening that I might like, let's connect 🔗
            </p>

            <h1 className="text-[#0AFF9D] mt-10">My Links →</h1>
          </div>

          <div className="right w-full lg:w-1/2 flex flex-col items-start mt-8 lg:mt-0 px-4 lg:px-24 py-6">
            <div className="w-full">
              <div className="flex items-center mb-5">
                <FaTerminal className="text-[#0AFF9D] mr-2 text-3xl" />
                <h1 className="text-white font-bold text-3xl">Use at Work</h1>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 text-white">
                <h5 className="bg-[#232323] px-4 py-2 rounded-lg text-center">JavaScript</h5>
                <h5 className="bg-[#232323] px-4 py-2 rounded-lg text-center">TypeScript</h5>
                <h5 className="bg-[#232323] px-4 py-2 rounded-lg text-center">React</h5>
                <h5 className="bg-[#232323] px-4 py-2 rounded-lg text-center">Node.js</h5>
                <h5 className="bg-[#232323] px-4 py-2 rounded-lg text-center">Next.js</h5>
                <h5 className="bg-[#232323] px-4 py-2 rounded-lg text-center">GitHub</h5>
                <h5 className="bg-[#232323] px-4 py-2 rounded-lg text-center">Jira</h5>
                <h5 className="bg-[#232323] px-4 py-2 rounded-lg text-center">Prisma</h5>
              </div>

              <div className="flex items-center mt-10 mb-4">
                <FaSmile className="text-[#0AFF9D] mr-2 text-3xl" />
                <h1 className="text-white font-bold text-3xl">Use for Fun</h1>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-white">
                <h5 className="bg-[#232323] px-4 py-2 rounded-md text-center">Tailwind CSS</h5>
                <h5 className="bg-[#232323] px-4 py-2 rounded-md text-center">Shadcn UI</h5>
                <h5 className="bg-[#232323] px-4 py-2 rounded-md text-center">Bootstrap</h5>
                <h5 className="bg-[#232323] px-4 py-2 rounded-md text-center">Figma</h5>
                <h5 className="bg-[#232323] px-4 py-2 rounded-md text-center">Firebase</h5>
                <h5 className="bg-[#232323] px-4 py-2 rounded-md text-center">PHP</h5>
                <h5 className="bg-[#232323] px-4 py-2 rounded-md text-center">WordPress</h5>
                <h5 className="bg-[#232323] px-4 py-2 rounded-md text-center">Angular</h5>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Include the Project component */}
      <Project />
    </>
  );
};

export default About;
