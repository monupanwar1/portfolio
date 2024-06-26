import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";

const Cards = () => {
  return (
    <div className="p-4 w-full sm:w-[480px]">
      <div className="h-60 bg-[#232323] flex items-center justify-center">
        <h1 className="text-white rounded-lg uppercase text-center p-20 hover:bg-[#0AFF9D] w-full">
          Your Projects Here 😊
        </h1>
      </div>
      <div className="text-white font-bold text-2xl mt-4 flex items-center justify-between">
        <h1>
          Paint <br /> APP
        </h1>
        <div className="flex-1 mx-4 h-[1px] bg-white"></div>
        <div className="flex items-center gap-4">
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
      <h1 className="font-semibold text-1xl text-[#0AFF9D] mt-2 w-full">
        Flutter - MUI - Python - FastAPI
      </h1>
      <h5 className="text-white mt-4 font-semibold text-1xl w-full">
        A real-time coaching app for students learning to paint. This app is my baby, designed and built on my own.
        <span className="text-[#0AFF9D]"> Read More &gt; </span>
      </h5>
    </div>
  );
};

const CardsContainer = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <Cards />
      <Cards />
      <Cards />
      <Cards />
    </div>
  );
};

export default CardsContainer;
