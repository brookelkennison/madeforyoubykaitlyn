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
        this.editingProducts = this.editingProducts.bind(this)
        this.doneEditingProducts = this.doneEditingProducts.bind(this)
        this.state = {isEditing: false}
    }
    editingProducts() {
        this.setState({
            isEditing: true
        })
    }
    doneEditingProducts() {
        this.setState({
            isEditing: false
        })
    }
    render() {
        const isEditing = this.state.isEditing
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
                                { !isEditing ? <button onClick={this.editingProducts}>edit</button> : null }
                                { isEditing ? <EditProducts isEditing={this.state.isEditing}/> : null }
                                { isEditing ? <button onClick={this.doneEditingProducts}>done</button> : null }
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
