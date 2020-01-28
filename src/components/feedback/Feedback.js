import React from 'react'
import feedback1 from '../../images/feedback1.png'
import feedback2 from '../../images/feedback2.png'
import feedback3 from '../../images/feedback3.png'
import feedback4 from '../../images/feedback4.png'
import Title from '../Title'
import './Feedback.scss'
const Feedback = () => {
    return (
        <div className="feedback container-fluid">
            <div className="row title">
                <Title title="People's Experiences" />
            </div>
            <div className="row justify-content-around feedback-row">
                <div className="col-12 col-md-5">
                    <div className="row info-row">
                        <div className="col info-col">
                            <img src={feedback1} alt="" />
                            <div className="info-text">
                                <h4>Ted Stokes</h4>
                                <h5>Photographer</h5>
                            </div>
                        </div>

                    </div>
                    <p>Lectus proin nibh nisl condimentum id venenatis a condimentum vitae.
                        Scelerisque viverra mauris in aliquam sem fringilla. Ut eu sem integer vitae justo eget.
                         Habitasse platea dictumst vestibulum rhoncus.</p>
                </div>
                <div className="col-12 col-md-5">
                    <div className="row info-row">
                        <div className="col info-col">
                            <img src={feedback2} alt="" />
                            <div className="info-text">
                                <h4>Ted Stokes</h4>
                                <h5>Photographer</h5>
                            </div>
                        </div>

                    </div>
                    <p>Lectus proin nibh nisl condimentum id venenatis a condimentum vitae.
                        Scelerisque viverra mauris in aliquam sem fringilla. Ut eu sem integer vitae justo eget.
                         Habitasse platea dictumst vestibulum rhoncus.</p>
                </div>
            </div>
            <div className="row justify-content-around feedback-row">
                <div className="col-12 col-md-5">
                    <div className="row info-row">
                        <div className="col info-col">
                            <img src={feedback3} alt="" />
                            <div className="info-text">
                                <h4>Ted Stokes</h4>
                                <h5>Photographer</h5>
                            </div>
                        </div>

                    </div>
                    <p>Lectus proin nibh nisl condimentum id venenatis a condimentum vitae.
                        Scelerisque viverra mauris in aliquam sem fringilla. Ut eu sem integer vitae justo eget.
                         Habitasse platea dictumst vestibulum rhoncus.</p>
                </div>
                <div className="col-12 col-md-5">
                    <div className="row info-row">
                        <div className="col info-col">
                            <img src={feedback4} alt="" />
                            <div className="info-text">
                                <h4>Ted Stokes</h4>
                                <h5>Photographer</h5>
                            </div>
                        </div>

                    </div>
                    <p>Lectus proin nibh nisl condimentum id venenatis a condimentum vitae.
                        Scelerisque viverra mauris in aliquam sem fringilla. Ut eu sem integer vitae justo eget.
                         Habitasse platea dictumst vestibulum rhoncus.</p>
                </div>
            </div>
        </div>
    )
}

export default Feedback
