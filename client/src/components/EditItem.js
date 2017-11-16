import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components'
import { Redirect } from 'react-router'
import './css/EditItem.css'

const FormItem = styled.div`
display: block;
`
const EditWrapper = styled.div`
display: flex;
justify-content: center;
`
class EditItem extends Component {
    state = {
        item: {},
        redirectToItem: false
    }
    componentWillMount() {
        this.getAllIems()
    }

    getAllIems = async () => {
        const itemId = this.props.match.params.id
        const res = await axios.get(`/api/items/${itemId}`)
        console.log(res.data)
        this.setState({ item: res.data })
    }

    handleChange = (event) => {
        const name = event.target.name
        const newState = { ...this.state.item }
        newState[name] = event.target.value
        this.setState({item: newState})
   

    }

    handleUpdate = async (event) => {
        event.preventDefault()
        const itemId = this.props.match.params.id
        const res = await axios.patch(`/api/items/${itemId}`,{
            item: this.state.item     
        })
        console.log(res)
        this.setState({item: res.data})
        this.setState({redirectToItem: true})
    }
    
    render() {
        // const {itemId}= this.props.match.params
        if (this.state.redirectToItem){
            return <Redirect to={`/`}/>
        }
        return (    
            <div className="editContainer">  
                <h1>Edit Page</h1>
                    <EditWrapper>
                        <form onSubmit={this.handleUpdate}>
                            <div>
                                <FormItem><label htmlFor="name"></label></FormItem>
                                <input onChange ={this.handleChange} type="text" name="name" value={this.state.item.name} />
                            </div>
                            <div>
                                <FormItem><label htmlFor="category"></label></FormItem>
                                <input onChange ={this.handleChange}type="text" name="category" value={this.state.item.category} />
                            </div>
                            <div>
                                <FormItem> <label htmlFor="image"></label></FormItem>
                                <input onChange ={this.handleChange}type="url" name="image" value={this.state.item.image} />
                            </div>
                            <div>
                                <FormItem><label htmlFor="price"></label></FormItem>
                                <input onChange ={this.handleChange}type="text" name="price" value={this.state.item.price} />
                            </div>
                           <input type='submit' value='Submit' />
                        </form>
                    </EditWrapper>
            </div>
        );
    }
}

export default EditItem;