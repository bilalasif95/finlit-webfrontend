/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */
import React from 'react';
import { Helmet } from 'react-helmet';
import { Container, Row, Col } from 'reactstrap';
import MainSection from '../../../components/instructor-panel/DashboardStatistics/MainSection';
import Events from '../../../components/instructor-panel/DashboardStatistics/Events';
import Statistics from '../../../components/instructor-panel/DashboardStatistics/Statistics';

export function HomePage() {
  return (
    <div className="main_page">
      <Helmet>
        <title>FinLit Admin - Home</title>
        <meta name="description" content="FinLit Admin - Home" />
      </Helmet>
      <div className="w-100">
        <MainSection />
      </div>
      <Container>
        <Row>
          <Col lg={12}>
            <div className="dashboard-main">
              <div className="statistics-cont">
                <Statistics />
              </div>
              <div className="events-cont">
                <Events />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default HomePage;
