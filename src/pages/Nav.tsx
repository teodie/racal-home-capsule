'use client'
import Image from 'next/image'
import { logo } from '../../public/assets/assets'
import Button from '@/components/Button'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false)

  const openMenu = () => setIsOpen(true)

  const closeMenu = () => setIsOpen(false)
  

  return (
    <header>
      <nav className=' px-5 md:px-10 lg:px-20 flex gap-10 m-auto items-center'>
        <Image src={logo.primary} alt='logo' className='mr-auto' />

        <ul className='hidden md:flex text-sm font-medium gap-10'>
          <li><a href="">Home Capsules</a></li>
          <li><a href="#features">Features</a></li>
          <li><a href="#visualtour">Visual Tour</a></li>
        </ul>

        <div className='hidden lg:flex gap-15'>
          <Button title='Book a visit' />
        </div>

        <Menu size={40} className='md:hidden' onClick={openMenu} />
        <div className={`${isOpen ? "translate-0" : "translate-x-80"} absolute top-0 right-0  z-1 w-80 border-l border-gray-500 transition-transform duration-300`}>

          <ul className=' flex flex-col text-white font-bold tracking-wide text-center'>
            <li className=' bg-white/10 backdrop-blur-[2px]  py-5  flex justify-start border-b border-gray-500 pl-5 pr-5'>  <X size={40} className=' text-black' onClick={closeMenu} /></li>
            <li className='  bg-white/10 backdrop-blur-[2px] py-5 border-b border-gray-500 pl-5  '><a href="">Home</a></li>
            <li className='  bg-white/10 backdrop-blur-[2px] py-5 border-b border-gray-500 pl-5  '><a href="">About</a></li>
            <li className='  bg-white/10 backdrop-blur-[2px] py-5 border-b border-gray-500 pl-5  '><a href="">Contact</a></li>
          </ul>
        </div>

      </nav>

    </header>
  )
}

export default Nav