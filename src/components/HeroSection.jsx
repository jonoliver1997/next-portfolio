"use client";
import React from "react";
import Image from "next/image";
import { Press_Start_2P } from "next/font/google";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const press_start_2p = Press_Start_2P({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

const HeroSection = () => {
  const handleClickResume = () => {
    window.open(
      "https://docs.google.com/document/d/1wpkmReGJrqVC0_mynxcBX9P-bYQDP7kyn2icq8bMQaw/edit?usp=sharing",
      "_blank"
    );
  };

  const handleClickHire = () => {
    window.open("https://forms.gle/sSqvxQc9TBpcmwaP8", "_blank");
  };

  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-7 place-self-center text-center sm:text-left"
        >
          <h1 className="mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-customGreen-400 to bg-customGreen-100">
            Hello, I&apos;m <br />
          </h1>
          <h1
            className={`text-white mb-4 mt-2 text-3xl sm:text-4xl lg:text-5xl font-extrabold ${press_start_2p.className} overflow-hidden whitespace-nowrap`}
          >
            <TypeAnimation
              sequence={[
                "Jonathan",
                1000,
                "Web Developer",
                1000,
                "Mobile Developer",
                1000,
                "Software Engineer",
                1000,
                "Jonathan",
                0,
              ]}
              wrapper="span"
              speed={40}
              repeat={3}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg lg:text-xl mb-6">
            I&apos;m a software engineer and I love to build things.
          </p>
          <div>
            <button
              onClick={handleClickHire}
              className="bg-gradient-to-br from-customGreen-500 via-customGreen-300 to-customGreen-100 text-white px-6 py-3 rounded-full mr-4 w-full sm:w-fit hover:text-slate-800 "
            >
              Hire Me
            </button>
            <button
              onClick={handleClickResume}
              className="bg-gradient-to-br from-customGreen-500 via-customGreen-300 to-customGreen-100 hover:bg-slate-800 text-white px-1 py-1 rounded-full mr-4 w-full sm:w-fit mt-4"
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                View Resume
              </span>
            </button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-5 place-self-center mt-5 lg:mt-0"
        >
          <div className="rounded-full bg-gradient-to-br from-customGreen-600 via-customGreen-300 to-customGreen-100 w-[350px] h-[350px] lg:w-[350px] lg:h-[350px] relative">
            <Image
              src="/images/cartoon_3.jpeg"
              alt="hero image"
              className="absolute rounded-full transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={300}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
