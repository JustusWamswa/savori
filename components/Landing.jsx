import { useState } from "react"
import ComboBox from "./ComboBox"
import ModalSearch from "./ModalSearch"
import Carousel from "./Carousel"

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
          <p className="w-1/4 text-tertiary">At SAVORi, we believe that dining out is more than just a meal; it's an opportunity to immerse
            yourself in the artistry of chefs, the warmth of hospitality, and the richness of flavors. Our handpicked selection includes hidden gems and
            well-established favorites, each with a unique story to tell. Not only do we celebrate the art of gastronomy, but we also embrace
            diversity and inclusivity.
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
      <div className="w-full h-[110vh] bg-secondary relative">
        <div className="absolute top-12 right-52 bg-[url('/grapes.png')] w-72 h-96 bg-no-repeat rotate-45 bg-contain"></div>
        <div className="flex flex-row-reverse items-start justify-between w-5/6 mx-auto pt-12">
          <div className="text-primary flex flex-row-reverse items-center">
            <hr className="w-48 bg-primary border border-primary mx-3" />
            <p className="text-xs font-normal tracking-wider"> SOME POPULAR SPOTS</p>
            <hr className="w-6 bg-primary border border-primary mx-3" />
          </div>
          <h1 className="text-primary font-bold text-5xl tracking-tight leading-snug">Popular <br /> restaurants</h1>
        </div>
        <div className="flex items-start justify-between w-5/6 mx-auto mt-28">
          <Carousel />
          <p className="w-1/4 text-primary mt-20">Here, we take you on a
            culinary journey to the most sought-after dining destinations around the world. Whether you're a food enthusiast,
            an adventurous eater, or simply looking for the perfect place to indulge your taste buds, you're in for a treat!
            We've carefully curated a list of extraordinary restaurants that span a diverse range of cuisines and locations.
            Each of these eateries has garnered rave reviews and earned its place among the culinary elite.
          </p>
        </div>
        <div className="flex items-end justify-end w-5/6 mx-auto mt-12">
          <hr className="w-96 bg-primary border border-primary" />
        </div>
      </div>
      <div className="w-full h-screen bg-primary">

      </div>
      <ModalSearch isOpen={modalOpen} onClose={toggleModal} />
    </>
  )
}

export default Landing