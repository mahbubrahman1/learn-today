import React, { useContext } from 'react'
import HeroSection from '../components/HeroSection'
import { AnimatePresence, motion } from 'framer-motion';
import { Row } from 'react-bootstrap';
import UseCourses from '../hooks/UseCourses';
import Course from '../components/Course';
import About from '../pages/About'
import Contact from './Contact';

const Home = () => {
    const { courses, setCourses } = UseCourses();

    return (
        <div>
            {/* herro section  */}
            <HeroSection />

            {/* popular courses */}
            <h2 className='text-center mt-4 fw-bold'>Popular Courses</h2>
            <motion.div>
                <AnimatePresence>
                    <Row sm={1} md={2} lg={3} xl={3} xxl={4} className="g-md-2 g-lg-3 g-xl-3 g-xxl-4 m-auto mx-xxl-5 mx-xl-4 mb-3">
                        {
                            courses.map((course, index) => index < 8 && (<Course
                                key={course.id}
                                course={course}
                            />))
                        }
                    </Row>
                </AnimatePresence>
            </motion.div>

            {/* about us */}
            <h2 className='text-center mt-5 fw-bold'>Why Choose Us</h2>
            <About />

            {/* contact  */}
            <h2 className='text-center mt-4 fw-bold'>Contact Us</h2>
            <Contact />
        </div>
    )
}

export default Home