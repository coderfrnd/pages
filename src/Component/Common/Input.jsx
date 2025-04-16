import React from 'react'

const Input = ({label , placeholder}) => {
  return (
    <>
    <section className='w-[495px] h-[74px] gap-[15px]'>
    <span className='w-[128px] h-[19px] font-["Inter"] font-normal text-[16px] leading-[100%] tracking-[0%] text-[#333333]'> {label} </span>
    <input 
      type="text" 
      className='w-[495px] h-[50px] rounded-[7px] border-[1px] border-[#cccccc] placeholder:h-[21px] placeholder:text-[17px] placeholder:w-[230px] placeholder:pl-[15px] placeholder:pt-[39px] placeholder:font-["Inter"] placeholder:font-normal placeholder:leading-[100%] placeholder:tracking-[0%] placeholder:align-middle'
      placeholder={placeholder}
    />
   </section>
    </>
  )
}

export default Input