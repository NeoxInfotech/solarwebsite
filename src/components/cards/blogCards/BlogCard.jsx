import React from 'react'
import "./styles.scss"
import blogimg1 from "../../../images/blogimg1.jpg"
import { Link } from 'react-router-dom'

const BlogCard = ({ blog }) => {
    return (
        <div className="blogcard">
            <img src={blog.img} alt="" />
            <div className='infos'>
                <span>{blog.name}</span>
                <span>{blog.date}</span>
            </div>
            <h2>{blog.title}</h2>
            <p>{blog.desc.slice(0, 200)}.......</p>
            <Link className='button' to={`/blog/${blog.id}`}>Visit Blog</Link>
        </div>

    )
}

export default BlogCard
