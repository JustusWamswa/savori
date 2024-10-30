import { useState } from "react"
import ComboBox from "./ComboBox"
import ModalSearch from "./ModalSearch"
import Carousel from "./Carousel"

function Landing() {

  const [modalOpen, setModalOpen] = useState(false)

  const toggleModal = () => {
    setModalOpen(!modalOpen)
  }

  return (
    <>
      <div className="w-full h-screen bg-[url('/rest-bg2.webp')] bg-no-repeat bg-top bg-cover">
        <div className="w-full h-screen bg-black bg-opacity-10 flex flex-col items-center">
          <h2 className="text-secondary font-medium text-xl tracking-widest mb-5 mt-40"> WELCOME TO SAVORi</h2>
          <h1 className="text-tertiary font-bold text-3xl md:text-5xl w-11/12 md:w-3/5 mx-auto text-center tracking-tight leading-snug">Savor the journey: where flavor and tradition blend in harmony!</h1>
          <p className="text-tertiary w-11/12 text-center mt-4 font-light">At SAVORi, we assist you to discover restaurants across the globe to entice your taste buds.</p>
          <button type="button" onClick={toggleModal} className="mt-8 text-tertiary p-3 border bg-black bg-opacity-20 hover:border-secondary hover:bg-secondary hover:text-primary animate-bounce transition-all ease-in-out">Explore Restaurants</button>
        </div>
      </div>
      <div className="w-full bg-primary relative">
        <div className="absolute top-12 md:top-72 left-0 md:left-4 bg-[url('/rosemary.png')] w-28 md:w-2/3 h-28 md:h-1/4 bg-no-repeat rotate-45 bg-contain"></div>
        <div className="md:flex items-start justify-between w-5/6 mx-auto pt-12">
          <div className="text-secondary flex items-center">
            <hr className="w-20 md:w-48 bg-secondary border border-secondary mx-3" />
            <p className="text-xs font-normal tracking-wider"> GET A HINT OF OUR REACH</p>
            <hr className="w-6 bg-secondary border border-secondary mx-3" />
          </div>
          <h1 className="text-tertiary font-bold text-5xl tracking-tight leading-snug mt-20 md:mt-0">100+ <br /> restaurants <br /> featured</h1>
        </div>
        <div className="md:absolute md:top-40 md:z-10 md:left-[35%] bg-[url('/restaurant2.jpg')] w-5/6 mx-auto mt-12 md:w-1/4 h-96 md:h-1/2 bg-no-repeat bg-cover"></div>
        <div className="md:flex items-start justify-between w-5/6 mx-auto mt-10 md:mt-48">
          <p className="md:w-1/4 text-tertiary">At SAVORi, we believe that dining out is more than just a meal; it's an opportunity to immerse
            yourself in the artistry of chefs, the warmth of hospitality, and the richness of flavors. Our handpicked selection includes hidden gems and
            well-established favorites, each with a unique story to tell. Not only do we celebrate the art of gastronomy, but we also embrace
            diversity and inclusivity.
          </p>
          <p className="md:w-1/4 my-10 md:my-0 text-tertiary">Welcome to our curated collection of featured restaurants, where gastronomic delights await! We have scoured the culinary
            landscape to bring you a diverse selection of eateries that promise to tantalize your taste buds and offer unforgettable dining experiences.
            From chic and contemporary to charmingly traditional, these restaurants showcase the very best in global cuisine, all in one place.
          </p>
        </div>
        <div className="md:absolute md:top-56 md:left-[40%] bg-[url('/restaurant1.jpg')] w-5/6 mx-auto md:w-1/4 h-96 md:h-1/2 bg-no-repeat bg-cover"></div>

        <div className="flex items-end justify-end w-5/6 mx-auto mt-24">
          <hr className="w-36 md:w-96 bg-secondary border border-secondary mb-12" />
        </div>
      </div>
      <div className="w-full bg-secondary relative">
        <div className="absolute top-12 md:top-12 right-7 md:right-52 bg-[url('/grapes.png')] w-28 md:w-72 h-28 md:h-96 bg-no-repeat rotate-45 bg-contain"></div>
        <div className="md:flex flex-row-reverse items-start justify-between w-5/6 mx-auto pt-12">
          <div className="text-primary flex flex-row-reverse items-center">
            <hr className="w-20 bg-primary border border-primary mx-3" />
            <p className="text-xs font-normal tracking-wider"> SOME POPULAR SPOTS</p>
            <hr className="w-6 bg-primary border border-primary mx-3" />
          </div>
          <h1 className="text-primary font-bold text-5xl tracking-tight leading-snug mt-20 md:mt-0">Popular <br /> restaurants</h1>
        </div>
        <div className="md:flex items-start justify-between w-5/6 mx-auto mt-28">
          <Carousel />
          <p className="md:w-1/4 text-primary mt-20">Here, we take you on a
            culinary journey to the most sought-after dining destinations around the world. Whether you're a food enthusiast,
            an adventurous eater, or simply looking for the perfect place to indulge your taste buds, you're in for a treat!
            We've carefully curated a list of extraordinary restaurants that span a diverse range of cuisines and locations.
            Each of these eateries has garnered rave reviews and earned its place among the culinary elite.
          </p>
        </div>
        <div className="flex items-end justify-end w-5/6 mx-auto mt-12">
          <hr className="w-36 md:w-96 bg-primary border border-primary mb-12" />
        </div>
      </div>
      <div className="w-full md:h-[110vh] bg-primary relative">
        <h1 className="text-tertiary text-center pt-12 font-bold text-5xl tracking-tight leading-snug">Our happy customers</h1>
        <div className="absolute top-40 md:top-[50%] md:translate-y-[-50%] md:left-12 bg-[url('/lemons.png')] w-28 md:w-72 h-28 md:h-72 bg-no-repeat rotate-45 bg-contain"></div>
        <div className=" w-5/6 md:w-3/4 bg-transparent h-1/2 mx-auto md:ml-auto mt-20 relative">
          <div className="md:w-2/3 bg-secondary h-full ml-auto mt-20"></div>
          <div className="bg-transparent w-full h-2/3 md:absolute md:top-1/2 md:-translate-y-1/2 md:flex justify-between">
            <div className="md:w-[47%] h-full bg-tertiary py-5 px-7">
              <div className="flex items-center">
                <div className="w-16 h-16 rounded-full bg-[url('/chef.jpg')] bg-center bg-no-repeat bg-cover"></div>
                <div className="pl-5">
                  <h2 className="font-semibold text-xl text-zinc-800">John Doe</h2>
                  <p className="text-zinc-400 font-normal">Chef</p>
                </div>
              </div>
              <div>
                <p className="pt-5 text-zinc-700">
                  The restaurant listings are always up to date, and the website's team seems to take great care in ensuring the
                  information is accurate and relevant. It's evident that they genuinely care about their users' experiences.
                </p>
                <div className="flex w-1/4 pt-5 justify-between">
                  <div className="bg-[url('/star.png')] bg-center bg-no-repeat bg-contain w-5 h-5"></div>
                  <div className="bg-[url('/star.png')] bg-center bg-no-repeat bg-contain w-5 h-5"></div>
                  <div className="bg-[url('/star.png')] bg-center bg-no-repeat bg-contain w-5 h-5"></div>
                  <div className="bg-[url('/star.png')] bg-center bg-no-repeat bg-contain w-5 h-5"></div>
                  <div className="bg-[url('/star.png')] bg-center bg-no-repeat bg-contain w-5 h-5"></div>
                </div>
              </div>
            </div>
            <div className="md:w-[47%] h-full bg-tertiary mt-8 md:mt-0 py-5 px-7">
              <div className="flex items-center">
                <div className="w-16 h-16 rounded-full bg-[url('/wu.webp')] bg-center bg-no-repeat bg-cover"></div>
                <div className="pl-5">
                  <h2 className="font-semibold text-xl text-zinc-800">Jane Wu</h2>
                  <p className="text-zinc-400 font-normal">Traveller</p>
                </div>
              </div>
              <div>
                <p className="pt-5 text-zinc-700">
                  What I love the most is the wide range of restaurants listed. From cozy cafes to elegant fine-dining establishments,
                  this platform has it all! I was able to discover hidden gems in my area that I didn't even know existed.
                </p>
                <div className="flex w-1/4 pt-5 justify-between">
                  <div className="bg-[url('/star.png')] bg-center bg-no-repeat bg-contain w-5 h-5"></div>
                  <div className="bg-[url('/star.png')] bg-center bg-no-repeat bg-contain w-5 h-5"></div>
                  <div className="bg-[url('/star.png')] bg-center bg-no-repeat bg-contain w-5 h-5"></div>
                  <div className="bg-[url('/star.png')] bg-center bg-no-repeat bg-contain w-5 h-5"></div>
                  <div className="bg-[url('/star.png')] bg-center bg-no-repeat bg-contain w-5 h-5"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-end justify-end w-5/6 mx-auto mt-24">
          <hr className="w-36 md:w-96 bg-secondary border border-secondary mb-10 md:mb-0" />
        </div>
      </div>
      <ModalSearch isOpen={modalOpen} onClose={toggleModal} />
    </>
  )
}

export default Landing