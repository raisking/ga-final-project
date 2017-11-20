import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import './css/NavBar.css'

class Footer extends Component {
    render() {
        return (
            <div className="footerCopyRight">
                <div className="footerDivClass">
                </div>
                <div className="developer">
                    <h4>Copyright@2017</h4>
                    <h4>Developed & Design by <spam class="me"><a href="http://www.raiprakash.com/" target="_blank">Prakash Rai</a></spam></h4>
                </div>
            </div>
        );
    }
}

export default Footer;