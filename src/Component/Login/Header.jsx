import React from 'react'
import logo from '/Assets/logo.png'

const Header = ({props}) => {
  return (
    <div className="w-full flex flex-col items-center relative">
      <div className="w-[100px] h-[49px] absolute top-[65px]">
        <img src={logo} alt="Logo" className="w-full h-full object-contain" />
      </div>
      <h1 className='w-[349px] h-[30px] font-[inter] font-[600] text-[25px] text-center text-[#4D4D4D] absolute top-[130px]'>
        {props} to ReferralHub
      </h1>
    </div>
  )
}

export default Header
