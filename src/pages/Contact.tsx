import ContactCard from '@/components/ContactCard'
import GoogleMap from '@/components/GoogleMap'
import PageTitle from '@/components/PageTitle'
import { PhoneCallIcon, MailsIcon, MapPinned } from 'lucide-react'

const Contact = () => {
  const contactDetails = [
    { icon: PhoneCallIcon, label: "Call", details: "0917-638-9327" },
    { icon: MailsIcon, label: "Email", details: "racalhomecapsule@gmail.com" },
    { icon: MapPinned, label: "Location", details: "Angat, Norzagaray, Bulacan" },
  ]

  return (
    <section id='contact' className='scroll-mt-20'>
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

        <GoogleMap />
      </div>
    </section>
  )
}

export default Contact