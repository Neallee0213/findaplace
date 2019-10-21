import React, { Component } from 'react'
import Title from "./Title"
import rent_a_house from "../images/rent_a_house.png"
import buy_a_house from "../images/buy_a_house.png"
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa"
import { Link } from "react-router-dom";
export class Services extends Component {
    state = {
        services: [
            {
                icon: <FaCocktail />,
                title: "free cocktails",
                info: "dummy text"
            },
            {
                icon: <FaHiking />,
                title: "hiking",
                info: "dummy text"
            },
            {
                icon: <FaShuttleVan />,
                title: "shuttle",
                info: "dummy text"
            },
            {
                icon: <FaBeer />,
                title: "beer",
                info: "dummy text"
            }
        ]
    }
    render() {
        return (
            <section className="services">
                <Title title="Services" />
                <div className="services services-text">
                    <h2>
                        We have the most listings and constant updates.</h2>
                    <h2>
                        So you’ll never miss out.
                    </h2>
                </div>
                <div className="services-center">
                    <div className="service service-img">
                        <Link to="/properties" className="service-link">
                            <h2>Rent a house</h2>
                            <img src={rent_a_house} alt="rent_a_house" />
                            <h5>
                                We're creating a seamless online experience - <br /> from shopping on the largest rental network,<br />to applying, to paying rent.
                            </h5>
                        </Link>
                    </div>
                    <div className="service service-img">
                        <Link to="/properties" className="service-link">
                            <h2>Buy a house</h2>
                            <img src={buy_a_house} alt="rent_a_house" />
                            <h5>
                                Find your place with an immersive photo experience <br /> and the most listings,including things <br /> you won't find anywhere else.
                            </h5>
                        </Link>
                    </div>
                </div>
            </section>
        )

    }
}

export default Services
