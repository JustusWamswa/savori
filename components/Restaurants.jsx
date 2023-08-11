import Image from 'next/image'
import React from 'react'

function Restaurants(props) {
    const { yelpData, toggleModal, setRestaurantName } = props
    yelpData && console.log(yelpData.businesses)
    return (
        <div>
            <div className="w-full h-[100vh] overflow-y-scroll border p-5 bg-primary border-primary">
                {yelpData?.businesses.map((business) => (

                    <div key={business.id} className="bg-white w-full  mb-3 overflow-hidden flex">
                        <div className='w-1/5 md:w-1/4' style={{ backgroundImage: `url(${business.image_url})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}></div>
                        <div className='p-3 w-4/5 md:w-3/4'>
                            <div className='flex items-center'>
                                {business.is_closed ? <h3 className='px-2 pb-1 text-white bg-red
                                -600 text-sm w-min'>Closed</h3> : <h3 className='px-2 pb-1 text-white bg-green-600 text-sm w-min'>Open</h3>}
                                <h2 className='text-zinc-600 text-sm pl-2'>{business.location.display_address.join(', ')}</h2>
                            </div>
                            <h1 className='font-semibold py-2'>{business.name}</h1>
                            <div className='flex justify-between w-full'>
                                <div>
                                    <h3 className='text-zinc-600 text-sm'><span className='font-semibold'>Categories: </span>{business.categories.map(item => item.title).join(', ')}</h3>
                                    <h3 className='text-zinc-600 text-sm'><span className='font-semibold'>Rating: </span>{business.rating}</h3>
                                    <h3 className='text-zinc-600 text-sm'><span className='font-semibold'>Reviews: </span>{business.review_count}</h3>
                                </div>
                                <div onClick={() => {toggleModal(), setRestaurantName(business.name)}} className='px-5 bg-primary cursor-pointer text-tertiary h-10 my-auto pt-1'>Book</div>


                            </div>

                        </div>

                    </div>
                ))}
        </div>
        </div >
    )
}

export default Restaurants