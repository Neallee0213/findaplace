import React, { Component } from 'react'
import "./App.css"
import { Route, Switch } from "react-router-dom"
import Home from "./pages/Home"
import Error from "./pages/Error"
import SingleProperty from "./pages/SingleProperty"
import Properties from "./pages/Properties"
import ContactUs from "./pages/ContactUs"
import NavBar from "./components/NavBar"
import Footer from "./components/Footer"


export class App extends Component {
  render() {
    return (
      <>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/properties/" component={Properties} />
          <Route exact path="/Properties/:slug" component={SingleProperty} />
          <Route exact path="/contact" component={ContactUs} />
          <Route component={Error} />
        </Switch>
        <Footer />
      </>
    )
  }
}

export default App
