import React, { useState } from 'react'

export type formDataTypes =
  {
    fullName: string,
    phone: string,
    email: string,
    date: string,
    time: string
  }

const BookingForm = ({ setFormData, formData, next, error }:
  {
    formData: formDataTypes,
    setFormData: React.Dispatch<React.SetStateAction<formDataTypes>>,
    next: () => void, error: string
  }) => {

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }


  return (
    <>
      <span className="text-4xl text-amber-600 text-center block mb-5">Personal Info</span>
      <form className="flex flex-col gap-5">
        <div className="">
          <label htmlFor="fullname" className="block">Fullname <strong className="text-red-600">*</strong></label>
          <input
            type="text"
            name="fullname"
            value={formData.fullName}
            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            placeholder="Juan Dela Cruz"
            className={`w-full rounded-md block px-3 py-1.5 outline-1 outline-black/10 -outline-offset-1 focus:-outline-offset-2 focus:outline-amber-600 `} />
        </div>

        <div className="">
          <label htmlFor="phone" className="block">Phone <strong className="text-red-600">*</strong></label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
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
            value={formData.email}
            onChange={handleChange}
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
              value={formData.date}
              onChange={handleChange}
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
              value={formData.time}
              onChange={(e) => {
                console.log(e.target.value)
                setFormData({ ...formData, time: e.target.value })
              }}
              className="w-full rounded-md block px-3 py-1.5 outline-1 outline-black/10 -outline-offset-1
                focus:-outline-offset-2
                focus:outline-amber-600
                " />
          </div>
        </div>

        {
          error !== "" && <p className='text-md text-red-600 font-bold'>{error}</p>
        }
        <button
          type='button'
          onClick={next}
          className="bg-amber-600 text-white px-3 py-5 rounded-xl mt-5 text-center"
        >
          Next
        </button>
      </form>
    </>
  )
}

export default BookingForm