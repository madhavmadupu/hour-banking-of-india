import React from 'react'

const HeroSection = () => {
  return (
    <div className='h-screen flex flex-col justify-center items-center px-[16rem]'>
      {/* Top */}
      <div className=' flex flex-row justify-center items-center gap-[4rem]'>
        {/* Left */}
        <div className='flex flex-col'>
          {/* Title */}
          <h1 className='text-[4rem]'>
            <div>Welcome to our</div>
            <div>timebank community</div>
          </h1>
          {/* CTA */}
          <div>
            
          </div>
        </div>
        {/* Right */}
        <img src="/assets/hero.svg" alt="" />
      </div>
      {/* Bottom */}
    </div>
  )
}

export default HeroSection