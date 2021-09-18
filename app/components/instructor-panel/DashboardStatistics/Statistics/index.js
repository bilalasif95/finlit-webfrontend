import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Row, Col } from 'reactstrap';
import Wrapper from './Wrapper';
import messages from './messages';
import CourseChart from '../../../../images/course.svg';
import Dot from '../../../../images/list-dot.svg';
import Chart from '../../../../images/stat-chart.svg';

function DashboardStatistics() {
  return (
    <Wrapper>
      <Row>
        <Col lg={8}>
          <div className="statistics-chart">
            <h3>
              <FormattedMessage {...messages.Title} />
            </h3>
            <div className="list-box">
              <ul className="statistics-list">
                <li>
                  <img src={Dot} alt="Progress" />
                  20% Completed
                </li>
                <li>
                  <img src={Dot} alt="Progress" />
                  50% Progress
                </li>
                <li>
                  <img src={Dot} alt="Progress" />
                  30% Start
                </li>
              </ul>
              <div>
                <img src={Chart} alt="chart" />
              </div>
            </div>
          </div>
        </Col>
        <Col lg={4} >
          <div className="course-cont">
            <h3>
              <FormattedMessage {...messages.CourseTitle} />
            </h3>
            <div className="course">
              <div className="course-box">
                <p>SQL Injection Attacks</p>
                <img alt="course-chart" src={CourseChart} />
              </div>
              <div className="course-box">
                <p>Finance Manager Countr</p>
                <img alt="course-chart" src={CourseChart} />
              </div>
              <div className="course-box">
                <p>SQL Injection Attacks</p>
                <img alt="course-chart" src={CourseChart} />
              </div>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col lg={12}>
          <div className="recent-cont">
            <div>
              <h3>
                <FormattedMessage {...messages.CourseTitle} />
              </h3>
            </div>
          </div>
        </Col>
      </Row>
    </Wrapper>
  );
}

export default DashboardStatistics;
