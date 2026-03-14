import React from 'react'
import './FeaturedProducersComponents.css'
import TitleComponent from '../TitleComponent/TitleComponent'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { ShopContext } from '../../Context/ShopContext'

const FeaturedProducersComponents = () => {
    const {users}=useContext(ShopContext);
  return (
    <>
    <div  id='featured-producers-container' className="featured-producers-container">
        <TitleComponent title="Featured Producers"/>
        <div className="featured-producers">
            {
                users.map((producer)=>(
                    producer.role==="producer" && producer.isFeatured ?
                    <>
                    <div key={producer._id} className="featured-producer">
                        <div className="featured-producer-image">
                           <Link to={`/producer/${producer.username}`}><img src={producer.avatar} alt="producer-image" /></Link> 
                        </div>
                        <div className="featured-producer-details">
                            <p>@{producer.username}<img src={producer.isVerified?assets.goldCheckMark:""} alt="verified mark" /></p>
                        </div>
                    </div>
                    </>
                    :
                    <></>
                ))
            }
        </div>

    </div>
    </>
  )
}

export default FeaturedProducersComponents