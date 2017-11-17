import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import './css/NavBar.css'


class NavBar extends Component {
    render() {
        return (
            <div className="divNavBar">
                <div className="itemNavBarRight">
            </div>
                <div className="itemNavBar">
                    <Link to="/">Home</Link>
                </div>
                <div className="itemNavBar">
                    {/* <Link to={"/SignUpPage"}>Sign Up</Link>   */}
                </div>
                <div className="itemNavBar">
                    <Link to={"/LoginPage"}>Login</Link>
                </div>
                <div className="itemNavBar">
                    <Link to={"/NewUser"}>Account</Link>
                </div>
            </div>
        );
    }
}

export default NavBar;