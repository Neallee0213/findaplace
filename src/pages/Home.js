import React from 'react';
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import Map from "../components/Map";
import { Link } from 'react-router-dom';
import Services from "../components/Services";
import FeatureProperties from "../components/FeaturedProperties";
import Title from "../components/Title"


const Home = () => {
    return (
        <>
            <Hero>
                <Banner title="Welcome Home." subtitle="Don’t know where to start? Relax, we got this.">
                    <Link to="/properties" className="btn-primary">
                        start your search
                    </Link>
                </Banner>
            </Hero>
            <Services />
            <Title title="Choose your New Home" />
            <Map />
            <FeatureProperties />
        </>
    )
}

export default Home
