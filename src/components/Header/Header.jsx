import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className='header position-sticky top-0'>
            <nav className="navbar navbar-expand-lg bg-body-tertiary py-4 ">
                <div className="container">
                     <Link className="navbar-brand fw-bold" to="/">Job Hunt</Link>
                     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                     <span className="navbar-toggler-icon"></span>
                     </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav  gap-md-4 m-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/">Home</Link> 
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/statistics">Statistics</Link> 
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link active" to="/appliedJobs">Applied Jobs</Link>
                     </li>
                    <li className="nav-item">
                         <Link className="nav-link active" to='/blog' >Blog</Link>
                    </li>

                </ul>
                     <button className="custom-btn" type="submit">Start Applying</button>
                </div>
            </div>
            </nav>     
        </div>
    );
};

export default Header;