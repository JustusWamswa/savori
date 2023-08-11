import React from 'react'
import { useEffect, useState } from "react"
import { Bar, Bubble } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

function Graph(props) {

    const { yelpData } = props

    const [chartData, setChartData] = useState({
        datasets: []
    })
    const [chartOptions, setChartOptions] = useState({})
    let labels = []
    let dataReviews = []
    let dataRatings = []

    useEffect(() => {
        yelpData?.businesses.map((business, index) => {

            labels.push(business.name)
            dataReviews.push(business.review_count)
            dataRatings.push(business.rating)

        })
        setChartData({
            labels: labels,
            datasets: [
                {
                    label: 'Reviews',
                    data: dataReviews,
                    borderColor: "rgb(75, 192, 192 )",
                    backgroundColor: "rgba(75, 192, 192,0.5)",
                },
                {
                    label: 'Ratings',
                    data: dataRatings,
                    borderColor: "rgb(75, 192, 120 )",
                    backgroundColor: "rgba(75, 192, 120,0.5)",
                }
            ]
        })

        setChartOptions({
            plugins: {
                legend: {
                    position: 'top'
                },
                title: {
                    display: true,
                    text: 'Reviews and ratings per restaurant'
                },
                maintainAspectRatio: false,
                responsive: true
            },

        })

    }, [yelpData])

    return (
        <div className='w-[100%] h-[100%] bg-white'>
            <h1 className="w-[150px] mx-auto text-xl font-semibold capitalize ">Bar Chart</h1>
            <Bar data={chartData} options={chartOptions} />
        </div>
    )
}

export default Graph