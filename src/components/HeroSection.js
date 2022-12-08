import React from 'react';
import { Link } from 'react-router-dom';
import '../App.scss';

const HeroSection = () => {
    return (
        <div className='p-5 text-center bg-image'>
            <div className='d-flex justify-content-center align-items-center h-100'>
                <div className='text-white'>
                    <h1 animate={{ fontSize: '50px' }} className='mb-3 fw-bold'>
                        Find Your Favorite Course From Here
                    </h1>
                    <Link className='btn btn-outline-info btn' to='/courses' role='button'>
                        View All Courses
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default HeroSection