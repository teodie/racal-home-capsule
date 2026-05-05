import PageTitle from '@/components/PageTitle'
import Image from 'next/image'
import { capsule } from '../../public/assets/assets'
import { CircleSmall } from 'lucide-react'

const VisualTour = () => {

  const capsule_areas = [
    { image: capsule.home_capsule, alt: "Front view", span: "col-span-full" },
    { image: capsule.bed, alt: "bed", span: "col-span-2" },
    { image: capsule.sala, alt: "sala", span: "col-span-1" },
  ]

  return (
    <section id='visualtour'>

      <div className=' text-center'>
        <PageTitle title='Visual Tour' />
        <h2 className='text-2xl md:text-[40px] lg:text-5xl md:mb-4 lg:mb-6 font-bold'>Experience Luxury with Nature</h2>
      </div>

      <div className='flex flex-col lg:grid lg:grid-cols-2 '>

        <div className='order-2 grid gap-5 grid-cols-1'>
          <div className='relative'>
            <Image src={capsule.home_capsule} fill className="object-cover" alt='frontview'></Image>
          </div>

        </div>

        <div className='mb-10 lg:order-1 lg:p-10'>
          <div>
            <Image src={capsule.layout} alt='layout'></Image>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-3 md:my-5 md:h-8 gap-4 p-3'>
            <div className='border border-amber-600 flex  h-full  md:col-span-2'>
              <span className='h-full flex items-center bg-amber-600 text-white px-3 text-center'>Product Dimension</span>
              <span className='h-full flex items-center pl-2'>L: 5.8m W: 3.1m H: 3.2m</span>
            </div>
            <div className='border border-amber-600 flex h-full items-center '>
              <span className='bg-amber-600 h-full flex items-center text-white px-3 '> Area </span>
              <span className='pl-2 flex items-center '>18m <sup>2</sup></span>
            </div>

          </div>

          <div className='mx-3 lg:mx-0'>
            <h3 className='text-2xl font-bold mb-2 mt-5'>The Racal 5-Star Home Capsule</h3>
            <p className='text-xl'>Step into a futuristic sanctuary designed for the ultimate escape. The Racal 5-Star Home Capsule blends sleek, aerospace-grade aluminum with an expansive panoramic balcony, offering an unobstructed front-row seat to nature's beauty.</p>

    
          </div>

        </div>

        <div className='gap-5 grid grid-cols-1 mx-3 lg:grid-cols-3 '>
          {
            capsule_areas.map((area) => (
              <div key={area.alt} className={`h-60 md:h-85 relative ${area.span}`}>
                <Image src={area.image} fill className='object-cover' alt={area.alt}></Image>
              </div>
            ))
          }
        </div>

      </div>
    </section>
  )
}

export default VisualTour