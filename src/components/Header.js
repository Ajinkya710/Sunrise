import React, { Component } from "react";
import { HashLink as Link } from "react-router-hash-link";
import { FaAlignRight } from "react-icons/fa";
import logo from "../images/sunrise-logo.png";
import '../App.css'
import Button from '@mui/material/Button';
import Modal from "react-responsive-modal";

export default class Navbar extends Component {
    // state = {
    //   isOpen: false,
    // };
    // handleToggle = () => {
    //   this.setState({ isOpen: !this.state.isOpen });
    // };

  render() {
    return (
      <>
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <Link smooth to="#home">
            <img src={logo} height="100px" width="300px" alt="Sunrise" />
            </Link>
            {/* <button
              type="button"
              className="nav-btn"
              onClick={this.handleToggle}
            ><FaAlignRight className="nav-icon" />
            </button> */}
          </div>
          <ul className="nav-links show-nav">
            <li>
              <Link smooth to="#home">Home</Link>
            </li>
            <li>
              <Link smooth to="#about">About</Link>
            </li>
            <li>
              <Link smooth to="#countries">Countries</Link>
            </li>
            <li>
              <Link smooth to="#universe">Universe</Link>
            </li>
            <li>
              <Link smooth to="#meetteam">Team</Link>
            </li>
            <li>
              <Link smooth to="#faq">FAQ's</Link>
            </li>
          </ul>
          <div id="loginbutton">
          <Link to={'/login'} target='_blank' style={{textDecoration:'none'}}><Button variant="contained" className="loginicon" color="success">
              Log In
          </Button></Link>
          {/* <button className="btn btn-primary-outline" id="login" onClick={this.onOpenModalLogin}>Login</button> */}
        </div>
        </div>
      </nav>
    </>
    );
  }
}