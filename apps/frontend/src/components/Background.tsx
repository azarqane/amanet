import React from 'react';

export default function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute -inset-[30%] bg-gradient-radial from-violet-500 via-blue-500 to-indigo-500 opacity-30 rounded-full animate-[spin_20s_linear_infinite]" />
      <div className="absolute top-1/4 left-1/3 w-72 h-72 bg-white/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-indigo-300/20 rounded-full blur-3xl animate-float-reverse" />
      <div className="absolute top-3/4 left-1/4 w-52 h-52 bg-violet-400/20 rounded-full blur-2xl animate-float" />
    </div>
  );
}
