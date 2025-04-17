import React, { useState } from 'react'
import BusinessTag from '../../Common/BusinessTag'

const ChooseImage = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageChange = (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setSelectedImage(reader.result);
        };
        reader.readAsDataURL(file);
      }
    }
  return (
    <>
     <section className='w-[263px] h-[37px] gap-[15px] flex items-center'>
         <div className='flex items-center gap-2'>
           <BusinessTag title={'Business Logo'}/>
           <div className='cursor-pointer w-[138px] h-[37px] gap-[15px]'>
             <label className='cursor-pointer w-[116px] h-[37px] rounded-[7px] border border-[#CCCCCC] bg-[#FFFFFF] p-[10px] gap-[10px] flex items-center justify-center'>
               <span className='w-[96px] h-[17px] font-[Inter] font-[400] text-[14px] leading-[100%] tracking-[0%] align-middle text-nowrap text-[#666666]'>Choose Image</span>
               <input
                 type="file"
                 accept="image/*"
                 onChange={handleImageChange}
                 className='hidden'
               />
             </label>
           </div>
         </div>
       </section>
    </>
  )
}

export default ChooseImage