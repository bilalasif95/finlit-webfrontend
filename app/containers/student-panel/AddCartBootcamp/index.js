/*
 * Add Cart Hackathon Page
 */
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Container, Row, Col } from 'reactstrap';
import axios from 'axios';
import { withRouter } from "react-router";
import BootcampDetail from '../../../components/student-panel/AddCartBootcamp/BootcampDetail/index';
import BootcampSidebar from '../../../components/student-panel/AddCartBootcamp/BootcampSidebar/index';
import { API } from '../../../config/config';
import { redirectToLogin } from '../../../utils/redirectToLogin';
import Loader from '../../../components/Loader';

const AddCartHackathon = (props) => {
  const [bootCampDetails, setBootCampDetails] = useState([]),
    [loader, setLoader] = useState(false);
  useEffect(() => {
    getBootcampDetails()
  }, []);
  useEffect(() => {
    redirectToLogin()
  }, []);

  const getBootcampDetails = () => {
    setLoader(true)
    const token = localStorage.getItem('token');
    const authHeaders = token
      ? {
        Authorization: `Bearer${token}`,
      }
      : {};
    axios
      .get(`${API}api/events/getById/${props.match.params.id}`, {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          ...authHeaders,
        },
      })
      .then((res) => {
        setBootCampDetails(res && res.data && res.data.data)
        setLoader(false);
      })
      .catch(() => {
        setLoader(false);
      });
  };
  return (
    <div className="sub_pages">
      <Helmet>
        <title>Add Hackathon</title>
        <meta name="description" content="Add Hackathon" />
      </Helmet>
      <Container fluid="xl">
        {loader ? (
          <Loader />
        ) : (
          <Row>
            <Col lg={8} md={7} sm={12}>
              <BootcampDetail detail={bootCampDetails} />
            </Col>
            <Col lg={4} md={5} sm={12}>
              <BootcampSidebar detail={bootCampDetails} />
            </Col>
          </Row>
        )
        }
      </Container>
    </div>
  );
}

export default withRouter(AddCartHackathon)