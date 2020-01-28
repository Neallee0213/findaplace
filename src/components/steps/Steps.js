import React from 'react'
import './Steps.scss'
import browsing from '../../images/steps/browsing.jpg'
import key from '../../images/steps/key.jpg'
import moving from '../../images/steps/moving.jpg'
import realtor from '../../images/steps/realtor.jpg'
const Steps = () => {
    return (
        <div className="container-flui steps-container">
            <div className="row steps-row">
                <div className="lines"></div>
                <div className="col-5 col-md-3 steps-col">
                    <h3>1</h3>
                    <img src={browsing} alt="" />
                    <h5>Choose a category</h5>
                    <p> aute labore nisi aliqua nisi excepteur. Proident et mollit ex nostrud eu anim id occaecat est duis ut irure.</p>
                </div>
                <div className="col-5 col-md-3 steps-col">
                    <h3>2</h3>
                    <img src={realtor} alt="" />
                    <h5>Find real estate</h5>
                    <p> aute labore nisi aliqua nisi excepteur. Proident et mollit ex nostrud eu anim id occaecat est duis ut irure.</p>
                </div>
                <div className="col-5 col-md-3 steps-col">
                    <h3>3</h3>
                    <img src={key} alt="" />
                    <h5>Take the keys</h5>
                    <p> aute labore nisi aliqua nisi excepteur. Proident et mollit ex nostrud eu anim id occaecat est duis ut irure.</p>
                </div>
                <div className="col-5 col-md-3 steps-col">
                    <h3>4</h3>
                    <img src={moving} alt="" />
                    <h5>Moving in</h5>
                    <p> aute labore nisi aliqua nisi excepteur. Proident et mollit ex nostrud eu anim id occaecat est duis ut irure.</p>
                </div>
            </div>

        </div>
    )
}

export default Steps
