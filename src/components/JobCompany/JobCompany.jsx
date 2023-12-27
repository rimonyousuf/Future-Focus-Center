import React from 'react';
import './JobCompany.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faDollarSign } from '@fortawesome/free-solid-svg-icons'

const JobCompany = ({job}) => {

    const {
        logo,
        job_title,
        company_name,
        remote_or_onsite,
        job_type,
        location,
        salary
    } = job;

    return (
        <div className='job-company-container'>
            <img src={logo} alt="" />
            <h3 className='job-title'>{job_title}</h3>
            <p className='company_name'>{company_name}</p>
            <div className="job-type">
                <p>{remote_or_onsite}</p>
                <p>{job_type}</p>
            </div>
            <div className="location-salary">
                <p>
                    <FontAwesomeIcon className='icon' icon={faLocationDot} />{location}
                </p>
                <p>
                <FontAwesomeIcon className='icon' icon={faDollarSign} />{salary}
                </p>
            </div>
            <button className='btn-apply'>View Details</button>
        </div>
    );
};

export default JobCompany;