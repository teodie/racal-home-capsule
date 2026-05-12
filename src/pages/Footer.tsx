import Image from "next/image"
import { logo } from "../../public/assets/assets"
import { navigation } from "@/constants/navigation"

const Footer = () => {
  return (
    <footer className='max-w-7xl mx-auto my-10'>
      <div className="flex flex-col items-center border-b border-black gap-3">
        <Image src={logo.primary} alt="Racal Home capsule logo" />
        <h3>racalhomecapsule@gmail.com</h3>
      </div>
      <div className="flex flex-col gap-3 md:flex-row items-center md:justify-between py-5 mx-5">
        <h3>© 2026 Racal Home Capsule. All rights reserved.
        </h3>

        <ul className=' flex gap-4'>
          {
            navigation.map((nav, index) => (
              <li key={index} ><a href={nav.href}>{nav.title}</a></li>
            ))
          }
        </ul>

      </div>
    </footer>
  )
}

export default Footer