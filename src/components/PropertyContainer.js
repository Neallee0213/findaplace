import React from 'react';
import PropertyFilter from "./PropertyFilter";
import PropertyList from "./PropertyList";
import { RoomConsumer } from "../Context";
import Loading from "./Loading";

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
                            <PropertyFilter properties={properties} />
                            <PropertyList properties={sortedProperties} />
                        </div>
                    );

                }
            }
        </RoomConsumer>
    )
}

export default PropertyContainer
