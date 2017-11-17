import React, { Component } from 'react';
import axios from 'axios'
import NewUserForm from './NewUserForm'
import './css/LoginPage.css'

class LoginPage extends Component {
    state = {
        users: [],
        showNewForm: true

    }
    componentWillMount() {
        this.getAllUsers()
    }
    getAllUsers = async () => {
        const res = await axios.get('/api/users')
        this.setState({ users: res.data })
    }
    toggleShowNewForm = () => {
        this.setState({ showNewForm: !this.state.showNewForm })
    }

    render() {
        return (
            <div className="outerDiv">
                <h2>Create a New User</h2>
                <div className="innerDivForm">
                    <button onClick={this.toggleShowNewForm}>New</button>
                    {this.state.showNewForm ? <NewUserForm getAllUsers={this.getAllUsers} /> : null}
                </div>
            </div>
        );
    }
}

export default LoginPage;