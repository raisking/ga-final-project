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
                    <p>
                    {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d75355.49767767926!2d-84.64828799049101!3d34.01127190229635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f5150d2ad90c19%3A0x68e98f832cb3f278!2s1215+Ernest+W+Barrett+Pkwy+NW%2C+Kennesaw%2C+GA+30144!5e0!3m2!1sen!2sus!4v1510954025760" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe> */}
                    </p>
                    </div>
                <div className="footerInside">
                    <h3>Social Media</h3>
                       <span> <h4>Facebook</h4></span>
                       <span> <h4>Instagram</h4></span>
                       <span> <h4>Twitter</h4></span>
                    </div>
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