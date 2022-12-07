import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEarthAmericas, faCertificate, faFire } from '@fortawesome/free-solid-svg-icons'
import '../styles/custom.scss'

const About = () => {
    return (
        <div>
            <h2>We Provide best online course ever</h2>
            <Row xs={1} md={2} className="g-4">
                <Col className='d-flex'>
                    <Card>
                        <FontAwesomeIcon icon={faEarthAmericas} size='3x' className='custom-icon' />
                        <Card.Body>
                            <Card.Title>Online Courses</Card.Title>
                            <Card.Text>
                                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card>
                        <FontAwesomeIcon icon={faCertificate} size='3x' className='custom-icon' />
                        <Card.Body>
                            <Card.Title>Earn A Certificates</Card.Title>
                            <Card.Text>
                                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card>
                        <FontAwesomeIcon icon={faFire} size='3x' className='custom-icon' />
                        <Card.Body>
                            <Card.Title>Learn with Expert</Card.Title>
                            <Card.Text>
                                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default About