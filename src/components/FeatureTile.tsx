import Image from "next/image"

const FeatureTile = ({label, icon} : {label: string, icon : string}) => {
  return (
    <div className='lg:justify-center lg:h-40 md:border-amber-600 rounded-2xl flex flex-col items-center max-w-32 text-center md:border md:px-9 md:py-3 md:max-w-40'>
      <Image src={icon} alt="aluminum veneer" className='w-25 mb-2' />
      <h3 className='text-sm font-semibold'>{label}</h3>
    </div>
  )
}

export default FeatureTile