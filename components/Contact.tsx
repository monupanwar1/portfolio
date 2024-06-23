import { FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center text-white h-screen md:h-screen sm:h-48 sm:p-20 lg:p-24  ">
      <div className="text-center w-full max-w-lg mx-auto">
        <h1 className="font-bold text-4xl sm:text-5xl mb-4">
          Contact<span className="text-[#0AFF9D]">.</span>
        </h1>
        <h4 className="text-base sm:text-lg md:text-xl mb-4">
          Shoot me an email if you want to connect! You can<br />
          also find me on <a href="https://www.linkedin.com/in/your-linkedin-profile" className="text-[#0AFF9D]">LinkedIn</a> or <a href="https://twitter.com/your-twitter-profile" className="text-[#0AFF9D]">Twitter</a> if that's more your speed.
        </h4>
        <div className="flex items-center justify-center text-lg sm:text-2xl md:text-2xl">
          <FaEnvelope className="mr-2" />
          <span>monupanwar5655@gmail.com</span>
        </div>
      </div>
    </div>
  )
}

export default Contact;
