import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios'
import ItemForm from './ItemForm'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    justify-content: center;
   margin: 30px;
    h1{
        text-align: center;
        text-shadow: 2px 2px 4px #000;
    }
`
const BtnContainer = styled.div`   
    padding: 20px;
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

class SignUpPage extends Component {
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
                    <h1>Sign Up</h1>
                    <BtnContainer>
                        <button onClick={this.toggleShowNewForm}>Add New Item</button>
                        {this.state.showNewForm ? <ItemForm getAllItems={this.getAllItems} /> : null}
                    </BtnContainer>
                </div>
            </Container>
        );
    }
}
export default SignUpPage;