import React from 'react'
import './AboveFooterComponent.css'
import TitleComponent from '../TitleComponent/TitleComponent'
import { assets } from '../../assets/assets'

const AboveFooterComponent = () => {
  return (
    <>
    <div className="above-footer-container">
        <div className="delivery">
            <p> <img src={assets.shippingIcon} alt="" /> </p>
            <h2>Free Delivery Within CBD</h2>       
        </div>
        <div className="delivery">
            <p> <img src={assets.qualityHandshake} alt="" /> </p>
            <h2>Quality Merchandise & beats</h2>       
        </div>
        <div className="trust">
            <p> <img src={assets.handshakeIcon} alt="" /> </p>
            <h2>Trusted Producers & Artists</h2>       
        </div>
        <div className="return">
            <p> <img src={assets.returnIcon} alt="" /> </p>
            <h2>7 Days return policy</h2>       
        </div>
    </div>
    </>
  )
}

export default AboveFooterComponent