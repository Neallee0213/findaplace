import React, { Component } from 'react';
import './NavBar.scss'
import logo from "../../images/logo.png";
import { FaAlignRight } from "react-icons/fa";
import { Link } from "react-router-dom";


export class NavBar extends Component {
    state = {
        headerShow: false
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }


    handleScroll = () => {
        if (window.scrollY > 660) {
            this.setState({
                headerShow: true
            })
        } else {
            this.setState({
                headerShow: false
            })
        }
    }

    render() {
        return (

            <nav className="navbar navbar-expand-md navbar-light"
                style={{ backgroundColor: this.state.headerShow ? "white" : "transparent" }}
            >
                <Link to="/" className="navbar-brand">
                    <p
                        style={{ color: this.state.headerShow ? "black" : "white" }}
                    >FINDAPLACE</p>
                    {/* <img src={logo} alt="logo" /> */}
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link style={{ color: this.state.headerShow ? "black" : "white" }}
                                className="nav-item nav-link" to="/">home</Link>
                        </li>
                        <li className="nav-item">
                            <Link style={{ color: this.state.headerShow ? "black" : "white" }}
                                className="nav-item nav-link" to="/properties">properties</Link>
                        </li>
                        <li className="nav-item">
                            <Link style={{ color: this.state.headerShow ? "black" : "white" }}
                                className="nav-item nav-link" to="/contact/">contact us</Link>
                        </li>

                    </ul>
                </div>
            </nav>

            // <nav className="navbar">
            //     <div className="nav-center">
            //         <div className="nav-header">
            //             <Link to="/">
            //                 <img src={logo} alt="logo" />
            //             </Link>
            //             <button type="button" className="nav-btn" onClick={this.handleToggle}>
            //                 <FaAlignRight className="nav-icon"></FaAlignRight>
            //             </button>
            //         </div>
            //         <ul className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}>
            //             <li className={this.state.isOpen ? null : "nav-linksMargin"}>
            //                 <Link to="/">home</Link>
            //             </li>
            //             <li className={this.state.isOpen ? null : "nav-linksMargin"}>
            //                 <Link to="/properties">properties</Link>
            //             </li>
            //             <li className={this.state.isOpen ? null : "nav-linksMargin"}>
            //                 <Link to="/contact/">contact us</Link>
            //             </li>
            //         </ul>
            //     </div>
            // </nav>
        )
    }
}

export default NavBar
