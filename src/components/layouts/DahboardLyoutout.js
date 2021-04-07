import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Sidebar from './sidebar/Sidebr';
import Navbar from './navbar/Navbar';

const DahboardLyoutout = () => {
  return (
    <>
      <Navbar />
      <Container fluid>
        <Row>
          <Col xs={2} id='sidebar-wrapper'>
            <Sidebar />
          </Col>
          <Col xs={10} id='page-content-wrapper'>
            {props.children}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default DahboardLyoutout;
