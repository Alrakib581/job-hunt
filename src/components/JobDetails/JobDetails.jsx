import React, { useEffect, useState } from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import './JobDetails.css';
import { addToDb } from '../../Utilites/fakedb';

const JobDetails = () => {
    const [jobDetails, setJobDetails] = useState([])
    const jobdata = useLoaderData()
    const dynamic = useParams()
    useEffect(()=>{
        
        const jobSingleData = jobdata?.find(jd=> jd.id === dynamic.id)
        setJobDetails(jobSingleData)    
    },[])

    const {jobDescription,responsibility,education,experience,salery,jbtitle,phone,email,location,id} = jobDetails;
    // event handler
    const getJobData =(id)=>{
        // console.log(console.log(id))
        addToDb(id)
    } 
    return (
        <div>
            <div className='pb-5' style={{backgroundColor:'#f9f9ff'}} >
            <h4 className='text-center py-3 fw-bold text-primary'>Job Details</h4>
            </div>
            <div className="container my-3">
                <div className='row'>
                   <div className="col-md-7 my-5">
                        <p> <span className='fw-bold'>Job Description: </span>{jobDescription}</p>
                        <p> <span className='fw-bold'>Job Responsibility: </span>{responsibility}</p>
                        <h5>Educational Requirements:</h5>
                        <p>{education}</p>
                        <h5>Experience : </h5>
                        <p>{experience}</p>
                   </div>
                   <div className="col-md-5 my-5 ">
                        <div className='j-card p-5 rounded'>
                            <h5 className='fw-bold'>Job Details</h5>
                            <hr />
                            <p><span className='fw-bold'>Salery: </span> ${salery} ( Per Month )</p>
                            <p> <span className='fw-bold'>Job Title :</span> {jbtitle}</p>
                            <h5 className='fw-bold pt-3'>Contact Information</h5>
                            <hr />
                            <p><span className='fw-bold'>Phone: </span>{phone}</p>
                            <p><span className='fw-bold'>Email :</span> {email}</p>
                            <p><span className='fw-bold'>Address : </span>{location}</p>
                        </div>
                       
                        <Link to='/appliedJobs'> <button onClick={()=> getJobData(id)} className='custom-btn w-100 mt-3'>Apply Now </button></Link>
                   </div>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;