import React from 'react'
import LetsTalk from './Buttons/LetsTalk'
import { motion } from 'framer-motion'

function Navbar() {
    return (
        <div>
            <motion.nav 
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className='font-inter py-5 px-12 flex items-center justify-between'>
                <h1 className='font-bold text-xl'>
                    <span className='text-gray-400'>Oindil</span>Golder.
                </h1>
                <LetsTalk hover={true} />
            </motion.nav>
        </div>
    )
}

export default Navbar