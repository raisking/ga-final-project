import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios'
import './css/items.css'



class Items extends Component {
    state = {
        items: [],
        showNewForm: false
    }
    componentWillMount() {
        this.getAllItems()
    }
    getAllItems = async () => {
        const res = await axios.get('/api/items')
        this.setState({ items: res.data.reverse()})
    }
    toggleShowNewForm = () => {
        this.setState({ showNewForm: !this.state.showNewForm })
    }
    deleteItem = async (itemId) => {
        const res = await axios.delete(`/api/items/${itemId}`)
        const deletedItems = [...this.state.items]
        console.log(deletedItems)
        deletedItems.pop(res.data)
        this.setState({
            items: deletedItems})
    }   


    
    render() {  
        return (
            <div className="itemsContainerWrapper">
                <h1>Auto Auction</h1>
                <div className="WrapperFlex">
                    {this.state.items.map(item => (
                        <div className="containerItems">
                            <div>
                                <img className="itemImg" src={item.image} alt="Car" />
                            </div>
                            <div className="label">
                                <h3>{item.name}</h3>
                                <p>Category: {item.category}</p>
                                <p>Starting Price: {item.price}</p>
                                <p className="freeshipping">FREE SHIPPING</p>
                                <Link key={item._id} to={`/items/${item.id}`}>
                                    <button className="bid_now">Bid Now</button>
                                </Link>
                                <button onClick={() => this.deleteItem(item.id)}>Delete</button> 
                                <Link key = {item._id} to={`/items/${item.id}/edit`}>        
                                <button>Edit</button>      
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}
export default Items;