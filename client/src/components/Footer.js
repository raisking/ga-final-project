import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import './css/NavBar.css'

// const Container = styled.div`
// margin-top: 100px;
// height: 100px;
// border-top: 1px solid #ccc;
// padding: 20px;
// text-align: center;
// `

class Footer extends Component {    
    render() {
        return (
            <div className="footerCopyRight">
                <div className="footerDivClass">

                    <div className="footerInside">
                    <h3>Social Media</h3>
                       <span> <p>Facebook</p></span>
                       <span> <p>Instagram</p></span>
                       <span> <p>Twitter</p></span>
                    </div>
                    <div className="footerInside">
                        <h3>Contact Us</h3>
                        <p>1-800-222-4444</p>
                        <p>Email: buyandsellyourcar@gmail.com</p>
                        <p>1215 Ernest W Barrett Pkwy NW, Kennesaw, GA 30144</p>
                    </div>
                    <div></div>

                </div>
                <div className="developer">
                    <h4>Copyright@2017</h4>
                    {/* <h4>Developed & Design by <spam class="me"><a href="http://www.raiprakash.com/" target="_blank">Prakash Rai</a></spam></h4> */}
                </div>
            </div>
        );
    }
}

export default Footer;