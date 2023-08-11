import Link from "next/link";
import ComboBox from "./ComboBox";
import { useState } from "react";
import { countries } from "@/cache/countries";
import { useRouter } from "next/router";
import { bookReservation } from "@/services/api";
import Image from "next/image";

function Book(props) {

    const router = useRouter()

    const { isOpen, onClose, restaurantName } = props

    const [inputValue, setInputValue] = useState('')
    const [noInput, setNoInput] = useState(false)
    const [countryExists, setCountryExists] = useState(false)
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [validateName, setValidateName] = useState(false)
    const [validateEmail, setValidateEmail] = useState(false)
    const [toast, setToast] = useState(false)



    const created_at = new Date().toDateString()

    const handleSubmit = (e) => {
        e.preventDefault()
        // validate form input
        !name ? setValidateName(true) : setValidateName(false)
        !email ? setValidateEmail(true) : setValidateEmail(false)

        // if all required fields are filled
        if (name && email) {
            // send info to mongodb 
            bookReservation(name, email, restaurantName, created_at)
                .then((response) => {
                    console.log(response)
                })
                .catch((error) => {
                    console.log(error)
                })

            // show toast
            setToast(true)
            setTimeout(() => {
                setToast(false)

                // reset form
                setName("")
                setEmail("")
            }, 4000)
        }
    }



    if (!isOpen) return null;
    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="absolute inset-0 bg-black opacity-60" onClick={onClose}></div>
            <div className="bg-tertiary p-8 z-10">
                <h2 className="mb-4">Book a reservation at {restaurantName}. <br /> This is the first step. We will send you more information about reservation. </h2>
                <div className="w-full">
                    <div className="relative z-0 w-full mb-6 group">
                        <input value={name} onChange={e => setName(e.target.value)} type="text" name="firstName" id="firstName" className="block py-2.5 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-600 focus:outline-none focus:border-primary peer" placeholder=" " required />
                        <label htmlFor="firstName" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Name *</label>
                        {validateName ? <p className="text-red-500 text-xs">Name is required</p> : null}
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                        <input value={email} onChange={e => setEmail(e.target.value)} type="email" name="email" id="email" className="block py-2.5 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-600 focus:outline-none focus:border-primary peer" placeholder=" " required />
                        <label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address *</label>
                        {validateEmail ? <p className="text-red-500 text-xs">Email address is required</p> : null}
                    </div>
                </div>

                <div className="flex justify-end">
                    <button
                        className="mt-4 mr-4 px-4 py-2 bg-primary text-tertiary"
                        onClick={handleSubmit}
                    >
                        Submit
                    </button>

                    <button
                        className="mt-4 px-4 py-2  text-primary border border-primary"
                        onClick={onClose}
                    >
                        Cancel
                    </button>
                </div>

            </div>
            {toast && firstName ? <div id="toast" className="fixed flex items-center justify-center w-11/12 sm:w-full mx-auto max-w-2xl p-4 space-x-4 text-tertiary bg-gray-800 rounded shadow right-3 md:right-5 top-16 z-50 space-x" role="alert">
                <Image
                    src={'/checked.png'}
                    width={20}
                    height={20}
                    alt="success"
                />
                <div className="text-sm font-normal">Your reservation has been received. We will get back to you shortly.</div>
            </div> : null}
        </div>
    )
}

export default Book