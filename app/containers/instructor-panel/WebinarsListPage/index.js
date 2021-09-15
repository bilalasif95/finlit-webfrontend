/*
 * Webinars List Page
 *
 */
import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Helmet } from 'react-helmet';
import { Container, Row, Col } from 'reactstrap';
import messages from './messages';
import Wrapper from './Wrapper';
import WebinarsList from '../../../components/instructor-panel/WebinarsList';

export default function WebinarsListPage() {
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
                <h4>
                  <FormattedMessage {...messages.WebinarsList} />
                </h4>
                <WebinarsList />
              </Col>
            </Row>
          </Container>
        </div>
      </Wrapper>
    </div>
  );
}
