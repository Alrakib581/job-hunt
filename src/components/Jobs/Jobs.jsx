import React from 'react';
import locimg from '../../../public/icon/Location Icon.png'
import moneyimg from '../../../public/icon/Frame.png'
import './Jobs.css'
import { Link } from 'react-router-dom';

const Jobs = ({job}) => {
    // console.log(job)
    const {logo,name,jbtitle, location, salery, type,id} = job
    // console.log(type)
    return (
        <div className='col-md-6 g-4 '>
            <div className='border rounded p-4'>
            <img className='mb-3' src={logo} alt="" />
                <h4 className='mb-2'>{jbtitle}</h4>
                <p>{name}</p>
                <Link  className='type-btn btn'>{type[0]}</Link>
                <Link className='btn type-btn ms-3'>{type[1]}</Link>
                <p> <img src={locimg} alt="" />{location} &nbsp; <img src={moneyimg} alt="" /> Salery: <span>{salery}</span></p>
                <Link className='custom-btn btn'  to={`/jobdet/${id}`}>View Details</Link>
                
            </div>
        </div>
    );
};

export default Jobs;