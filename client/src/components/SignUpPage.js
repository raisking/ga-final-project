import React, { Component } from 'react';
import axios from 'axios'
import ItemForm from './ItemForm'
import styled from 'styled-components'
import "./css/SignUpPage.css"


const Container = styled.div`
    display: flex;
    justify-content: center;
    margin: 30px;
`
const BtnContainer = styled.div`   
    padding: 20px;
`

class SignUpPage extends Component {
    state = {
        items: [],
        showNewForm: true
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
       
                <div class ="BtnWrapper">
                <h2>Add a New Item</h2>
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