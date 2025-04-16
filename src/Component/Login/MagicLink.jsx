import React from 'react'
import Input from '../Common/Input'
import Orcomponent from '../Common/Orcomponent'

const MagicLink = () => {
  return (
  <>
  <div className='w-[495px] h-[193px] flex flex-col gap-[25px]'>
   <Input label={"Magic Link Login"} placeholder={"Enter Your Email"}/>
   <section className='w-[495px] h-[94px] flex flex-col gap-[20px]'>
    <button className='w-[495px] h-[50px] rounded-[10px] border-[1px] border-[#305aff] font-[inter] font-medium text-[18px] leading-[100%] tracking-[0%] text-center align-middle text-[#FFFFFF] cursor-pointer bg-gradient-to-r from-[rgba(48,90,255,0.8)] to-[#B5D2FF]'>Send Magic Link</button>
   </section>
  <Orcomponent/>

  </div>
  </>
  )
}

export default MagicLink