import React from 'react'
import './FeaturedBlogsComponent.css'
import TitleComponent from '../TitleComponent/TitleComponent'
import { blogs } from '../../assets/assets'

const FeaturedBlogsComponent = () => {
  return (
    <>
    <div className="featured-blogs-container">
        <TitleComponent title="Recent Blogs & Updates"/>
        <div className="featured-blogs">
            {
                blogs.map((blog)=>(
                    blog.featured ?
                    <>
                    <div key={blog._id} className="featured-blog">
                        <div className="featured-blog-image">
                            <img src={blog.images[0]} alt="" />
                        </div>
                        <div className="blog-title">
                            <h2>{blog.title}</h2>
                        </div>
                        <div className="blog-decription">
                            <p>{blog.description}</p>
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

export default FeaturedBlogsComponent