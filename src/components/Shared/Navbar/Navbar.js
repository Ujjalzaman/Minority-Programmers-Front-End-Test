import React from 'react';
import logo from '../../../images/logo.svg';
import './Navbar.css';
import { FaFacebook, FaInstagram, FaLinkedin, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
const Navbar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light">
                <div class="container-fluid">
                    <img src={logo} alt="" />
                    {/* <a class="navbar-brand" href="#">Navbar</a> */}
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-social navbar-nav navbar-social me-auto mb-2 mb-lg-0 ">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#"><FaTwitter className="navbar-social-icon" /></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" href="#"><FaFacebook className="navbar-social-icon" /></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" href="#"><FaLinkedin className="navbar-social-icon" /></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" href="#"><FaInstagram className="navbar-social-icon" /></a>
                            </li>
                         
                           
                        </ul>
                    
                        <ul class="navbar-nav navbar-menu mb-2 mb-lg-0 d-flex justify-content-end me-5">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Get Bult</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Events</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Learn</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Join</a>
                            </li>
                           
                        </ul>
                      
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;