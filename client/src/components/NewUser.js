import React, { Component } from 'react';
import axios from 'axios'
import NewUserForm from './NewUserForm'
import './css/NewUser.css'

class NewUser extends Component {
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
                <h1>User</h1>
                <div>
                    <button onClick={this.toggleShowNewForm}>New</button>
                    {this.state.showNewForm ? <NewUserForm getAllUsers={this.getAllUsers} /> : null}
                </div>
                {this.state.users.map(user => (
                    <div className="innerDiv">
                        <img src={user.image} alt="User Photo" />
                        <p>Name: {user.name}</p>
                        <p>Address:{user.address}</p>
                        <p>Email:{user.email}</p>
                        <p>Telephone:{user.telephone}</p>
                    </div>
                ))}
            </div>
        );
    }
}

export default NewUser;