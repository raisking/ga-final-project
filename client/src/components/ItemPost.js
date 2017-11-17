import React, { Component } from 'react';
import axios from 'axios';
import './css/itemPost.css'
import UserBid from './UserBid'
import { Redirect } from 'react-router'
import { Link } from 'react-router-dom'
import Auction from './Auction'

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
        
    render() {

        return (
            <div>
                <div class="countDown">
                <h1>Count Down </h1> 
                </div>
                <div id="wrapper">
                    <div class="Wrapper-Flex">
                        <h2>{this.state.items.name} </h2>
                        <img src={this.state.items.image} alt="Car"/>
                        <p>{this.state.items.name}</p>
                        <p>{this.state.items.category}</p>
                        <p>Price: {this.state.items.price}</p>
                        <p class="freeshipping">FREE SHIPPING</p>
                        <a href="#"><p>Contact Seller</p></a>
                        <a href="#"><p>Print This Page</p></a>
                        <a href="#"><p>Share This Product</p></a>

                       <Link key={this.state.items._id} to={`/items/${this.state.items.id}/BuyItNow`}>
                       <button>Buy It Now</button>
                       </Link>
                    </div>
                    <div class="Wrapper-Flex">
                        <Auction />  
                        {/* <UserBid/> */}
                    </div>
                </div>
            </div>
        );
    }
}
export default ItemPost;