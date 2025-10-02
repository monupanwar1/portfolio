'use client';
import { ProjectProps } from '@/lib/types';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5';

// Data Array for Projects
const projectData: ProjectProps[] = [
  {
    title: 'ProfilePilot 🚀',
    tech: 'Next.js · TailwindCSS · GenAI · TypeScript',
    description:
      'An AI-powered app for generating optimized social media profiles. A passion project I designed and built from scratch.',
    image: '/ProfilePilot.png',
    url: 'https://postpilot-pi.vercel.app/',
    linkedin: 'https://www.linkedin.com/in/monu-panwar',
    github: 'https://github.com/monupanwar1/postpilot.git',
  },
  {
    title: 'PewSoft 🐾',
    tech: 'Next.js · Clerk Auth · TypeScript · NeonDB',
    description:
      'A pet care management app that helps users organize and manage their pets with ease.',
    image: '/pawsoft.png',
    url: 'https://pawsoft.vercel.app/',
    linkedin: 'https://www.linkedin.com/in/monu-panwar',
    github: 'https://github.com/monupanwar1/pawsoft.git',
  },
  {
    title: 'Evento 🎶',
    tech: 'Next.js · Prisma · NeonDB · TypeScript',
    description:
      'A DJ event management system where users can explore events happening in their nearby locations. Currently running with a local database setup.',
    image: '/Evento.png',
    url: 'https://evento-kappa-ten.vercel.app/',
    linkedin: 'https://www.linkedin.com/in/monu-panwar',
    github: 'https://github.com/monupanwar1/evento.git',
  },
  {
    title: 'Portfolio 🌐',
    tech: 'Next.js · TailwindCSS · TypeScript · Framer Motion',
    description:
      'A modern portfolio website showcasing all my projects and skills.',
    image: '/Portfolio.png',
    url: '#',
    linkedin: 'https://www.linkedin.com/in/monu-panwar',
    github: 'https://github.com/monupanwar1/portfolio.git',
  },
];

const Cards = ({
  title,
  tech,
  description,
  linkedin,
  url,
  image,
  github,
}: ProjectProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }} // Slide in from left
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      viewport={{ once: true }}
      className="p-4 w-full sm:w-[480px]"
    >
      <section className="container px-4 max-h-[600px] backdrop-blur-md rounded-md flex items-center justify-center overflow-hidden">
        <Image
          src={image}
          alt="title"
          width={1600}
          height={900}
          className="rounded-md object-cover transition-transform duration-500 ease-in-out hover:scale-105 w-full h-full"
        />
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
        {description}{' '}
        <Link
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center text-[#0AFF9D] underline-offset-4 transition-all duration-300 ease-in-out hover:text-[#06e4a3]"
        >
          Try it Out
          <span className="ml-1 inline-block transition-transform duration-300 transform group-hover:translate-x-1">
            →
          </span>
        </Link>
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
