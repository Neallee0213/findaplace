import React, { Component } from 'react'
import './Percentage.scss'
import Fade from 'react-reveal/Fade';
export class Percentage extends Component {
    state = {
        propertyStart: 0,
        propertyEnd: 20,
        salesStart: 550,
        salesEnd: 620,
        clientStart: 330,
        clientEnd: 400,

    }

    propertyPercent = () => {
        if (this.state.propertyStart < this.state.propertyEnd) {
            this.setState({
                propertyStart: this.state.propertyStart + 1
            })
        }
    }
    salesPercent = () => {
        if (this.state.salesStart < this.state.salesEnd) {
            this.setState({
                salesStart: this.state.salesStart + 1
            })
        }
    }
    clientPercent = () => {
        if (this.state.clientStart < this.state.clientEnd) {
            this.setState({
                clientStart: this.state.clientStart + 1
            })
        }
    }


    componentDidUpdate() {
        setTimeout(() => {
            this.propertyPercent()
        }, 100)
        setTimeout(() => {
            this.salesPercent()
        }, 270)
        setTimeout(() => {
            this.clientPercent()
        }, 270)
    }
    render() {
        return (
            <div className="container p_container">
                <div className="row p_row">
                    <Fade bottom duration={500}
                        onReveal={() => this.propertyPercent()}

                    >
                        <div className="col-4 p_col">
                            <h3>{this.state.propertyStart}</h3>
                            <p>ACTIVE LISTINGS</p>
                        </div>
                    </Fade>
                    <Fade bottom duration={800}
                        onReveal={() => this.salesPercent()}
                    >
                        <div className="col-4 p_col">
                            <h3>${this.state.salesStart}</h3>
                            <p>MILLION IN SALES</p>
                        </div>
                    </Fade>
                    <Fade bottom duration={1100}
                        onReveal={() => this.clientPercent()}
                    >
                        <div className="col-4 p_col">
                            <h3>{this.state.clientStart}+</h3>
                            <p>HAPPY CLIENTS</p>
                        </div>
                    </Fade>
                </div>
                <div className="break"></div>
            </div>
        )
    }
}

export default Percentage
