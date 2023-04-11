import React from 'react';
import { Link } from 'react-router-dom';
import locimg from '../../../public/icon/Location Icon.png'
import moneyimg from '../../../public/icon/Frame.png'

const AppliedCont = ({singleCart}) => {
    const {logo, jbtitle,name, id, salery, type, location} = singleCart;
    return (
        <div>
            <div className='border rounded p-4 my-4'>
                    <div className='d-md-flex gap-4'>
                        <div className='bg-light p-4 rounded'>
                            <img src={logo} alt="" />
                        </div>
                        <div>
                            <h4 className='mb-2 ms-2'>{jbtitle}</h4>
                            <p className='ms-2'>{name}</p>
                            {
                                type?.map((jtype,idx) => <Link key={idx} className='btn type-btn ms-2'>{jtype}</Link>)
                            }
                             <p> <img src={locimg} alt="" />{location} &nbsp; <img src={moneyimg} alt="" /> Salery: <span>{salery}</span></p>
                        </div>
                        <div className='d-md-flex align-items-center justify-content-center ms-auto'>
                             <Link className='custom-btn btn'  to={`/jobdet/${id}`}>View Details</Link>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default AppliedCont;