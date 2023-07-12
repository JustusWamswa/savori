import { Poppins } from "next/font/google"
import Image from "next/image"
import Link from "next/link"

function Contact() {

  return (
    <div className="flex justify-center items-center min-h-screen bg-primary 
    before:absolute before:left-0 before:w-1/2 before:h-full before:bg-secondary">
      <div className="relative min-w-[70rem] min-h-[35rem] flex z-50">
        <div className="absolute top-12 w-96 h-[calc(100%-80px)] bg-primary z-10 p-10 flex flex-col justify-between shadow-2xl shadow-black">
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
                title="coming soon ..."
                className="hover:scale-105 cursor-pointer"
              />
            </li>
            <li>
              <Image
                src="/pinterest.png"
                width={30}
                height={30}
                title="coming soon ..."
                className="hover:scale-105 cursor-pointer"
              />
            </li>
            <li>
              <Image
                src="/instagram.png"
                width={30}
                height={30}
                title="coming soon ..."
                className="hover:scale-105 cursor-pointer"
              />
            </li>
            <li>
              <Image
                src="/twitter.png"
                width={30}
                height={30}
                title="coming soon ..."
                className="hover:scale-105 cursor-pointer"
              />
            </li>
            <li>
              <Image
                src="/linkedin.png"
                width={30}
                height={30}
                title="coming soon ..."
                className="hover:scale-105 cursor-pointer"
              />
            </li>
          </ul>
        </div>
        <div className="absolute py-16 px-12 pl-64 ml-36 w-[calc(100%-150px)] h-full bg-tertiary shadow-2xl shadow-black">
          <h1 className="text-3xl text-zinc-700 font-bold px-5 text-center">Reach Out</h1>
          <form className="pt-10 px-5">
            <div className="grid md:grid-cols-2 md:gap-6">
              <div className="relative z-0 w-full mb-6 group">
                <input type="text" name="fName" id="fName" className="block py-2.5 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-600 focus:outline-none focus:border-primary peer" placeholder=" " required />
                <label for="fName" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First name *</label>
              </div>
              <div className="relative z-0 w-full mb-6 group">
                <input type="text" name="lName" id="lName" className="block py-2.5 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-600 focus:outline-none focus:border-primary peer" placeholder=" " required />
                <label for="lName" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last name *</label>
              </div>
            </div>
            <div className="grid md:grid-cols-2 md:gap-6 py-3">
              <div className="relative z-0 w-full mb-6 group">
                <input type="email" name="floating_email" id="floating_email" className="block py-2.5 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-600 focus:outline-none focus:border-primary peer" placeholder=" " required />
                <label for="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address *</label>
              </div>
              <div className="relative z-0 w-full mb-6 group">
                <input type="tel" name="phoneNumber" id="phoneNumber" className="block py-2.5 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-600 focus:outline-none focus:border-primary peer" placeholder=" " />
                <label for="phoneNumber" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone number (optional)</label>
              </div>
            </div>
            <div className="relative z-0 w-full mb-6 group">
              <textarea cols="30" rows="4" name="message" id="message" className="block py-2.5 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-600 focus:outline-none focus:border-primary peer" placeholder=" " required />
              <label for="message" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter your messsage *</label>
            </div>
            <div className="flex justify-center">
            <button type="submit" className="text-white bg-primary hover:bg-slate-700 focus:ring-4 focus:outline-none font-light rounded-lg text-sm w-full sm:w-3/5 px-5 py-2.5 text-center">SUBMIT</button>
            </div>

          </form>
        </div>
      </div>






































      {/* <div className="w-full h-screen bg-[url('/contactuspic.jpg')] bg-cover bg-no-repeat bg-fixed">
        <div className="bg-black bg-opacity-50 w-full h-screen flex flex-col items-center justify-center text-white">
          <h1 className="font-semibold text-2xl md:text-5xl w-3/4 md:w-1/2 text-center md:tracking-tighter">
            <span className="font-serif">" </span>
            REACH OUT TO US ABOUT JOB DATA SOFTWARE
            <span className="font-serif"> "</span>
          </h1>
          <p className="w-3/4 md:w-1/2 text-left mt-8 leading-7">We are more than happy to assist you with any queries you might be having about the software in general. We would also be
            glad to answer questions that would make your experience smooth and enjoyable today and in the long-run. Our assistants are always
            available to offer informed guidance as as needs arise.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-4 bg-gray-900 text-white p-8 md:h-screen">
        <div className="flex flex-col items-center">
          <h1 className="font-bold text-2xl md:text-4xl mb-4">Get in Touch</h1>
          <p className="mb-4 w-11/12 md:w-1/2 text-center">Do you have any inquiry or question? Our team is ready to assist you</p>
          <form action="" method="post" className="w-11/12 md:w-3/4 flex flex-col">
            <label htmlFor="firstAndLastName" className="mb-2">Name:</label>
            <input
              type="text"
              name="firstAndLastName"
              id="firstAndLastName"
              className="border rounded mb-6 w-full h-12 text-black p-3 outline-none"
            />
            <label htmlFor="email" className="mb-2">Email:</label>
            <input
              type="email"
              name="email"
              id="email"
              className="border rounded mb-6 w-full h-12 text-black p-3 outline-none"
            />
            <label htmlFor="firstAndLastName" className="mb-2">How can we help?</label>
            <textarea name="message" id="message" cols="30" rows="6" className="border w-full mb-6 text-black p-3 rounded outline-none" />
            <button type="submit" className="mt-4 bg-[#F4ECC2] text-black h-12 hover:bg-[#b3a978] hover:text-white rounded">SUBMIT</button>
          </form>
        </div>
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14987.06700871494!2d57.5624505!3d-20.1020349!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x217c5522a5ca9c1f%3A0x3bdb9ec034be93fa!2sAfrican%20Leadership%20College!5e0!3m2!1sen!2smu!4v1688651359672!5m2!1sen!2smu"
            width="100%"
            height="100%"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="map direction to ALC"
            className="rounded h-[50vh] md:h-full"
          />
        </div>
      </div> */}
    </div>

  )
}

export default Contact