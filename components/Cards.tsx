"use client"
import Link from 'next/link';
import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5';
import { motion } from 'framer-motion';
import { ProjectProps } from '@/lib/types';

// Data Array for Projects
const projectData: ProjectProps[] = [
  {
    title: 'Paint APP',
    tech: 'Flutter - MUI - Python - FastAPI',
    description:
      'A real-time coaching app for students learning to paint. This app is my baby, designed and built on my own.',
    linkedin: 'https://www.linkedin.com/monu-panwar',
    github: 'https://github.com/',
  },
  {
    title: 'ChatBot APP',
    tech: 'React - Node.js - OpenAI API',
    description:
      'An AI-powered chatbot app for instant communication and query resolution.',
    linkedin: 'https://www.linkedin.com/',
    github: 'https://github.com/',
  },
  {
    title: 'Portfolio Website',
    tech: 'Next.js - TailwindCSS - Framer Motion',
    description:
      'A sleek portfolio site to showcase my projects, built with modern tools.',
    linkedin: 'https://www.linkedin.com/',
    github: 'https://github.com/',
  },
  {
    title: 'Food Delivery App',
    tech: 'React Native - Firebase - Stripe API',
    description:
      'An end-to-end food delivery application with payment integration and real-time tracking.',
    linkedin: 'https://www.linkedin.com/',
    github: 'https://github.com/',
  },
];

const Cards = ({ title, tech, description, linkedin, github }:ProjectProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }} // Slide in from left
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      viewport={{ once: true }}
      className="p-4 w-full sm:w-[480px]"
    >
      <section className="h-60 bg-[#232323] rounded-md flex items-center  justify-center ">
        <h1 className="text-white rounded-lg uppercase text-center p-20 hover:bg-[#0AFF9D] w-full">
          My All Projects 😊
        </h1>
      </section>
      <div className="text-white font-bold text-2xl mt-4 flex items-center justify-between">
        <h1 className="md:text-nowrap lg:text-nowrap">{title}</h1>
        <div className="flex-1 mx-4 h-[1px] bg-white"></div>
        <div className="flex items-center gap-4">
          <Link
            href={linkedin}
            target="_blank"
            className="text-[#EBECF3] hover:text-[#0AFF9D] text-3xl"
          >
            <IoLogoLinkedin />
          </Link>
          <Link
            href={github}
            target="_blank"
            className="text-[#EBECF3] hover:text-[#0AFF9D] text-3xl"
          >
            <IoLogoGithub />
          </Link>
        </div>
      </div>
      <h1 className="font-semibold text-1xl text-[#0AFF9D] mt-2">{tech}</h1>
      <h5 className="text-white mt-4 font-semibold text-1xl">
        {description} <span className="text-[#0AFF9D]">Read More &gt;</span>
      </h5>
    </motion.div>
  );
};

const CardsContainer = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {projectData.map((project, index) => (
        <Cards key={index} {...project} />
      ))}
    </div>
  );
};

export default CardsContainer;
