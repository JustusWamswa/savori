import React from 'react'

function Table(props) {
    const { yelpData } = props
    const ratings = []
    const reviews = []

    yelpData?.businesses.map((business) => {
        ratings.push(business.rating)
        reviews.push(business.review_count)
    })

    const maxRating = Math.max(...ratings)
    let maxRatingName = null
    const minRating = Math.min(...ratings)
    let minRatingName = null
    const maxReviews = Math.max(...reviews)
    let maxReviewsName = null
    const minReviews = Math.min(...reviews)
    let minReviewsName = null
 
    let totalRating = 0
    let totalReviews = 0

    ratings.map((rating) => {
        totalRating += rating
    })
    reviews.map((review) => {
        totalReviews += review
    })

    
    const averageRating = (totalRating / ratings.length).toFixed(2)
    let averageReviews = (totalReviews / reviews.length).toFixed(2)

    yelpData?.businesses.map((business) => {
        business.rating == maxRating ? maxRatingName = business.name : " "
        business.rating == minRating ? minRatingName = business.name : " "
        business.review_count == minReviews ? minReviewsName = business.name : " "
        business.review_count == maxReviews ? maxReviewsName = business.name : " "
    })

    return (
        <div className='bg-white w-full h-full p-5'>
            <table className='w-full h-full bg-white'>
                <thead className='font-semibold text-lg'>
                    <tr>
                        <td>Title</td>
                        <td>Name</td>
                        <td>Value</td>
                    </tr>
                </thead>
                <tbody>
                    <tr className='bg-zinc-200'>
                        <td className='font-semibold'>Highest Rating</td>
                        <td>{maxRatingName}</td>
                        <td>{maxRating}</td>
                    </tr>
                    <tr>
                        <td className='font-semibold'>Lowest Rating</td>
                        <td>{minRatingName}</td>
                        <td>{minRating}</td>
                    </tr>
                    <tr className='bg-zinc-200'>
                        <td className='font-semibold'>Average Rating</td>
                        <td>All</td>
                        <td>{averageRating}</td>
                    </tr>
                    <tr>
                        <td className='font-semibold'>Highest Reviews</td>
                        <td>{maxReviewsName}</td>
                        <td>{maxReviews}</td>
                    </tr>
                    <tr className='bg-zinc-200'>
                        <td className='font-semibold'>Lowest Reviews</td>
                        <td>{minReviewsName}</td>
                        <td>{minReviews}</td>
                    </tr>
                    <tr>
                        <td className='font-semibold'>Average Reviews</td>
                        <td>All</td>
                        <td>{averageReviews}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Table