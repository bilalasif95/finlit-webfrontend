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
import BootcampList from '../../../components/instructor-panel/BootcampList';
import { redirectToLogin } from '../../../utils/redirectToLogin';

export default function BootcampListPage() {
  useEffect(() => {
    redirectToLogin();
  }, []);
  return (
    <div className="sub_pages">
      <Helmet>
        <title>Hackathon List Page</title>
        <meta name="description" content="Bootcamp List Page" />
      </Helmet>
      <Wrapper id="list">
        <div className="custom_container">
          <Container fluid="xl">
            <Row>
              <Col lg={12}>
                <div className="Head-Link">
                  <h4>
                    <FormattedMessage {...messages.BootcampList} />
                  </h4>
                  <Link to="/add_bootcamp">
                    <span>+</span> Add
                  </Link>
                </div>
                <BootcampList />
              </Col>
            </Row>
          </Container>
        </div>
      </Wrapper>
    </div>
  );
}
