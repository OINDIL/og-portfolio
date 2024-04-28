import React from 'react'
import LetsTalk from '../Small Components/Buttons/LetsTalk'
import ViewAllWorks from '../Small Components/Buttons/ViewAllWorks'
import ProjectsWorks from '../Small Components/ProjectsWorks'
import Marquee from 'react-fast-marquee'

import textDev from '../Images/text_dev.png'
import weather from '../Images/Weather.png'
import ytcrawler from '../Images/ytcrawler.png'
import SocialMedia from '../Small Components/Buttons/SocialMedia'
import ContactForm from '../Small Components/ContactForm'
function Homepage() {
    const projects = [
        { name: 'Text.dev', tagLine: 'Generate Secure Passwords & More', a: 'https://oindil.github.io/textog/', image: textDev },
        { name: 'WeatherPoint', tagLine: 'Accurate Weather & Notes', a: '', image: weather },
        { name: 'Yt Crawler', tagLine: 'YouTube Channel info & Video data', a: '', image: ytcrawler }
    ]
    const socialMedia = [
        { name: 'Github', link: 'https://github.com/OINDIL' },
        { name: 'LinkedIn', link: 'https://www.linkedin.com/in/oindil-golder/' },
        { name: 'Instagram', link: 'https://www.instagram.com/oindil.golder/' },
        { name: 'Facebook', link: 'https://www.facebook.com/profile.php?id=61555715216087' },
    ]
    return (
        <div>
            <div className="h-svh">
                <div className="p-12 font-inter flex flex-col gap-5">
                    <div className="home-headings font-bold flex flex-col gap-5">
                        <p className='sm:text-2xl text-xl'>Hello! I'm Oindil.</p>
                        <p className='sm:text-7xl text-5xl'>MERN Stack Developer.<br /> For creating websites <br /> from <span className="text-gray-400">Scratch.</span></p>
                    </div>

                    <p className='sm:text-2xl text-xl'>I'll assist you in crafting contemporary, fully functional websites.</p>
                    <LetsTalk hover={false} />
                </div>
                {/* PROJECTS */}
                <div className="projects-container p-12">
                    <div className="font-inter flex items-center justify-between mb-6">
                        <p className='sm:text-2xl text-xl font-bold'>Selected Works</p>
                        <ViewAllWorks hover={true} />
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        {projects.map((items, index) => (
                            <div key={index}>
                                <ProjectsWorks items={items} />
                            </div>
                        ))}
                    </div>
                </div>
                {/* ABOUT PAGE */}
                <div className="p-12 font-inter flex flex-col gap-5">
                    <div className="home-headings font-bold flex flex-col gap-5">
                        <p className='sm:text-2xl text-xl'></p>
                        <p className='sm:text-7xl text-5xl'>A visual designer focused<br /> on creating emotional<br /> digital <span className="text-gray-400">experience.</span></p>
                    </div>

                    <p className='sm:text-2xl text-xl'>Empower your digital vision with a comprehensive tech stack that blends creativity<br /> and functionality seamlessly. From dynamic <span className='font-medium'>React</span> interfaces to robust <span className='font-medium'>Node.js</span><br /> backends and efficient database management with <span className='font-medium'>MongoDB</span> and <span className='font-medium'>MySQL</span>,<br /> we craft tailored solutions that drive innovation and exceed expectations.<br /> Let's build your next digital masterpiece together.</p>
                    <Marquee gradient={true} gradientColor='white' gradientWidth={10}>
                        <div className="overflow-hidden sm:text-6xl text-4xl text-gray-400 flex sm:gap-44 gap-10">
                            <i className="fa-brands fa-react max-w-none"></i>
                            <i className="fa-brands fa-js max-w-none"></i>
                            <i className="fa-brands fa-node-js max-w-none"></i>
                            <i className="fa-brands fa-html5 max-w-none"></i>
                            <i className="fa-brands fa-css3-alt max-w-none"></i>
                            <i className="fa-brands fa-java max-w-none"></i>
                            <i className="fa-brands fa-git max-w-none"></i>
                            <i className="fa-brands fa-github max-w-none"></i>
                            <i className="fa-solid fa-database mr-16"></i>
                        </div>
                    </Marquee>
                    <LetsTalk hover={true} />
                </div>
                {/* BEFORE FOOTER */}
                <div className="p-12 font-inter flex flex-col gap-5 text-center">
                    <p className='sm:text-2xl text-xl font-medium'>Have an idea?</p>
                    <p className='sm:text-7xl text-5xl font-bold'>Let's go <span className="text-gray-400">create</span></p>
                    <nav className='flex justify-center space-x-16 font-medium underline'>
                        <a href='/' className='hover:text-black text-gray-400 transition ease-linear duration-300'>ABOUT ME</a>
                        <a href='/' className='hover:text-black text-gray-400 transition ease-linear duration-300'>WORKS</a>
                        <a href='/' className='hover:text-black text-gray-400 transition ease-linear duration-300'>CONTACTS</a>
                    </nav>
                </div>
                {/* FOOTER */}
                <footer className='flex flex-col gap-10 font-inter p-12 bg-[#030712]'>
                    <div>
                        <h1 className='font-bold text-2xl'>
                            <span className='text-gray-400'>Oindil</span><span className='text-white'>Golder.</span>
                        </h1>
                        <p className='sm:text-2xl text-xl text-white'>I'll assist you in crafting contemporary, fully functional websites.</p>
                    </div>
                    <div className="flex flex-wrap justify-between gap-3">
                        {socialMedia.map((items, index) => (
                            <div key={index}>
                                <SocialMedia items={items} hover={true} />
                            </div>
                        ))}
                    </div>
                    <div>
                        <p className='text-2xl text-gray-400 font-bold'>Stay Connected W/ Me</p>
                        <ContactForm/>
                    </div>
                    <p className='text-gray-400 text-center'>&copy;2024 All Rigts Reserved.<br/>Designed with &#129293; by Oindil.</p>
                </footer>
            </div>
        </div>
    )
}

export default Homepage