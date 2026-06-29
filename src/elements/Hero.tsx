'use client'
import Image from "next/image"
import { image } from "../../public/assets/assets"
import Button from "@/components/Button"
import Modal from "@/components/Modal"
import { useModal } from "@/hooks/useModal"


const Hero = () => {
  const { modalVisible, openModal, closeModal } = useModal()

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }

  return (
    <div className="">

      <div className="">

        {
          modalVisible && <Modal toggle={closeModal} />
        }

        <div className="min-h-75 relative md:min-h-dvh ">
          <Image src={image.hero} loading="eager" fill alt="" className="object-cover" />
          <span className="hidden bg-black/30 md:flex absolute inset-0 md:bg-linear-to-r from-black/90 via-black/5 via-70% to-transparent" />
        </div>



        <div className="items-start mx-5 text-start md:absolute inset-0 flex flex-col md:justify-center gap-4 md:items-center md:text-center md:mx-20 lg:max-w-4xl lg:items-start lg:text-start">
          <h1 className="text-2xl md:text-5xl lg:text-8xl font-bold text-[#333333]  md:text-white">Racal 5 Star Home Capsule</h1>
          <p className="text-sm md:text-xl  md:text-white">Experience compact luxury with Racal Home Capsule, designed for comfort, efficiency, and modern living. Enjoy panoramic views and smart design in a stylish, space-saving retreat.</p>

          <div className="flex gap-3">
            <Button action={openModal} title="Book a visit" />
            <Button action={scrollToContact} title="Inquire" background="bg-background" color="text-black" border="border border-gray-400" />
          </div>
        </div>
      </div>


    </div>
  )
}

export default Hero