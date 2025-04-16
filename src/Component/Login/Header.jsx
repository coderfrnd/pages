import React from 'react'
import logo from '../../Assets/logo.png'

const Header = ({props}) => {
  return (
    <div className="w-full flex flex-col items-center pt-14 pb-8">
      <div className="w-[100px] h-[49px] mb-4">
        <img src={logo} alt="Logo" className="w-full h-full object-contain" />
      </div>
      <h1 className='w-[349px] h-[30px] font-[inter] font-[600] text-[25px] text-center text-[#4D4D4D]'>
        {props} to ReferralHub
      </h1>
    </div>
  )
}

export default Header
