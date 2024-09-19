import React from 'react'

const Header = () => {
  return (
    <div>
        <header className='bg-gradient-to-r from-amber-200 to-yellow-500'>
            <div className='max-w-7xl mx-auto text-center'>
                <span className='font-inter'>Welcome to My World.{" "}
                    <a href="https://www.linkedin.com/in/oindil-golder" target="_blank" className='underline'>Let's Connect</a>
                </span>
            </div>
        </header>
    </div>
  )
}

export default Header