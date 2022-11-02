import React from 'react';
import { Link } from 'react-router-dom';
import './Updates.css'
const Universe = () => {
  return (
    <div id="universe">
    {/* <div className="dining"> */}
        <h1>In Progress</h1>
        <a class="twitter-timeline" href="https://twitter.com/StudySunrise?ref_src=twsrc%5Etfw">Tweets by StudySunrise</a> 
        <Link to="/updates" target='_blank' style={{color:'black', textDecoration: 'none'}}>
            Twitter
        </Link>
      {/* </div> */}
    </div>
  );
}

export default Universe;
