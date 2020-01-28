import React from 'react';
import { useContext } from "react";
import { RoomContext } from "../../Context";
import Title from "../Title"
import './PropertyFilter.scss'
const getUnique = (items, value) => {
    return [...new Set(items.map(item => item[value]))];
};

const PropertyFilter = ({ properties }) => {
    const context = useContext(RoomContext);
    const {
        handleChange,
        type,
        capacity,
        price,
        minPrice,
        maxPrice,
        // minSize,
        // maxSize,
        parking,
        rentable
    } = context;


    let types = getUnique(properties, "type");
    types = ["All", ...types];
    types = types.map((item, index) => (
        <option key={index} value={item}>
            {item}
        </option>
    ));
    let people = getUnique(properties, "capacity");
    people = people.map((item, index) => (
        <option key={index} value={item}>
            {item}
        </option>
    ));
    return (
        <div className="filter-container container">
            <Title title="search properties" />
            <div className="filter-form row justify-content-center">
                <div className="form-group col-3 type">
                    <label htmlFor="type">property type</label>
                    <select
                        name="type"
                        id="type"
                        onChange={handleChange}
                        className="form-control"
                        value={type}
                    >
                        {types}
                    </select>
                </div>

                <div className="form-group col-3 cap">
                    <label htmlFor="capacity">Guests</label>
                    <select
                        name="capacity"
                        id="capacity"
                        onChange={handleChange}
                        className="form-control"
                        value={capacity}
                    >
                        {people}
                    </select>
                </div>


                <div className="form-group col-3 price">
                    <label htmlFor="price">property price ${price}</label>
                    <input
                        type="range"
                        name="price"
                        min={minPrice}
                        max={maxPrice}
                        id="price"
                        value={price}
                        onChange={handleChange}
                        className="form-control"
                        style={{ padding: "0", margin: "0" }}
                    />
                </div>

                <div className="form-group col-3 extra">
                    <div className="single-extra">
                        <input
                            type="checkbox"
                            name="parking"
                            id="parking"
                            checked={parking}
                            onChange={handleChange}
                        />
                        <label htmlFor="parking">parking</label>
                    </div>

                    <div className="single-extra">
                        <input
                            type="checkbox"
                            name="rentable"
                            checked={rentable}
                            onChange={handleChange}
                        />
                        <label htmlFor="parking">rentable</label>
                    </div>
                </div>


                {/* <div className="form-group col-6">
                    <label htmlFor="price">property size </label>
                    <div className="size-inputs">
                        

                        <input
                            type="number"
                            name="minSize"
                            value={minSize}
                            onChange={handleChange}
                            className="size-input"
                        />
                        <input
                            type="number"
                            name="maxSize"
                            value={maxSize}
                            onChange={handleChange}
                            className="size-input"
                        />
                    </div>
                </div> */}
            </div>

        </div>
    );
};


export default PropertyFilter;
