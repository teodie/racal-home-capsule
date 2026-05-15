
const Modal = () => {
  const handleSubmit = async () => {
    "use server"
    alert("The handle submit runs")
  }

  return (
    <div className='absolute inset-0 z-30 bg-white/10 backdrop-blur-[5px]  flex items-center justify-center'>
      <div className='py-5 w-105 bg-white rounded-3xl px-5'>
        <span className="text-4xl text-amber-600 text-center block mb-5">Personal Info</span>
        <form action={handleSubmit} className="flex flex-col gap-5">
          <div className="">
            <label htmlFor="name" className="block">Name <strong className="text-red-600">*</strong></label>
            <input
              type="text"
              name="name"
              placeholder="Juan Dela Cruz"
              className="w-full rounded-md block px-3 py-1.5 outline-1 outline-black/10 -outline-offset-1 
              focus:-outline-offset-2
              focus:outline-amber-600
              " />
          </div>

          <div className="">
            <label htmlFor="name" className="block">Phone <strong className="text-red-600">*</strong></label>
            <input
              type="tel"
              name="phone"
              placeholder="0975456797"
              className="w-full rounded-md block px-3 py-1.5 outline-1 outline-black/10 -outline-offset-1 
              focus:-outline-offset-2
              focus:outline-amber-600
              " />
          </div>

          <div className="">
            <label htmlFor="email" className="block">Email </label>
            <input
              type="email"
              name="email"
              placeholder="juandelacruz@gmail.com"
              className="w-full rounded-md block px-3 py-1.5 outline-1 outline-black/10 -outline-offset-1 
              focus:-outline-offset-2
              focus:outline-amber-600
              " />
          </div>

          <div className="flex gap-5">
            <div className="">
              <label htmlFor="email" className="block">Date <strong className="text-red-600">*</strong></label>
              <input
                type="date"
                name="date"
                className="w-full rounded-md block px-3 py-1.5 outline-1 outline-black/10 -outline-offset-1
                focus:-outline-offset-2
                focus:outline-amber-600
                " />
            </div>
            <div className="">
              <label htmlFor="time" className="block">Time <strong className="text-red-600">*</strong></label>
              <input
                type="time"
                name="time"
                className="w-full rounded-md block px-3 py-1.5 outline-1 outline-black/10 -outline-offset-1
                focus:-outline-offset-2
                focus:outline-amber-600
                " />
            </div>
          </div>

          <button
          type="submit"
          className="bg-amber-600 text-white px-3 py-5 rounded-xl mt-5"
          >
            Submit
          </button>
  

          
        </form>
      </div>
    </div>
  )
}

export default Modal