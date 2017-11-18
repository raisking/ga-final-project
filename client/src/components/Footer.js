import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import './css/NavBar.css'

class Footer extends Component {
    render() {
        return (
            <div className="footerCopyRight">
                <div className="footerDivClass">
                    <div className="footerInside">
                        <h3>Social Media</h3>
                        <span> <h4>Facebook</h4></span>
                        <span> <h4>Instagram</h4></span>
                        <span> <h4>Twitter</h4></span>
                    </div>
                    <div className="footerInside">
                        <h3>Contact Us</h3>
                        <h4>1-800-222-4444</h4>
                        <h4>Email: buyandsellyourcar@gmail.com</h4>
                        <h4>1215 Ernest W Barrett Pkwy NW, Kennesaw, GA 30144</h4>
                    </div>
                    <div></div>
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