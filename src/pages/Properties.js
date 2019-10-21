import React from 'react'
import Hero from "../components/Hero";
import Banner from "../components/Banner"
import { Link } from 'react-router-dom'
import PropertyContainer from "../components/PropertyContainer"
import Title from "../components/Title"
import Map from "../components/Map"

const Rooms = () => {
    return (
        <>
            <Hero hero="roomsHero">
                <Banner title="Our Properties">
                    <Link to="/" className="btn-primary">
                        Return Home
                </Link>
                </Banner>
            </Hero>
            <div className="mt-1" />
            <Title title="Choose your New Home" />
            <Map />
            <PropertyContainer />

        </>
    )
}

export default Rooms
