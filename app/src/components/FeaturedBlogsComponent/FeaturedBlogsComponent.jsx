import React, { useContext } from 'react'
import './FeaturedBlogsComponent.css'
import TitleComponent from '../TitleComponent/TitleComponent'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'

const FeaturedBlogsComponent = () => {
    const {blogs}=useContext(ShopContext);
  return (
    <>
    <div className="featured-blogs-container">
        <TitleComponent title="Recent Blogs & Updates"/>
        <div className="featured-blogs">
            {
                blogs.map((blog)=>(
                    blog.isFeatured ?
                    <>
                    <div key={blog._id} className="featured-blog">
                        <div className="featured-blog-image">
                           <Link to={`/blog/${blog._id}`}> <img src={blog.image} alt="" /></Link>
                        </div>
                        <div className="blog-title">
                            <h3>{blog.title}</h3>
                        </div>
                        <div className="blog-description">
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