import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Items from './components/Items'
import NavBar from './components/NavBar'
import SignUpPage from './components/SignUpPage'
import LoginPage from './components/LoginPage'
// import SingleCreature from './components/SingleCreature' 

class App extends Component {
  render () {
    return (
      <Router>
        <div>
          <NavBar/>
          <Switch>
             <Route exact path="/" component={Items}/>
            <Route exact path="/SignUpPage" component={SignUpPage}/>
            <Route exact path="/LoginPage" component={LoginPage}/>
            
            {/* <Route path="/:id" component={SingleCreature}/> */}
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App