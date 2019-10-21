import React, { useState } from 'react'
import { GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow } from "react-google-maps";
import { RoomConsumer } from "../Context";
import Loading from "./Loading";
import { Link } from 'react-router-dom';



const Map = () => {
    const [selectedProperty, setSelectedProperty] = useState(null);
    const gMap = (properties) => {
        console.log(properties.properties);
        console.log(typeof (selectedProperty));
        // console.log(locations);

        return (
            <>

                <GoogleMap
                    defaultZoom={10}
                    defaultCenter={{ lat: 43.653225, lng: -79.383186 }}
                >

                    {properties.properties.map(property => (
                        <Marker
                            key={property.slug}
                            position={{
                                lat: property.geometry.coordiantes[0],
                                lng: property.geometry.coordiantes[1]
                            }}
                            onClick={() => {
                                setSelectedProperty(property);
                            }}
                        />
                    ))}
                    {selectedProperty && (
                        <InfoWindow
                            position={{
                                lat: selectedProperty.geometry.coordiantes[0],
                                lng: selectedProperty.geometry.coordiantes[1]
                            }}
                            onCloseClick={() => {
                                setSelectedProperty(null)
                            }}
                        >
                            <div className="infowindows">
                                <h5>{selectedProperty.name}</h5>
                                <img src={selectedProperty.images[0]} alt={selectedProperty.name} />
                                <p>{selectedProperty.type}</p>
                                <p>Bedrooms: {selectedProperty.capacity}</p>
                                <p>Rent: {selectedProperty.rentable === true ? "Yes" : "NO"}</p>
                                <p>Parking: {selectedProperty.parking === true ? "Yes" : "NO"}</p>
                                <Link className="info-link" to={`/Properties/${selectedProperty.slug}`}>
                                    <button>
                                        link
                                </button>
                                </Link>
                            </div>
                        </InfoWindow>
                    )}


                </GoogleMap >
            </>
        )
    }

    const WrapperdMap = withScriptjs(withGoogleMap(gMap))
    return (

        <RoomConsumer>
            {
                (value) => {
                    const { loading, locations, properties } = value;
                    if (loading) {
                        return <Loading />;
                    }
                    console.log(properties)
                    return (
                        <div className="maps">
                            <div className="mt-1"></div>
                            <div>

                                <WrapperdMap properties={properties} className="Googlemap" googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
                                    loadingElement={<div style={{ height: `100%` }} />}
                                    containerElement={<div style={{ height: `400px` }} />}
                                    mapElement={<div style={{ height: `200%` }} />} />
                            </div>
                            <div className="mb-4"></div>
                        </div>
                    );
                }
            }
        </ RoomConsumer>

    )
}
export default Map
// &key=AIzaSyDT3tmOzEm-w_paBuf5aOhzZjLC_cONrOA
