/*
 * Add Cart Webinar Page
 */
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Container, Row, Col } from 'reactstrap';
import axios from 'axios';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
import WebinarDetail from '../../../components/student-panel/AddCartWebinar/WebinarDetail';
import WebinarSidebar from '../../../components/student-panel/AddCartWebinar/WebinarSidebar';
import { API } from '../../../config/config';
import { redirectToLogin } from '../../../utils/redirectToLogin';
import Loader from '../../../components/Loader';

const AddCartWebinar = props => {
  const [webinarDetails, setWebinarDetails] = useState({});
  const [loader, setLoader] = useState(false);
  useEffect(() => {
    getWebinarDetails();
  }, []);

  useEffect(() => {
    redirectToLogin();
  }, []);
  const getWebinarDetails = () => {
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
        setWebinarDetails(res && res.data && res.data.data);
        setLoader(false);
      })
      .catch(() => {
        setLoader(false);
      });
  };
  return (
    <div className="sub_pages">
      <Helmet>
        <title>Add Webinar</title>
        <meta name="description" content="Add Webinar" />
      </Helmet>
      <Container fluid="xl">
        {loader ? (
          <Loader />
        ) : (
          <Row>
            <Col lg={8} md={7} sm={12}>
              <WebinarDetail detail={webinarDetails} />
            </Col>
            <Col lg={4} md={5} sm={12}>
              <WebinarSidebar detail={webinarDetails} />
            </Col>
          </Row>
        )}
      </Container>
    </div>
  );
};

AddCartWebinar.propTypes = {
  match: PropTypes.any,
};

export default withRouter(AddCartWebinar);
