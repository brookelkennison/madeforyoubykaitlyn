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
    constructor(props) {
        super(props);
        this.isEditing = this.isEditing.bind(this)
        this.state = {editing: false}
    }
    isEditing() {
        this.editing = true
    }
    render() {
        const editing = this.state.editing
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
                                <button onClick={this.editing = true}>edit</button>
                                { editing ? <EditProducts editing={this.state.editing}/> : null }
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
