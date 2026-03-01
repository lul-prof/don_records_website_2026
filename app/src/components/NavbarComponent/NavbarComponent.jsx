import React, { useContext } from 'react'
import './NavbarComponent.css'
import {assets} from '../../assets/assets.js'
import { ShopContext } from '../../Context/ShopContext.jsx'

const NavbarComponent = () => {
    const {username}=useContext(ShopContext);
  return (
    <>
    <div className="navbar">
    <div className="navbar-container">
        {/*--------------Left----------------*/}
        
        <div className="navbar-left">
            <div className="navbar-sidemenu">
                <img src={assets.menuIcon} alt="" />
                
            </div>
            <div className="navbar-logo">
                <img src={assets.logo} alt="" />
            </div>

        </div>
        {/*--------------Right----------------*/}
        <div className="navbar-right">
            <div className="navbar-cart">
                <img src={assets.cartIcon} alt="" />

            </div>
            <div className="navbar-user">
                <img src={assets.userIcon} alt="" />
                <h4>{username}</h4>
            </div>
            <div className="navbar-dropdown">
                <img style={{maxWidth:"20px", marginTop:"30px"}} src={assets.dropDownIcon} alt="" />
            </div>                        

        </div>
        
    </div>
    </div>
    </>
  )
}

export default NavbarComponent