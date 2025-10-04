import { FaEnvelope } from 'react-icons/fa';

export default function ContactSection() {
  return (
    <section className="flex flex-col items-center justify-center text-center text-white min-h-screen w-full px-6 gap-6">
      <h1 className="font-bold text-6xl mb-4">
        Contact<span className="text-[#0AFF9D]">.</span>
      </h1>
      <h4 className="text-base sm:text-lg md:text-xl mb-6">
        Feel free to reach out via email if you&apos;d like to connect!
        <br />
        Also find me on{' '}
        <a
          href="https://www.linkedin.com/in/monu-panwar"
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
        </a>
        , if that&apos;s more your speed.
      </h4>
      <a
        href="mailto:monupanwartech@gmail.com"
        className="flex items-center gap-2 text-[#0AFF9D] text-lg sm:text-2xl md:text-2xl underline hover:text-white transition"
      >
        <FaEnvelope /> monupanwartech@gmail.com
      </a>
    </section>
  );
}
