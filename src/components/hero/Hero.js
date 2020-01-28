import React from 'react'
import './Hero.scss'
import Banner from '../banner/Banner'
import { Link } from "react-router-dom";
import heroVideo from '../../images/video.mp4'
import Fade from 'react-reveal/Fade';
// const Hero = ({ children, hero }) => {
const Hero = () => {
    return (
        <div className="bg-vid-container">

            <video id="bg-vid" className="cover" autoPlay mute loop>
                <source src={heroVideo} type="video/mp4" />
            </video>

            <div className="header-content">
                <h1>
                    {/* <Fade bottom cascade duration={2800}>
                        Find your New Property
                    </Fade> */}
                    <Fade bottom cascade duration={1500}>
                        Find
                    </Fade>
                    <Fade bottom cascade delay={100} duration={1500}>
                        your
                    </Fade>
                    <Fade bottom cascade delay={200} duration={1500}>
                        New
                    </Fade>
                    <Fade bottom cascade delay={400} duration={1500}>
                        Property
                    </Fade>
                </h1>
                <Link to="/properties" className="btnn">
                    <p>
                        <Fade left cascade duration={1000} delay={1500}>
                            Lead more
                </Fade>
                    </p>
                </Link>
            </div>

        </div>
        // <div className="home">
        //     <video autoPlay muted loop>
        //         <source src={heroVideo} />
        //     </video>
        //     <div className="overlay">
        //         <div className="container">
        //             <div className="header-content">
        //                 <h1>Find your Property</h1>
        //                 <Link to="/properties" className="btnn">
        //                     start to search
        //              </Link>
        //             </div>
        //         </div>
        //     </div>





        // </div>

        // <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
        //     <ol className="carousel-indicators">
        //         <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
        //         <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        //         <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        //     </ol>
        //     <div className="carousel-inner">
        //         <div className="carousel-item img-1 active">
        //             <div className="d-block w-100" alt="..." />
        //         </div>
        //         <div className="carousel-item img-2">
        //             <div className="d-block w-100" alt="..." />
        //         </div>
        //         <div className="carousel-item img-3">
        //             <div className="d-block w-100" alt="..." />
        //         </div>
        //     </div>
        //     <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
        //         <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        //         <span className="sr-only">Previous</span>
        //     </a>
        //     <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
        //         <span className="carousel-control-next-icon" aria-hidden="true"></span>
        //         <span className="sr-only">Next</span>
        //     </a>
        //     <div class="carousel-caption">
        //         <Banner title="Welcome Home." subtitle="Don’t know where to start? Relax, we got this.">
        //             <Link to="/properties" className="btn-primary">
        //                 start your search
        //             </Link>
        //         </Banner>
        //     </div>
        // </div>
        // <header classNameName={hero}>
        //     {children}
        // </header>
    )
}

export default Hero
// Hero.defaultProps = {
//     hero: "defaultHero"
// }

