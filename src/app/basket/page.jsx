import React from 'react'
import Header from '../header/Header'
import Image from 'next/image'
import { LuPencil } from "react-icons/lu";
import { BsArrowRight } from "react-icons/bs";

const Basket = () => {
  return (
    <>
      <Header />
      <div className='sm:p-10 px-6'>
        <div className='inline-flex gap-10'>
         <h1 className='font-bold text-4xl '>Basket</h1>
         <p className='mt-4 '>3 items</p>
        </div>

        {/* ---------- */}
        <div className='mt-6 h-[2px] bg-gray-300'></div>
         
         {/* -------- */}

         <div className="flex-row md:flex ">
          <div className='flex-row '>
            <div className='mt-12'>
              <div className='w-full sm:w-[800px] bg-yellow-50 border  rounded-2xl inline-flex'>
              <Image
                src="/Assets/tomato.png"
                width={500}
                height={500}
                style={{objectFit:"cover"}}
                className='h-32 w-24 rounded-tl-2xl rounded-bl-2xl'
                alt="Picture of the author"
              />
              <div className='p-3'>
                <div className=' font-semibold flex justify-between w-[180px] sm:gap-x-[540px] ' >
                <p >Heirloom tomato</p>
                <h2>$5.99</h2>
                </div>
                <h2>$5.99 /lb</h2>
                <div className='flex items-center justify-around gap-4 bg-white  w-24 rounded-2xl'>
                  <p>1 lb</p>
                  <LuPencil />
                </div>
              </div> 
              </div>
            </div>

            <div className='mt-6'>
              <div className=' w-full sm:w-[800px] bg-yellow-50 border  rounded-2xl inline-flex'>
              <Image
                src="/Assets/ginger.png"
                width={500}
                height={500}
                style={{objectFit:"cover"}}
                className='h-30 w-24 rounded-tl-2xl rounded-bl-2xl'
                alt="Picture of the author"
              />
              <div className='p-3'>
                <div className=' font-semibold flex justify-between w-[180px] sm:gap-x-[540px]' >
                <p >Heirloom tomato</p>
                <h2>$5.99</h2>
                </div>
                <h2>$5.99 /lb</h2>
                <div className='flex items-center justify-around gap-4 bg-white  w-24 rounded-2xl'>
                  <p>1 lb</p>
                  <LuPencil />
                </div>
              </div> 
              </div>
            </div>

            <div className='mt-6'>
              <div className=' w-full sm:w-[800px] bg-yellow-50 border  rounded-2xl inline-flex'>
              <Image
                src="/Assets/onion.png"
                width={500}
                height={500}
                style={{objectFit:"cover"}}
                className='h-32 w-24 rounded-tl-2xl rounded-bl-2xl'
                alt="Picture of the author"
              />
              <div className='p-3'>
                <div className=' font-semibold flex justify-between w-[180px] sm:gap-x-[540px]' >
                <p >Heirloom tomato</p>
                <h2>$5.99</h2>
                </div>
                <h2>$5.99 /lb</h2>
                <div className='flex items-center justify-around gap-4 bg-white  w-24 rounded-2xl'>
                  <p>1 lb</p>
                  <LuPencil />
                </div>
              </div> 
              </div>
            </div>

        
          </div>
          <div className="bg-yellow-50 sm:w-72 h-60 p-3 mt-12 sm:ml-36 border rounded-2xl ">
            <div>
              <h2 className='font-semibold'>Order Summary</h2>
            </div>
            <div className='mt-2 flex gap-36'>
              <p>Subtotal</p>
              <p>$27.44</p>
            </div>
            <div className='mt-2 flex gap-36'>
              <p>Subtotal</p>
              <p>$27.44</p>
            </div>
            <div className='mt-2 flex gap-36'>
              <p>Subtotal</p>
              <p>$27.44</p>
            </div>
            <div className='mt-2 flex gap-36'>
              <p>Subtotal</p>
              <p>$27.44</p>
            </div>

            <div className='bg-green-600 w-64 mt-4 rounded-md'>
              <div className='flex items-center justify-between px-3 py-2 text-white '>
                <h3>Continue to Payment</h3>
                <BsArrowRight />
              </div>
            </div>
          </div>
        </div>  
    
        
      </div>

    </>
  )
}

export default Basket
