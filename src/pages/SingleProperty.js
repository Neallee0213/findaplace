import React, { Component } from 'react';
import defaultBcg from "../images/room-1.jpeg";
import Map from "../components/Map";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import { RoomContext } from "../Context";
import StyledHero from "../components/StyledHero"
import Title from "../components/Title"
import SingleMap from "../components/SingleMap";

export default class SingleRoom extends Component {
    constructor(props) {
        super(props)
        this.state = {
            slug: this.props.match.params.slug,
            defaultBcg
        }
    }


    static contextType = RoomContext;
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


        return (
            <>
                <StyledHero img={mainImg || this.state.defaultBcg}>
                    <Banner title={`${name}`}>
                        <Link to="/properties" className="btn-primary">
                            Back to properties
                    </Link>
                    </Banner>
                </StyledHero>
                <section className="single-room">
                    <div className="single-room-images">
                        {defaultBcg.map((item, index) => {
                            return <img key={index} src={item} alt={name} />
                        })}

                    </div>
                    <div className="single-room-info">
                        <article className="desc">
                            <h3>details</h3>
                            <p>{description}</p>
                        </article>
                        <article className="info">
                            <h3>info</h3>
                            <h6>price: ${price}</h6>
                            <h6>size: {size} SQFT</h6>
                            <h6>Rooms: {capacity > 1 ? `${capacity} Properties` : `${capacity} Property`} </h6>
                            <h6>{rentable ? "Rentable" : "No Rentable allow"}</h6>
                            <h6>{breakfast && "free breakfast included"}</h6>
                        </article>
                    </div>
                </section>
                <section className="room-extras">
                    <h6>extras</h6>
                    <ul className="extras">
                        {extras.map((item, index) => {
                            return <li key={index}>- {item}</li>;
                        })}
                    </ul>
                </section>
                <div className="mt-1" />
                <Title title="Where your new home located it!" />
                <SingleMap lat={geometry.coordiantes[0]} lng={geometry.coordiantes[1]} />

            </>
        )

    }
}
