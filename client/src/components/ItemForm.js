import React, { Component } from 'react';
import axios from 'axios';

class ItemForm extends Component {
    state = {
        name: '',
        category: '',
        image: '',
        price: ''

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
            category: this.state.category,
            image: this.state.image,
            price: this.state.price
        }
        await axios.post('/api/items', payload)
        await this.props.getAllItems()
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label htmlFor="name">Name: </label>
                    <input onChange={this.handleChange} type="text" name="name" value={this.state.name} />
                </div>
                <div>
                    <label htmlFor="category">Category: </label>
                    <input onChange={this.handleChange} type="text" name="category" value={this.state.category} />
                </div>
                <div>
                    <label htmlFor="image">Image: </label>
                    <input onChange={this.handleChange} type="text" name="image" value={this.state.image} />
                </div>
                <div>
                    <label htmlFor="price">Price: </label>
                    <input onChange={this.handleChange} type="text" name="price" value={this.state.price} />
                </div>
                <button>Submit</button>
            </form>
        );
    }
}

export default ItemForm;