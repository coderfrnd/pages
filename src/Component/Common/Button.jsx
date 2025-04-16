import React from 'react'

const Button = ({props}) => {
  return (
 <>
 <button className='w-[495px] h-[50px] rounded-[10px] border-[1px] border-[#305aff] font-[inter] font-medium text-[18px] leading-[100%] tracking-[0%] text-center align-middle text-[#FFFFFF] cursor-pointer bg-gradient-to-r from-[rgba(48,90,255,0.8)] to-[#B5D2FF]'>{props}</button>
 </>
  )
}

export default Button