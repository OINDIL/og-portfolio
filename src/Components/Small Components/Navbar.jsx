import React from 'react'
import LetsTalk from './Buttons/LetsTalk'

function Navbar() {
    return (
        <div>
            <nav className='container font-inter py-5 px-12 flex items-center justify-between'>
                <h1 className='font-bold text-xl'>
                    <span className='text-gray-400'>Oindil</span>Golder.
                </h1>
                <LetsTalk/>
            </nav>
        </div>
    )
}

export default Navbar