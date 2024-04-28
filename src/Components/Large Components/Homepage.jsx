import React from 'react'
import LetsTalk from '../Small Components/Buttons/LetsTalk'
import ViewAllWorks from '../Small Components/Buttons/ViewAllWorks'
import ProjectsWorks from '../Small Components/ProjectsWorks'

import textDev from '../Images/text_dev.png'
import weather from '../Images/Weather.png'
import ytcrawler from '../Images/ytcrawler.png'
function Homepage() {
    const projects = [
        { name: 'Text.dev', tagLine: 'Generate Secure Passwords & More', link: 'https://oindil.github.io/textog/', image: textDev },
        { name: 'WeatherPoint', tagLine: 'Accurate Weather & Notes', link: '', image: weather },
        { name: 'Yt Crawler', tagLine: 'YouTube Channel info & Video data', link: '', image: ytcrawler }
    ]
    return (
        <div>
            <div className="h-svh">
                <div className="p-12 font-inter flex flex-col gap-2">
                    <div className="home-headings font-bold flex flex-col gap-2">
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
            </div>
        </div>
    )
}

export default Homepage