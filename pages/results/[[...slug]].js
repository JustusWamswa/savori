'use client'
import Map from "@/components"
import { useRouter } from "next/router"
import { countries } from "@/cache/countries"
import React, { useEffect, useState } from "react"
import { getGeoapify, getYelp } from "@/services/api"

function results() {

  const [searchCoordinates, setSearchCoordinates] = useState(null)
  const [loading, setLoading] = useState(false)
  const [smallMap, setSmallMap] = useState(false)
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

  useEffect(() => {
    if (lat && lng) {
      getGeoapify(apiKeyGeo, lat, lng)
        .then((response) => {
          console.log("RES-GEO: ", response)
          setSmallMap(true)
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }, [searchCoordinates])

  useEffect(() => {
    if (lat && lng) {
      getYelp(apiKeyYelp, lat, lng)
        .then((response) => {
          console.log("RES-YELP: ", response)
          setSmallMap(true)
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }, [searchCoordinates])

  return (
    <div className="bg-tertiary">
      <p>click a place on the map to view restaurants</p>
      <Map 
      coordinates={coordinates} 
      capital={capital} 
      setSearchCoordinates={setSearchCoordinates}
      smallMap={smallMap} 
      />

    </div>
  )
}

export default results