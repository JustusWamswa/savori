import { Poppins } from "next/font/google"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { submitForm } from "@/services/api"

function Contact() {

  // states
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [message, setMessage] = useState("")
  const [toast, setToast] = useState(false)
  const [validateFirstName, setValidateFirstName] = useState(false)
  const [validateLastName, setValidateLastName] = useState(false)
  const [validateEmail, setValidateEmail] = useState(false)
  const [validateMessage, setValidateMessage] = useState(false)

  const created_at = new Date().toDateString()

  const handleSubmit = (e) => {
    e.preventDefault()
    // validate form input
    !firstName ? setValidateFirstName(true) : setValidateFirstName(false)
    !email ? setValidateEmail(true) : setValidateEmail(false)
    !lastName ? setValidateLastName(true) : setValidateLastName(false)
    !message ? setValidateMessage(true) : setValidateMessage(false)

    // if all required fields are filled
    if (firstName && lastName && email && message) {
      // send info to mongodb 
      submitForm(firstName, lastName, email, phone, message, created_at)

      // show toast
      setToast(true)
      setTimeout(() => {
        setToast(false)

        // reset form
        setFirstName("")
        setLastName("")
        setEmail("")
        setPhone("")
        setMessage("")
      }, 4000)
    }
  }

  return (
    <>
      <div className="flex justify-center items-center min-h-screen bg-secondary sm:bg-primary 
    before:absolute before:left-0 before:w-full sm:before:w-1/2 before:h-full before:bg-secondary">
        <div className="relative w-[70rem] sm:h-[40rem] md:h-[35rem] flex flex-col-reverse sm:flex-row z-50">
          <div className="sm:absolute top-12 w-11/12 mb-12 sm:mb-0 mx-auto sm:w-80 md:w-96 sm:h-[calc(100%-5rem)] bg-primary z-10 p-10 flex flex-col justify-between sm:shadow-2xl sm:shadow-black">
            <div>
              <h1 className="text-tertiary font-thin text-medium tracking-widest">CONTACT INFO</h1>
              <hr className="w-16 mt-1" />
              <ul className="text-tertiary relative py-5">
                <li className="relative flex py-5 items-center">
                  <span>
                    <Image
                      src="/pin.png"
                      width={30}
                      height={30}
                      alt="pin"
                    />
                  </span>
                  <span className="pl-6">
                    African Leadership College, <br />
                    Powder Mill Rd, <br />
                    Pamplemousses, 21001 <br />
                    Mauritius
                  </span>
                </li>
                <li className="relative flex py-5 items-center">
                  <span>
                    <Image
                      src="/email.png"
                      width={30}
                      height={30}
                      alt="email"
                    />
                  </span>
                  <span className="pl-6">
                    savori@info.org
                  </span>
                </li>
                <li className="relative flex py-5 items-center">
                  <span>
                    <Image
                      src="/phone.png"
                      width={30}
                      height={30}
                      alt="phone number"
                    />
                  </span>
                  <span className="pl-6">
                    +230 57 76 10 82
                  </span>
                </li>
              </ul>
            </div>
            <ul className="relative flex justify-evenly">
              <li>
                <Image
                  src="/facebook.png"
                  width={30}
                  height={30}
                  alt="facebook"
                  title="coming soon ..."
                  className="hover:scale-105 cursor-pointer"
                />
              </li>
              <li>
                <Image
                  src="/pinterest.png"
                  width={30}
                  height={30}
                  alt="pinterest"
                  title="coming soon ..."
                  className="hover:scale-105 cursor-pointer"
                />
              </li>
              <li>
                <Image
                  src="/instagram.png"
                  width={30}
                  height={30}
                  alt="instagram"
                  title="coming soon ..."
                  className="hover:scale-105 cursor-pointer"
                />
              </li>
              <li>
                <Image
                  src="/twitter.png"
                  width={30}
                  height={30}
                  alt="twitter"
                  title="coming soon ..."
                  className="hover:scale-105 cursor-pointer"
                />
              </li>
              <li>
                <Image
                  src="/linkedin.png"
                  width={30}
                  height={30}
                  alt="linkedin"
                  title="coming soon ..."
                  className="hover:scale-105 cursor-pointer"
                />
              </li>
            </ul>
          </div>
          <div className="sm:absolute mt-12 sm:mt-0 py-16 px-12 pl-4 sm:pl-52 md:pl-64 mx-auto sm:ml-36 w-11/12 sm:w-[calc(100%-150px)] h-full bg-tertiary sm:shadow-2xl sm:shadow-black">
            <h1 className="text-3xl text-zinc-700 font-bold px-5 text-center">Reach Out</h1>
            <form method="post" className="pt-10 px-5">
              <div className="grid md:grid-cols-2 md:gap-6">
                <div className="relative z-0 w-full mb-6 group">
                  <input value={firstName} onChange={e => setFirstName(e.target.value)} type="text" name="firstName" id="firstName" className="block py-2.5 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-600 focus:outline-none focus:border-primary peer" placeholder=" " required />
                  <label htmlFor="firstName" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First name *</label>
                  {validateFirstName ? <p className="text-red-500 text-xs">First name is required</p> : null}
                </div>
                <div className="relative z-0 w-full mb-6 group">
                  <input value={lastName} onChange={e => setLastName(e.target.value)} type="text" name="lastName" id="lastName" className="block py-2.5 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-600 focus:outline-none focus:border-primary peer" placeholder=" " required />
                  <label htmlFor="lastName" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last name *</label>
                  {validateLastName ? <p className="text-red-500 text-xs">Last name is required</p> : null}
                </div>
              </div>
              <div className="grid md:grid-cols-2 md:gap-6 py-3">
                <div className="relative z-0 w-full mb-6 group">
                  <input value={email} onChange={e => setEmail(e.target.value)} type="email" name="email" id="email" className="block py-2.5 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-600 focus:outline-none focus:border-primary peer" placeholder=" " required />
                  <label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address *</label>
                  {validateEmail ? <p className="text-red-500 text-xs">Email address is required</p> : null}
                </div>
                <div className="relative z-0 w-full mb-6 group">
                  <input value={phone} onChange={e => setPhone(e.target.value)} type="tel" name="phoneNumber" id="phoneNumber" className="block py-2.5 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-600 focus:outline-none focus:border-primary peer" placeholder=" " />
                  <label htmlFor="phoneNumber" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone number</label>
                </div>
              </div>
              <div className="relative z-0 w-full mb-6 group">
                <textarea value={message} onChange={e => setMessage(e.target.value)} cols="30" rows="4" name="message" id="message" className="block py-2.5 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-600 focus:outline-none focus:border-primary peer" placeholder=" " required />
                <label htmlFor="message" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter your messsage *</label>
                {validateMessage ? <p className="text-red-500 text-xs">Message is required</p> : null}
              </div>
              <div className="flex justify-center">
                <button type="submit" onClick={handleSubmit} className="text-white bg-primary hover:bg-slate-700 focus:outline-none font-light text-sm w-full sm:w-3/5 px-5 py-2.5 text-center">SUBMIT</button>
              </div>

            </form>
          </div>
        </div>
      </div>
      {toast && firstName ? <div id="toast" className="fixed flex items-center justify-center w-11/12 sm:w-full mx-auto max-w-2xl p-4 space-x-4 text-tertiary bg-gray-800 rounded shadow right-3 md:right-5 top-16 z-50 space-x" role="alert">
        <Image
          src={'/checked.png'}
          width={20}
          height={20}
          alt="success"
        />
        <div className="text-sm font-normal">Hello {firstName}, your message has been received. We will get back to you within 3 working days.</div>
      </div> : null}
      <div className="w-full md:h-[100vh]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14987.06700871494!2d57.5624505!3d-20.1020349!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x217c5522a5ca9c1f%3A0x3bdb9ec034be93fa!2sAfrican%20Leadership%20College!5e0!3m2!1sen!2smu!4v1688651359672!5m2!1sen!2smu"
          width="100%"
          height="100%"
          loading="eager"
          title="map direction to ALC"
          className="rounded h-[50vh] md:h-full"
        />
      </div>
    </>


  )
}

export default Contact