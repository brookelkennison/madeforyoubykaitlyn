import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Store from "./components/Store";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import MyWork from "./components/MyWork";
import EditProducts from "./components/EditProducts";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Router>
                    <Nav />
                    <div id="pages">
                        <Switch>
                            <Route exact path="/">
                                <Home />
                            </Route>
                            <Route path="/store">
                                <EditProducts />
                                <Store />
                            </Route>
                            <Route path="/about-me">
                                <AboutMe />
                            </Route>
                            <Route path="/contact">
                                <Contact />
                            </Route>
                            <Route path="/my-work">
                                <MyWork />
                            </Route>
                        </Switch>
                    </div>
                </Router>
            </div>
        );
    }
}

export default App;
