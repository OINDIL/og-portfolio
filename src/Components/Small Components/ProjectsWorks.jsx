import React from 'react'
import ProjectLook from './Buttons/ProjectsLook'

function ProjectsWorks({ items }) {
    return (
        <div>
            <div className='mb-4'>
                <img className='rounded-xl mb-3' src={items.image} alt="todo" />
                <div className='flex items-center justify-between'>
                    <div>
                        <p className='font-medium'>{items.name}</p>
                        <p className='text-sm'>{items.tagLine}</p>
                    </div>
                    <ProjectLook hover={true} link={items.link}/>
                </div>
            </div>
        </div>
    )
}

export default ProjectsWorks