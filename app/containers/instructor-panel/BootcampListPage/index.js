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
import BootcampList from '../../../components/instructor-panel/BootcampList';
export default function BootcampListPage() {
  return (
    <div className="sub_page">
      <Helmet>
        <title>Hackathon List Page</title>
        <meta name="description" content="Bootcamp List Page" />
      </Helmet>
      <Wrapper id="list">
        <div className="custom_container">
          <Container fluid>
            <Row>
              <Col lg={12}>
                <h4>
                  <FormattedMessage {...messages.BootcampList} />
                </h4>
                <BootcampList />
              </Col>
            </Row>
          </Container>
        </div>
      </Wrapper>
    </div>
  );
}
