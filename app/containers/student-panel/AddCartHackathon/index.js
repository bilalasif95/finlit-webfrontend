/*
 * Add Cart Hackathon Page
 */
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Container, Row, Col } from 'reactstrap';
import HackathonDetail from '../../../components/student-panel/AddCartHackathon/HackathonDetail';
import HackathonSidebar from '../../../components/student-panel/AddCartHackathon/HackathonSidebar';
import { API } from '../../../config/config';
import axios from 'axios';
import { withRouter } from "react-router";
import { redirectToLogin } from "../../../utils/redirectToLogin"


const AddCartHackathon = (props) => {
  const [hackathonDetails, setHackathonDetails] = useState([]),
    [loader, setLoader] = useState(false)
  useEffect(() => {
    getHackathonDetails()
  }, [])

  useEffect(() => {
    redirectToLogin()
  }, [])

  const getHackathonDetails = () => {
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
        setHackathonDetails(res && res.data && res.data.data)
        setLoader(false);
      })
      .catch(() => {
        setLoader(false);
      });

  }

  return (
    <div className="sub_pages">
      <Helmet>
        <title>Add Hackathon</title>
        <meta name="description" content="Add Hackathon" />
      </Helmet>
      <Container fluid="xl">
        {loader ? "Loading...." :
          <Row>
            <Col lg={8} md={7} sm={12}>
              <HackathonDetail detail={hackathonDetails} />
            </Col>
            <Col lg={4} md={5} sm={12}>
              <HackathonSidebar detail={hackathonDetails} />
            </Col>
          </Row>}
      </Container>
    </div>
  );
}

export default withRouter(AddCartHackathon)