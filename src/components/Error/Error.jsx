import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div>
            <div style={{height:'100vh'}} className=' d-flex flex-column justify-content-center align-items-center'>
            <h1 className='fw-bold'>Opss! <span className='text-danger'>404</span> Not valid page </h1>
             <Link to='/' className='fs-3'>Back To Home</Link>
            
        </div>
        
        </div>
    );
};

export default Error;