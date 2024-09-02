import React from "react";
import { Link } from "react-router-dom"
import './Navbar.css'

function Navbar() {
  return (
    <div className="navbar__container">
        <div className="navbar__top">
            <img src="//www.ketnipz.com/cdn/shop/t/20/assets/account.svg?v=120044110145428404111592266924" alt="My Account"/>
            <p>OFFICIAL KETNIPZ ONLINE STORE</p>
            <img src="//www.ketnipz.com/cdn/shop/t/20/assets/search.svg?v=69559230423344054041592266924" alt="Search"/>
        </div>
        <div className="navbar__bottom">
            <img src="//www.ketnipz.com/cdn/shop/files/Ketnipz_Header_550x_dd3e502e-9e2e-4ad6-8c4d-e7cadd42b578_130x.gif"/>
            <ul className="navbar__list">
                <Link to='/'>Home</Link>
                {/* <Link to='/shop__all'>Shop All</Link>
                <Link>Apparel</Link>
                <Link>Plushies</Link>
                <Link>Accessories</Link>
                <Link>Footwear</Link>
                <Link>Mystery Items</Link> */}
                <Link to='/cart'>Cart</Link>
            </ul>
        </div>
    </div>
  )
}

export default Navbar