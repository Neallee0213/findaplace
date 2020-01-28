import React, { Component } from 'react';
import defaultBcg from "../images/room-1.jpeg";
import ReactMapGL, { Marker } from "react-map-gl";
import { Link } from "react-router-dom";
import { RoomContext } from "../Context";
import 'owl.carousel/dist/assets/owl.carousel.min.css'
import 'owl.carousel/dist/assets/owl.theme.default.min.css'
import OwlCarousel from 'react-owl-carousel'
import { MdPlace } from "react-icons/md";
import './SingleProperty.scss'
import BottomTitle from '../components/bottomTitle/BottomTitle'
import { numberWithCommas } from '../components/utils'

const TOKEN = "pk.eyJ1Ijoiam9vbnkwMjEzIiwiYSI6ImNrNXdvcmZkdjF4ZnIzZGxiaGx6aGNqaTIifQ.wyLkRikQdlB_WLNJq6AEUA";
export default class SingleRoom extends Component {
    static contextType = RoomContext;

    constructor(props) {
        super(props)
        this.state = {
            slug: this.props.match.params.slug,
            defaultBcg,
            viewport: {
                latitude: 43.653225,
                longitude: -79.383186,
                zoom: 10,
                width: "100%",
                height: "100%"


            }
        }
    }


    render() {
        const { getRoom } = this.context;
        const property = getRoom(this.state.slug);
        if (!property) {
            return <div className="error">
                <h3>no such property could be found... </h3>
                <Link to="/properties" className="btn-primary">
                    Back to properties
                </Link>
            </div>
        }

        const { name, description, capacity, size, price, extras, breakfast, rentable, images, geometry } = property;
        const [mainImg, ...defaultBcg] = images;
        console.log(this.state.slug);
        console.log(images);
        console.log(defaultBcg);




        return (
            <>
                <div className="single-room">

                    <OwlCarousel
                        className="owl-theme"
                        items='5'
                        autoplay
                        loop
                        dots={false}
                        margin={9}
                        responsive={
                            {
                                0: {
                                    items: 1
                                },
                                600: {
                                    items: 1
                                },
                                1000: {
                                    items: 2
                                },
                            }
                        }
                    >
                        {images.map((item, index) => {
                            return <div className="item" key={index}>
                                <div
                                    className="imgs"
                                    style={{ backgroundImage: `url(${item})` }}
                                />
                            </div>
                        })}

                    </OwlCarousel>

                    < div className="container-fulid single-info">

                        <div className="row justify-content-around">
                            <div className="col-5">
                                {/* <SingleMap lat={geometry.coordiantes[0]} lng={geometry.coordiantes[1]} /> */}
                                <ReactMapGL
                                    mapboxApiAccessToken={TOKEN}
                                    {...this.state.viewport}
                                    mapStyle="mapbox://styles/joony0213/ck5wozj296af01is7ruat4auw"
                                    captureScroll={false}
                                    onViewportChange={viewport => {
                                        this.setState({ viewport })
                                    }}

                                >
                                    <Marker
                                        key={name}
                                        latitude={geometry.coordiantes[0]}
                                        longitude={geometry.coordiantes[1]}
                                        className="marker"
                                    >
                                        <div className="pins">
                                            <MdPlace />
                                        </div>
                                    </Marker>

                                </ReactMapGL>
                            </div>

                            <div className="col-5">
                                <div className="single-room-info">
                                    <article className="desc">
                                        <h3>details</h3>
                                        <p>{description}</p>
                                    </article>
                                    <article className="info">
                                        <h3>info</h3>
                                        <h5>Price: ${numberWithCommas(price)}</h5>
                                        <h5>Size: {size} SQFT</h5>
                                        <h5>BedRooms: {capacity > 1 ? `${capacity}` : `${capacity} Property`} </h5>
                                        <h5>{rentable ? "Rentable" : "No Rentable"}</h5>
                                        <h5>{breakfast && "free breakfast included"}</h5>
                                    </article>
                                    <ul className="extras">
                                        <h3>extra</h3>
                                        {extras.map((item, index) => {
                                            return <li key={index}><span>-</span> {item}</li>;
                                        })}
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div>
                    <BottomTitle />
                </div>

            </>
        )

    }
}
