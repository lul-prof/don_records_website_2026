import React from 'react'
import './FeaturedProducersComponents.css'
import TitleComponent from '../TitleComponent/TitleComponent'
import { assets, producers } from '../../assets/assets'

const FeaturedProducersComponents = () => {
  return (
    <>
    <div className="featured-producers-container">
        <TitleComponent title="Featured Producers"/>
        <div className="featured-producers">
            {
                producers.map((producer)=>(
                    producer.featured ?
                    <>
                    <div className="featured-producer">
                        <div className="featured-producer-image">
                            <img src={producer.avatar} alt="producer-image" />
                        </div>
                        <div className="featured-producer-details">
                            <p>@{producer.name}<img src={assets.goldCheckMark} alt="verified mark" /></p>
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