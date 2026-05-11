import Image from "next/image"
import { logo } from "../../public/assets/assets"
import { navigation } from "@/constants/navigation"

const Footer = () => {
  return (
    <div className='py-20 max-w-7xl m-auto'>
      <div className="flex flex-col items-center border-b border-black gap-3">
        <Image src={logo.primary} alt="Racal Home capsule logo" />
        <h3>racalhomecapsule@gmail.com</h3>
      </div>
      <div className="flex justify-between py-5">
        <h3>© 2026 Racal Home Capsule. All rights reserved.
        </h3>

        <ul className=' flex gap-4'>
          {
            navigation.map((nav) => (
              <li><a href={nav.href}>{nav.title}</a></li>
            ))
          }
        </ul>

      </div>
    </div>
  )
}

export default Footer