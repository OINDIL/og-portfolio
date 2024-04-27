import React from 'react'
import LetsTalk from '../Small Components/Buttons/LetsTalk'

function Homepage() {
    return (
        <div>
            <div className="container h-svh">
                <div className="wrapper p-12 font-inter flex flex-col gap-2">
                    <div className="home-headings font-bold flex flex-col gap-2">
                        <p className='text-xl'>Hello! I'm Oindil.</p>
                        <p className='text-7xl'>MERN Stack Developer.<br /> For creating websites <br /> from <span className="text-gray-400">Scratch.</span></p>
                    </div>

                    <p className=''>A multidisciplinary designer harnessing the power of design to achieve online goals.</p>
                    <LetsTalk />

                </div>
            </div>
        </div>
    )
}

export default Homepage