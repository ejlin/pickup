import React from 'react';
import {Link, IndexLink} from 'react-router';

class HomePage extends React.Component {
  render() {
    return (
      <div>
        <img src={require('../../images/logo.png')} style={{"float": "left", "zIndex":"3", "position":"relative", "width":"50px"}}/>
        <nav style={{"width":"105%", "height":"50px", "marginLeft":"-2.5%", "zIndex":"3", "position":"relative"}}>
          <IndexLink to="/chat" activeClassName="active" style={{"fontSize":"22px", "float": "right", "color":"white", "marginRight":"150px", "marginTop":"10px"}}>CHAT</IndexLink>
          <Link to="/buy" activeClassName="active" style={{"fontSize":"22px", "float": "right", "color":"white", "marginRight":"50px", "marginTop":"10px"}}>BUY</Link>
          <Link to="/sell" className="active" style={{"fontSize":"22px", "float": "right", "color":"white", "marginRight":"50px", "marginTop":"10px"}}>SELL</Link>
        </nav>
        <video src="https://www.tesla.com/ns_videos/homepage-video-summer-2017.mp4?20170808" loop autoPlay/>
        <Link to="/buy">        
          <div className="home_button">
            BUY A CAR
         </div>
        </Link> 
        <Link to="/sell">
         <div className="home_button" id="home_button_first">
          SELL YOUR CAR
        </div>
       </Link>
      </div>
    );
  }
}
export default HomePage;
