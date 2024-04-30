import React, { useRef } from 'react'
import LetsTalk from '../Small Components/Buttons/LetsTalk'
import ViewAllWorks from '../Small Components/Buttons/ViewAllWorks'
import ProjectsWorks from '../Small Components/ProjectsWorks'
import Marquee from 'react-fast-marquee'
import { motion } from 'framer-motion'

import textDev from '../Images/text_dev.png'
import weather from '../Images/Weather.png'
import ytcrawler from '../Images/ytcrawler.png'
import SocialMedia from '../Small Components/Buttons/SocialMedia'
import ContactForm from '../Small Components/ContactForm'
import TechStack from '../Small Components/TechStack'
function Homepage() {
    // Refs
    const container = useRef()
    // GSAP

    const projects = [
        { name: 'Text.dev', tagLine: 'Generate Secure Passwords & More', link: 'https://oindil.github.io/textog/', image: textDev},
        { name: 'WeatherPoint', tagLine: 'Accurate Weather & Notes', link: '/weather', image: weather},
        { name: 'Yt Crawler', tagLine: 'YouTube Channel info & Video data', link: '/ytcrawler', image: ytcrawler}
    ]
    const socialMedia = [
        { name: 'Github', link: 'https://github.com/OINDIL' },
        { name: 'LinkedIn', link: 'https://www.linkedin.com/in/oindil-golder/' },
        { name: 'Instagram', link: 'https://www.instagram.com/oindil.golder/' },
        { name: 'Facebook', link: 'https://www.facebook.com/profile.php?id=61555715216087' },
    ]
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
        <i className="fa-brands fa-php"></i>
    ]
    return (
        <div>
            <motion.section
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                className="p-12 font-inter flex flex-col gap-5">
                <div className="home-headings font-bold flex flex-col gap-5" ref={container}>
                    <p id='title-1' className='sm:text-2xl text-xl'>Hello! I'm Oindil.</p>
                    <p id='title-2' className='sm:text-7xl text-5xl'>Creating beautiful <span className="text-gray-400">&</span><br /> functional websites <br /> from <span className="text-gray-400">scratch.</span></p>
                </div>

                <p id='title-3' className='sm:text-2xl text-xl text-gray-600'>I'll assist you in crafting contemporary, fully functional websites.</p>
                <LetsTalk hover={false} />
            </motion.section>
            {/* PROJECTS */}
            <section className="projects-container p-12" id='projects'>
                <motion.div
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="font-inter flex items-center justify-between mb-6">
                    <p className='sm:text-2xl text-xl font-bold'>Selected Works</p>
                    <ViewAllWorks hover={true} />
                </motion.div>
                <div className='flex flex-col justify-center items-center'>
                    {projects.map((items, index) => (
                        <div key={index}>
                            <ProjectsWorks items={items} />
                        </div>
                    ))}
                </div>
            </section>
            {/* ABOUT PAGE */}
            <motion.section
                id='about'
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                className="p-12 font-inter flex flex-col gap-5">
                <div className="home-headings font-bold flex flex-col gap-5">
                    <p className='sm:text-7xl text-5xl'>A visual designer focused<br /> on creating emotional<br /> digital <span className="text-gray-400">experience.</span></p>
                </div>

                <p className='sm:text-2xl text-xl text-gray-600'>Empower your digital vision with a comprehensive tech stack that blends creativity and functionality seamlessly. From dynamic <span className='font-medium'>React</span> interfaces to robust <span className='font-medium'>Node.js</span> backends and efficient database management with <span className='font-medium'>MongoDB</span> and <span className='font-medium'>MySQL</span>,<br /> I craft tailored solutions that drive innovation and exceed expectations. Let's build your next digital masterpiece <br />together.</p>
                <Marquee gradient={true} gradientColor='white' gradientWidth={10}>
                    <TechStack obj={obj} />
                </Marquee>
                <LetsTalk hover={true} />
            </motion.section>
            {/* BEFORE FOOTER */}
            <motion.section
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                className="p-12 font-inter flex flex-col gap-10 text-center">
                <p className='sm:text-2xl text-xl font-medium'>Have an idea?</p>
                <p className='sm:text-7xl text-5xl font-bold'>Let's go <span className="text-gray-400">create</span></p>
                <nav className='flex justify-center gap-8 font-medium underline'>
                    <a href='#about' className='hover:text-black text-gray-400 transition ease-linear duration-300'>ABOUT ME</a>
                    <a href='#projects' className='hover:text-black text-gray-400 transition ease-linear duration-300'>WORKS</a>
                    <a href='#contact' className='hover:text-black text-gray-400 transition ease-linear duration-300'>CONTACTS</a>
                </nav>
            </motion.section>
            {/* FOOTER */}
            <footer id='contact' className='p-12 font-inter bg-[#030712]'>
                <motion.div
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                    className='flex flex-col gap-10'>
                    <div>
                        <h1 className='font-bold text-2xl'>
                            <span className='text-gray-400'>Oindil</span><span className='text-white'>Golder.</span>
                        </h1>
                        <p className='sm:text-2xl text-xl text-white'>I'll assist you in crafting contemporary, fully functional websites.</p>
                    </div>
                    <div className="flex gap-4 justify-between flex-wrap">
                        {socialMedia.map((items, index) => (
                            <div key={index}>
                                <SocialMedia items={items} hover={true} />
                            </div>
                        ))}
                    </div>
                    <div>
                        <p className='text-2xl text-gray-400 font-bold'>Stay Connected W/ Me</p>
                        <ContactForm />
                    </div>
                    <p className='text-gray-400 text-center'>&copy;2024 All Rigts Reserved.<br />Designed with &#129293; by Oindil.</p>
                </motion.div>
            </footer>
        </div>
    )
}

export default Homepage