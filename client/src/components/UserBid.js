import React, { Component } from 'react';
import axios from 'axios';
import UserBidForm from './UserBidForm'
import './css/UserBid.css'


class UserBid extends Component {
    state ={
        users: [],
        showNewForm: true
    }
    componentWillMount(){
        this.getAllUsers() 
    }
    getAllUsers = async () => {
        const res = await axios.get('/api/users')
        this.setState({users: res.data})
    }
    toggleShowNewForm = ()=> {
        this.setState({showNewForm: !this.state.showNewForm})
    }
    render() {
        return (
            <div>
                <button onClick ={this.toggleShowNewForm}>Place Bid</button>
                {this.state.showNewForm ? <UserBidForm getAllUsers={this.getAllUsers}/> : null}
                {this.state.users.map(user => (
                    <div class="bid_Wrapper">
                        <p>{user.name}</p>
                        <p>${user.bid_amount}</p>
                    </div>
                    
                ))}
               
            </div>
        );
    }
}
        
export default UserBid;