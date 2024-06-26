import React from 'react';
import About from './about/page';

const HomePage = () => {
  return (
    <>
    <div className="min-h-screen w-full px-24 lg:p-40 sm:w-full sm:h-full overflow-hidden bg-[#111111] text-white flex flex-col justify-center items-start">
      <h1 className="font-bold text-4xl md:text-6xl lg:text-8xl">
        Hey, I'm Monu<span className="text-[#0AFF9D]">.</span>
      </h1>
      <h6 className="mt-5 text-2xl md:text-4xl lg:text-5xl">
        I'm a <span className="text-[#0AFF9D] font-bold">Frontend Developer</span>
      </h6>
      <p className="mt-4 w-full md:w-3/4 lg:w-1/2">
        I've spent the last 5 years building and scaling software for some
        pretty cool companies. I also teach people to paint online (in case
        you've got an empty canvas layin' around 🎨). Let's connect!
      </p>
      <button className="mt-5 text-black bg-[#0AFF9D] px-4 py-3 rounded-md hover:bg-[#08D88F] transition duration-300">
        Contact me →
      </button>

    </div>
      <About/>
    </>
  );
};

export default HomePage;
