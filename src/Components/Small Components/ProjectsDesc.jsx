import React from 'react'
import { motion } from 'framer-motion'

function ProjectsDesc({ hover }) {
    return (
        <div>
                <motion.section
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="p-12 font-inter flex flex-col gap-5">
                    <div className="font-bold flex flex-col gap-5">
                        <p className='sm:text-7xl text-5xl'>Welcome to the case study of <span className='text-gray-400'>WeatherPoint</span></p>
                    </div>

                    <p className='sm:text-2xl text-xl text-gray-600'>This is an ambitious project that I'm currently working on.</p>
                    {/* <LetsTalk hover={false} /> */}
                    <div className="flex sm:flex-row flex-col gap-5">
                        <img className='rounded border' src="https://placehold.co/200x200" alt="something" />
                        <div className="flex flex-col sm:w-1/2 w-full gap-1">
                            <p className='font-medium text-xl'>WeatherPoint</p>
                            <p className='font-medium text-gray-600'>theOGdev.</p>
                            <p className='text-sm'><span className="font-bold">Description:</span> <span>This is an extraordinary weather web app that has been given the power of managing and storing notes within itself. Users can log in and see the weather of their location and they can manage their daily notes in one place.</span><br />**This app is still in developement**</p>
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                className={`sm:w-32 w-full font-medium flex justify-center gap-2 border py-2 px-3 border-black rounded-3xl ${hover ? `hover:bg-black hover:text-white` : `bg-black text-white`} transition ease-linear duration-100`}><a href="/" className='flex'>
                                    GitHub
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                                    </svg>
                                </a>
                            </motion.button>
                        </div>
                    </div>
                </motion.section>
            </div>
    )
}

export default ProjectsDesc