import React, { useContext } from 'react'
import './MerchandiseComponent.css'
import TitleComponent from '../TitleComponent/TitleComponent'
import { assets, products } from '../../assets/assets'
import { ShopContext } from '../../Context/ShopContext'

const MerchandiseComponent = () => {
    const {currency}=useContext(ShopContext);
  return (
    <>
    <div className="featured-merchandise-container">
        <TitleComponent title="Bestseller Merchandise" />
        <div className="featured-merchandise">
            {
                products.map((product)=>(
                    product.bestseller ?
                    <div key={product._id} className="featured-merch">
                        <div className="featured-merch-image">
                            <img src={product.images[0]} alt="" />
                        </div>
                        <div className="featured-merch-details">
                            <div className="featured-merch-detail1">
                                <h4>{product.title}</h4>
                                <p>{currency}{product.price}</p>
                            </div>

                            <div className="featured-merch-detail">
                                <img id='featured-merch-cart' src={assets.addToCartIcon} alt="" />
                            </div>
                            
                        </div>
                    </div>
                    :
                    <>
                    
                    </>
                ))
            }
        </div>
    </div>
    </>
  )
}

export default MerchandiseComponent