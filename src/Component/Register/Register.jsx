import React from 'react'
import Header from '../Login/Header'
import Input from '../Common/Input'
import Button from '../Common/Button'
import SocialLogin from '../Common/SocialLogin'
import Orcomponent from '../Common/Orcomponent'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
   <>
       <div className="min-h-screen w-full bg-gray-50 flex flex-col items-center">
       <Header props={'Register'}/>
       <div className='"w-full max-w-[695px] min-h-[550px] bg-white rounded-lg shadow-md flex flex-col items-center py-16 px-4 sm:px-8 md:px-12 lg:px-16 gap-8 mt-8'>
    <Input label={'Email Id'} placeholder={'robert.fox@myemail.com'} />
    <Input label={'Create Password'} placeholder={'Enter password'} />
    <Input label={'Confirm Password'} placeholder={'Re-enter password'} />
    <Button props={'Register'}/>
    <div className='w-[550px] h-[88px] flex flex-col gap-[20px]'>
      <Orcomponent/>
      <SocialLogin/>
    </div>
    {/* <Link */}
    <div className="flex items-center gap-2 font-[inter] text-base sm:text-lg font-normal tracking-normal">
          <span className="text-gray-600">Already have an account?</span>
          <Link to={'/'} className="text-[#305AFF] hover:underline">Login now</Link>
        </div>
       </div>
    </div>
   </>
  )
}

export default Register