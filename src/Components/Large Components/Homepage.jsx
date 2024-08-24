import React from "react";
import LetsTalk from "../Small Components/Buttons/LetsTalk";
import ViewAllWorks from "../Small Components/Buttons/ViewAllWorks";
import ProjectsWorks from "../Small Components/ProjectsWorks";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";

import ytcrawler from "../Images/ytcrawler.png";
import weather from "../Images/Weather.png";
import textDev from "../Images/text_dev.png";
import farmneed from "../Images/Farmneed.png";

import SocialMedia from "../Small Components/Buttons/SocialMedia";
import ContactForm from "../Small Components/ContactForm";
import TechStack from "../Small Components/TechStack";

import { useDarkContext } from "../Contexts/DarkModeContext";
import ExperienceComponent from "../Small Components/ExperienceComponent";
function Homepage() {
  // CONTEXT
  const { mode } = useDarkContext();

  const projects = [
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
    <div className={`${mode ? `bg-black text-white` : null}`}>
      <motion.section
        className={`p-12 font-inter flex flex-col gap-5 transition ease-linear duration-300 max-w-6xl mx-auto`}
        initial={{ x: -80, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="home-headings flex flex-col gap-5">
          <motion.p
            initial={{ x: -80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            id="title-1"
            className={`sm:text-2xl text-xl font-inter ${
              mode ? `text-gray-400` : `text-gray-600`
            }`}
          >
            Hello! I'm Oindil.
          </motion.p>

          <div className="max-w-full md:max-w-3xl">
            <motion.h1
              initial={{ x: -80, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              id="title-2"
              className={`sm:text-7xl text-5xl tracking-tight antialiased font-bold`}
            >
              Full Stack Web Dev,{" "}
              <span
                className={` ${
                  mode
                    ? `bg-gradient-to-r from-blue-900 to-blue-300`
                    : `bg-gradient-to-l from-blue-900 to-black`
                } text-transparent bg-clip-text`}
              >
                Learner,
              </span>{" "}
              <span className="text-gray-400 hidden sm:inline">
                <img
                  src="https://placehold.co/200x200"
                  alt=""
                  width={70}
                  height={70}
                  className="inline rounded-full mb-2"
                />
              </span>{" "}
              Bike Enthusiast,{" "}
              <span
                className={`${
                  mode
                    ? `bg-gradient-to-r from-blue-900 to-blue-300`
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
          <span className="font-semibold antialiased inline-flex items-center gap-2 px-4 py-2 rounded-full border shadow">
            <div className="w-[10px] h-[10px] bg-green-500 rounded-full"></div>
            Open to work
          </span>
          <LetsTalk hover={false} />
        </motion.div>
      </motion.section>
      {/* PROJECTS */}
      <section
        id="projects"
        className={`projects-container p-12 transition ease-linear duration-300 max-w-6xl mx-auto`}
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
      <section className="max-w-6xl mx-auto p-12 font-inter">
        <h2 className="sm:text-2xl text-xl font-bold">My experiences</h2>
        <ExperienceComponent />
      </section>
      {/* ABOUT PAGE */}
      <section
        id="about"
        className={`p-12 font-inter flex flex-col gap-5 max-w-6xl mx-auto`}
      >
        <div className="home-headings font-bold flex flex-col gap-5 text-center">
          <motion.p
            initial={{ x: -80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="sm:text-7xl text-5xl"
          >
            A visual designer focused on creating emotional digital{" "}
            <span className="text-gray-400">experience.</span>
          </motion.p>
        </div>

        <motion.p
          initial={{ x: -80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className={`sm:text-2xl text-xl ${
            mode ? `text-gray-400` : `text-gray-600`
          } text-center`}
        >
          Empower your digital vision with a comprehensive tech stack that
          blends creativity and functionality seamlessly. From dynamic{" "}
          <span className="font-medium">React</span> interfaces to robust{" "}
          <span className="font-medium">Node.js</span> backends and efficient
          database management with <span className="font-medium">MongoDB</span>{" "}
          and <span className="font-medium">MySQL</span>, I craft tailored
          solutions that drive innovation and exceed expectations. Let's build
          your next digital masterpiece together.
        </motion.p>
        <Marquee
          gradient={true}
          gradientColor={mode ? "black" : "white"}
          gradientWidth={10}
        >
          <TechStack obj={obj} />
        </Marquee>
        <div className="flex justify-center">
          <LetsTalk hover={true} />
        </div>
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
          className="sm:text-7xl text-5xl font-bold"
        >
          Let's go <span className="text-gray-400">create</span>
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
            } text-gray-400 transition ease-linear duration-300`}
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
            } text-gray-400 transition ease-linear duration-300`}
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
            } text-gray-400 transition ease-linear duration-300`}
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
