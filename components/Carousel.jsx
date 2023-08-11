import Image from 'next/image';
import React, { useEffect, useState } from 'react'

function Carousel() {

    const [currentSlide, setCurrentSlide] = useState(0)

    const slides = [
        '/r1.jpg',
        '/r2.jpg',
        '/r3.jpg',
        '/r4.jpg',
        '/r5.jpg',
    ]
    const names = [
        'WhimsyBite Café',
        'FlavorFusion Delights',
        'EnchantedEats Bistro',
        'NebulaBites Diner',
        'SerenePalate Kitchen',
    ]

    const nextSlide = () => {
        setCurrentSlide((prevIndex) => (prevIndex + 1) % slides.length)
    }

    const previousSlide = () => {
        setCurrentSlide((prevIndex) => (prevIndex - 1 + slides.length) % slides.length)
    }

    useEffect(() => {
        const slideshowInterval = setInterval(() => {
            nextSlide()
        }, 4000)

        // clear interval when component unmounts
        return () => clearInterval(slideshowInterval)
    }, [])

    const showSlide = (index) => {
        setCurrentSlide(index)
    }

    return (
        <div className="md:w-3/5 relative">
            <div className="flex items-center justify-center relative">
                <div
                    className="w-full h-80 transition-all ease-in-out duration-1000"
                    style={{
                        backgroundImage: `url(${slides[currentSlide]})`,
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                    }}>
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100 bg-black bg-opacity-0 hover:bg-opacity-60">
                    <span className="text-white text-3xl font-bold">{names[currentSlide]}</span>
                </div>
            </div>
            <div className="flex justify-center mt-8">
                {slides.map((e, index) => (
                    <div
                        key={index}
                        className={`h-3 w-3 rounded-full cursor-pointer mx-2 ${currentSlide === index ? 'bg-primary' : 'bg-zinc-400'}`}
                        onClick={() => showSlide(index)}
                    ></div>
                ))}
            </div>
        </div>
    )
}

export default Carousel
