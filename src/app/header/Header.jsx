'use client'
import Link from 'next/link'
import React from 'react'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { IoMenuOutline } from "react-icons/io5";

const Header = () => {
  return (
    <>
      <div className='px-6 sm:py-8 py-3 flex justify-between'>
        <Link href={"/"}>
        <h1 className='text-green-500 font-semibold'>World Peas</h1>
        </Link>
        <div className='hidden sm:flex'>
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
        
        <div className='sm:hidden'>
        <Sheet>
  <SheetTrigger>
  <IoMenuOutline className='h-6 w-6' />
  </SheetTrigger>
  <SheetContent>
  <div>
          <ul className='flex-row'>
            <li>Shop</li>
            <li>Newstand</li>
            <li>Who we are</li>
            <li>My Profile</li>
            <div className='bg-green-700 w-20 text-center text-white rounded'>
              <Link href="/basket">Basket(3)</Link>
              
            </div> 
          </ul>
        </div>
  </SheetContent>
</Sheet>
        </div>

      </div>
    </>
  )
}

export default Header
