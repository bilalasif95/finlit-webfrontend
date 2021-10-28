/*
 * Add Cart Hackathon Page
 */
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Container, Row, Col } from 'reactstrap';
import axios from 'axios';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
import CourseDetail from '../../../components/student-panel/CourseDetails/CourseDetail';
// import CourseSidebar from '../../../components/student-panel/CourseDetails/CourseSidebar';
import { API } from '../../../config/config';
import { redirectToLogin } from '../../../utils/redirectToLogin';
import Loader from '../../../components/Loader';

const CourseDetails = props => {
  const [hackathonDetails, setHackathonDetails] = useState([]);
  const [loader, setLoader] = useState(false);
  useEffect(() => {
    // getHackathonDetails();
  }, []);
  useEffect(() => {
    redirectToLogin();
  }, []);
  const getHackathonDetails = () => {
    setLoader(true);
    const token = localStorage.getItem('token');
    const authHeaders = token ? { Authorization: `Bearer$ {token}` } : {};
    axios
      .get(`${API}api/events/getById/${props.match.params.id}`, {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          ...authHeaders,
        },
      })
      .then(res => {
        setHackathonDetails(res && res.data && res.data.data);
        setLoader(false);
      })
      .catch(() => {
        setLoader(false);
      });
  };
  return (
    <div className="sub_pages">
      <Helmet>
        <title>Course Detail</title>
        <meta name="description" content="Course Detail" />
      </Helmet>
      <Container fluid="xl">
        {loader ? (
          <Loader />
        ) : (
          <Row>
            <Col lg={8} md={7} sm={12}>
              <CourseDetail />
            </Col>
            <Col lg={4} md={5} sm={12}>
              {/* <CourseSidebar /> */}
            </Col>
          </Row>
        )}
      </Container>
    </div>
  );
};

CourseDetails.propTypes = {
  match: PropTypes.any,
};

export default withRouter(CourseDetails);
