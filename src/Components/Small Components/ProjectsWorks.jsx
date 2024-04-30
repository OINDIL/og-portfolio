import React from 'react'
import ProjectLook from './Buttons/ProjectsLook'
import { motion } from 'framer-motion'

function ProjectsWorks({ items }) {
    return (
        <div>
            <motion.div 
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className='mb-4'>
                <img className='rounded-xl mb-3 border shadow' src={items.image} alt="todo" />
                <div className='font-inter flex items-center justify-between'>
                    <div>
                        <p className='font-medium'>{items.name}</p>
                        <p className='text-sm text-gray-600'>{items.tagLine}</p>
                    </div>
                    <ProjectLook hover={true} link={items.link} desc={true}/>
                </div>
            </motion.div>
        </div>
    )
}

export default ProjectsWorks