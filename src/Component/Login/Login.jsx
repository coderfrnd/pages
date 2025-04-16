import React, { useState } from 'react'
import GenrateLink from './GenrateLink'
import Email from './Email'
import Header from './Header'
import { Link } from 'react-router-dom'

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
    <div className="min-h-screen w-full bg-gray-50 flex flex-col items-center">
      <Header props={'Login'} />
      <div className="w-full max-w-[695px] min-h-[550px] bg-white rounded-lg shadow-md flex flex-col items-center py-8 px-4 sm:px-8 md:px-12 lg:px-16 gap-8 mt-8">
        <GenrateLink />
        <Email />
        <div className="flex items-center gap-2 font-[inter] text-base sm:text-lg font-normal tracking-normal">
          <span className="text-gray-600">Don't have an account?</span>
          <Link to={'/register'} className="text-[#305AFF] hover:underline">Register now</Link>
        </div>
      </div>
    </div>
  )
}

export default Login
