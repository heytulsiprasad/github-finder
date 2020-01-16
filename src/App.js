import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import './App.css'
import axios from "axios"
import Navbar from "./components/layout/Navbar"
import Users from "./components/users/Users"
import About from "./components/pages/About"
import Alert from "./components/layout/Alert"
import Search from "./components/users/Search"

class App extends Component {
  state = {
    users: [],
    loading: false,
    alert: null
  }

  async componentDidMount() {
    this.setState({ loading: true })

    const res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)

    this.setState({ users: res.data, loading: false })
  }

  // Search Github Users
  searchUsers = async text => {

    this.setState({ loading: true })

    const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)

    this.setState({ users: res.data.items, loading: false })

  }

  // clears users from state
  clearUsers = () => this.setState({ users: [], loading: false })

  // Set ALert
  setAlert = (msg, type) => {
    this.setState({ alert: { msg: msg, type: type } })

    setTimeout(() => this.setState({ alert: null }), 2000)
  }

  render() {
    const { users, loading } = this.state

    return (
      <Router>
        <div className="App">
          <Navbar title="GitHub Finder" icon="fab fa-github" />
          <div className="container">
            <Alert alert={this.state.alert} />
            <Switch>
              <Route exact path="/" render={props => (
                <Fragment>
                  <Search searchUsers={this.searchUsers} clearUsers={this.clearUsers} showClear={users.length > 0 ? true : false} setAlert={this.setAlert} />
                  <Users loading={loading} users={users} />
                </Fragment>
              )} />
              <Route exact path="/about" component={About} />
            </Switch>
          </div>
          </div>
      </Router>
        );
      }
    
    }
    
    export default App
