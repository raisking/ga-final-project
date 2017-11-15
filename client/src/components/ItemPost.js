import React, { Component } from 'react';
import axios from 'axios';
import './css/itemPost.css'
import UserBid from './UserBid'
import { Redirect } from 'react-router'

class ItemPost extends Component {
    state = {
        items: [],
        redirectToItem: false
    }
    componentWillMount() {
        const itemId = this.props.match.params.id
        this.fetchItemData(itemId)
    }
    fetchItemData = async (itemId) => {
        try {
            console.log(itemId)
            const itemData = await axios.get(`/api/items/${itemId}`)
            console.log(itemData)
            await this.setState({
                items: itemData.data
            })

        } catch (error) {
            console.log(error)
        }
    }

    // deletePost = async (itemId) => {
    //     const res = await axios.delete(`/api/items/${itemId}`)
    //     const deletedItems = [...this.state.items]
    //     deletedItems.pop(res.data)
    //     this.setState({
    //         items: deletedItems})
    // }

    render() {
        return (
            <div>
                <div class="countDown">
                <h1>Count Down: </h1>
                </div>
                <div id="wrapper">
                    <div class="Wrapper-Flex">
                        <h2>{this.state.items.name} </h2>
                        <img src={this.state.items.image} alt="Car"/>
                        <p>{this.state.items.name}</p>
                        <p>{this.state.items.category}</p>
                        <p>Current Price: {this.state.items.price}</p>
                        <p class="freeshipping">FREE SHIPPING</p>
                        <p>Contact Seller</p>
                        <p>Print This Page</p>
                        <p>Share This Product</p>
                        
                   
                    </div>
                    <div class="Wrapper-Flex">
                        <UserBid />   
                    </div>
                </div>
            </div>
        );
    }
}
export default ItemPost;