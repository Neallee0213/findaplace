import React from 'react'
import Title from '../Title'
import { Link } from "react-router-dom";
import './BottomTitle.scss'
const BottomTitle = () => {
    return (
        <div className="container-fluid title-container">
            <div className="row title-row">
                <div className="col title-col">
                    <Title title="The Top Brokerage in Toronto" size="3rem" />
                    <p>Whether it’s selling out new developments or hitting record selling prices,
                        we have both the reach and experience to create a seamless real estate transaction.
                Just like you wouldn’t go to a job interview naked, staging and photography is critical to setting record sale prices, and we do it better than anyone in the game.</p>
                    <button className="btn-contact">
                        <Link to="/contact" className="link">
                            <p>CONTACT US TODAY </p>
                        </Link>
                    </button>
                </div>
            </div>

        </div>
    )
}

export default BottomTitle
