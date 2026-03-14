import React from 'react'
import './FeaturedArtistsComponents.css'
import TitleComponent from '../TitleComponent/TitleComponent'
import {  assets } from '../../assets/assets'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { ShopContext } from '../../Context/ShopContext'

const FeaturedArtistsComponents = () => {
    const {users}=useContext(ShopContext);
  return (
    <>
    <div id='featured-artists-container' className="featured-artists-container">
        <TitleComponent title="Feature Artists"/>
        <div className="featured-artists-profile">
            {
                users.map((artist)=>(
                    artist.role==="artist" && artist.isFeatured?
                    <>
                    <div key={artist._id} className="featured-artist">
                        <div className="featured-artist-image">
                           <Link to={`/artist/${artist.username}`}> <img src={artist.avatar} alt="avatar" /></Link>
                        </div>
                        <div className="featured-artist-detail">
                            <p>@{artist.username}<img src={artist.isVerified?assets.blueCheckMark:""} alt="verification mark" /> </p>
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

export default FeaturedArtistsComponents