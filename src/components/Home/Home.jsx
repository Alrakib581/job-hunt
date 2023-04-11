import React, { useEffect, useState } from 'react';
import img from '../../../public/rakib.png'
import './Home.css'
import JobCategory from '../JobCategory/JobCategory';
import Jobs from '../Jobs/Jobs';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const [categories, setCategories] = useState([])
    const [seeTotal, setSeeTotal] = useState(false)

    useEffect(()=>{
        fetch('/category.json')
        .then(res=> res.json())
        .then(data => setCategories(data))
    },[])

    const totalJobses = useLoaderData()    
    const seeAllButton = ()=>{
        setSeeTotal(true)
     }
    return (
        <div>
            {/* banner section start  */}
                <section className='banner-section'>
                <div className='container d-md-flex align-items-center justify-content-between pt-4'>
                    <div className="right-div">
                        <h2 className='banner-heading'>Make  one step to get Your <span className='heading-high'>Dream Job</span></h2>
                        <p className='pt-3'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                        <button className='custom-btn mt-md-3'>Get Started</button>
                    </div>
                    <div>
                        <img className='img-fluid' src={img} alt="" />
                    </div>
                </div>
                </section>
            {/* banner section end  */}
            {/* Job category section start  */}
                <div className='container my-5 py-3'>
                    <h2 className='text-center fw-semibold py-3'>Job Category List</h2>
                    <p className='text-center mb-5'>Explore thousands of job opportunities with all the information you need. Its your future</p>
                   <div className='d-md-flex justify-content-between'>
                   {
                        categories.map(category => <JobCategory
                            category={category}
                            key={category.id}
                        ></JobCategory>)
                    }
                   </div>
                </div>
            {/* Job category section end  */}
            {/* featured job section start */}
            <section>
                <div className=''>
                    <h2 className='text-center fw-semibold py-3'>Featured Jobs</h2>
                    <p className='text-center mb-5'>Here is Your Jobs information for applying a new job. please considered to click any card below.</p>
                </div>
                <div className="container">
                    <div className='row mb-5'>
                        {
                            totalJobses.slice(0, seeTotal ? 6: 4 ).map(job=> <Jobs
                                    job={job}
                                    key={job.id}
                            ></Jobs>)
                        }
                    </div>
                </div>
                <div className='text-center py-4 mb-md-5'> <button className='custom-btn' onClick={seeAllButton}>See All Jobs</button></div>
            </section>
            {/* featured job section end */}
       </div>
    );
};

export default Home;