import React from 'react'
import Header from '../header/Header'
import Image from 'next/image'

const Basket = () => {
  return (
    <>
      <Header />
      <div className='p-10'>
        <div className='inline-flex gap-10'>
         <h1 className='font-bold text-4xl '>Basket</h1>
         <p className='mt-4 '>3 items</p>
        </div>

        {/* ---------- */}
        <div className='mt-6 h-[2px] bg-gray-300'></div>
         
         {/* -------- */}
        <div className='mt-12'>
          <div className=' w-[800px] bg-yellow-50 border  rounded-2xl inline-flex'>
           <Image
            src="/Assets/tomato.png"
            width={500}
            height={500}
            style={{objectFit:"contain"}}
            className='h-24 w-auto rounded-tl-2xl rounded-bl-2xl'
            alt="Picture of the author"
           />
           <div className='p-3'>
            <div className=' font-semibold flex justify-between' >
             <p >Heirloom tomato</p>
             <h2>$5.99</h2>
            </div>
            <h2>$5.99 /lb</h2>
           </div> 
          </div>
        </div>
      </div>

    </>
  )
}

export default Basket
