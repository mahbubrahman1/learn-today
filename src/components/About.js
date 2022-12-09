import React from 'react'
import { Card, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const About = ({ content }) => {
    return (
        <Col className='d-flex flex-column justify-items-center'>
            <FontAwesomeIcon icon={content.icon} size='3x' className='custom-color mt-2' />
            <Card.Body className='text-center text-white mt-2'>
                <Card.Title className='fw-bold'>{content.title}</Card.Title>
                <Card.Text className='mt-2'>
                    {content.body}
                </Card.Text>
            </Card.Body>
        </Col>
    )
}

export default About