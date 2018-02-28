import React from 'react';
import { Link, IndexLink } from 'react-router';

class AboutPage extends React.Component {
  render() {
    
    {
      (function() {
  var qs,js,q,s,d=document, gi=d.getElementById, ce=d.createElement, gt=d.getElementsByTagName, id="typef_orm", b="https://embed.typeform.com/";
 if(!gi.call(d,id))
 {
   js=ce.call(d,"script");
    js.id=id;
    js.src=b+"embed.js";
    q=gt.call(d,"script")[0];
   q.parentNode.insertBefore(js,q);
 } })();

  }
    return (
      <div>
        <img src={require('../../images/logo.png')} style={{"float": "left", "zIndex":"4", "position":"relative", "width":"50px", "marginLeft":"50px"}}/>
        <nav style={{"backgroundColor": "#ce0300", "width":"105%", "height":"50px", "marginLeft":"-2.5%", "zIndex":"3", "position":"relative"}}>
          <IndexLink to="/chat" activeClassName="active" style={{"fontSize":"22px", "float": "right", "color":"white", "marginRight":"150px", "marginTop":"10px"}}>CHAT</IndexLink>
          <Link to="/buy" activeClassName="active" style={{"fontSize":"22px", "float": "right", "color":"white", "marginRight":"50px", "marginTop":"10px"}}>BUY</Link>
          <Link to="/sell" className="active" style={{"fontSize":"22px", "float": "right", "color":"white", "marginRight":"50px", "marginTop":"10px"}}>SELL</Link>
        </nav>
        <div id="sell_form_padding" style={{"width": "100%", "height": "150px"}}/>
        <div className="typeform-widget" data-url="https://ericlin7.typeform.com/to/VeOnHl" data-transparency="50" data-hide-headers={true}
          data-hide-footer={true} style={{"width": "100%", "height": "900px", "marginTop":"-200px", "marginBottom": "100px", "zIndex": "1","position": "relative", "display":"block"}}/>
        
        <div id="home_footer">
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

export default AboutPage;
