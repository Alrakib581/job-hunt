import React from 'react';
import Foot from '../Foot/Foot';

const FooterText = ({footerText}) => {
    // console.log(footerText)
    const {title, description} = footerText
    return (
        <div>
            <h5 className='text-white'>{title}</h5>
            {/* {
                description.map((des,idx) => console.log(des))
            } */}
            {
                description.map((des,idx) => <Foot des={des} key={idx}></Foot>)
            }
        </div>
    );
};

export default FooterText;