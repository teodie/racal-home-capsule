'use client'
import Image from 'next/image'
import { logo } from '../../public/assets/assets'
import Button from '@/components/Button'
import { Menu, PhoneCallIcon, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { navigation } from '@/constants/navigation'
import { useModal } from '@/hooks/useModal'

const Nav = () => {
  const { openModal } = useModal()

  const [isOpen, setIsOpen] = useState(false)
  const openMenu = () => setIsOpen(true)
  const closeMenu = () => setIsOpen(false)

  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])


  return (
    <header>
      <nav className={`px-5 md:px-10 lg:px-20 flex gap-10 m-auto items-center fixed bg-white z-50 top-0 left-0 right-0 ${isScrolled && "bg-white/70 backdrop-blur-md border-b border-gray-300 shadow-md"}`}>
        <Image src={logo.primary} alt='logo' className='mr-auto' />

        <ul className='hidden md:flex text-sm font-medium gap-10'>
          {
            navigation.map((nav, index) => (
              <li key={index} className='relative'>
                <a href={nav.href} className='hover:text-amber-600 before:bg-amber-600 hover:before:w-full  before:h-1 before:w-0 before:absolute before:-bottom-2 before:origin-left before:transition-all duration-1000'>{nav.title}</a></li>
            ))
          }
        </ul>

        <div className='hidden lg:flex gap-3'>
          <div className='flex items-center gap-2'>
            <PhoneCallIcon size={20} className='text-amber-600' />
            <span className=' text-amber-600 text-bold text-xl'>0917-638-9327</span></div>
          <Button action={openModal} title='Book a visit' />
        </div>

        <Menu size={40} className='md:hidden' onClick={openMenu} />
        <div className={`${isOpen ? "translate-0" : "translate-x-80"} absolute top-0 right-0  z-1 w-80 border-l border-gray-500 transition-transform duration-300`}>

          <ul className=' flex flex-col text-white font-bold tracking-wide text-center'>
            <li className=' bg-white/10 backdrop-blur-[2px]  py-5  flex justify-start border-b border-gray-500 pl-5 pr-5'>  <X size={40} className=' text-black' onClick={closeMenu} /></li>
            {
              navigation.map((nav, index) => (
                <li key={index} className=' bg-white/10 backdrop-blur-[2px] py-5 border-b border-gray-500 pl-5 '><a onClick={closeMenu} href={nav.href}>{nav.title}</a></li>
              ))
            }

          </ul>
        </div>

      </nav>

    </header>
  )
}

export default Nav