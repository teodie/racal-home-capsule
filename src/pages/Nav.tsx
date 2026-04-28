import Image from 'next/image'
import { logo } from '../../public/assets/assets'
import Button from '@/components/Button'

const Nav = () => {
  return (
    <header>
      <nav className=' py-4 px-20 flex gap-10'>
        <Image src={logo.primary} alt='logo' />
        <ul className=' flex gap-10 items-center ml-auto text-xl font-medium'>
          <li><a href="">Home Capsules</a></li>
          <li><a href="">Features</a></li>
          <li><a href="">Visual Tour</a></li>
        </ul>
        <Button title='Book a visit' />
      </nav>
    </header>
  )
}

export default Nav