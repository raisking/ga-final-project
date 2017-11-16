import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components'
import { Redirect } from 'react-router-dom'

const FormContainer = styled.div`
    
    input{
        width: 200px;
        background-color: #ccc; 
        font-size: 14px;
        padding: 5px;
    }
`
const FormItem = styled.div`
    display: block;
    div{
        margin: 200px;
    }  
`

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
            
            <FormContainer>
            <form onSubmit={this.handleSubmit}>
                <div>
                 <FormItem><label htmlFor="name"></label></FormItem>
                    <input onChange={this.handleChange} type="text" name="name" placeholder="name" value={this.state.name} />
                </div>
                <div>
                    <FormItem><label htmlFor="category"></label></FormItem>
                    <input onChange={this.handleChange} type="text" name="category" placeholder ="category" value={this.state.category} />
                </div>
                <div>
                   <FormItem> <label htmlFor="image"></label></FormItem>
                    <input onChange={this.handleChange} type="url" name="image" placeholder="image url" value={this.state.image} />
                </div>
                <div>
                    <FormItem><label htmlFor="price"></label></FormItem>
                    <input onChange={this.handleChange} type="text" name="price" placeholder="price" value={this.state.price} />
                </div>
                <button>Submit</button>
            </form>
            </FormContainer>
        );
    }
}
export default ItemForm;