import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';

const Blogs = () => {
    const [blogs , setBlogs] = useState([])
    useEffect(()=>{
        fetch('/blog.json')
        .then(res=> res.json())
        .then(data => setBlogs(data))
    },[])
    // console.log(blogs)
    return (
        <div>
         <div className='pb-5' style={{backgroundColor:'#f9f9ff'}} >
            <h4 className='text-center py-3 fw-bold text-primary'>Blog</h4>
          </div>
           <div className="container">
                {
                    blogs.map( blog=> <Blog
                        blog={blog}
                        key={blog.id}
                    ></Blog>)
                }
           </div>
        </div>
    );
};

export default Blogs;