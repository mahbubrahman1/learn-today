import React from 'react'
import { Button, Form, Container, Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'

const Contact = () => {
    return (
        <Container className='mb-3'>
            <Row lg={2} xs={1}>
                <Col>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Subject</Form.Label>
                            <Form.Control type="text" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Message</Form.Label>
                            <Form.Control as="textarea" type="text" />
                        </Form.Group>
                        <Button type="submit" className='custom-button'>
                            Send
                        </Button>
                    </Form>
                </Col>
                <Col>
                    <div className='mt-4 ms-5'>
                        <div className='d-flex'>
                            <FontAwesomeIcon icon={faLocationDot} size='lg' className='custom-color' />
                            <h6 className='ms-2'>Rosemead, CA 91770s, Buttonwood, California</h6>
                        </div>
                        <div className='d-flex mt-4'>
                            <div>
                                <FontAwesomeIcon icon={faPhone} size='lg' className='custom-color' />
                            </div>
                            <div className='ms-2'>
                                <h6>+123 456 6787</h6>
                                <p className='text-muted'>24/7 Days</p>
                            </div>
                        </div>
                        <div className='d-flex mt-4'>
                            <div>
                                <FontAwesomeIcon icon={faEnvelope} size='lg' className='custom-color' />
                            </div>
                            <div className='ms-2'>
                                <h6>support@learntoday.com</h6>
                                <p className='text-muted'>Send us quary any time!</p>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Contact