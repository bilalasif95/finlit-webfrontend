/*
 * Webinars List Page
 *
 */
import React, { useEffect } from 'react';
import { FormattedMessage } from 'react-intl';
import { Helmet } from 'react-helmet';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import messages from './messages';
import Wrapper from './Wrapper';
import WebinarsList from '../../../components/instructor-panel/WebinarsList';
import { redirectToLogin } from '../../../utils/redirectToLogin';

export default function WebinarsListPage() {
  useEffect(() => {
    redirectToLogin()
  }, []);
  return (
    <div className="sub_page">
      <Helmet>
        <title>Webinars List Page</title>
        <meta name="description" content="Webinars List Page" />
      </Helmet>
      <Wrapper id="list">
        <div className="custom_container">
          <Container fluid>
            <Row>
              <Col lg={12}>
                <div className="Head-Link">
                  <h4>
                    <FormattedMessage {...messages.WebinarsList} />
                  </h4>
                  <Link to="/add_webinar">
                    <span>+</span> Add
                  </Link>
                </div>
                <WebinarsList />
              </Col>
            </Row>
          </Container>
        </div>
      </Wrapper>
    </div>
  );
}
