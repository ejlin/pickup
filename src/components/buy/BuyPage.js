import React from 'react';
import { Link, IndexLink } from 'react-router';

class BuyPage extends React.Component {
  
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
        <div id="buy_main_page">
          <a href="#SPORT">
            <div className="buy_icons_box" id="buy_icons_first">
              <img src={require('../../images/sport.png')} className="buy_icons"/>
              <p className="buy_icons_text">Sport</p>
            </div>
          </a>
          <a href="#SEDAN">
            <div className="buy_icons_box">
              <img src={require('../../images/sedan.png')} className="buy_icons"/>
              <p className="buy_icons_text">Sedan</p>
            </div>
          </a>
          <a href="#MINIVAN">
            <div className="buy_icons_box">
              <img src={require('../../images/mini-van.png')} className="buy_icons"/>
              <p className="buy_icons_text">Minivan</p>
        </div>
      </a>
      <a href="#SUV">
        <div className="buy_icons_box">
          <img src={require('../../images/suv.png')} className="buy_icons"/>
          <p className="buy_icons_text">SUV</p>
        </div>
      </a>
      <a href="#HYBRID">
        <div className="buy_icons_box">
          <img src={require('../../images/hybrid.png')} className="buy_icons"/>
          <p className="buy_icons_text">Hybrid</p>
        </div>
      </a>

      <div className = "clearfix"></div>

      <div className="buy_type_box">
        <p className="buy_type_title" id="SPORT">
          Sport
        </p>
        <div onClick="show_listing('../../images/sport_mercedes.png', 'Mercedes Benz SLS', '2014', 'Yellow', '34k Miles', '$188,800')" className="buy_type_image_box" id="buy_type_image_box_first">
          <img src={require('../../images/sport_mercedes.png')} className="buy_type_image">
          </img>
          <p className="buy_type_image_text">Mercedes Benz SLS</p>
          <p className="buy_type_image_text">Year: 2014</p>
          <p className="buy_type_image_text">Asking Price: $188,800</p>
          <p className="buy_type_image_text">Color: Yellow</p>
          <p className="buy_type_image_text">Mileage: 34k miles</p>
        </div>
        <div onClick="show_listing('../../images/sport_ferrari.png', 'Ferrari California', '2016', 'Blue', '6.5k Miles', '$140,200')" className="buy_type_image_box">
          <img src={require('../../images/sport_ferrari.png')} className="buy_type_image">
          </img>
          <p className="buy_type_image_text">Ferrari California</p>
          <p className="buy_type_image_text">Year: 2016</p>
          <p className="buy_type_image_text">Asking Price: $140,200</p>
          <p className="buy_type_image_text">Color: Blue</p>
          <p className="buy_type_image_text">Mileage: 6.5k miles</p>
        </div>
        <div onClick="show_listing('../../images/sport_chevy.png', 'Chevrolet SS', '2017', 'red', '3.2k Miles', '$34,000')" className="buy_type_image_box">
          <img src={require('../../images/sport_chevy.png')} className="buy_type_image">
          </img>
          <p className="buy_type_image_text">Chevrolet SS</p>
          <p className="buy_type_image_text">Year: 2017</p>
          <p className="buy_type_image_text">Asking Price: $34,000</p>
          <p className="buy_type_image_text">Color: Red</p>
          <p className="buy_type_image_text">Mileage: 3.2k miles</p>
        </div>
      </div>
      <div className = "clearfix"></div>

