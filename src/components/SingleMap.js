import React from 'react'
import { GoogleMap, withScriptjs, withGoogleMap, Marker } from "react-google-maps";


const gMap = ({ lat, lng }) => {


    return (
        <>
            <GoogleMap
                defaultZoom={10}
                defaultCenter={{ lat: lat, lng: lng }}
            >
                <Marker key={1}
                    position={{ lat: lat, lng: lng }} />
            </GoogleMap>


        </>
    )
}
const WrapperdMap = withScriptjs(withGoogleMap(gMap))
const SingleMap = ({ lat, lng }) => {

    return (
        <>
            <div className="maps">

                <div className="mt-1"></div>
                <div>

                    <WrapperdMap lat={lat} lng={lng} className="Googlemap" googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
                        loadingElement={<div style={{ height: `100%` }} />}
                        containerElement={<div style={{ height: `400px` }} />}
                        mapElement={<div style={{ height: `200%` }} />} />
                </div>
                <div className="mb-4"></div>
            </div>
        </>
    )
}
export default SingleMap
