import { FaEnvelope } from 'react-icons/fa';

export default function ContactSection() {
  return (
    <section className="flex container flex-col items-center justify-center text-center text-white min-h-screen w-full  ">
      <div className="text-center px-4 gap-2">
        <h1 className="font-bold text-6xl mb-4">
          Contact<span className="text-[#0AFF9D]">.</span>
        </h1>
        <h4 className="text-base sm:text-lg md:text-xl mb-4">
          Shoot me an email if you want to connect! You can
          <br />
          also find me on{' '}
          <a
            href="https://www.linkedin.com/in/your-linkedin-profile"
            className="text-[#0AFF9D]"
          >
            LinkedIn
          </a>{' '}
          or{' '}
          <a
            href="https://twitter.com/your-twitter-profile"
            className="text-[#0AFF9D]"
          >
            Twitter
          </a>{' '}
          if that's more your speed.
        </h4>
        <div className="flex items-center justify-center text-lg sm:text-2xl md:text-2xl">
          <FaEnvelope className="mr-2" />
          <span>monupanwar5655@gmail.com</span>
        </div>
      </div>
    </section>
  );
}
