import React from 'react';

const Preloader: React.FC = () => {
  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-slate-950">
      <div className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-center">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400 animate-pulse">
          NITHIN KUMMARI
        </span>
      </div>
      <p className="mt-6 text-slate-300 text-xl tracking-wider animate-pulse [animation-delay:0.4s]">
        Loading Portfolio...
      </p>
    </div>
  );
};

export default Preloader;