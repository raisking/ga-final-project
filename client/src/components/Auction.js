import React, { Component } from 'react';
import axios from 'axios';
import AuctionForm from './AuctionForm'
import './css/UserBid.css'


class Auction extends Component {
    state = {
        auctions: [],
        showNewForm: true
    }
    componentWillMount(){
        this.getAllAuctions()
    }
    getAllAuctions = async () => {
        const res = await axios.get('/api/auctions')
        this.setState({auctions: res.data})
    }
    toggleShowNewForm = () => {
        this.setState({showNewForm: !this.state.showNewForm})
    }
    render() {
        return (
            <div>
                <h3>Must bid higher than current bid</h3>
                <button onClick ={this.toggleShowNewForm}>Place Bid</button>
                {this.state.showNewForm ? <AuctionForm getAllAuctions={this.getAllAuctions}/> : null}

                {this.state.auctions.map(auction => (
                    <div class="bid_Wrapper">
                        <p>{auction.name}</p>
                        <p>${auction.amount}</p>
                    </div>
                    
                ))}
               
            </div>
        );
    }
}

export default Auction;