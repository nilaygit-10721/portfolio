import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { RevealLinks } from "../components/common/RevealLinks";
import SEO from "../components/SEO";
import ScrollElement from "../components/ui/scroll-element";
import { FlipWords } from "../components/ui/flip-words";

export const AboutsPage = () => {
  const words = [
    "Creative", "Innovative", "Dynamic", "Problem-Solver", "Tech-Savvy", "Passionate",
    "Adaptive", "Full-Stack", "Backend", "Frontend", "Efficient", "Scalable",
    "Competitive Programmer", "Data Structures", "Algorithms", "Optimized Code",
    "Growth-Focused", "Collaborative", "Impactful"
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEO
        title="About Me"
        description="Welcome to my portfolio. I'm a Full Stack Developer and DSA enthusiast, specializing in modern web technologies and efficient problem-solving."
        path="/about"
      />

      <section className="relative flex flex-col items-center justify-center min-h-screen bg-[#fff] text-center">
        <h2 className="text-[14vw] md:text-[200px] font-black text-neutral-800">
          Nilay <span className="text-orange-500">.</span>
        </h2>
        <p className="text-xl md:text-2xl lg:text-3xl font-semibold text-gray-700 max-w-4xl px-4">
          A passionate <span className="text-green-600">Full-Stack Developer</span> &
          <span className="text-green-500"> Competitive Programmer</span>, skilled in
          building scalable applications and solving complex problems efficiently.
        </p>
      </section>

      <div className="overflow-hidden min-h-screen py-20">
        <div className="max-w-5xl mx-auto px-6 space-y-24">
          <ScrollElement direction="top" viewport={{ amount: 0.3 }}>
            <div className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-gray-900">
              I&apos;m Nilay, <FlipWords className="bg-gradient-to-r from-green-600 to-green-400 text-white px-4 py-2 rounded-xl shadow-lg" words={words} />
              <span className="block mt-4 text-2xl text-gray-700">
                Crafting digital experiences with precision, efficiency, and innovation.
              </span>
            </div>
          </ScrollElement>

          <ScrollElement direction="top" viewport={{ amount: 0.3 }}>
            <div className="p-8 rounded-2xl bg-gray-100 shadow-lg">
              <p className="text-xl md:text-2xl lg:text-3xl leading-relaxed text-gray-800">
                Experienced in <span className="font-semibold text-green-600">Data Structures & Algorithms</span>, with a strong grasp of 
                <span className="text-green-500"> competitive programming</span>. I enjoy solving challenging problems and optimizing solutions 
                using <span className="font-semibold text-green-400">C++, Python, and JavaScript</span>. Active participant in CodeChef and LeetCode.
              </p>
            </div>
          </ScrollElement>

          <ScrollElement direction="top" viewport={{ amount: 0.3 }}>
            <div className="p-8 rounded-2xl bg-gray-100 shadow-lg">
              <p className="text-xl md:text-2xl lg:text-3xl leading-relaxed text-gray-800">
                As a <span className="font-semibold text-green-600">Full-Stack Developer</span>, I specialize in the 
                <span className="text-green-400"> MERN stack</span> and modern frameworks like 
                <span className="text-green-400"> Next.js</span>. With a focus on performance and scalability, I build 
                intuitive, user-centric web applications.
              </p>
            </div>
          </ScrollElement>
        </div>
      </div>

      <RevealLinks />
    </>
  );
};
