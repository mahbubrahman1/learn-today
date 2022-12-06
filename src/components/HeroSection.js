import React from 'react'
import { Link } from 'react-router-dom'

const HeroSection = () => {
    return (
        <div>
            <div className='p-5 text-center bg-image' style={{ backgroundImage: "url('https://i.ibb.co/P59rBvs/hero-learn-today.jpg')", height: '50vh', backgroundRepeat: 'no-repeat' }}>

                <div className='d-flex justify-content-center align-items-center h-100'>
                    <div className='text-white'>
                        <h1 className='mb-3 fw-bold'>Find Your Favorite Course From Here</h1>
                        <Link className='btn btn-outline-info btn-lg' to='/courses' role='button'>
                            Explore Courses
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection