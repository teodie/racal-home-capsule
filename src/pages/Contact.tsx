import ContactCard from '@/components/ContactCard'
import PageTitle from '@/components/PageTitle'
import { PhoneCallIcon, MailsIcon, MapPinned } from 'lucide-react'

const Contact = () => {
  const contactDetails = [
    { icon: PhoneCallIcon, label: "Call", details: "0917-638-9327" },
    { icon: MailsIcon, label: "Email", details: "racalhomecapsule@gmail.com" },
    { icon: MapPinned, label: "Location", details: "Angat, Norzagaray, Bulacan" },
  ]

  return (
    <section id='contact'>
      <div>
        <PageTitle title='Contact' />
        <h2 className='text-2xl md:text-[40px] lg:text-5xl md:mb-4 lg:mb-6 font-bold text-center'>How can we help you?</h2>
      </div>

      <div className='h-full md:h-100
       grid grid-cols-1 mx-5 md:grid-cols-2 max-w-200 md:mx-auto bg-white'>
        <div className='flex flex-col mt-10 gap-y-10'>
          {
            contactDetails.map((contact) => (
              <ContactCard key={contact.details} icon={contact.icon} label={contact.label} details={contact.details} />
            ))
          }

        </div>

        <form action="" >
          <div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-6'>
            <div className='sm:col-span-full'>
              <label htmlFor="name" className="block text-sm/6 font-semibold ">Name</label>
              <div className='mt-2'>
                <input id='name' type="text" placeholder='juan Dela Cruz' className="block w-full rounded-md bg-amber-600/5 px-3 py-1.5 text-base text-black outline-1 -outline-offset-1 outline-black/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-amber-600 sm:text-sm/6 " />
              </div>
            </div>

            <div className='sm:col-span-full'>
              <label htmlFor="email" className="block text-sm/6 font-semibold ">Email</label>
              <div className='mt-2'>
                <input id='name' type="text" placeholder='juandelacruz@gmail.com' className="block w-full rounded-md bg-amber-600/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-black/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-amber-600 sm:text-sm/6" />
              </div>
            </div>

            <div className='sm:col-span-full'>
              <label htmlFor="message" className="block text-sm/6 font-semibold ">Message</label>
              <div className='mt-2'>
                <textarea id='name' placeholder='Enter your message here..' className="block w-full rounded-md bg-amber-600/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-black/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-amber-600 sm:text-sm/6" />
              </div>
            </div>
          </div>

        </form>
      </div>
    </section>
  )
}

export default Contact