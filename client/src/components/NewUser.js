import React, { Component } from 'react';
import axios from 'axios'
import './css/NewUser.css'
import { Link } from 'react-router-dom'

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
    // deleteUser = async(userId) => {
    //     const res = await axios.delete(`/api/users/${userId}`)
    //     const removeUsers = [...this.state.users]
    //     console.log(removeUsers)
    //     removeUsers.pop(res.data)
    //     this.setState({ users: removeUsers})
    // }
    deleteUser = async (userId) => {
        const res = await axios.delete(`/api/items/${userId}`)
        const deletedUsers = [...this.state.users]
        console.log(deletedUsers)
        deletedUsers.pop(res.data)
        this.setState({
            users: deletedUsers})
    }   

    render() {
        return (
            <div className="outerDiv">
                <h1>User Profile</h1>
        
                {this.state.users.map(user => (
                    <div className="innerDiv">
                        <img src={user.image} alt="Car" />
                        <p>Name: {user.name}</p>
                        <p>Address:{user.address}</p>
                        <p>Email:{user.email}</p>
                        <p>Telephone:{user.telephone}</p>

                        <button onClick={() => this.deleteUser(user.id)}>Delete</button> 
                        <button>
                        <Link key = {user._id} to={`/users/${user.id}/SignUpPage`}>Add New Item</Link>
                        </button>
                    </div>

                ))}
            </div>
        );
    }
}

export default NewUser;