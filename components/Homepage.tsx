import { DotPattern } from '@/components/magicui/dot-pattern';
import Link from 'next/link';

export default function HomePage() {
  return (
    <section
      id="home"
      className="relative overflow-hidden min-h-screen w-full px-24 sm:px-16 md:px-14 lg:px-24 xl:px-40  flex flex-col justify-center items-start"
    >
      {/* DotPattern limited to Home */}
      <DotPattern
        className="absolute top-0 left-0 w-full h-full -z-10 backdrop-blur-md"
        width={20}
        height={20}
        glow={true}
      />

      <h1 className="font-bold text-4xl md:text-6xl lg:text-8xl">
        Hey, I&apos;m Monu<span className="text-[#0AFF9D]">.</span>
      </h1>
      <h6 className="mt-5 text-2xl md:text-4xl lg:text-5xl">
        I&apos;m a{' '}
        <span className="text-[#0AFF9D] font-bold">Frontend Developer</span>
      </h6>
      <p className="mt-4 w-full md:w-3/4 lg:w-1/2">
        I&apos;m a passionate Frontend Developer skilled in React, Next.js,
        TypeScript, and Prisma. I’ve been actively building projects that focus
        on clean design, performance, and real-world problem solving.Excited to
        connect, learn, and grow with amazing teams and projects!
      </p>

      <Link
        href="#contact"
        className="mt-5 text-black bg-[#0AFF9D] px-4 py-3 rounded-md hover:bg-[#08D88F] transition duration-300"
      >
        Contact me →
      </Link>
    </section>
  );
}
