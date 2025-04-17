import React from 'react'

const BusinessTag = ({title}) => {
  return (
    <>
       <span className='w-[110px] h-[19px] font-[Inter] text-nowrap font-[400] text-[16px] leading-[100%] tracking-[0%] text-[#333333]'>  {title}</span>
    </>
  )
}

export default BusinessTag