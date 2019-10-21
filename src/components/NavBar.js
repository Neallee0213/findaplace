import React, { Component } from 'react';
import logo from "../images/logo.png";
import { FaAlignRight } from "react-icons/fa";
import { Link } from "react-router-dom";


export class NavBar extends Component {
    state = {
        isOpen: false
    }
    handleToggle = () => {
        this.setState({ isOpen: !this.state.isOpen })
    }
    render() {
        return (
            <nav className="navbar">
                <div className="nav-center">
                    <div className="nav-header">
                        <Link to="/">
                            <img src={logo} alt="logo" />
                        </Link>
                        <button type="button" className="nav-btn" onClick={this.handleToggle}>
                            <FaAlignRight className="nav-icon"></FaAlignRight>
                        </button>
                    </div>
                    <ul className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}>
                        <li className={this.state.isOpen ? null : "nav-linksMargin"}>
                            <Link to="/">home</Link>
                        </li>
                        <li className={this.state.isOpen ? null : "nav-linksMargin"}>
                            <Link to="/properties">properties</Link>
                        </li>
                        <li className={this.state.isOpen ? null : "nav-linksMargin"}>
                            <Link to="/contact/">contact us</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default NavBar
