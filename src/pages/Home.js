import React from 'react';
import Hero from "../components/hero/Hero";
import FeatureProperties from "../components/FeaturedProperties";
import Percentage from '../components/percentage/Percentage'
import HotOffer from '../components/hotOffer/HotOffer';
import Agents from '../components/agents/Agents'
import Carousel from '../components/carousel/Carousel'
import Feedback from '../components/feedback/Feedback'
import Steps from '../components/steps/Steps'
import BottomTitle from '../components/bottomTitle/BottomTitle'


const Home = () => {

    return (
        <>
            <Hero />
            <Percentage />
            <FeatureProperties />
            <HotOffer />
            <Agents />
            <Steps />
            <Feedback />
            <BottomTitle />
            <Carousel />
        </>
    )
}

export default Home
