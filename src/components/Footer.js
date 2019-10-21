import React from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <>
            <footer className="footer">
                <div className="footer-left col-md-4 col-sm-6">
                    <h2> About us</h2>
                    <p className="about"><span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin magna ex, elementum id convallis eung elit.
                    consectetur adipiscing elit. Proin magna ex, elementum id convallis eung elit. Proin magna ex, elementum id convallis eu.Proin magna ex, elementum id convallis eu.</span>
                    </p>

                </div>
                <div className="footer-center col-md-4 col-sm-6">
                    <div className="menu">
                        <p><span>2 Bloor st West</span> Toronto, Canada</p>

                        <p> (+1) 416 123 4567</p>

                        <p><a href="#"> contact@findaPlace.com</a></p>
                    </div>
                </div>
                <div className="footer-right col-md-4 col-sm-6">
                    <h4>FindaPlace</h4>
                    <div className="menu">
                        <Link to="/">home</Link>
                        <Link to="/properties">properties</Link>
                        <Link to="/contact/">contact us</Link>
                    </div>
                </div>

            </footer>
        </>
    )
}

export default Footer
