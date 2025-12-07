import React from 'react';

const Hero: React.FC = () => {
  const scrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('contact');
    if (element) {
      const headerOffset = 80; // Height of fixed header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="about" className="scroll-mt-20 relative min-h-screen flex flex-col justify-center items-center bg-[#FDF4F5] overflow-hidden pt-20">
      {/* Background Decorative Large Circle */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-purple-100/60 rounded-full pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-4xl mx-auto">
        {/* Profile Image with Ring */}
        <div className="relative mb-8">
           <div className="w-56 h-56 rounded-full border-4 border-white shadow-2xl overflow-hidden bg-gray-200">
             <img 
               src="/profile.png" 
               alt="Bhargavi Gunji" 
               className="w-full h-full object-cover grayscale hover:grayscale-0 transition duration-500"
               onError={(e) => {
                 (e.target as HTMLImageElement).src = "https://picsum.photos/400/400";
                 (e.target as HTMLImageElement).onerror = null; // Prevent infinite loop
               }}
             />
           </div>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-4 tracking-tight">
          Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-purple-400">Bhargavi Gunji</span>
        </h1>

        {/* Subtitle */}
        <p className="text-2xl md:text-3xl text-gray-600 font-semibold mb-10">
          Software Engineer
        </p>

        {/* CTA Button */}
        <a 
          href="#contact"
          onClick={scrollToContact}
          className="bg-gradient-to-r from-[#C084FC] to-[#A855F7] hover:from-[#A855F7] hover:to-[#9333EA] text-white font-bold py-4 px-10 rounded-xl shadow-lg shadow-purple-200 transform transition hover:-translate-y-1"
        >
          Contact Me
        </a>
      </div>
    </section>
  );
};

export default Hero;