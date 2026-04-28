import Image from "next/image"
import { image } from "../../public/assets/assets"
import Button from "@/components/Button"


const Hero = () => {
  return (
    <div className="bg-red-400 ">

      <div className="relative">

        <div className="bg-blue-300 relative min-h-dvh ">
          <Image src={image.hero} fill alt="" className="object-cover" />
        </div>

        <span className="absolute inset-0 bg-linear-to-r from-black/90
           via-black/5 via-70% to-transparent" />

        <div className="absolute inset-0 flex flex-col justify-center gap-4 max-w-4xl mx-20">
          <h1 className="text-8xl font-bold  text-white">Racal 5 Star Home Capsule</h1>
          <p className="text-xl text-gray-300">Experience compact luxury, designed for comfort, efficiency, and modern living. Enjoy panoramic views and smart design in a stylish, space-saving retreat.</p>

          <div className="flex gap-3">
            <Button title="Book a visit" />
            <Button title="Inquire" background="bg-background" color="text-black" border="border border-gray-400"/>
          </div>
        </div>
      </div>


    </div>
  )
}

export default Hero