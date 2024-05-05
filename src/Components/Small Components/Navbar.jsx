import React from 'react'
import LetsTalk from './Buttons/LetsTalk'
import { motion } from 'framer-motion'

import { useDarkContext } from '../Contexts/DarkModeContext'
function Navbar() {
    const { mode, setMode } = useDarkContext()

    return (
        <div>
            <nav
                className={`font-inter py-5 px-12 flex items-center justify-between transition ease-linear duration-300 ${mode ? `bg-black text-white` : null}`}>
                <motion.h1
                    initial={{ x: -80, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                    className='font-bold text-xl'>
                    <span className='text-gray-400'>Oindil</span>Golder.
                </motion.h1>
                <div className='flex items-center gap-5'>
                    <motion.span
                        initial={{ x: -80, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1 }}
                    >
                        <motion.button
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => setMode(!mode)}
                        >
                            {mode ? <i className="fa-solid fa-sun"></i> : <i className="fa-solid fa-moon"></i>}

                        </motion.button>
                    </motion.span>
                    <LetsTalk hover={true} />
                </div>
            </nav>
        </div>
    )
}

export default Navbar