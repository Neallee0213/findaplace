import React, { Component } from 'react'
import { RoomContext } from "../../Context";
import Map from './Map'
import Title from '../Title'
export class Maps extends Component {
    static contextType = RoomContext;

    render() {
        let { properties } = this.context

        return (
            <>
                <Map properties={properties} />
            </>
        )
    }
}

export default Maps
