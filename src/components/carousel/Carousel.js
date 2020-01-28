import React, { Component } from 'react'
import { RoomContext } from "../../Context";
import OwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.min.css'
import 'owl.carousel/dist/assets/owl.theme.default.min.css'
import img1 from "../../images/room-1.webp";
import img2 from "../../images/room-2.webp";
import img3 from "../../images/room-3.webp";
import img4 from "../../images/room-4.webp";
import img5 from "../../images/room-5.webp";
import img6 from "../../images/room-6.webp";
import img7 from "../../images/room-7.webp";
import img8 from "../../images/room-8.webp";
import img9 from "../../images/room-9.webp";
import img10 from "../../images/room-10.webp";
import img11 from "../../images/room-11.webp";
import img12 from "../../images/room-12.webp";
import { Link } from "react-router-dom";
import './Carousel.scss'

export class Carousel extends Component {
    static contextType = RoomContext;
    render() {
        let { properties } = this.context
        // let urls = properties.map(url => {
        //     return <Link to={`/properties/${slug}`} />
        // })
        properties.map(item => console.log(item))
        // console.log(properties)
        return (
            <div className="overview">

                <Link to="/properties/">
                    <OwlCarousel
                        className="owl-theme"
                        items='5'
                        autoplay
                        loop
                        dots={false}
                        margin={10}
                        responsive={
                            {
                                0: {
                                    items: 2
                                },
                                600: {
                                    items: 4
                                },
                                1000: {
                                    items: 5
                                },
                            }
                        }
                    >
                        {properties.map((imgs, index) => (
                            <div className="item" key={index}>
                                <Link to={`/properties/${imgs.slug}`} key={index}>
                                    <img src={imgs.images[0]} alt="img1" />
                                </Link>
                            </div>
                        ))}

                    </OwlCarousel>
                </Link>
            </div>
        )
    }
}

export default Carousel