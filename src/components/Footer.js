import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Logo from '../assets/logo.png'

const Footer = () => {
    return (
        <div>
            <Row className='custom-color-bg'>
                <Col className='text-center m-5'>
                    <img src={Logo} alt="" style={{ height: '40px' }} />
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