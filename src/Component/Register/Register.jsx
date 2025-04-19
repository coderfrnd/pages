import React from 'react'
import Header from '../Login/Header'
import Input from '../Common/Input'
import Button from '../Common/Button'
import SocialLogin from '../Common/SocialLogin'
import Orcomponent from '../Common/Orcomponent'
import { Link } from 'react-router-dom'
import DottedWave from '../Common/Dottedtopwave'
import Dottedbottom from '../Common/Dottedbottom'

const Register = () => {
  return (
   <>
       <div className="min-h-screen w-full  bg-gray-50 flex flex-col items-center relative overflow-hidden">
         <DottedWave />
         <div className="relative z-10 w-full flex flex-col items-center">
           <Header props={'Register'}/>
           <div className="w-full max-w-[695px] min-h-[696px] bg-white rounded-lg shadow-md flex flex-col items-center absolute top-[200px] sm:px-8 md:px-12 lg:px-16 gap-8 mt-8">
            <div className='absolute top-[65px]'>
            <Input label={'Email Id'} placeholder={'robert.fox@myemail.com'} />
            </div>
            <div className='absolute top-[169px]'>
            <Input label={'Create Password'} placeholder={'Enter password'} />
            </div>
            <div className='absolute top-[272px]'>
            <Input label={'Confirm Password'} placeholder={'Re-enter password'}   type="password"  />
            </div>
            <div className='absolute top-[397px]'>
            <Button props={'Register'}/>
            </div>
            <div className='w-[550px] h-[88px] flex flex-col gap-[20px] absolute top-[477px]'>
              <Orcomponent/>
              <SocialLogin/>
            </div>
            <div className="flex items-center gap-2 font-[inter] text-base sm:text-lg font-normal tracking-normal absolute top-[610px]">
              <span className="text-gray-600">Already have an account?</span>
              <Link to={'/'} className="text-[#305AFF] hover:underline">Login</Link>
            </div>
           </div>
         </div>
         <Dottedbottom/>
       </div>
   </>
  )
}

export default Register