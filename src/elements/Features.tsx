import FeatureTile from '@/components/FeatureTile'
import { capsule, icons } from '../../public/assets/assets'
import Image from 'next/image'
import PageTitle from '@/components/PageTitle'

const Features = () => {
  const features = [
    {lable: "Aluminum Veneer Shell", icon : icons.aluminum},
    {lable: "Smart Home System", icon : icons.smartHome},
    {lable: "Large View Balcony", icon: icons.window}
  ]

  return (
    <section id='features' className='scroll-mt-20'>
     <PageTitle title='Features' />
      <div className='md:grid md:grid-cols-1 lg:grid-cols-6 lg:grid-rows-4'>
      
        <div className='lg:col-start-1 lg:col-end-4 lg:row-span-full
        z-0 row-start-1 row-end-3 col-start-1 col-end-2 md:mx-0 md:h-120 md:mb-0 md:rounded-none 0 rounded-2xl relative overflow-hidden h-75 bg-blue-500 mx-5 mb-10'>
          <Image src={capsule.front_view} alt="" fill className='object-cover scale-105' />
          <span className='hidden md:flex lg:hidden absolute inset-0 bg-black/50' />
        </div>
        <div className='lg:col-start-4 lg:col-end-7 lg:row-start-1 lg:row-end-3 lg:items-start lg:text-start mx-5 md:items-center lg:mx-0 md:text-center md:px-10 justify-center row-start-1 z-10 row-end-3 col-start-1 col-end-2  flex flex-col gap-3 '>
          <h2 className="text-3xl md:text-5xl font-bold text-black  md:text-white lg:text-black ">Elevate Your Escape</h2>
          <p className="text-sm font-bold md:text-xl md:font-medium text-[#333333]  md:text-white lg:text-black">Luxury Meets the Wild. Experience the perfect blend of high-end design and panoramic immersion. Crafted with a sleek aluminum shell and a robust galvanized steel core, the Racal Capsule is engineered for elegance and built to last.</p>
        </div>
        <div className='flex justify-evenly lg:mt-0 lg:col-start-4 lg:col-end-7  mt-12 lg:row-start-3 lg:row-end-5'>
          {
            features.map( (feature) => (
              <FeatureTile key={feature.lable} label={feature.lable} icon={feature.icon} />
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Features