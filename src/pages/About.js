import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { faEarthAmericas, faCertificate, faFire } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import { pageAnimation } from '../animation';
import AboutCom from '../components/About'
import '../App.scss';

const About = () => {
    const contents = [
        {
            icon: faEarthAmericas,
            title: 'Onlline Courses',
            body: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts',
        },
        {
            icon: faCertificate,
            title: 'Earn A Certificates',
            body: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts',
        },
        {
            icon: faFire,
            title: 'Learn with Expert',
            body: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts',
        },
    ]

    return (
        <motion.div
            variants={pageAnimation}
            initial='hidden'
            animate='show'
            className='custom-color-bg'
        >
            <Container className='p-5'>
                <Row xs={1} md={3} className="g-4">
                    {
                        contents.map(content => (<AboutCom
                            key={content.title}
                            content={content}
                        />))
                    }
                </Row>
            </Container>
        </motion.div>
    )
}

export default About;