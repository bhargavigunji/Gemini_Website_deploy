import React, { ReactNode } from 'react';

interface SectionProps {
  id: string;
  title: string;
  children: ReactNode;
  bg?: 'white' | 'light';
}

const Section: React.FC<SectionProps> = ({ id, title, children, bg = 'white' }) => {
  return (
    <section id={id} className={`scroll-mt-20 py-20 px-4 sm:px-6 lg:px-8 ${bg === 'light' ? 'bg-[#FDF4F5]' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center relative">
          {title}
          <span className="absolute bottom-[-10px] left-1/2 -translate-x-1/2 w-16 h-1 bg-purple-500 rounded-full"></span>
        </h2>
        {children}
      </div>
    </section>
  );
};

export default Section;