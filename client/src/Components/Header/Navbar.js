
import React from 'react';
import './Navbar.css';
// import logo from "./public/images/logo1.png";
import { NavLink } from 'react-router-dom';
const Navbar = () => {
  return (
     <header>
      <div className="navbar1">
        <div className="nav-logo bor">
          <div id="logo"></div>
        </div>

        <div className="nav-location bor">
          <div id="id-addr">Delivering to Pune 411015</div>
          <div className="loca">
            <i className="fa-solid fa-location-dot"></i>
            <p id="id-update">Update Location</p>
          </div>
        </div>

        <div className="nav-search bor">
          <select className="search-select">
            <option value="">All</option>
            <option value="">All Categories</option>
            <option value="">Alexa Skill</option>
            <option value="">Amazon Device</option>
            <option value="">Amazon Fresh</option>
            <option value="">Amazon Pharmacy</option>
            <option value="">Baby</option>
            <option value="">Beauty</option>
            <option value="">Amazon Pharmacy</option>
          </select>

          <input type="text" placeholder="Search Amazon.in" className="search-input" />

          <div className="search-icon">
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>
        </div>

        <div className="account-area">
          <span className="account-text">
            Hello, Sign in<br />Account & Lists
          </span>
          <div className="icon-dropdown-wrapper">
            <span className="dropdown-icon">▼</span>
            <div className="dropdown-content">
              <div className="div1" style={{ borderBottom: "1.5px groove" }}>
                <button className="in">Sign in</button>
                <p className="new" style={{ marginLeft: "180px", fontSize: "small", marginTop: "3px" }}>
                  New Customer? <NavLink to="/login">Start here</NavLink>
                </p>
              </div>
              <div className="div2">
                <div className="div21">
                  <p className="b">Your Lists</p>
                  <p className="dtext">Create a Wish List</p>
                  <p className="dtext">Wish from Any Website</p>
                  <p className="dtext">Baby Wishlist</p>
                  <p className="dtext">Discover Your Style</p>
                  <p className="dtext">Explore Showroom</p>
                </div>
                <div className="div22">
                  <p className="b">Your Account</p>
                  <NavLink to="/acc">
                    <p className="dtext">Your Account</p>
                  </NavLink>
                  <p className="dtext">Your Orders</p>
                  <p className="dtext">Your Wish List</p>
                  <p className="dtext">Your Recommendations</p>
                  <p className="dtext">Your Prime Membership</p>
                  <p className="dtext">Your Prime Video</p>
                  <p className="dtext">Your Subscribe & Save Items</p>
                  <p className="dtext">Memberships & Subscriptions</p>
                  <p className="dtext">Your Seller Account</p>
                  <p className="dtext">Manage Your Content and Devices</p>
                  <p className="dtext">Register for a free Business Account</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="nav-return bor">
          <p className="nav-sec">Returns</p>
          <p className="order">& Orders</p>
        </div>

        <div className="nav-cart bor">
          <i className="fa-solid fa-cart-shopping"></i>
          Cart
        </div>
      </div>

      <div className="panel">
        <div className="panel-all bor">
          <i className="fa-solid fa-magnifying-glass"></i>
          ALL
        </div>
        <div className="panel-ops">
          <p className="bor p1">Fresh</p>
          <p className="bor p1">MX Player</p>
          <p className="bor p1">Sell</p>
          <p className="bor p1">Bestsellers</p>
          <p className="bor p1">Today's Deals</p>
          <p className="bor p1">Mobiles</p>
          <p className="bor p1">Fashion</p>
          <p className="bor p1">Customer Service</p>
          <p className="bor p1">New Releases</p>
          <p className="bor p1">Electronics</p>
          <p className="bor p1">Home & Kitchen</p>
          <p className="bor p1">Amazon Pay</p>
          <p className="bor p1">Car & Motorbike</p>
        </div>
        <div className="panel-deals bor">Prime</div>
      </div>
    </header>
  )
}

export default Navbar;
