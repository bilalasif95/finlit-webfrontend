/*
 * Add Cart Webinar Page
 */
import React from 'react';
import { Helmet } from 'react-helmet';
import { Container, Row, Col } from 'reactstrap';
import WebinarDetail from '../../../components/student-panel/AddCartWebinar/WebinarDetail';
import WebinarSidebar from '../../../components/student-panel/AddCartWebinar/WebinarSidebar';

export default function AddCartWebinar() {
  return (
    <div className="sub_pages">
      <Helmet>
        <title>Add Webinar</title>
        <meta name="description" content="Add Webinar" />
      </Helmet>
      <Container fluid="xl">
        <Row>
          <Col lg={8} md={7} sm={12}>
            <WebinarDetail />
          </Col>
          <Col lg={4} md={5} sm={12}>
            <WebinarSidebar />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
