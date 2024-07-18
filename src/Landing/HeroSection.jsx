import React from 'react'

const HeroSection = () => {
  return (
    <div className='h-screen flex flex-col justify-center items-center px-[16rem] gap-[4rem]'>
      {/* Top */}
      <div className=' flex flex-row justify-center items-center gap-[4rem]'>
        {/* Left */}
        <div className='flex flex-col gap-[2rem]'>
          {/* Title */}
          <h1 className='text-[4rem]'>
            <div>Welcome to our</div>
            <div>timebank community</div>
          </h1>
          {/* CTA */}
          <div className='w-[50%] flex flex-col gap-[2rem]'>
            <a href="/" className='flex flex-row gap-[1rem] text-[#75746E] border border-[#75746E] w-full px-[4rem] py-[1rem] rounded-full justify-center items-center'>
              <img src="/assets/icons/google.svg" alt="" />
              <span className='font-semibold'>Join with Google</span>
            </a>

            <div className='flex flex-row w-full justify-center items-center gap-[1rem]'>
              <div className='h-[1px] bg-[#CAC4D0] w-full rounded-full'></div>
              <div className='w-fit inline-block whitespace-nowrap'>Or continue with</div>
              <div className='h-[1px] bg-[#CAC4D0] w-full rounded-full'></div>
              <hr />
            </div>
            <a href="/" className='flex flex-row gap-[1rem] text-white justify-center items-center bg-[#0F172A] font-semibold w-full px-[4rem] py-[1rem] rounded-full'>Join with Phone Number</a>
          </div>
        </div>
        {/* Right */}
        <img src="/assets/hero.svg" alt="Hero Image" draggable={false} />
      </div>
      {/* Bottom */}
      <div className='flex flex-row justify-center items-center gap-[4rem]'>
        <div>Collaborating Organisations</div>
        <div className='flex flex-row justify-center items-center gap-[0.5rem] font-semibold text-[#75746E]'>
          <img src="/assets/icons/nss.svg" alt="nss" />
          <div>National Service Scheme (NSS)</div>
        </div>
        <div className='flex flex-row justify-center items-center gap-[0.5rem] font-semibold text-[#75746E]'>
          <img src="/assets/icons/police.svg" alt="nss" />
          <div>Telangana State Police</div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection