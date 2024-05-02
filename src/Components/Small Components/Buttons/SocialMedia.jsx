import React from 'react'
import { motion } from 'framer-motion'

function SocialMedia({ hover, items }) {
    return (
        <div>
            <a className='text-white hover:text-black' href={items.link}>
                <motion.button 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1 }}            
                className={`sm:w-72 w-40 font-medium border border-white px-5 py-2 rounded-3xl ${hover ? `hover:bg-white` : `bg-[#030712]`} transition ease-linear duration-100`}>{items.name}</motion.button>
            </a>
        </div>
    )
}

export default SocialMedia