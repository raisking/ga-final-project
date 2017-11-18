import React, { Component } from 'react';
import axios from 'axios';
import './css/UserForm.css'

class UserBidForm extends Component {
    state = {
        name: '',
        address: '',
        email: '',
        telephone: '',
        bid_amount: ''
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
            bid_amount: this.state.bid_amount
        }
        await axios.post('/api/users', payload)
        await this.props.getAllUsers()
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div class="WrapperUserForm">
                    <div class="UserForm">
                        <div>
                            <div><label htmlFor="name" ></label></div>
                            <input onChange={this.handleChange} type="text"
                                name="name" placeholder="Name" value={this.state.name} />
                        </div>
                        <div>
                            <div><label htmlFor="price" ></label></div>
                            <input onChange={this.handleChange} type="text"
                                name="bid_amount" placeholder="Price" value={this.state.bid_amount} />
                        </div>
                    </div>
                </div>
                <button>Bid</button>
            </form>
        );
    }
}
export default UserBidForm;