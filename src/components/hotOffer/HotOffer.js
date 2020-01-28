import React, { Component } from 'react'
import { RoomContext } from "../../Context";
import { Link } from "react-router-dom";
import Loading from "../Loading"
import './HotOffer.scss'
import Title from "../Title"
import { FaBed } from "react-icons/fa";
import { FaArrowsAlt } from "react-icons/fa";
import { numberWithCommas } from '../utils'

export default class HotOffer extends Component {
    static contextType = RoomContext;
    render() {
        let { loading, offerProperties: properties } = this.context


        return (
            < div className="container-fluid offer-container">
                <div className="row title">
                    <Title title="Hot Offer Today" />
                </div>
                <div className="row justify-content-center offer-row">

                    {loading ? <Loading /> : properties = properties.map(property => (
                        <>
                            <div className="col-12 col-md-5 offer-info offer" key={property.name}>
                                <h2>${numberWithCommas(property.price)}</h2>
                                <h5>{property.type}</h5>
                                <h3>Elegant {property.type}</h3>
                                <p>{property.name}</p>
                                <div className="details">
                                    {/* <p>Structure:</p> */}
                                    <p> Structure: {property.capacity} Bedrooms</p>
                                    {/* <p>Property size:</p> */}
                                    <p>Property size: {property.size}sq ft</p>
                                    <Link to={`/properties/${property.slug}`} className="room-link">View Details</Link>
                                </div>
                            </div>
                            <div className="col-12 col-md-4 offer-img offer">
                                <img className="img1" src={property.images[0]} alt="single-room" />
                                <img className="img2" src={property.images[1]} alt="single-room" />
                            </div>
                        </>
                    ))}
                </div>
            </div >
        )
    }
}
