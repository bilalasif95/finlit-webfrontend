/*
 * Add Cart Hackathon Page
 */
import React from 'react';
import { Helmet } from 'react-helmet';
import { Container, Row, Col } from 'reactstrap';
import BootcampDetail from '../../../components/student-panel/AddCartBootcamp/BootcampDetail/index';
import BootcampSidebar from '../../../components/student-panel/AddCartBootcamp/BootcampSidebar/index';

export default function AddCartHackathon() {
  return (
    <div className="sub_pages">
      <Helmet>
        <title>Add Hackathon</title>
        <meta name="description" content="Add Hackathon" />
      </Helmet>
      <Container fluid="xl">
        <Row>
          <Col lg={8} md={7} sm={12}>
            <BootcampDetail />
          </Col>
          <Col lg={4} md={5} sm={12}>
            <BootcampSidebar />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
