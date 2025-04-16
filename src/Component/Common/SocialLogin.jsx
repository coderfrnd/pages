import React from 'react'

const SocialLogin = () => {
  return (
  <>
   <div className="flex justify-center gap-[10px]">
      <button className="p-[8px] h-[44px] w-[44px] rounded-[30px] bg-[#F5F5FA] hover:bg-gray-50 ">
        <img src="/icons/google-icon.svg" alt="Google" className="w-[28px] h-[28px]" />
      </button>
      <button className="p-[8px] h-[44px] w-[44px] rounded-[30px] bg-[#F5F5FA] hover:bg-gray-50 ">
        <img src="/icons/facebook-icon.svg" alt="Facebook" className="w-[28px] h-[28px]" />
      </button>
      <button className="p-[8px] h-[44px] w-[44px] rounded-[30px] bg-[#F5F5FA] hover:bg-gray-50">
        <img src="/icons/x-icon.svg" alt="X" className="w-[28px] h-[28px]" />
      </button>
      <button className="p-[8px] h-[44px] w-[44px] rounded-[30px] bg-[#F5F5FA] hover:bg-gray-50  ">
        <img src="/icons/linkedin-icon.svg" alt="LinkedIn" className="w-[28px] h-[28px]" />
      </button>
    </div>
  </>
  )
}

export default SocialLogin