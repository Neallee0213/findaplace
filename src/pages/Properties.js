import React from 'react'
import Hero from "../components/hero/Hero";
import Banner from "../components/banner/Banner"
import { Link } from 'react-router-dom'
import PropertyContainer from "../components/propertyContainer/PropertyContainer"
import Title from "../components/Title"
import Carousel from '../components/carousel/Carousel'
import Feedback from '../components/feedback/Feedback'

const Rooms = () => {
    return (
        <>
            <PropertyContainer />
            <Feedback />
            <Carousel />
        </>
    )
}

export default Rooms
