import React from 'react'
import "./styles.scss"
import BlogCard from '../../components/cards/blogCards/BlogCard'
import { blogs } from '../../data/blogs'
import ChatCard from '../../components/cards/chatCard/ChatCard'


const Blog = () => {
    return (
        <div className='blog'>
            <ChatCard />
            <div className="container">
                <div className="titlecard">
                    <div className="head">
                        <span>Our Blogs</span>
                        <h1>Welcome to SSHM Blogs</h1>
                    </div>
                    <p>Stay informed with the latest trends, insights, and innovations in the solar energy industry. Our blog covers everything from energy-saving tips and technological advancements to in-depth guides on solar power systems.</p>
                </div>
                <div className="blog-cards">
                    {
                        blogs.map((e) => (
                            <BlogCard blog={e} key={e.id} />
                        ))
                    }


                </div>
            </div>
        </div>
    )
}

export default Blog
