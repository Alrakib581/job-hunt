import React from 'react';
import './JobCategory.css';

const JobCategory = ({category}) => {
    // console.log(category)
    const {logo, name, job} = category;
    return (
        <div className='category-card p-5 mt-4 mt-md-0'>
            <img className='border rounded p-1' src={logo} alt="" />
            <h4 className='pt-4'>{name}</h4>
            <p>{job} Jobs Available</p>
        </div>
    );
};

export default JobCategory;