import React from 'react'
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Property = ({ property }) => {
    const { name, slug, images, price } = property;

    return (
        <article className="room">
            <div className="img-container">
                <img src={images[0]} alt="single room" />
                <div className="price-top">
                    <h6>${price}</h6>

                </div>
                <Link to={`/properties/${slug}`} className="btn-primary room-link">Features</Link>
            </div>
            <p className="room-info">{name}</p>
        </article>
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