import React from 'react'
import "./styles.scss"
import blogimg1 from "../../images/blogimg1.jpg"
import { Link, useParams } from 'react-router-dom'
import { blogs } from '../../data/blogs'

const SingleBlog = () => {
    const getId = useParams().id;
    const singleBlog = blogs.filter((e => e.id === ~~getId))
    console.log(singleBlog)
    return (
        <div className='singleblog'>
            {
                singleBlog?.map((d) => (
                    <div className="container" key={d.id}>
                        <div className="img-container">
                            <img src={d.img} alt="" />
                        </div>
                        <div className="contents">
                            <div className="info">
                                <h3>{d.name}</h3>
                                <h3>{d.date}</h3>
                            </div>'
                            <h1>{d.title}</h1>
                            <p>{d.desc}</p>
                            <Link className='butt' to={"/blogs"}> Return</Link>
                        </div>
                    </div>
                ))
            }

        </div>
    )
}

export default SingleBlog
