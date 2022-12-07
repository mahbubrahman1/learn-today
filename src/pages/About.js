import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEarthAmericas, faCertificate, faFire } from '@fortawesome/free-solid-svg-icons'
import '../styles/custom.scss'

const About = () => {
    return (
        <div className='custom-color-bg'>
            <Container className='p-5'>
                <Row xs={1} md={3} className="g-4">
                    <Col className='d-flex flex-column justify-items-center'>
                        <FontAwesomeIcon icon={faEarthAmericas} size='3x' className='custom-color mt-2' />
                        <Card.Body className='text-center text-white mt-2'>
                            <Card.Title className='fw-bold'>Online Courses</Card.Title>
                            <Card.Text className='mt-2'>
                                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
                            </Card.Text>
                        </Card.Body>
                    </Col>
                    <Col className='d-flex flex-column justify-items-center'>
                        <FontAwesomeIcon icon={faCertificate} size='3x' className='custom-color mt-2' />
                        <Card.Body className='text-center text-white mt-2'>
                            <Card.Title className='fw-bold'>Earn A Certificates</Card.Title>
                            <Card.Text className='mt-2'>
                                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
                            </Card.Text>
                        </Card.Body>
                    </Col>
                    <Col className='d-flex flex-column justify-items-center'>
                        <FontAwesomeIcon icon={faFire} size='3x' className='custom-color mt-2' />
                        <Card.Body className='text-center text-white mt-2'>
                            <Card.Title className='fw-bold'>Learn with Expert</Card.Title>
                            <Card.Text className='mt-2'>
                                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
                            </Card.Text>
                        </Card.Body>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default About