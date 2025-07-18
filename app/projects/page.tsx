import Cards from '@/components/Cards';
import Contact from '@/components/Contact';

export const Projects = () => {
  return (
    <div className="bg-[#111111] p-24">
      <div className="flex items-center justify-center gap-5 p-4">
        <div className=" lg:block h-[1px] w-full bg-white"></div>
        <h1 className="text-white font-bold text-6xl">
          Projects<span className="text-[#0AFF9D] font-bold">.</span>
        </h1>
      </div>
      <Cards />
      <Contact />
    </div>
  );
};
