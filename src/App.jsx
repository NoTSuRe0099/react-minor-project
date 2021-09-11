import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home";
import PageNotFound from "./Pages/PageNotFound/PageNotFound";
import TestPage from "./Pages/TestPage";

class App extends Component {
    render() {
        return (
            <>
                <Router>
                    <Switch>
                        <Route path="/TestPage" component={TestPage} />
                        <Route exact path="/" component={Home} />
                        <Route component={PageNotFound} />
                    </Switch>
                </Router>
            </>
        );
    }
}

export default App;
