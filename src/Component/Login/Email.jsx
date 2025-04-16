import React from 'react'
import Input from '../Common/Input'
import Button from '../Common/Button'
import Orcomponent from '../Common/Orcomponent'
import SocialLogin from '../Common/SocialLogin'

const Email = () => {
  return (
<>
<div className='w-[495px] h-[410px] flex flex-col gap-[40px]'>
  <div className='w-[495px] h-[217px] flex flex-col gap-[15px]'>
  <div className='w-[495px]  flex flex-col gap-[30px]'>
<Input label={"Email Login"} placeholder={"robert.fox@myemail.com"} />
<Input label={"Password"} placeholder={"Enter Password"} />
</div>
<div className="flex justify-between items-center w-full">
  <label className="flex items-center gap-2 cursor-pointer">
    <input type="checkbox" className="w-[24px] h-[24px] border border-[#CCCCCC] rounded" />
    <span className="text-[#333333] text-[17px] font-[400]">Remember Me</span>
  </label>
  <a href="#" className="text-[#305AFF] text-[17px] w-[144px] h-[21px] font-normal hover:underline">Forgot password?</a>
</div>
  </div>
  <div className='w-[495px] h-[153px] flex flex-col gap-[20px]' >
  <Button props={"Login"}/>
  <div className='h-[83px] flex flex-col gap-[15px]'>
    <Orcomponent/>
   <SocialLogin/>
  </div>
  </div>
</div>

</>
  )
}

export default Email