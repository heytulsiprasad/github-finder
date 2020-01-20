import React, { Fragment, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import About from "./components/pages/About";
import User from "./components/users/User";
import Alert from "./components/layout/Alert";
import Home from "./components/pages/Home";
import NotFound from "./components/pages/NotFound";

import GithubState from "./context/github/GithubState";
import AlertState from "./context/alert/AlertState";

const App = () => {
    // async componentDidMount() {
    //   setLoading(true)

    //     const res = await axios.get(
    //         `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    //     );

    //     setUsers(res.data)
    //     setLoading(false)
    // }

    // TODO: Put the above into an async useEffect hook

    // Search Github Users

    //  Get single Github user

    // Get users repos

    // clears users from state

    // Set ALert

    return (
        <GithubState>
            <AlertState>
                <Router>
                    <div className="App">
                        <Navbar title="GitHub Finder" icon="fab fa-github" />
                        <div className="container">
                            <Alert />
                            <Switch>
                                <Route exact path="/" component={Home} />
                                <Route exact path="/about" component={About} />
                                <Route
                                    exact
                                    path="/user/:login"
                                    component={User}
                                />
                                <Route component={NotFound} />
                            </Switch>
                        </div>
                    </div>
                </Router>
            </AlertState>
        </GithubState>
    );
};

export default App;
