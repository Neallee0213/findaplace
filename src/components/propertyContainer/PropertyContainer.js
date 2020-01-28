import React from 'react';
import PropertyFilter from "./PropertyFilter";
import PropertyList from "./PropertyList";
import { RoomConsumer } from "../../Context";
import Loading from "../Loading";
import PropertyCarousel from './PropertyCarousel'
import Maps from "../../components/maps/Maps"
const PropertyContainer = () => {
    return (
        <RoomConsumer>
            {
                (value) => {
                    const { loading, sortedProperties, properties } = value;
                    if (loading) {
                        return <Loading />;
                    }
                    return (

                        <div>
                            <PropertyCarousel properties={properties} />
                            <PropertyFilter properties={properties} />
                            <PropertyList properties={sortedProperties} />
                            <Maps />
                        </div>
                    );

                }
            }
        </RoomConsumer>
    )
}

export default PropertyContainer
