import React, { useState } from 'react'
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import { MdPlace } from "react-icons/md";
import './Map.scss'
import { FaBed, FaExpand, FaParking } from "react-icons/fa";
import { numberWithCommas } from '../utils'
import { Link } from 'react-router-dom';

const Map = (props) => {

    const TOKEN = "pk.eyJ1Ijoiam9vbnkwMjEzIiwiYSI6ImNrNXdvcmZkdjF4ZnIzZGxiaGx6aGNqaTIifQ.wyLkRikQdlB_WLNJq6AEUA";
    const [viewport, setViewport] = useState({
        latitude: 43.653225,
        longitude: -79.383186,
        zoom: 10.5,
        width: "100vw",
        height: "50vh"


    })
    const [selectedproperty, setSelectedproperty] = useState(null);

    return (
        <div className="container-fluid">

            <div className="row">
                <ReactMapGL
                    mapboxApiAccessToken={TOKEN}
                    {...viewport}
                    mapStyle="mapbox://styles/joony0213/ck5wozj296af01is7ruat4auw"
                    captureScroll={false}
                    onViewportChange={viewport => {
                        setViewport(viewport)
                    }}
                >
                    {props.properties.map(property => (
                        <Marker
                            key={property.name}
                            latitude={property.geometry.coordiantes[0]}
                            longitude={property.geometry.coordiantes[1]}
                            className="marker"
                        >
                            <div className="pins"
                                onClick={e => {
                                    e.preventDefault();
                                    setSelectedproperty(property)
                                    console.log(selectedproperty)
                                }}>
                                <MdPlace />

                            </div>

                        </Marker>
                    ))}
                    {selectedproperty ? (
                        <Popup
                            latitude={selectedproperty.geometry.coordiantes[0]}
                            longitude={selectedproperty.geometry.coordiantes[1]}
                            onClose={() => {
                                setSelectedproperty(null);
                            }}
                            className="info-container"
                        >
                            <div className="container popup-container">
                                <div className="row popup-row">
                                    <img src={selectedproperty.images[0]} alt="img" />
                                </div>

                                <div className="row popup-row-name">
                                    <h5>{selectedproperty.name}</h5>
                                    <h4>${numberWithCommas(selectedproperty.price)}</h4>
                                    <p>{selectedproperty.type}</p>
                                </div>
                                <div className="row popup-row-info">
                                    <div className="col popup-col-info">
                                        <p><FaExpand className="icons" /> {numberWithCommas(selectedproperty.size)} Sq Ft</p>

                                        <p><FaBed className="icons" /> {selectedproperty.capacity}</p>

                                        <p><FaParking className="icons" /> {selectedproperty.parking === true ? "Yes" : "NO"}</p>
                                    </div>
                                </div>
                                <div className="row popup-row-priceLink">
                                    <div className="col-6 price">

                                        <button className="mapboxgl-popup-close-button1" type="button"> Close</button>
                                    </div>
                                    <div className="col-6 link">
                                        <button> <Link to={`/Properties/${selectedproperty.slug}`}> View </Link> </button>
                                    </div>
                                </div>
                            </div>
                        </Popup>
                    ) : null}
                </ReactMapGL>

            </div>

        </div>
    )
}

export default Map
