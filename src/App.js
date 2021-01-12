import React from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from "./ReactMenu/Home";
import About from "./ReactMenu/About";
import Contact from "./ReactMenu/Contact";
import Services from "./ReactMenu/Services";
import Navbar from "./Navbar";
// import Error from "./Error";
import { Redirect, Route, Switch } from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/services" component={Services} />
        <Redirect to="/" />
      </Switch>
    </React.Fragment>
  );
}

export default App;
