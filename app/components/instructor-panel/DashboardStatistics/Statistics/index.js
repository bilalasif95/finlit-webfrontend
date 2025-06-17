import React, { useState, useEffect } from 'react';
import { FormattedMessage } from 'react-intl';
import { Row, Col } from 'reactstrap';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { API } from '../../../../config/config';
import Wrapper from './Wrapper';
import messages from './messages';
// import Course1 from '../../../../images/chart20.svg';
// import Course2 from '../../../../images/chart50.svg';
// import Course3 from '../../../../images/chart80.svg';
// import Dot from '../../../../images/list-dot.svg';
// import Chart from '../../../../images/stat-chart.svg';

function DashboardStatistics() {
  const [stuEvents, setStuEvents] = useState([]);

  const getStudentEvents = () => {
    const token = localStorage.getItem('token');
    const authHeaders = token ? { Authorization: `Bearer ${token}` } : '';
    axios
      .get(`${API}api/user/student/events`, {
        headers: {
          Accept: 'application/json',
          ...authHeaders,
        },
      })
      .then(res => {
        setStuEvents(res && res.data.data);
      })
      .catch(err => {
        toast.error(
          err.response && err.response.data.message
            ? err.response.data.message.toString()
            : 'Message Not Readable',
        );
      });
  };

  useEffect(() => {
    // console.log('START');
    getStudentEvents();
  }, []);
  return (
    <>
      <ToastContainer />
      <Wrapper>
        {/* <Row>
          <Col className="d-flex" lg={8}>
            <div className="statistics-chart w-100">
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
          <Col className="d-flex" lg={4}>
            <div className="course-cont w-100">
              <h3>
                <FormattedMessage {...messages.CourseTitle} />
              </h3>
              <div className="course">
                <div className="course-box">
                  <p>SQL Injection Attacks</p>
                  <img alt="course-chart" src={Course1} />
                </div>
                <div className="course-box">
                  <p>Finance Manager Countr</p>
                  <img alt="course-chart" src={Course2} />
                </div>
                <div className="course-box">
                  <p>SQL Injection Attacks</p>
                  <img alt="course-chart" src={Course3} />
                </div>
              </div>
            </div>
          </Col>
        </Row> */}
        <Row>
          <Col lg={12}>
            <div className="recent-cont">
              <div className="activities">
                <h3>
                  <FormattedMessage {...messages.CourseTitle} />
                </h3>
                {/* <Button to="/">View All</Button> */}
              </div>
              {stuEvents.map(event => (
                <div className="List-box">
                  <h4>{event.mainTitle}</h4>
                  <p>{event.subTitle}</p>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Wrapper>
    </>
  );
}

export default DashboardStatistics;
