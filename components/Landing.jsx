import { useState } from "react"
import ComboBox from "./ComboBox"
import ModalSearch from "./ModalSearch"

// const axios = require('axios');

// const options = {
//   method: 'GET',
//   url: 'https://country-facts.p.rapidapi.com/all',
//   headers: {
//     'X-RapidAPI-Key': '2dd5a5c5c4mshc7565f456126781p16e691jsnab4dab9a9a6e',
//     'X-RapidAPI-Host': 'country-facts.p.rapidapi.com'
//   }
// };

// try {
// 	const response = await axios.request(options);
// 	console.log(response.data);
// } catch (error) {
// 	console.error(error);
// }



function Landing() {

  const [modalOpen, setModalOpen] = useState(false)

  const toggleModal = () => {
    setModalOpen(!modalOpen)
  }

  return (
    <>
      <div className="w-full h-screen bg-[url('/chef.jpg')] bg-cover bg-no-repeat bg-center bg-fixed">
        <div className="w-full h-screen bg-black bg-opacity-60 flex flex-col items-center ">
          <h2 className="text-secondary font-medium text-xl tracking-widest mb-5 mt-40"> WELCOME TO SAVORi</h2>
          <h1 className="text-tertiary font-bold text-5xl w-3/5 mx-auto text-center tracking-tight leading-snug">Savor the journey: where flavor and tradition blend in harmony!</h1>
          <p className="text-tertiary mt-4 font-light">At SAVORi, we assist you to discover restaurants across the globe to entice your taste buds.</p>
          <button type="button" onClick={toggleModal} className="mt-8 text-tertiary p-3 border bg-black bg-opacity-20 hover:border-secondary hover:bg-secondary hover:text-primary transition-all ease-in-out">Explore Restaurants</button>
        </div>
      </div>
      <div className="w-full h-[120vh] bg-primary relative">
        <div className="absolute top-72 left-4 bg-[url('/rosemary.png')] w-2/3 h-1/4 bg-no-repeat rotate-45 bg-contain"></div>
        <div className="absolute top-40 z-10 left-[35%] bg-[url('/restaurant2.jpg')] w-1/4 h-1/2 bg-no-repeat bg-cover"></div>
        <div className="absolute top-56 left-[40%] bg-[url('/restaurant1.jpg')] w-1/4 h-1/2 bg-no-repeat bg-cover"></div>
        <div className="flex items-start justify-between w-5/6 mx-auto pt-12">
          <div className="text-secondary flex items-center">
            <hr className="w-48 bg-secondary border border-secondary mx-3" />
            <p className="text-xs font-normal tracking-wider"> GET A HINT OF OUR REACH</p>
            <hr className="w-6 bg-secondary border border-secondary mx-3" />
          </div>
          <h1 className="text-tertiary font-bold text-5xl tracking-tight leading-snug">100+ <br /> restaurants <br /> featured</h1>
        </div>
        <div className="flex items-start justify-between w-5/6 mx-auto mt-48">
          <p className="w-1/4 text-tertiary">Welcome to our curated collection of featured restaurants, where gastronomic delights await! We have scoured the culinary
            landscape to bring you a diverse selection of eateries that promise to tantalize your taste buds and offer unforgettable dining experiences.
            From chic and contemporary to charmingly traditional, these restaurants showcase the very best in global cuisine, all in one place.
          </p>
          <p className="w-1/4 text-tertiary">Welcome to our curated collection of featured restaurants, where gastronomic delights await! We have scoured the culinary
            landscape to bring you a diverse selection of eateries that promise to tantalize your taste buds and offer unforgettable dining experiences.
            From chic and contemporary to charmingly traditional, these restaurants showcase the very best in global cuisine, all in one place.
          </p>
        </div>
        <div className="flex items-end justify-end w-5/6 mx-auto mt-24">
        <hr className="w-96 bg-secondary border border-secondary" />
        </div>
      </div>
      <div className="w-full h-screen bg-secondary">

      </div>
      <div className="w-full h-screen bg-primary">

      </div>
      <ModalSearch isOpen={modalOpen} onClose={toggleModal} />
    </>
  )
}

export default Landing