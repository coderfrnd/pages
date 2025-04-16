import React, { useState } from 'react'

const Input = ({label, placeholder, type = "text"}) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const isPassword = type === "password";
  const inputType = isPassword ? (showPassword ? "text" : "password") : type;

  return (
    <>
    <section className='w-[495px] h-[74px] gap-[15px]'>
      <span className='w-[128px] h-[19px] font-["Inter"] font-normal text-[16px] leading-[100%] tracking-[0%] text-[#333333]'>
        {label}
      </span>
      <div className="relative">
        <input 
          type={inputType}
          className='w-[495px] h-[50px] rounded-[7px] border-[1px] border-[#cccccc] placeholder:h-[21px] placeholder:text-[17px] placeholder:w-[230px] pl-[15px] placeholder:font-["Inter"] placeholder:font-normal placeholder:leading-[100%] placeholder:tracking-[0%] placeholder:align-middle'
          placeholder={placeholder}
        />
        {isPassword && (
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 focus:outline-none hover:opacity-80 transition-opacity"
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            <img
              src="/icons/password-icon.svg"
              alt="Toggle password visibility"
              width="20"
              height="20"
              className="opacity-70"
              style={{ transform: showPassword ? 'scaleY(-1)' : 'none' }}
            />
          </button>
        )}
      </div>
    </section>
    </>
  )
}

export default Input