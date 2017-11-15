import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components'
import { Redirect } from 'react-router'
import './css/UserForm.css'

const FormItem = styled.div`

`
const LoginWrapper = styled.div`
    width: 250px;
    margin-left: auto;
    margin-right: auto;
    
`

class LoginPage extends Component {


    render() {
        return (
            <div>
                    <h1>Login</h1>
     
            <form>
                <LoginWrapper>
                <div>
                 <FormItem><label htmlFor="name">Username</label></FormItem>
                    <input type="text" name="name" placeholder=""  />
                </div>
                <div>
                    <FormItem><label htmlFor="category">Password</label></FormItem>
                    <input type="password" name="category" placeholder ="" />
                </div>
             
                <button>Login</button>
                </LoginWrapper>
            </form>
  
                
            </div>
        );
    }   
}

export default LoginPage;