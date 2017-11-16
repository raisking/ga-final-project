import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components'


const Container = styled.div`
background-color: 	#4682B4;
display: flex;
justify-content: flex-end;
margin: 0;
padding: 20px;
    a {
    text-decoration: none;
    color: #ccc;    
}
a:hover{
    color: #fff;
  
}
`
const Items = styled.div`
margin-right: 30px;
`


class NavBar extends Component {
    render() {
        return (
            <Container>
            <Items>
                <Link to ="/">Home</Link>
              </Items>
              <Items>
                <Link to ={"/SignUpPage"}>Sign Up</Link>
              </Items>
              <Items>
              <Link to = {"/LoginPage"}>Login</Link>
              </Items>
              <Items>
              <Link to = {"/NewUser"}>Account</Link>
              </Items>
        </Container>
        );
    }
}

export default NavBar;