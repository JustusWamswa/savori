import Image from 'next/image';
import React, { useEffect, useState } from 'react'

function Carousel() {

    const [currentSlide, setCurrentSlide] = useState(0)

    const slides = [
        '/restaurant2.jpg',
        '/restaurant2.jpg',
        '/restaurant2.jpg',
        '/restaurant2.jpg',
        '/restaurant2.jpg',
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
        <div className="w-3/5 relative">
            <div className="flex items-center justify-center">
                <button className="absolute left-0 top-1/2 transform -translate-y-1/2 focus:outline-none" onClick={previousSlide}>
                    &lt;
                </button>
                <div
                    className="w-full h-80 transition-all ease-in-out duration-1000"
                    style={{
                        backgroundImage: `url(${slides[currentSlide]})`,
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                    }}>
                </div>
                {/* <button className="absolute right-0 top-1/2 transform -translate-y-1/2 focus:outline-none" onClick={nextSlide}>
                    &gt;
                </button> */}
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
