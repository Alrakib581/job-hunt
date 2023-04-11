import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

import { getToDb } from '../../Utilites/fakedb';
import AppliedCont from '../AppliedCont/AppliedCont';

const AppLied = () => {
    const totalJData = useLoaderData()
    let cart = []
    const savedCart = getToDb()
    for (const id in savedCart){
        const foundJob = totalJData.find(foundJ => foundJ.id === id)
        // console.log(foundJob)
        if(foundJob){
            cart.push(foundJob)
        }
        
    }
    return (
        <div>
           <div className='pb-5' style={{backgroundColor:'#f9f9ff'}} >
                 <h4 className='text-center py-3 fw-bold text-primary'>Applied Jobs</h4>
            </div>
           <div className='container py-5'>
                 {
                   cart.map((singleCart,idx) => <AppliedCont
                        key={idx}
                        singleCart={singleCart}
                    ></AppliedCont>)
                }
           </div>
        </div>
    );
};

export default AppLied;