import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.div`
margin-top: 100px;
height: 100px;
border-top: 1px solid #ccc;
padding: 20px;
text-align: center;
`

class Footer extends Component {
    render() {
        return (
            <Container>
                <div><h4>Copyright@2017</h4></div>
               <h4>Developed & Design by Prakash Rai</h4>
        </Container>
        );
    }
}

export default Footer;