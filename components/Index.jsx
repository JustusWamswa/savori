import dynamic from "next/dynamic";

const Map = dynamic(() => import('./Map'), {
    ssr: false
})
const MapVisualisation = dynamic(() => import('./MapVisualisation'), {
    ssr: false
})

export {Map, MapVisualisation}