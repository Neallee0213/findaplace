import React, { Component } from "react";
import items from "./data";
// import Client from "./Contentful";

const RoomContext = React.createContext();

export default class RoomProvider extends Component {
    state = {
        properties: [],
        sortedProperties: [],
        featureProperties: [],
        offerProperties: [],
        loading: true,
        type: "All",
        capacity: 1,
        price: 0,
        minPrice: 0,
        maxPrice: 0,
        minSize: 0,
        maxSize: 0,
        parking: false,
        rentable: false,
        locations: []

    };

    componentDidMount() {
        let properties = this.formatData(items);
        let featureProperties = properties.filter(property => property.featured === true);
        let offerProperties = properties.filter(property => property.offer === true);
        let locations = properties.map(property => property.geometry.coordiantes);
        let maxPrice = Math.max(...properties.map(item => item.price));
        let maxSize = Math.max(...properties.map(item => item.size));
        this.setState({
            properties,
            featureProperties,
            offerProperties,
            sortedProperties: properties,
            loading: false,
            price: maxPrice,
            maxPrice,
            maxSize,
            locations

        });
    }

    formatData(items) {

        let tempItems = items.map(item => {
            let id = item.sys.id;
            let images = item.fields.images.map(image => image.fields.file.url);
            let property = { ...item.fields, images, id };
            return property;
        });
        return tempItems;
    }
    getRoom = slug => {
        let tempRooms = [...this.state.properties];
        const property = tempRooms.find(property => property.slug === slug);
        return property;
    };
    handleChange = event => {
        const target = event.target;
        const value = target.type === "checkbox" ? target.checked : target.value;
        const name = target.name;

        this.setState(
            {
                [name]: value
            },
            this.filterRooms
        );
    };
    filterRooms = () => {
        let {
            properties,
            type,
            capacity,
            price,
            minSize,
            maxSize,
            parking,
            rentable
        } = this.state;

        let tempRooms = [...properties];
        capacity = parseInt(capacity);
        price = parseInt(price);
        if (type !== "All") {
            tempRooms = tempRooms.filter(property => property.type === type);
        }
        if (capacity !== 1) {
            // console.log(tempRooms)
            tempRooms = tempRooms.filter(property => property.capacity >= capacity);
            // console.log(capacity)
        }
        tempRooms = tempRooms.filter(property => property.price <= price);
        tempRooms = tempRooms.filter(
            property => property.size >= minSize && property.size <= maxSize
        );

        if (parking) {
            tempRooms = tempRooms.filter(property => property.parking === true);
        }

        if (rentable) {
            tempRooms = tempRooms.filter(property => property.rentable === true);
        }
        this.setState({
            sortedProperties: tempRooms
        });
    };
    render() {
        return (
            <RoomContext.Provider
                value={{
                    ...this.state,
                    getRoom: this.getRoom,
                    handleChange: this.handleChange
                }}
            >
                {this.props.children}
            </RoomContext.Provider>
        );
    }
}
const RoomConsumer = RoomContext.Consumer;

export { RoomProvider, RoomConsumer, RoomContext };

export function withRoomConsumer(Component) {
    return function ConsumerWrapper(props) {
        return (
            <RoomConsumer>
                {value => <Component {...props} context={value} />}
            </RoomConsumer>
        );
    };
}
