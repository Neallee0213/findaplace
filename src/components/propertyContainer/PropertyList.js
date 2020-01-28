import React from "react";
import Property from "../Property/Property";
import './PropertyList.scss'
import { numberWithCommas } from '../utils'

const PropertyList = ({ properties }) => {
    if (properties.length === 0) {
        return (
            <div className="container-fluid">
                <div className="row justify-content-center">
                    <div className="empty-search">
                        <h3>unfortunately, no properties matched your search parameters.</h3>
                    </div>
                </div>
            </div>
        );
    }
    return (
        <section className="container-fluid">
            <div className="row list-row">
                {properties.map(item => (
                    <div className="col-4">
                        <div className="info">
                            <Property key={item.id} property={item} />
                            <div className="row type-row">
                                <div className="col type-col">
                                    <h5>{item.type}</h5>
                                </div>
                            </div>
                            <div className="row details-row">
                                <div className="col details-col">
                                    <p>Bed <span>{item.capacity}</span></p>
                                    <p>Size <span>{numberWithCommas(item.size)}</span>Sq Ft</p>
                                    <p>Parking <span>{item.parking === true ? "Yes" : "NO"}</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}

            </div>
        </section>
    );
};

export default PropertyList;