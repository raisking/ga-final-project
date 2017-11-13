import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios'
import ItemForm from './ItemForm'
import styled from 'styled-components'

const Container = styled.div`
   margin: 30px;
    h1{
        text-align: center;
        text-shadow: 2px 2px 4px #000;
    }
`
const BtnContainer = styled.div`   
    padding: 20px;
    border: 1px solid #000;
    button {
        background: #071824;
        border-radius: 5px;
        color: #ffffff;
        font-size: 14px;
        padding: 5px 10px 5px 10px;
        margin-top: 10px;  
        margin-bottom: 10px; 
        text-decoration: none;
    }
    button:hover {
        background: #4d697a;
        text-decoration: none;
    }
`
const WrapperFlex = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    margin: 30px;
    padding: 20px;

`
const ItemWrapper = styled.div`
    border: 1px solid #000; 
    margin: 20px;
    width: 300px;
    height: 200px;
    padding: 10px;
    button {
        background: #3498db;
        color: #ffffff;
        font-size: 12px;
        padding: 5px 15px 5px 15px;
        text-decoration: none;
    }
    button:hover {
        background: #3cb0fd;
        text-decoration: none;
    }

`
const AboutDiv = styled.div`
    text-align: center;

`

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
        this.setState({ items: res.data })
    }
    toggleShowNewForm = () => {
        this.setState({ showNewForm: !this.state.showNewForm })
    }
    render() {
        return (
            <Container>
                <div>
                    <h1>Welcome to Auction App</h1>
                    <WrapperFlex>
                       {this.state.items.map(item => (
                            <Link key={item._id} to={`/${item._id}`}>
                            <ItemWrapper>
                                <p>Image: {item.image}</p>
                                <h3>Name: {item.name}</h3>
                                <p>Category: {item.category}</p>
                                <p>Price: {item.price}</p>
                                <button>Bid Now</button>
                            </ItemWrapper>
                            </Link>
                        ))}
                    </WrapperFlex>
                    <AboutDiv>
                        <p>Copyright @2017</p>
                    </AboutDiv>
                </div>
            </Container>
        );
    }
}
export default Items;