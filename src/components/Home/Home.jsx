import React from 'react';
import './Home.css'
import JobCategory from '../JobCategory/JobCategory';
import { useLoaderData } from 'react-router-dom';
import JobCompany from '../JobCompany/JobCompany';

const Home = () => {

    const {categories,jobs} = useLoaderData()

    return (
        <div>
            <div className='home-container'>
                <div className="details">
                    <h1 className='title'>One Step Closer To Your <span className='text-violet'>Dream Job</span></h1>
                    <p>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                    <button className='btn-apply'>Get Started</button>
                </div>
                <img src="../../../assets/images/user.png" alt="" />
            </div>

            <div className="job-category">
                <h1 className='category-title'>Job Category List</h1>
                <p className='category-description'>Explore thousands of job opportunities with all the information you need. Its your future</p>
                <div className="category-display">
                    {
                        categories.map(category => <JobCategory
                            key={category.id}
                            category={category}
                        ></JobCategory>)
                    }
                </div>
            </div>

            <div className="featured-jobs">
                <h1 className='category-title'>Featured Jobs</h1>
                <p className='category-description'>Explore thousands of job opportunities with all the information you need. Its your future</p>
                <div className="jobs-display">
                    {
                        jobs.map(job => <JobCompany
                            key={job.id}
                            job={job}
                        ></JobCompany>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;