import { formDataTypes } from './BookingForm'


const Confimation = ({ formData, next }: { formData: formDataTypes, goBack: () => void, next: () => void }) => {
  return (
    <>

      <div className='mb-5'>
        <span className="text-4xl text-amber-600 text-center block mb-5">Confirmation</span>
        <p>Please confirm below information is correct and accurate.</p>
      </div>

      <div className='flex flex-col gap-3 bg-gray-200 px-3 text-lg py-5'>
        <span className='text-2xl font-bold mb-'>Details</span>

        <div className='flex justify-between '>
          <span>Date:</span>
          <span>{formData.date}</span>
        </div>

        <div className='flex justify-between '>
          <span>Time:</span>
          <span>{formData.time}</span>
        </div>
        <div className='flex justify-between '>
          <span>Name:</span>
          <span>{formData.fullName}</span>
        </div>
        <div className='flex justify-between '>
          <span>Email:</span>
          <span>{formData.email}</span>
        </div>
        <div className='flex justify-between '>
          <span>Phone:</span>
          <span>{formData.phone}</span>
        </div>
      </div>


      <button
        onClick={next}
        className="bg-amber-600 text-white px-3 py-5 rounded-xl mt-5 w-full"
      >
        Submit
      </button>

    </>
  )
}

export default Confimation