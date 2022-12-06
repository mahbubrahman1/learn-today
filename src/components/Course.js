import React from 'react'
import { Card, Col } from 'react-bootstrap'
import { motion } from 'framer-motion';

const Course = (props) => {
    return (
        <motion.div
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}>
            <Col>
                <Card className='border-0 shadow-sm'>
                    <Card.Img variant="top" src={props.course.thumbnail} />
                    <Card.Body>
                        <Card.Title className='fw-bold'>{props.course.title}</Card.Title>
                        <Card.Text className='text-align-left'>
                            <p>{props.course.description}</p>
                            <p className='fw-bold'>Created by: {props.course.created}</p>
                            <p className='fw-bold'>{props.course.price}</p>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </motion.div>
    )
}

export default Course