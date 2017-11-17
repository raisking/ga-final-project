import React, { Component } from 'react';
import axios from 'axios';
import './css/itemPost.css'
import UserBid from './UserBid'
import { Redirect } from 'react-router'
import { Link } from 'react-router-dom'

class BuyItNow extends Component {
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
    
                <h2>CheckOut</h2>
             
                <div id="wrapper">
                    <div class="Wrapper-Flex">
                        <h2>{this.state.items.name} </h2>
                        <img src={this.state.items.image} alt="Car"/>
                        <p>{this.state.items.name}</p>
                        <p>{this.state.items.category}</p>
                        <p>Total:{this.state.items.price}</p>
                

                       {/* <Link key={this.state.items._id} to={`/items/${this.state.items.id}/BuyItNow`}> */}
                        <a href= "https://www.paypal.com/signin?country.x=US&locale.x=en_US" target="_blank"> <button>Place your order</button>
                        </a>
                       {/* </Link> */}
                    </div>
                    <div class="Wrapper-Flex">
                     
                    </div>
                </div>
            </div>
        );
    }
}
export default BuyItNow;