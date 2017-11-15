import React, { Component } from 'react';
import axios from 'axios'

class NewUserForm extends Component {
    state = {
        name: '',
        address: '',
        email: '',
        telephone: '',
        image: ''
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
            // telephone: this.state.telephone,
            // image: this.state.image
        }
        await axios.post('/api/users', payload)
        await this.props.getAllUsers()
    }


    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label htmlFor="name">Name: </label>
                    <input onChange={this.handleChange} type="text" name="name" value={this.state.name} />
                </div>
                <div>
                    <label htmlFor="address">Address: </label>
                    <input onChange={this.handleChange} type="text" name="address" value={this.state.address} />
                </div>
                <div>
                    <label htmlFor="email">Email: </label>
                    <input onChange={this.handleChange} type="text" name="email" value={this.state.email} />
                </div>
                <div>
                    <label htmlFor="email">Telephone: </label>
                    <input onChange={this.handleChange} type="text" name="telephone" value={this.state.telephone} />
                </div>
                <div>
                    <label htmlFor="email">Image: </label>
                    <input onChange={this.handleChange} type="url" name="image" value={this.state.image} />
                </div>
                <button>Submit</button>
            </form>
        );
    }
}

export default NewUserForm;