import React from 'react'

function Navbar() {
    return (
        <div>
            <nav className='container font-inter py-5 px-12 flex items-center justify-between'>
                <h1 className='font-bold text-xl'>
                    <span className='text-gray-400'>Oindil</span>Golder.
                </h1>
                <div className="nav-buttons">
                    <button className='font-bold flex gap-2 border-2 border-black py-2 px-3 rounded-3xl hover:bg-black hover:text-white transition ease-linear duration-300'>Lets Talk<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                    </svg>
                    </button>
                </div>
            </nav>
        </div>
    )
}

export default Navbar