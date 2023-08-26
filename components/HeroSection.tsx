"use client" // this is a client component
import React from "react"
import Image from "next/image"
import { Link } from "react-scroll/modules"
import { HiArrowDown } from "react-icons/hi"
import { useTheme } from "next-themes"
import { useState, useEffect } from "react";
import { useMediaQuery } from 'react-responsive';

const HeroSection: React.FC = () => {
  const [tiltValues, setTiltValues] = useState({ tiltX: 0, tiltY: 0 });

  useEffect(() => {
    const handleMouseMove = (event: { clientX: any; clientY: any }) => {
      const { clientX, clientY } = event;
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      const maxTilt = 20; // Adjust this value to control the tilt intensity

      const tiltX = (clientX - centerX) / centerX * maxTilt*2;
      const tiltY = (clientY - centerY) / centerY * maxTilt;

      setTiltValues({ tiltX, tiltY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

return (
    <section id="home">
      <div className="flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 my-10 pt-16 sm:pt-16 sm:pb-10 md:pt-16 md:pb-6 md:flex-row md:space-x-4 md:text-left">
        <div className="md:mt-2 md:w-1/2">
          <Image
              src={isSmallScreen ? "/headshot-sm.png" : "/headshot.png"}
              alt=""
              width={325}
              height={isSmallScreen ?  100: 325}
              className="rounded-full shadow-2xl headshot"
              style={{
                transform: `perspective(1000px) rotateX(${tiltValues.tiltY}deg) rotateY(${tiltValues.tiltX}deg)`,
              }}
          />
        </div>
        <div className="md:mt-2 md:w-3/5">
          <h1 className="text-4xl font-bold mt-6 md:mt-0 md:text-7xl cursor-default">Hi, I&#39;m Cal!</h1>
          <p className="text-lg mt-4 mb-6 md:text-2xl cursor-default">
            I&#39;m a{" "}
            <span className={`"font-semibold dark:text-amber-400 text-purple-800`}>
                Software Engineer{" "}
            </span>
            working on personalized solutions for the modern world.
          </p>
          <Link
              to="projects"
              className={`font-semibold px-6 py-3 rounded shadow cursor-pointer dark:bg-amber-400 dark:hover:bg-amber-300 dark:text-black bg-purple-800 hover:bg-purple-800 text-white dark:hover:brightness-50 hover:opacity-70`}
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
          >
            Projects
          </Link>

        </div>
      </div>
      <div className="flex flex-row items-center text-center justify-center ">
        <Link
          to="experience"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <HiArrowDown size={35} className="animate-bounce" />
        </Link>
      </div>
    </section>
  )
}

export default HeroSection
