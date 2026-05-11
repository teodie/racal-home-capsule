import { LucideIcon } from 'lucide-react'

const ContactCard = ({icon: Icon, label, details}: { icon : LucideIcon, label: string, details: string}) => {
  return (
    <div className='flex gap-5 items-center flex-col md:flex-row'>
      <div className='flex items-center md:ml-10'>
        <Icon size={30} className='text-amber-600' />
      </div>
      <div className='flex flex-col items-center md:items-start'>
        <span className='block text-md font-bold'>{label}</span>
        <span className='text-sm text-amber-600'>{details}</span>
      </div>
    </div>
  )
}

export default ContactCard