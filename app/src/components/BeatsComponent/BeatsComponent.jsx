import React, { useContext } from 'react'
import './BeatsComponent.css'
import TitleComponent from '../TitleComponent/TitleComponent'
import { assets, beats } from '../../assets/assets'
import { ShopContext } from '../../Context/ShopContext'

const BeatsComponent = () => {
    const {currency}=useContext(ShopContext);
  return (
    <>
    <div className="beats-component-container">
        <TitleComponent title="Featured Beats & Instrumentals" />
        <div className="featured-beats-container">
            {
                beats.map((beat)=>(
                    beat.featured?
                    <>
                    <div className="featured-beat">
                        <div key={beat._id} className="featured-beat-container">
                            <div className="featured-beat-thumbnail">
                                <img src={beat.thumbnail} alt="" />
                            </div>
                            
                            <div className="featured-beat-details">
                                <div className="featured-beat-detail">
                                    <h5>{currency}{beat.price}</h5>
                                </div>
                                
                                <div className="featured-beat-cart">
                                    <img id='featured-beat-cart-image' src={assets.addToCartIcon} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="featured-beat-producer">
                            <p>@{beat.producer}<img id='featured-beat-checkmark' src={assets.goldCheckMark}  alt="" /> </p>
                        </div>
                        </div>
                    </>
                    :
                    <>
                    <p>No Featured beats</p>
                    </>
                    
                ))
            }
        </div>
    </div>
    </>
  )
}

export default BeatsComponent