import ComboBox from "./ComboBox"

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
  return (
    <>
        <div className="w-full h-screen bg-[url('/chef.jpg')] bg-cover bg-no-repeat bg-center bg-fixed">
          <div className="w-full h-screen bg-black bg-opacity-60 flex flex-col items-center ">
            <h2 className="text-secondary font-medium text-xl tracking-widest mb-5 mt-40"> WELCOME TO SAVORi</h2>
            <h1 className="text-tertiary font-bold text-5xl w-3/5 mx-auto text-center tracking-tight leading-snug">Savor the journey: where flavor and tradition blend in harmony!</h1>
            <p className="text-tertiary mt-4 font-light">At SAVORi, we assist you to discover restaurants across the globe to entice your taste buds.</p>
            <button type="button" className="mt-8 text-tertiary p-3 border bg-black bg-opacity-20 hover:border-secondary hover:bg-secondary hover:text-primary transition-all ease-in-out">Explore Restaurants</button>
          </div>
        </div>
        <ComboBox />
    </>
  )
}

export default Landing