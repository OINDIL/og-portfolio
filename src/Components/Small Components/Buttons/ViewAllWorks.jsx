import React from 'react'
import { motion } from 'framer-motion'
function ViewAllWorks({ hover }) {
    return (
        <div>
            <div>
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}

                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                    className={`font-medium flex gap-2 border border-black py-2 px-3 rounded-3xl ${hover ? `hover:bg-black hover:text-white` : `bg-black text-white`} transition ease-linear duration-100`}>
                    <a href='https://github.com/OINDIL' target='_blank'>View All Works</a>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                    </svg>
                </motion.button>
            </div>
        </div>
    )
}

export default ViewAllWorks