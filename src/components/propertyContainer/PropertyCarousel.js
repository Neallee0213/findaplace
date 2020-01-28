import React from 'react'
import './PropertyCarousel.scss'
import { numberWithCommas } from '../utils'
const PropertyCarousel = (props) => {
    let { properties } = props;
    console.log(properties);
    let firstImage = properties[0]


    return (
        <div>
            <div id="carouselExampleFade" className="carousel slide carousel-fade" data-ride="carousel" data-interval="2000">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div style={{ backgroundImage: `url(${firstImage.images[1]})` }} className="imgs" />
                        <div class="carousel-caption d-none d-md-block">
                            <h5>{firstImage.type}</h5>
                            <p>${numberWithCommas(firstImage.price)}</p>
                        </div>
                    </div>
                    {properties.map(property => (
                        <div className="carousel-item" key={property.id}>
                            <div style={{ backgroundImage: `url(${property.images[0]})` }} className="imgs d-block w-100" />
                            <div class="carousel-caption d-none d-md-block">
                                <h5>{property.type}</h5>
                                <p>${numberWithCommas(property.price)}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <a className="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </div >
    )
}

export default PropertyCarousel
