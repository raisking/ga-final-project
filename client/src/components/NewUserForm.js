import React, { Component } from 'react';
import axios from 'axios'
import { Redirect } from 'react-router-dom'
import './css/NewUserForm.css'
7
class NewUserForm extends Component {
    state = {
        name: '',
        address: '',
        email: '',
        telephone: '',
        image: '',
        redirectToUserProfile: false
    }
    handleChange = (event) => {
        const name = event.target.name
        const newState = { ...this.state }
        newState[name] = event.target.value
        this.setState(newState)
    }
    handleSubmit = async (event) => {
        event.preventDefault()
        const payload = {
            name: this.state.name,
            address: this.state.address,
            email: this.state.email,
            image: this.state.image,
            telephone: this.state.telephone

        }
        await axios.post('/api/users', payload)
        await this.props.getAllUsers()
        this.setState({ redirectToUserProfile: true })
    }

    render() {
        if (this.state.redirectToUserProfile) {
            return <Redirect to={'/NewUser'} />
        }
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="itemForm">
                    <div><label htmlFor="name">Name </label></div>
                    <input onChange={this.handleChange} type="text" name="name" value={this.state.name} />
                </div>
                <div>
                    <div><label htmlFor="address">Address </label></div>
                    <input onChange={this.handleChange} type="text" name="address" value={this.state.address} />
                </div>
                <div>
                    <div><label htmlFor="email">Email </label></div>
                    <input onChange={this.handleChange} type="text" name="email" value={this.state.email} />
                </div>
                <div>
                    <div><label htmlFor="telephone">Telephone </label></div>
                    <input onChange={this.handleChange} type="text" name="telephone" value={this.state.telephone} />
                </div>
                <div>
                    <div><label htmlFor="image">Image</label></div>
                    <input onChange={this.handleChange} type="url" name="image" value={this.state.image} />
                </div>
                <button>Submit</button>
            </form>
        );
    }
}
export default NewUserForm;