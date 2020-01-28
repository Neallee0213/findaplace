import React from 'react'
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import './Property.scss'
import { FaEye } from "react-icons/fa";
import { numberWithCommas } from '../utils'



const Property = ({ property }) => {
    const { name, slug, images, price } = property;

    return (
        <div className="c-wrapper">
            <div className="p-card">
                <img src={images[0]} alt="single-room" />
                <div className="info">
                    <Link to={`/properties/${slug}`} className="room-link"><FaEye /></Link>
                    <p className="room-info">{name}</p>
                    <h6>${numberWithCommas(price)}</h6>
                </div>
            </div>

        </div >
    )
}

export default Property

Property.prototype = {
    property: PropTypes.shape({
        name: PropTypes.string.isRequired,
        slug: PropTypes.string.isRequired,
        images: PropTypes.arrayOf(PropTypes.string).isRequired,
        price: PropTypes.number.isRequired
    })
} 