import React from 'react'

function ProjectLook({ hover,link }) {
    return (
        <div>
            <div>
                <button className={`font-medium flex gap-2 border-2 border-black py-2 px-3 rounded-3xl ${hover ? `hover:bg-black hover:text-white` : `bg-black text-white`} transition ease-linear duration-300`}>
                    <a href={link} target='_blank'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                    </svg>
                    </a>
                </button>
            </div>
        </div>
    )
}

export default ProjectLook