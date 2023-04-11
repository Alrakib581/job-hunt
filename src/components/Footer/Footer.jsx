import React, { useEffect, useState } from 'react';
import FooterText from '../FooterText/FooterText';
import footerLogo from '../../../public/footer-icon/footer.png'

const Footer = () => {
    const [footerInfo, setFooterInfo] = useState([])
    useEffect(()=>{
        fetch('/footer.json')
        .then(res => res.json())
        .then(data => setFooterInfo(data))
    },[])
    return (
        <div className='bg-dark py-3'>
                <div className='container'>
                <div className='row pt-5'>
            <div className='text-white col-md-3'>
                <h4>JobHunt</h4>
                <p style={{color:'#ddd'}}>Job hunt is trusted online plateform and trusted for job hunting developer and (IT) sector workers Thousends of User Use this site for there future.</p>
                <img src={footerLogo} alt="" />
            </div>
           <div className=' col-md-9 d-md-flex text-center text-md-start pt-5 pt-md-0 justify-content-between'>
                {
                    footerInfo.map(footerText => <FooterText 
                    footerText={footerText}
                    key={footerText.id}
                    ></FooterText>)
                }
            </div>
           </div>
                </div>
            <div className='container'>
                <hr className='text-white' />
                <div className='text-secondary d-flex justify-content-between'>
                    <p>&copy; Job Hunt. All Rights Reserved 2023</p>
                    <p>Powerd By ABDULLA AL RAKIB</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;