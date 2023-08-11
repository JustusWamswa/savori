import 'leaflet/dist/leaflet.css'
import { MapContainer, Marker, Popup, TileLayer, useMapEvents, MapConsumer } from 'react-leaflet'
import Leaflet from 'leaflet'
import L from 'leaflet'
import icon from 'leaflet/dist/images/marker-icon.png'

function Map(props) {

  const { coordinates, capital, setSearchCoordinates, smallMap } = props

    const markerIcon = Leaflet.divIcon({
        html: `
        <svg
        width="20"
        height="41"
        viewBox="0 0 25 41"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12.5 0C5.59865 0 0 5.59865 0 12.5C0 17.6821 3.26484 27.8709 12.5 41C21.7352 27.8709 25 17.6821 25 12.5C25 5.59865 19.4014 0 12.5 0ZM12.5 18.75C9.07861 18.75 6.25 15.9214 6.25 12.5C6.25 9.07861 9.07861 6.25 12.5 6.25C15.9214 6.25 18.75 9.07861 18.75 12.5C18.75 15.9214 15.9214 18.75 12.5 18.75Z"
          fill="#E74C3C"
        />
      </svg>
      `,
        iconAnchor: [32 / 2, 48],
        className: "foo",
    })

    function MyComponent() {
        const map = useMapEvents({
          click: (e) => {
            const { lat, lng } = e.latlng;
            // console.log(e.latlng)
            setSearchCoordinates(e.latlng)
            L.marker([lat, lng],  {icon: markerIcon} ).addTo(map);
          }
        });
        return null;
      }

    return (
       coordinates ? 
        <MapContainer
            className='w-full h-full z-0'
            center={[coordinates.latitude, coordinates.longitude]}
            zoom={7}
            scrollWheelZoom={true}
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[coordinates.latitude, coordinates.longitude]} icon={markerIcon} >
              <Popup>
                <span className='font-semibold'>Capital: </span>{capital}
              </Popup>
            </Marker>
            <MyComponent />
        </MapContainer>
        
        : <div className='w-full h-[80vh] bg-zinc-500 animate-pulse'></div>
    )
}

export default Map