import React , { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {Helmet} from "react-helmet";
import logo from '../images/sunrise-logo.png';
import headerimg from '../images/CI_Images/CI_header.jpg';
import Footer from '../components/Footer'
const Updates = () => {
  useEffect(() => {
    document.title = "Updates"
 }, []);
  return (
    <div className="updates" >
      <Link to="/">
          <img id='logo_link' src={logo} height="120px" width="330px" alt="Home" />
        </Link>
        <img id='updatesheader' src={headerimg} alt="headerimg" />
        <h1>Updates</h1>
        <div className="social_layout">
          <div className="twit">
            <a class="twitter-timeline" data-width="650" data-height="750" data-theme="light" href="https://twitter.com/StudySunrise?ref_src=twsrc%5Etfw">Tweets by StudySunrise</a> 
            <Helmet>
            <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
            </Helmet>
          </div>
          <div className="twit2">
            <a class="twitter-timeline" data-width="650" data-height="750" data-theme="light" href="https://twitter.com/StudySunrise?ref_src=twsrc%5Etfw">Tweets by StudySunrise</a> 
            <Helmet>
            <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
            </Helmet>
          </div>
        </div>
        <Footer/>
    </div>
  );
}

export default Updates;
