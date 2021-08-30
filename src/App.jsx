import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home";
import PageNotFound from "./Pages/PageNotFound/PageNotFound";

class App extends Component {
    render() {
        return (
            <>
                <Router>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route component={PageNotFound} />
                    </Switch>
                </Router>
            </>
        );
    }
}

export default App;