      <div className="buy_type_box">
        <p className="buy_type_title" id="SEDAN">
          Sedan
        </p>
        <div onClick="show_listing('../../images/sedan_honda.jpg', 'Honda Accord', '2017', 'Black', '7.8k Miles', '$26,500')" className="buy_type_image_box" id="buy_type_image_box_first">
          <img src={require('../../images/sedan_honda.jpg')} className="buy_type_image">
          </img>
          <p className="buy_type_image_text">Honda Accord</p>
          <p className="buy_type_image_text">Year: 2017</p>
          <p className="buy_type_image_text">Asking Price: $26,500</p>
          <p className="buy_type_image_text">Color: Black</p>
          <p className="buy_type_image_text">Mileage: 7.8k miles</p>
        </div>
        <div onClick="show_listing('../../images/sedan_toyota.png', 'Toyota Camry', '2013', 'Gray', '82k Miles', '$7,600')" className="buy_type_image_box">
          <img src={require('../../images/sedan_toyota.png')} className="buy_type_image">
          </img>
          <p className="buy_type_image_text">Toyota Camry</p>
          <p className="buy_type_image_text">Year: 2013</p>
          <p className="buy_type_image_text">Asking Price: $7,600</p>
          <p className="buy_type_image_text">Color: Gray</p>
          <p className="buy_type_image_text">Mileage: 82k miles</p>
        </div>
        <div onClick="show_listing('../../images/sedan_nissan.png', 'Nissan Sentra', '2014', 'White', '45k Miles', '$16,500')" className="buy_type_image_box">
          <img src={require('../../images/sedan_nissan.png')} className="buy_type_image">
          </img>
          <p className="buy_type_image_text">Nissan Sentra</p>
          <p className="buy_type_image_text">Year: 2014</p>
          <p className="buy_type_image_text">Asking Price: $16,500</p>
          <p className="buy_type_image_text">Color: White</p>
          <p className="buy_type_image_text">Mileage: 45k miles</p>
        </div>
      </div>

      <div className = "clearfix"></div>

      <div className="buy_type_box">
        <p className="buy_type_title" id="MINIVAN">
          Minivan
        </p>
        <div onClick="show_listing('../../images/minivan_honda.png', 'Honda Odyssey', '2011', 'Red', '53k Miles', '$19,500')" className="buy_type_image_box" id="buy_type_image_box_first">
          <img src={require('../../images/minivan_honda.png')} className="buy_type_image">
          </img>
          <p className="buy_type_image_text">Honda Odyssey</p>
          <p className="buy_type_image_text">Year: 2011</p>
          <p className="buy_type_image_text">Asking Price: $19,500</p>
          <p className="buy_type_image_text">Color: Red</p>
          <p className="buy_type_image_text">Mileage: 53k miles</p>
        </div>
        <div onClick="show_listing('../../images/minivan_toyota.png', 'Toyota Sienna', '2015', 'Gold', '15k Miles', '$33,985')" className="buy_type_image_box">
          <img src={require('../../images/minivan_toyota.png')} className="buy_type_image">
          </img>
          <p className="buy_type_image_text">Toyota Sienna</p>
          <p className="buy_type_image_text">Year: 2015</p>
          <p className="buy_type_image_text">Asking Price: $33,985</p>
          <p className="buy_type_image_text">Color: Gold</p>
          <p className="buy_type_image_text">Mileage: 15k miles</p>
        </div>
        <div onClick="show_listing('../../images/minivan_kia.png', 'Kia Sedona', '2017', 'Navy', '8k Miles', '$34,500')" className="buy_type_image_box">
          <img src={require('../../images/minivan_kia.png')} className="buy_type_image">
          </img>
          <p className="buy_type_image_text">Kia Sedona</p>
          <p className="buy_type_image_text">Year: 2017</p>
          <p className="buy_type_image_text">Asking Price: $34,500</p>
          <p className="buy_type_image_text">Color: Navy</p>
          <p className="buy_type_image_text">Mileage: 8k miles</p>
        </div>
      </div>

      <div className = "clearfix"></div>


      <div className="buy_type_box">
        <p className="buy_type_title" id="SUV">
          SUV
        </p>
        <div onClick="show_listing('../../images/suv_lexus.png', 'Lexus RX', '2013', 'White', '60k Miles', '$20,220')" className="buy_type_image_box" id="buy_type_image_box_first">
          <img src={require('../../images/suv_lexus.png')} className="buy_type_image">
          </img>
          <p className="buy_type_image_text">Lexus RX</p>
          <p className="buy_type_image_text">Year: 2013</p>
          <p className="buy_type_image_text">Asking Price: $20,220</p>
          <p className="buy_type_image_text">Color: White</p>
          <p className="buy_type_image_text">Mileage: 60k miles</p>
        </div>
        <div onClick="show_listing('../../images/suv_range_rover.png', 'Range Rover Evoque', '2013', 'White', '28k Miles', '$31,200')" className="buy_type_image_box">
          <img src={require('../../images/suv_range_rover.png')} className="buy_type_image">
          </img>
          <p className="buy_type_image_text">Land Rover Range Rover Evoque</p>
          <p className="buy_type_image_text">Year: 2013</p>
          <p className="buy_type_image_text">Asking Price: $31,200</p>
          <p className="buy_type_image_text">Color: White</p>
          <p className="buy_type_image_text">Mileage: 28k miles</p>
        </div>
        <div onClick="show_listing('../../images/suv_bmw.png', 'BMW X5', '2014', 'Black', '25k Miles', '$37,500')" className="buy_type_image_box">
          <img src={require('../../images/suv_bmw.png')} className="buy_type_image">
          </img>
          <p className="buy_type_image_text">BMW X5</p>
          <p className="buy_type_image_text">Year: 2014</p>
          <p className="buy_type_image_text">Asking Price: $37,500</p>
          <p className="buy_type_image_text">Color: Black</p>
          <p className="buy_type_image_text">Mileage: 25k miles</p>
        </div>
      </div>

