import React from 'react'
import agent1 from '../../images/agent-1.jpg';
import agent2 from '../../images/agent-2.jpg';
import agent3 from '../../images/agent-3.jpg';
import agent4 from '../../images/agent-4.jpg';
import Title from "../../components/Title"

import { TiSocialTwitterCircular } from "react-icons/ti";
import { TiSocialFacebookCircular } from "react-icons/ti";
import { TiSocialGooglePlusCircular } from "react-icons/ti";
import { TiSocialAtCircular } from "react-icons/ti";

import './Agents.scss'


const Agents = () => {
    return (
        <div className="container-fluid agent-container">
            <div className="row">
                <Title title="Our Agents" size="2rem" />
            </div>
            <div className="row agent-row justify-content-around">
                <div className="col-5 col-md-2 agent-col">
                    <img src={agent1} alt="" />
                    <div className="info">
                        <h3>Chris Robinson</h3>
                        <h5>Broker</h5>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </p>

                        <div className="icons">
                            <TiSocialTwitterCircular className="twitter" />
                            <TiSocialFacebookCircular className="facebook" />
                            <TiSocialGooglePlusCircular className="google" />
                            <TiSocialAtCircular className="email" />
                        </div>

                    </div>
                </div>
                <div className="col-5 col-md-2 agent-col">
                    <img src={agent2} alt="" />
                    <div className="info">
                        <h3>Kim Owens</h3>
                        <h5>Agent</h5>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </p>
                        <div className="icons">
                            <TiSocialTwitterCircular className="twitter" />
                            <TiSocialFacebookCircular className="facebook" />
                            <TiSocialGooglePlusCircular className="google" />
                            <TiSocialAtCircular className="email" />
                        </div>
                    </div>
                </div>
                <div className="col-5 col-md-2 agent-col">
                    <img src={agent3} alt="" />
                    <div className="info">
                        <h3>Neal Lewis</h3>
                        <h5>Agent</h5>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </p>
                        <div className="icons">
                            <TiSocialTwitterCircular className="twitter" />
                            <TiSocialFacebookCircular className="facebook" />
                            <TiSocialGooglePlusCircular className="google" />
                            <TiSocialAtCircular className="email" />
                        </div>
                    </div>
                </div>
                <div className="col-5 col-md-2 agent-col">
                    <img src={agent4} alt="" />
                    <div className="info">
                        <h3>Allison Holmes</h3>
                        <h5>Agent</h5>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </p>
                        <div className="icons">
                            <TiSocialTwitterCircular className="twitter" />
                            <TiSocialFacebookCircular className="facebook" />
                            <TiSocialGooglePlusCircular className="google" />
                            <TiSocialAtCircular className="email" />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Agents
