import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Items from './components/Items'
import NavBar from './components/NavBar'
import SignUpPage from './components/SignUpPage'
import LoginPage from './components/LoginPage'
import ItemPost from './components/ItemPost' 
import EditItem from './components/EditItem' 
import NewUser from './components/NewUser'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Switch>
            <Route exact path="/" component={Items} />
            <Route exact path="/items/:id" component={ItemPost} />
            <Route exact path="/items/:id/edit" component={EditItem} />
            <Route exact path="/SignUpPage" component={SignUpPage} />
            <Route exact path="/LoginPage" component={LoginPage} />
            <Route exact path="/NewUser" component={NewUser}/>
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App