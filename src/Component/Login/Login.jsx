import React, { useState } from 'react'
import GenrateLink from './GenrateLink'
import Email from './Email'
import Header from './Header'
import { Link } from 'react-router-dom'
import DottedWave from '../Common/Dottedtopwave'
import Dottedbottom from '../Common/Dottedbottom'

const Login = () => {
  const [loginMethod, setLoginMethod] = useState('magic') 
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <div className="min-h-screen w-full bg-gray-50 flex flex-col items-center relative overflow-x-hidden">
      <DottedWave />
      <div className=" z-10 w-full flex flex-col items-center">
        <Header props={'Login'} />
        <div className="w-full max-w-[695px] min-h-[898px] bg-white rounded-lg shadow-md flex flex-col items-center absolute top-[205px]">
          <GenrateLink />
          <Email />
          <div className="flex items-center gap-2 font-[inter] text-base sm:text-lg font-normal absolute top-[805px] tracking-normal">
            <span className="text-gray-600">Don't have an account?</span>
            <Link to={'/register'} className="text-[#305AFF] hover:underline">Register now</Link>
          </div>
        </div>
      </div>
      <Dottedbottom/>
    </div>
  )
}

export default Login
