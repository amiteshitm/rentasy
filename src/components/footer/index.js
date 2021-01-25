import React, {Component} from 'react';
// import { Link } from "react-router-dom";

import './index.scss';

class Footer extends Component {
    render() {
        return (
            // <div className="footer">
            //     <div className="site-branding">
            //         <h2>Site Footer</h2>
            //         <nav className="menus">
            //             <Link to={`/`}>Home</Link>
            //             <Link to={`/account`}>Account</Link>
            //             <Link to={`/login`}>Login </Link>
            //             <Link to={`/register`}>Register</Link>
            //         </nav>
                    <div className="bottom-details-container">
                        <div className="bottom-details-content">
                            <div className="about-container">
                                <div className="about">About</div>
                                <p>Contact Us</p>
                                <p>About Us</p>
                                <p>Tweets</p>
                                <p>Lorem Ipsum</p>
                            </div>
                            <div className="about-container">
                                <div className="about">Help</div>
                                <p>Payments</p>
                                <p>Cancellation and Refunds</p>
                                <p>FAQ’s</p>
                                <p>Report</p>
                            </div>
                            <div className="about-container">
                                <div className="about">Policy</div>
                                <p>Return Policy</p>
                                <p>Terms of Use</p>
                                <p>Privacy</p>
                            </div>
                            <div className="about-container">
                                <div className="about">Social Media</div>
                                <p>Facebook</p>
                                <p>Twitter</p>
                                <p>Linkedin</p>
                                <p>Youtube</p>
                                <p>Instagram</p>
                            </div>
                            <div className="address-container">
                                <div className="about">Office Address</div>
                                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                                nonumy eirmod tempor invidunt ut labore et dolore magna
                                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                                </p>
                                <p>Phone Number: +9218301290/ 21872083912</p>
                                <p>Mail us at admin@renteasyapp</p>
                            </div>
                        </div>
                    </div>
            //     </div>
            // </div>
        );
    }
}

export default Footer;
