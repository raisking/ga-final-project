import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components'
import { Redirect } from 'react-router-dom'
import './css/NewUserForm.css'

class ItemForm extends Component {
    state = {
        name: '',
        category: '',
        image: '',
        price: '',
        redirectToItem: false
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
        this.setState({redirectToItem: true})
    }

    render() {
        if(this.state.redirectToItem){
            return<Redirect to={'/'}/>  
        }
        
        return (
            <form onSubmit={this.handleSubmit}>
                <div className ="itemForm">
                    <div><label htmlFor="name">Name</label></div>
                    <input onChange={this.handleChange} type="text" name="name" placeholder="" value={this.state.name} />
                </div>
                <div>
                    <div><label htmlFor="category">Category</label></div>
                    <input onChange={this.handleChange} type="text" name="category" placeholder ="" value={this.state.category} />
                </div>
                <div>
                 <div> <label htmlFor="image">Image</label></div>
                    <input onChange={this.handleChange} type="url" name="image" placeholder="" value={this.state.image} />
                </div>
                <div>
                   <div> <label htmlFor="price">Price</label></div>
                    <input onChange={this.handleChange} type="text" name="price" placeholder="" value={this.state.price} />
                </div>
                <button>Submit</button>
            </form>
           
        );
    }
}
export default ItemForm;