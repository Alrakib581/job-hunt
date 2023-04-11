import React from 'react';

const Blog = ({blog}) => {
    // console.log(blog)
    const {title, details} = blog
    return (
        <div className='border rounded my-3 my-md-5 p-4'>
            <h4 className='fs-3'>{title}</h4>
            <p className='pt-3'>{details}</p>
        </div>
    );
};

export default Blog;