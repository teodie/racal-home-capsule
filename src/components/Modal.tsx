import { ReactNode, useState } from "react"
import { CircleX, ChevronLeft } from 'lucide-react'
import BookingForm from "./BookingForm"
import Confimation from "./Confimation"

const INITIAL_FORM_STATE = {
  fullName: "",
  phone: "09",
  email: "",
  date: "",
  time: ""
};

const Modal = ({ toggle }: { toggle: () => void }) => {

  

  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState(INITIAL_FORM_STATE)
  const [error, setError] = useState("")

  const resetFormData = () => {
    setFormData(INITIAL_FORM_STATE)
  }

  const handleBack = () => {
    setStep((prev) => prev - 1)
  }

  const isFullNameValid = () => {
    if (formData.fullName === "") {
      setError("Please fill up the fullname field")
      return false
    }

    return true
  }

  const isPhoneValid = () => {
    if (formData.phone.length !== 11 || formData.phone === '') {
      setError("Please fill the phone field")
      return false
    }

    return true
  }

  const isDateValid = () => {
    if (formData.date === "") {
      setError("Please select your prefered date")
      return false
    }

    return true
  }

  const isTimeValid = () => {
    if (formData.time === "") {
      setError("Please select a time")
      return false
    }

    return true
  }

  const isEmailValid = () => {
    const regexMail = /\w*@gmail.com/

    if (!regexMail.test(formData.email)) {
      console.log("email is invalid")
      setError('Please provide a valid email')
      return false
    }

    return true
  }

  const validated = () => {
    if (
      isFullNameValid()
      && isPhoneValid()
      && isEmailValid()
      && isDateValid()
      && isTimeValid()
    ) return true

    return false
  }

  const submitBooking = async () => {
    await fetch('/api/booking', {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData)
    })
  }


  return (
    <div className='absolute inset-0 z-100 bg-white/10 backdrop-blur-[5px]  flex items-center justify-center'>
      <div className='py-5 w-105 bg-white rounded-3xl px-5 relative'>
        {
          step === 2 &&
          <span onClick={handleBack} className=" cursor-pointer absolute top-5 left-5">
            <ChevronLeft size={35} />
          </span>
        }
        <span onClick={close} className=" cursor-pointer absolute top-5 right-5">
          <CircleX onClick={() => {
            resetFormData()
            toggle()
          }} size={35} />
        </span>
        {
          step === 1
          && <BookingForm
            formData={formData}
            setFormData={setFormData}
            error={error}
            next={() => {
              if (validated()) {
                setStep(2)
              }

            }} />
        }
        {
          step === 2
          &&
          <Confimation
            formData={formData}
            goBack={() => setStep(1)}
            next={() => {
              submitBooking()
              setStep(3)
            }}
          />
        }
        {
          step === 3
          &&
          <div>
            <span className="text-4xl text-amber-600 text-center block mb-5">Thank you!</span>
            <p className="text-lg text-gray-600">{`Hi ${formData.fullName} Looking forward on your visit on ${formData.date}`}</p>
          </div>
        }
      </div>
    </div>
  )
}

export default Modal