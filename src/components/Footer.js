import React from 'react';
import { Col, Row } from 'react-bootstrap';

const Footer = () => {
    return (
        <div>
            <Row className='custom-color-bg'>
                <Col className='text-center m-5'>
                    <h3 className='text-light'>Learn Today</h3>
                    <p className='mt-3'>
                        <a href="/#" className='text-light opacity-75'>Python</a>
                        <a href="/#" className='ms-2 text-light opacity-75'>Java</a>
                        <a href="/#" className='ms-2 text-light opacity-75'>C++</a>
                        <a href="/#" className='ms-2 text-light opacity-75'>C#</a>
                        <a href="/#" className='ms-2 text-light opacity-75'>JavaScript</a>
                        <a href="/#" className='ms-2 text-light opacity-75'>Unity</a>
                    </p>
                    <p className='text-muted'>
                        Copyring ©️ 2022 All rights reserved
                    </p>
                </Col>
            </Row>

        </div>
    )
}

export default Footer