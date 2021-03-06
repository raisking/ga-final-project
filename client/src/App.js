import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Items from './components/Items'
import NavBar from './components/NavBar'
import SignUpPage from './components/SignUpPage'
import LoginPage from './components/LoginPage'
import ItemPost from './components/ItemPost'
import EditItem from './components/EditItem'
import NewUser from './components/NewUser'
import NewUserItem from './components/NewUserItem'
import BuyItNow from './components/BuyItNow'
import Footer from './components/Footer'
import Show from './components/Show'
import './App.css'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="content">
          <NavBar />
          <Switch>
            <Route exact path="/" component={Items} />
            <Route exact path="/items/:id" component={ItemPost} />
            <Route exact path="/items/:id/edit" component={EditItem} />
            <Route exact path="/SignUpPage" component={SignUpPage} />
            <Route exact path="/LoginPage" component={LoginPage} />
            <Route exact path="/NewUser" component={NewUser} />
            <Route exact path="/users/:id/SignUpPage" component={SignUpPage} />
            <Route exact path="/users/:id/SignUpPage/NewUserItem/:id" component={NewUserItem} />
            <Route exact path="/items/:id/BuyItNow" component={BuyItNow} />
            <Route exact path="/users/:id/items/:id/show" component={Show} />
          </Switch>
          <div className="FooterArea">
            <Footer />
          </div>
        </div>
      </Router>
    )
  }
}

export default App