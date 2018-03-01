import React from 'react';
import { Link, IndexLink } from 'react-router';

class ChatPage extends React.Component {
  render() {
    return (
      <div>
        <Link to="/">
        <img src={require('../../images/logo.png')} style={{"float": "left", "zIndex":"4", "position":"relative", "width":"50px", "marginLeft":"50px"}}/></Link>
        <nav style={{"backgroundColor": "#ce0300", "width":"105%", "height":"50px", "marginLeft":"-2.5%", "zIndex":"3", "position":"relative"}}>
          <IndexLink to="/chat" activeClassName="active" style={{"fontSize":"22px", "float": "right", "color":"white", "marginRight":"150px", "marginTop":"10px"}}>CHAT</IndexLink>
          <Link to="/buy" activeClassName="active" style={{"fontSize":"22px", "float": "right", "color":"white", "marginRight":"50px", "marginTop":"10px"}}>BUY</Link>
          <Link to="/sell" className="active" style={{"fontSize":"22px", "float": "right", "color":"white", "marginRight":"50px", "marginTop":"10px"}}>SELL</Link>
        </nav>
        <div id="sell_form_padding" style={{"width": "100%", "height": "150px"}}/>
    <div className = "clearfix"/>

    <p id="chat_title">Talk with a representative!</p>
    <div id="chat_form">
      <img className="chat_avatar" src={require('../../images/chat_avatar.png')} style={{"marginTop":"20px"}}></img>
      <p className="chat_sender" style={{"marginTop":"20px"}}>Hello! My name is Mat! How can I help you this fine day? I'm programmed to help you
      with (a) Vehicles, (b) Financing, (c) Buying, (d) Selling, (e) Other!</p>
    </div>
    <textarea id="chat_input" type="text" className="chat_input" required placeholder="Message"></textarea>
    <div id="chat_send_button" onclick="send_chat()">Send</div>
    <div className = "clearfix"></div>

    <div id="home_footer" style={{"marginTop":"100px"}}>
          <div style={{"width": "100%", "height": "50px", "backgroundColor": "#ce0300", "zIndex": "10", "position": "relative"}}/>
          <div id="home_footer_inside_box" style={{"marginTop": "-50px"}}>
            <Link to="/">
              <p className="home_footer_inside_box_text">
                PickUp
              </p>
            </Link>
            <p className="home_footer_inside_box_text">
              About Us
            </p>
            <p className="home_footer_inside_box_text">
              Contact Us
            </p>
            <Link to="/buy">
            <p className="home_footer_inside_box_text">
              Buy
            </p>
          </Link>
          <Link to="/sell">
            <p className="home_footer_inside_box_text">
              Sell
            </p>
          </Link>
            <p className="home_footer_inside_box_text">
              Careers
            </p>
          <div className = "clearfix"></div>
          <p id="home_footer_inside_box_copyright_text">
            Copyright &copy; 2018. &nbsp; Property of Eric Lin and Matthew Yu. &nbsp; Developed exclusively for WI18 CSE 134B
          </p>
        </div>
      </div>
      </div>
    );
  }
}

export default ChatPage;
