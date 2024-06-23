import Cards from "@/components/Cards";
import Contact from "@/components/Contact";

const project = () => {
  return (
    <>
      <div className="min-h-screen w-full p-24 bg-[#111111]">
        <div className="flex items-center justify-center">

        <div className="h-[1px] w-full bg-white"></div>
        <h1 className="text-white font-bold text-6xl p-4">
          Projects<span className="text-[#0AFF9D] font-bold">.</span>
        </h1>
        </div>

       <div
        className="text-white">
        <Cards/>
       </div>

<div className="mt-10">

      <Contact/>
</div>
      </div>
    </>
  );
};
export default project;
