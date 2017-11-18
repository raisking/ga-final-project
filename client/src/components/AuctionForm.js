import React, { Component } from 'react';
import axios from 'axios'
import './css/UserForm.css'

class AuctionForm extends Component {
    state = {
        name: '',
        amount: ''
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
            amount: this.state.amount
        }
        const res = await axios.post('/api/auctions', payload)
        console.log(res)
        await this.props.getAllAuctions()
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
                            <div><label htmlFor="amount" ></label></div>
                            <input onChange={this.handleChange} type="text"
                                name="amount" placeholder="Amount" value={this.state.amount} />
                        </div>
                    </div>
                </div>
                <button>Bid</button>
            </form>
        );
    }
}

export default AuctionForm;