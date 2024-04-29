import React from 'react'

function SocialMedia({ hover, items }) {
    return (
        <div>
            <a className='text-white hover:text-black' href={items.link}>
                <button className={`sm:w-72 w-40 font-medium border-2 border-white px-5 py-2 rounded-3xl ${hover ? `hover:bg-white` : `bg-[#030712]`} transition ease-linear duration-300`}>{items.name}</button>
            </a>
        </div>
    )
}

export default SocialMedia