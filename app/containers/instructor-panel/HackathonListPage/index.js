/*
 * Webinars List Page
 *
 */
import React, { useEffect } from 'react';
import { FormattedMessage } from 'react-intl';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import messages from './messages';
import Wrapper from './Wrapper';
import HackathonList from '../../../components/instructor-panel/HackathonList';
import { redirectToLogin } from '../../../utils/redirectToLogin';

export default function HackathonListPage() {
  useEffect(() => {
    redirectToLogin();
  }, []);
  return (
    <div className="sub_page">
      <Helmet>
        <title>Hackathon List</title>
        <meta name="description" content="Hackathon List" />
      </Helmet>
      <Wrapper id="list">
        <div className="custom_container">
          <Container fluid>
            <Row>
              <Col lg={12}>
                <div className="Head-Link">
                  <h4>
                    <FormattedMessage {...messages.HackathonList} />
                  </h4>
                  <Link to="/add_hackathon">
                    <span>+</span> Add
                  </Link>
                </div>
                <HackathonList />
              </Col>
            </Row>
          </Container>
        </div>
      </Wrapper>
    </div>
  );
}
