/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Container, Row, Col } from 'reactstrap';
import axios from 'axios';
import MainSection from '../../../components/instructor-panel/DashboardStatistics/MainSection';
import Events from '../../../components/instructor-panel/DashboardStatistics/Events';
import Statistics from '../../../components/instructor-panel/DashboardStatistics/Statistics';
import { API } from '../../../config/config';
import { axiosHeader } from '../../../utils/axiosHeader';

export function HomePage() {
  const [statisticsCounter, setStatisticsCounter] = useState({});

  useEffect(() => {
    axios
      .get(`${API}api/user/instructor/stats`, axiosHeader)
      .then(res => {
        setStatisticsCounter(res.data.data);
      })
      .catch(err => {
      });
  }, []);
  return (
    <div className="main_page">
      <Helmet>
        <title>FinLit Admin - Home</title>
        <meta name="description" content="FinLit Admin - Home" />
      </Helmet>
      <div className="w-100">
        <MainSection statistics={statisticsCounter} />
      </div>
      <Container>
        <Row>
          <Col lg={12}>
            <div className="dashboard-main">
              <div className="statistics-cont">
                <Statistics statistics={statisticsCounter} />
              </div>
              <div className="events-cont">
                <Events statistics={statisticsCounter} />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default HomePage;
