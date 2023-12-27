import React from 'react';
import './JobCategory.css'

const JobCategory = ({category}) => {

    const {logo,category_name,availability} = category

    return (
        <div className='category-details'>
            <img src={logo} alt="" />
            <h3>{category_name}</h3>
            <p>{availability}</p>
        </div>
    );
};

export default JobCategory;