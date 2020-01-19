import React, { Fragment, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";
import About from "./components/pages/About";
import User from "./components/users/User";
import Alert from "./components/layout/Alert";
import Search from "./components/users/Search";

import GithubState from "./context/github/GithubState";

const App = () => {
    const [alert, setAlert] = useState(null);

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
    const showAlert = (msg, type) => {
        setAlert({ msg: msg, type: type });

        setTimeout(() => setAlert(null), 2000);
    };

    return (
        <GithubState>
            <Router>
                <div className="App">
                    <Navbar title="GitHub Finder" icon="fab fa-github" />
                    <div className="container">
                        <Alert alert={alert} />
                        <Switch>
                            <Route
                                exact
                                path="/"
                                render={props => (
                                    <Fragment>
                                        <Search setAlert={showAlert} />
                                        <Users />
                                    </Fragment>
                                )}
                            />
                            <Route exact path="/about" component={About} />
                            <Route exact path="/user/:login" component={User} />
                        </Switch>
                    </div>
                </div>
            </Router>
        </GithubState>
    );
};

export default App;
