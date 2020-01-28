import React, { Component } from 'react'
import { RoomContext } from "../Context";
import Loading from "./Loading"
import Property from "./Property/Property"
import Title from "./Title"
import './FeaturedProperties.scss'
export default class FeatureProperties extends Component {
    static contextType = RoomContext;
    render() {
        let { loading, featureProperties: properties } = this.context
        properties = properties.map(property => {
            return <div className="col-md-4 col-12">
                <Property key={property.id} property={property} />
            </div>
        })

        console.log(properties)
        return (
            <div className="container-fluid featured">
                <div className="row title">
                    <Title title="Check out our recently listed properties" />
                </div>
                <div className="row justify-content-center">

                    {loading ? <Loading /> : properties}

                </div>
            </div>
        )
    }
}
