import React, { Component } from 'react'
import { RoomContext } from "../Context";
import Loading from "./Loading"
import Property from "./Property"
import Title from "./Title"

export default class FeatureProperties extends Component {
    static contextType = RoomContext;
    render() {
        let { loading, featureProperties: properties } = this.context
        properties = properties.map(property => {
            return <Property key={property.id} property={property} />
        })


        return (
            <>
                <div className="mt-1"></div>
                <section className="featured-rooms">
                    <Title title="Recenly added" />
                    <div className="featured-rooms-center">
                        {loading ? <Loading /> : properties}
                    </div>

                </section >
            </>
        )
    }
}
