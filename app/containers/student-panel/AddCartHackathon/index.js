/*
 * Add Cart Hackathon Page
 */
import React from 'react';
import { Helmet } from 'react-helmet';
import { Container, Row, Col } from 'reactstrap';
import HackathonDetail from '../../../components/student-panel/AddCartHackathon/HackathonDetail';
import HackathonSidebar from '../../../components/student-panel/AddCartHackathon/HackathonSidebar';

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
            <HackathonDetail />
          </Col>
          <Col lg={4} md={5} sm={12}>
            <HackathonSidebar />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
