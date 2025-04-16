import React from 'react'
import MagicLink from './MagicLink'

const GenrateLink = () => {
  return (
   <>
   <div className='w-[495px] h-[278px] flex flex-col gap-[35px]'>
    <button className='w-[495px] h-[50px] border border-[#305aff] rounded-[7px] font-inter font-medium text-[18px] leading-[100%] tracking-[0%] text-center align-middle text-[#305aff]'>Continue with Google/Microsoft</button>
   <MagicLink/>
   </div>
   </>
  )
}

export default GenrateLink