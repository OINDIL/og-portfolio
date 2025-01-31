import React, { useState } from "react";
import LetsTalk from "../Small Components/Buttons/LetsTalk";
import ViewAllWorks from "../Small Components/Buttons/ViewAllWorks";
import ProjectsWorks from "../Small Components/ProjectsWorks";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";

import ytcrawler from "../Images/ytcrawler.png";
import weather from "../Images/Weather.png";
import textDev from "../Images/text_dev.png";
import farmneed from "../Images/Farmneed.png";
import Digionestep from "../Images/Digionestep.png";
import MyImage from "../Images/My-image.jpeg";

import SocialMedia from "../Small Components/Buttons/SocialMedia";
import ContactForm from "../Small Components/ContactForm";
import TechStack from "../Small Components/TechStack";

import { useDarkContext } from "../Contexts/DarkModeContext";
import { educationBackground, experience, techStack } from "../../Assets/data";
import {
  GlowingStarsBackgroundCard,
  GlowingStarsDescription,
  GlowingStarsTitle,
} from "../ui/glowing-component";

import { TbBrandFiverr } from "react-icons/tb";
import { PhotoGalleryComponent } from "../Small Components/AceternityUsable/PhotoGalleryComponent";

function Homepage() {
  // CONTEXT
  const { mode } = useDarkContext();

  // States
  const [stackOption, setStackOption] = useState(0);
  const [hover, setHover] = useState(false);
  const [clicked, setClicked] = useState(false);

  const fiverrLink = "https://www.fiverr.com/s/LdPQ26Y";

  const copyToClipboard = (text) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setClicked(true);
      })
      .catch((err) => {
        console.error("Failed to copy text: ", err);
      });
  };

  const projects = [
    {
      name: "Digionestep",
      tagLine: "Developed and improvised the website design. (Co-Founder)",
      link: "https://digionestep.com",
      image: Digionestep,
    },
    {
      name: "Farmneed",
      tagLine: "Developed products and about page. (Freelance)",
      link: "https://farmneed.com/products",
      image: farmneed,
    },
    {
      name: "ytcrawler.com",
      tagLine: "YouTube analytics at fingertips. (Getting Prod. Ready)",
      link: "/og-portfolio/ytcrawler",
      image: ytcrawler,
    },
    {
      name: "Text.dev",
      tagLine: "Generate Secure Passwords & More (GitHub)",
      link: "https://oindil.github.io/textog/",
      image: textDev,
    },
    {
      name: "WeatherPoint",
      tagLine: "Accurate Weather & Notes (GitHub)",
      link: "/og-portfolio/weather",
      image: weather,
    },
  ];
  const socialMedia = [
    { name: "Github", link: "https://github.com/OINDIL" },
    { name: "LinkedIn", link: "https://www.linkedin.com/in/oindil-golder/" },
    { name: "Instagram", link: "https://www.instagram.com/oindil.golder/" },
    {
      name: "Facebook",
      link: "https://www.facebook.com/profile.php?id=61555715216087",
    },
  ];
  const obj = [
    <i className="fa-brands fa-react"></i>,
    <i className="fa-brands fa-js"></i>,
    <i className="fa-brands fa-node-js"></i>,
    <i className="fa-brands fa-html5"></i>,
    <i className="fa-brands fa-css3-alt"></i>,
    <i className="fa-brands fa-java"></i>,
    <i className="fa-brands fa-git"></i>,
    <i className="fa-brands fa-github"></i>,
    <i className="fa-solid fa-database"></i>,
    <i className="fa-brands fa-bootstrap"></i>,
    <i className="fa-brands fa-php"></i>,
  ];
  return (
    <div className={`${mode && `bg-black text-white`}`}>
      <motion.section
        className={`p-12 font-inter flex flex-col gap-5 transition ease-linear duration-300 max-w-6xl mx-auto ${
          !mode
            ? `bg-[radial-gradient(ellipse_at_center,#6684de,#FFF_70%)]`
            : `bg-[radial-gradient(ellipse_at_center,#6684de,#000_70%)]`
        }`}
        initial={{ x: -80, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="home-headings flex flex-col gap-5">
          <motion.span
            initial={{ x: -80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <button className="px-5 py-1 border rounded-full shadow-[0_38px_35px_rgba(0,0,0,0.25)] text-sm hover:shadow-lg hover:font-semibold transition-all ease-linear duration-100">
              <a
                href="https://github.com/OINDIL"
                target="_blank"
                className="flex items-center"
              >
                Visit my GitHub →
              </a>
            </button>
          </motion.span>

          <div className="max-w-full md:max-w-3xl">
            <motion.h1
              initial={{ x: -80, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              id="title-2"
              className={`sm:text-7xl text-5xl tracking-tight antialiased font-bold`}
            >
              <span
                className={`${
                  mode
                    ? `bg-gradient-to-b from-white from-40% to-black`
                    : `bg-gradient-to-t from-black from-40% to-white/60`
                } text-transparent bg-clip-text`}
              >
                Full Stack Web Dev,{" "}
              </span>
              <span
                className={` ${
                  mode
                    ? `bg-gradient-to-r from-blue-900 from-40% to-black`
                    : `bg-gradient-to-l from-blue-900 to-black`
                } text-transparent bg-clip-text`}
              >
                Learner,
              </span>{" "}
              <span className="text-gray-400 hidden sm:inline">
                <img
                  src={MyImage}
                  alt=""
                  width={70}
                  height={70}
                  className="inline rounded-full mb-2 hover:scale-110 transition ease-in-out duration-300 hover:cursor-pointer"
                />
              </span>{" "}
              <span
                className={`${
                  mode
                    ? `bg-gradient-to-b from-white from-40% to-black`
                    : `bg-gradient-to-t from-black from-40% to-white/60`
                } text-transparent bg-clip-text`}
              >
                Bike Enthusiast,{" "}
              </span>
              <span
                className={`${
                  mode
                    ? `bg-gradient-to-r from-blue-900 to-black`
                    : `bg-gradient-to-l from-blue-900 to-black`
                } text-transparent bg-clip-text`}
              >
                Freelancer.
              </span>
            </motion.h1>
          </div>
        </div>

        <motion.p
          initial={{ x: -80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          id="title-3"
          className={`sm:text-2xl text-xl ${
            mode ? `text-gray-400` : `text-gray-600`
          }`}
        >
          I'll assist you in crafting contemporary, fully functional websites.
        </motion.p>

        <motion.div
          initial={{ x: -80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row gap-2"
        >
          <span
            className={`font-semibold antialiased inline-flex items-center gap-2 px-4 py-3 rounded-full border shadow w-full md:w-auto  hover:cursor-pointer ${
              mode ? `bg-black text-white` : `bg-white text-black`
            }`}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            <div className="w-[10px] h-[10px] bg-green-500 rounded-full"></div>
            <span className="leading-none w-full hidden md:block">
              {!hover ? (
                "Open to work"
              ) : (
                <span className="flex justify-between gap-4">
                  Visit Fiverr
                  <span
                    className="hover:underline hover:scale-105 transition-all ease-linear duration-100"
                    onClick={() => copyToClipboard(fiverrLink)}
                  >
                    {clicked ? "Copied!" : "Copy"}
                  </span>
                </span>
              )}
            </span>
            <span className="inline-flex justify-between w-full md:hidden leading-none">
              Open to Work
              <span onClick={() => copyToClipboard(fiverrLink)}>
                {clicked ? (
                  "Copied!"
                ) : (
                  <button className="flex items-center gap-1">
                    <TbBrandFiverr /> <span className="underline">Link</span>
                  </button>
                )}
              </span>
            </span>
          </span>
          <LetsTalk hover={false} />
        </motion.div>
      </motion.section>
      {/* PROJECTS */}
      <section
        id="projects"
        className={`projects-container px-12 transition ease-linear duration-300 max-w-6xl mx-auto`}
      >
        <div className="font-inter flex items-center justify-between mb-6">
          <motion.p
            initial={{ x: -80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="sm:text-2xl text-xl font-bold"
          >
            Selected Works
          </motion.p>
          <ViewAllWorks hover={true} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {projects.map((items, index) => (
            <div key={index}>
              <ProjectsWorks items={items} />
            </div>
          ))}
        </div>
      </section>
      {/* Experience Component */}
      <motion.section
        initial={{ x: -80, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto p-12 font-inter"
      >
        <h2 className="sm:text-2xl text-xl font-bold">My experiences</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-3 mt-2">
          {experience.map((experience, index) => (
            <div key={index}>
              <GlowingStarsBackgroundCard>
                <GlowingStarsTitle>
                  <a
                    href={experience.link}
                    target="_blank"
                    className="hover:underline underline-offset-2"
                  >
                    {experience.company}
                  </a>{" "}
                  · {experience.years}
                </GlowingStarsTitle>
                <p className={"text-white/70"}>{experience.domain}</p>
                <GlowingStarsDescription className={"text-white/60 font-light"}>
                  {experience.desc}
                </GlowingStarsDescription>
              </GlowingStarsBackgroundCard>
            </div>
          ))}
        </div>
      </motion.section>

      <section className="max-w-6xl mx-auto px-12">
        <p className="sm:text-2xl text-xl font-bold">
          An Enthusiast Photographer Also 📸
        </p>

        <PhotoGalleryComponent />
      </section>
      {/* ABOUT PAGE */}

      <section
        id="about"
        className={`p-12 font-inter flex flex-col gap-5 max-w-6xl mx-auto`}
      >
        <div className="font-bold flex flex-col gap-5 text-center">
          <motion.h2
            initial={{ x: -80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className={`${
              mode
                ? `bg-gradient-to-b from-white from-40% to-black`
                : `bg-gradient-to-t from-black from-40% to-white/60`
            } text-transparent bg-clip-text sm:text-7xl text-5xl`}
          >
            Let's learn{" "}
            <span
              className={`${
                mode
                  ? `bg-gradient-to-r from-blue-900 to-blue-300`
                  : `bg-gradient-to-l from-blue-900 to-black`
              } text-transparent bg-clip-text`}
            >
              something
            </span>{" "}
            about me
          </motion.h2>
        </div>

        <motion.div
          className="flex justify-center"
          initial={{ x: -80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <div className="p-1 border inline-flex gap-2 rounded-full">
            {["My tech stack", "My Education"].map((stack, index) => (
              <span
                key={index}
                className={`${
                  stackOption === index &&
                  `${
                    mode ? `bg-white text-black` : `text-white bg-black`
                  } rounded-full transition ease-linear duration-300`
                } p-2 hover:cursor-pointer`}
                onClick={() => setStackOption(index)}
              >
                {stack}
              </span>
            ))}
          </div>
        </motion.div>
        <motion.div
          className={`p-3 border ${mode && `border-gray-500`} rounded-lg`}
          initial={{ x: -80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <div className="mb-2">
            {stackOption === 0 ? (
              <div>
                <p className="antialiased font-semibold text-xl">Tech Stack</p>
                <p
                  className={`font-normal ${
                    mode ? `text-gray-300` : `text-gray-600`
                  }`}
                >
                  It includes front-end tools like React JS, Tailwind CSS and
                  backend tools like Node and its framework Express JS.
                </p>
              </div>
            ) : (
              <div>
                <p className="antialiased font-semibold text-xl">
                  My education background
                </p>
                <p
                  className={`font-normal ${
                    mode ? `text-gray-300` : `text-gray-600`
                  }`}
                >
                  I am a BCA undergrad, working as a full stack dev.
                </p>
              </div>
            )}
          </div>
          {stackOption === 0 ? (
            <div className="flex gap-2 flex-wrap">
              {techStack.map((tech, index) => (
                <a
                  href={tech.link}
                  target="_blank"
                  key={index}
                  title={tech.link}
                  className={`border px-3 rounded-full antialiased ${
                    mode
                      ? `bg-white text-black hover:bg-white/95 shadow`
                      : `text-gray-700 hover:text-black`
                  }  hover:cursor-pointer`}
                >
                  {tech.name}
                </a>
              ))}
            </div>
          ) : (
            <div className="flex gap-2 flex-wrap">
              {educationBackground.map((tech, index) => (
                <a
                  href={tech.link}
                  target="_blank"
                  key={index}
                  title={tech.link}
                  className={`border px-3 rounded-full antialiased ${
                    mode
                      ? `bg-white text-black hover:bg-white/95 shadow`
                      : `text-gray-700 hover:text-black`
                  }  hover:cursor-pointer`}
                >
                  {tech.name}
                </a>
              ))}
            </div>
          )}
        </motion.div>
      </section>

      <section>
        <p className="text-xl font-inter antialiased text-center mb-4">
          10+ technologies. Just ask.
        </p>
        <Marquee
          gradient={true}
          gradientColor={mode ? "black" : "white"}
          gradientWidth={10}
          speed={25}
          pauseOnHover={true}
        >
          <TechStack obj={obj} />
        </Marquee>
      </section>
      {/* BEFORE FOOTER */}
      <section
        className={`p-12 font-inter flex flex-col gap-10 text-center max-w-6xl mx-auto`}
      >
        <motion.p
          initial={{ x: -80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="sm:text-2xl text-xl font-medium"
        >
          Have an idea?
        </motion.p>
        <motion.p
          initial={{ x: -80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className={`text-5xl sm:text-7xl font-bold pb-2 ${
            mode
              ? `bg-gradient-to-b from-white from-40% to-black`
              : `bg-gradient-to-t from-black from-40% to-white/60`
          } text-transparent bg-clip-text`}
        >
          Let's go{" "}
          <span
            className={`${
              mode
                ? `bg-gradient-to-r from-blue-900 to-blue-300`
                : `bg-gradient-to-l from-blue-900 to-black`
            } text-transparent bg-clip-text`}
          >
            create.
          </span>
        </motion.p>
        <nav className="flex justify-center gap-8 font-medium underline">
          <motion.a
            initial={{ x: -80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            href="#about"
            className={`hover:text-${
              mode ? `white` : `black`
            } text-gray-400 transition ease-linear duration-100`}
          >
            ABOUT ME
          </motion.a>
          <motion.a
            initial={{ x: -80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            href="#projects"
            className={`hover:text-${
              mode ? `white` : `black`
            } text-gray-400 transition ease-linear duration-100`}
          >
            WORKS
          </motion.a>
          <motion.a
            initial={{ x: -80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            href="#contact"
            className={`hover:text-${
              mode ? `white` : `black`
            } text-gray-400 transition ease-linear duration-100`}
          >
            CONTACTS
          </motion.a>
        </nav>
      </section>
      {/* FOOTER */}
      <footer id="contact" className="p-12 font-inter bg-[#030712]">
        <div className="flex flex-col gap-10 max-w-6xl mx-auto">
          <div>
            <motion.h2
              initial={{ x: -80, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="font-bold text-2xl"
            >
              <span className="text-gray-400">Oindil</span>
              <span className="text-white">Golder.</span>
            </motion.h2>
            <motion.p
              initial={{ x: -80, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="sm:text-2xl text-xl text-white"
            >
              I'll assist you in crafting contemporary, fully functional
              websites.
            </motion.p>
          </div>
          <div className="grid sm:grid-cols-4 grid-cols-2 gap-4">
            {socialMedia.map((items, index) => (
              <div key={index}>
                <SocialMedia items={items} hover={true} />
              </div>
            ))}
          </div>
          <div>
            <motion.p
              initial={{ x: -80, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="text-2xl text-gray-400 font-bold"
            >
              Stay Connected W/ Me
            </motion.p>
            <ContactForm />
          </div>
          <motion.p
            initial={{ x: -80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-gray-400 text-center"
          >
            &copy;2024 All Rigts Reserved.
            <br />
            Designed with &#129293; by Oindil.
          </motion.p>
        </div>
      </footer>
    </div>
  );
}

export default Homepage;
