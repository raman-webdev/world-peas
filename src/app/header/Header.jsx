'use client'
import Link from 'next/link'
import React from 'react'
const Header = () => {
  return (
    <>
      <div className='p-10 flex justify-between'>
        <div>
          <h1 className='text-green-500 font-semibold'>World Peas</h1>
        </div>
        <div>
          <ul className='flex gap-4'>
            <li>Shop</li>
            <li>Newstand</li>
            <li>Who we are</li>
            <li>My Profile</li>
            <div className='bg-green-700 w-20 text-center text-white rounded'>
              <Link href="/basket">Basket(3)</Link>
              
            </div> 
          </ul>
        </div>
      </div>
    </>
  )
}

export default Header