      <div className = "clearfix"></div>

      <div className="buy_type_box">
        <p className="buy_type_title" id="HYBRID">
          Hybrid
        </p>
        <div onClick="show_listing('../../images/hybrid_prius.png', 'Toyota Prius', '2018', 'Red', '100 Miles', '$32,250')" className="buy_type_image_box" id="buy_type_image_box_first">
          <img src={require('../../images/hybrid_prius.png')} className="buy_type_image">
          </img>
          <p className="buy_type_image_text">Toyota Prius</p>
          <p className="buy_type_image_text">Year: 2018</p>
          <p className="buy_type_image_text">Asking Price: $32,250</p>
          <p className="buy_type_image_text">Color: Red</p>
          <p className="buy_type_image_text">Mileage: 100 miles</p>
        </div>
        <div onClick="show_listing('../../images/hybrid_insight.png', 'Honda Insight', '2013', 'Silver', '41.4k Miles', '$13,558')" className="buy_type_image_box">
          <img src={require('../../images/hybrid_insight.png')} className="buy_type_image">
          </img>
          <p className="buy_type_image_text">Honda Insight</p>
          <p className="buy_type_image_text">Year: 2013</p>
          <p className="buy_type_image_text">Asking Price: $13,558</p>
          <p className="buy_type_image_text">Color: Silver</p>
          <p className="buy_type_image_text">Mileage: 41.4k miles</p>
        </div>
        <div onClick="show_listing('../../images/hybrid_prius_phv.png', 'Toyota Prius Plug-In', '2013', 'Green', '22k Miles', '$16,500')" className="buy_type_image_box">
          <img src={require('../../images/hybrid_prius_phv.png')} className="buy_type_image">
          </img>
          <p className="buy_type_image_text">Toyota Prius Plug-In</p>
          <p className="buy_type_image_text">Year: 2013</p>
          <p className="buy_type_image_text">Asking Price: $16,500</p>
          <p className="buy_type_image_text">Color: Green</p>
          <p className="buy_type_image_text">Mileage: 22k miles</p>
        </div>
      </div>
    </div>

    <div className = "clearfix"></div>

    <div id="to_show_padding"/>

    <div id="to_show">
      <img id="to_show_image" src={require('../../images/hybrid_prius.png')}></img>
      <div id="to_show_right">
        <p id="to_show_title">
          Car Title
        </p>
        <p id="to_show_year" className="to_show_text_small">Year: </p>
        <p id="to_show_color"  className="to_show_text_small">Color: </p>
        <p id="to_show_mileage" className="to_show_text_small">Mileage: </p>
      </div>
      <div className = "clearfix"></div>
      <p id="to_show_price" className="to_show_text">Asking Price: </p>
      <p className="to_show_text">Return Guarantee: 5 days or 200 miles</p>

      <div id="to_show_features">
        Features:
        <p>
          <ul>
            <li>4 Wheels</li>
            <li>4 Doors</li>
            <li>Has paint</li>
            <li>Can drive</li>
          </ul>
        </p>
      </div>
      <div id="to_show_payment">
        <input placeholder="Account Number" className="to_show_input"></input>
        <input placeholder="Routing Number" className="to_show_input"></input>
        <input placeholder="Banking Institution" className="to_show_input"></input>
        <input placeholder="Checking OR Savings" className="to_show_input"></input>
        <input placeholder="Email" className="to_show_input"></input>
      </div>
      <select id="to_show_finance">
        <option value="2017">Leasing</option>
        <option value="2016">Financing</option>
        <option value="2015">Cash Payment</option>
      </select>
      <div onClick="hide_to_show()" id="to_show_cancel_button">
        Cancel
      </div>
      <div onClick="buy_car()" id="to_show_buy_button">
        Buy
      </div>
    </div>
        
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

export default BuyPage;
