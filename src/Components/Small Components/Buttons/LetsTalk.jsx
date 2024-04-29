import React from 'react'

function LetsTalk({ hover }) {
    return (
        <div><button className={`sm:w-32 w-full font-medium flex justify-center gap-2 border py-2 px-3 border-black rounded-3xl ${hover ? `hover:bg-black hover:text-white` : `bg-black text-white`} transition ease-linear duration-300`}>Lets Talk<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
        </svg>
        </button></div>
    )
}

export default LetsTalk