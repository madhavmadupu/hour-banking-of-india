import React from 'react'

const Navbar = () => {
  return (
    <div className='lg:flex flex-row justify-between md:px-[8rem] lg:px-[16rem] py-[0.5rem] border-b-2 fixed w-full bg-white hidden'>
        {/* Logo */}
        <div className='flex flex-row justify-center items-center gap-[1rem]'>
            <img src={"/assets/logo_placeholder.svg"} alt="logo" />
            <h1 className='font-medium inline-block whitespace-nowrap'>Hour Banking Of India</h1>
        </div>
        {/* NavList */}
        <div className='flex flex-row justify-center items-center gap-[2rem] text-[#625B71]'>
          {/* Pages */}
          <div className=' flex flex-row gap-[2rem] border-r-2 px-[2rem] py-[0.5rem]'>
            <div className='flex flex-col justify-center items-center'>
              <img src="/assets/icons/marketplace.svg" alt="icon" />
              <p className='text-[12px] font-medium'>Marketplace</p>
            </div>
            <div className='flex flex-col justify-center items-center text-[#625B71]'>
              <img src="/assets/icons/rewards&perks.svg" alt="icon" />
              <p className='text-[12px] font-medium'>Rewards&Perks</p>
            </div>
            <div className='flex flex-col justify-center items-center text-[#625B71]'>
              <img src="/assets/icons/howitworks.svg" alt="icon" />
              <p className='text-[12px] font-medium'>How It Works</p>
            </div>
            <div className='flex flex-col justify-center items-center text-[#625B71]'>
              <img src="/assets/icons/about.svg" alt="icon" />
              <p className='text-[12px] font-medium'>About</p>
            </div>
          </div>


          {/* CTA */}
          <div className='flex flex-row gap-[2rem] justify-center items-center'>
            <a href="/" className='font-semibold'>Join Now</a>
            <a href="/" className='font-semibold text-white bg-[#605DFA] px-[2rem] py-[0.5rem] rounded-full'>Sign In</a>
          </div>
        </div>
    </div>
  )
}

export default Navbar