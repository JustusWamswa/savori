import { Map, MapVisualisation } from "@/components"
import { useRouter } from "next/router"
import { countries } from "@/cache/countries"
import React, { useEffect, useState } from "react"
import { getGeoapify, getYelp } from "@/services/api"
import Restaurants from "@/components/Restaurants"
import Table from "@/components/Table"
import Graph from "@/components/Graph"
import Book from "@/components/Book"
import ModalSearch from "@/components/ModalSearch"

function results() {

  const [searchCoordinates, setSearchCoordinates] = useState(null)
  const [yelpData, setYelpData] = useState(null)
  const [geoData, setGeoData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [smallMap, setSmallMap] = useState(false)
  const [showMap, setShowMap] = useState(true)
  const [showTable, setShowTable] = useState(false)
  const [showGraph, setShowGraph] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)
  const [restaurantName, setRestaurantName] = useState("")
  const [modalOpen2, setModalOpen2] = useState(false)

  const toggleModal2 = () => {
    setModalOpen2(!modalOpen2)
  }

  const toggleModal = () => {
    setModalOpen(!modalOpen)
  }
  let lat = { ...searchCoordinates }.lat
  let lng = { ...searchCoordinates }.lng
  const apiKeyYelp = process.env.NEXT_PUBLIC_YELP_API_KEY
  const apiKeyGeo = process.env.NEXT_PUBLIC_GEOAPIFY_API_KEY
  let coordinates = null
  let capital = null
  const router = useRouter()
  const slug = { ...router.query.slug }

  countries.map((country) => {
    if ((country.country).toLowerCase() == slug[0]) {
      coordinates = country.coordinates
      capital = country.capital
    }
  })

  // useEffect(() => {
  //   if (lat && lng) {
  //     getGeoapify(apiKeyGeo, lat, lng)
  //       .then((response) => {
  //         console.log("RES-GEO: ", response)
  //         setGeoData(response.data)
  //         setSmallMap(true)
  //         window.scrollTo({
  //           top: 700,
  //           left: 0,
  //           behavior: "smooth",
  //         });
  //       })
  //       .catch((error) => {
  //         console.log(error)
  //       })
  //   }
  // }, [searchCoordinates])

  useEffect(() => {
    if (lat && lng) {
      getYelp(apiKeyYelp, lat, lng)
        .then((response) => {
          console.log("RES-YELP: ", response.data)
          setSmallMap(true)
          setYelpData(response.data)
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }, [searchCoordinates])

  const handleShowMap = (e) => {
    e.preventDefault()
    setShowMap(true)
    setShowTable(false)
    setShowGraph(false)
  }
  const handleShowTable = (e) => {
    e.preventDefault()
    setShowMap(false)
    setShowTable(true)
    setShowGraph(false)
  }
  const handleShowGraph = (e) => {
    e.preventDefault()
    setShowMap(false)
    setShowTable(false)
    setShowGraph(true)
  }

  return (
    <div className="bg-tertiary px-12">
      <div className="md:flex justify-between items-center">
        <div>
          <p className="font-bold pt-6">Instructions:</p>
          <p className="pl-3">&#8226; Click a place on the map to view the available restaurants.</p>
          <p className="pl-3 mb-10">&#8226; Zoom in before selecting to get more precise data.</p>
        </div>
        <div>
          <button type="button" onClick={toggleModal2} className="mt-8 mb-4 md:mb-0 text-primary p-3 border border-primary hover:bg-primary hover:text-tertiary transition-all ease-in-out">Search another country</button>
        </div>
      </div>

      <div className="w-full h-[80vh] border border-primary">
        <Map
          coordinates={coordinates}
          capital={capital}
          setSearchCoordinates={setSearchCoordinates}
          smallMap={smallMap}
        />
      </div>
      <div className="grid md:grid-cols-2 mb-5 bg-secondary gap-0">
        <div className="h-[100vh]">
          <Restaurants yelpData={yelpData} toggleModal={toggleModal} setRestaurantName={setRestaurantName} />
        </div>
        <div className="h-[100vh]">
          <div className="w-[85%] h-[70vh] m-auto mt-6 border border-primary">
            {showMap &&
              <MapVisualisation
                coordinates={coordinates}
                yelpData={yelpData}
              />}
            {showTable &&
              <Table
                coordinates={coordinates}
                yelpData={yelpData}
              />}
            {showGraph &&
              <Graph
                coordinates={coordinates}
                yelpData={yelpData}
              />}
          </div>
          <div className="flex justify-between w-1/2 mx-auto">
            <button type="button" onClick={handleShowMap} className="mt-8 text-tertiary p-2 w-32 border border-secondary bg-primary hover:border-b-primary hover:bg-secondary hover:text-primary transition-all ease-in-out">Map</button>
            <button type="button" onClick={handleShowTable} className="mt-8 text-tertiary p-2 w-32 border border-secondary bg-primary hover:border-b-primary hover:bg-secondary hover:text-primary transition-all ease-in-out">Table</button>
            <button type="button" onClick={handleShowGraph} className="mt-8 text-tertiary p-2 w-32 border border-secondary bg-primary hover:border-b-primary hover:bg-secondary hover:text-primary transition-all ease-in-out">Graph</button>
          </div>
        </div>
      </div>
      <Book isOpen={modalOpen} onClose={toggleModal} restaurantName={restaurantName} />
      <ModalSearch isOpen={modalOpen2} onClose={toggleModal2} />
    </div>
  )
}

export default results