import React, { useContext, useEffect, useState } from "react";
import "./SingleBlogPage.css";
import { Link, useParams } from "react-router-dom";
import toast from "react-hot-toast";
import { assets } from "../../assets/assets.js";
import axios from "axios";
import { ShopContext } from "../../Context/ShopContext.jsx";

const SingleBlogPage = () => {
  const { id } = useParams();

  const [blog, setBlog] = useState({});

  const { backend_url,blogs } = useContext(ShopContext);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await axios.post(`${backend_url}/api/user/blog/${id}`);
        if (response.data.success) {
          setBlog(response.data.blog);
        } else {
          console.log(response.data.message);
          toast(response.data.message);
        }
      } catch (error) {
        toast.error(error);
      }
    };
    fetchBlog();
  }, [id, blog, backend_url]);

 

  return (
    <>
      <div className="single-blog-container">
        <div className="single-blog">
          <div className="single-blog-header">
            <p>
              Created on {new Date(blog.createdAt).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
            </p>
            <Link to={`/producer/the_don`}>
              <p>
                @the_don{" "}
                <img
                  id="verified"
                  src={blog.isFeatured ? assets.goldCheckMark : ""}
                  alt=""
                />{" "}
              </p>
            </Link>
          </div>

          <div className="single-blog-image">
            <img src={blog.image} alt="" />
          </div>
          <div className="single-blog-title">
            <h1>{blog.title}</h1>
          </div>
          <div className="single-blog-description">
            <p>{blog.description}</p>
          </div>
        </div>
        {/*--------------Related Blogs---------------*/}
        <hr style={{ marginBottom: "10px" }} />
        <div className="single-blog-related">
          <div className="related-blogs-header">
            <h1>You Might Like</h1>
          </div>
          <div className="related-blogs">
            {blogs.map((blo) => (
              <div key={blo._id} className="related-blog">
                <div className="related-blog-image">
                  <Link to={`/blog/${blo._id}`}>
                    {" "}
                    <img
                      id="related-blog-image"
                      onClick={() => window.location.reload()}
                      src={blo.image}
                      alt=""
                    />
                  </Link>
                </div>
                <div className="related-blog-details">
                  <h1>{blo.title}</h1>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleBlogPage;
