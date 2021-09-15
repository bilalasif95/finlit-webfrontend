/*
 * Add Webinar Page

 */
import React from 'react';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { Container, Row, Col } from 'reactstrap';
import messages from './messages';
import AddWebinar from '../../../components/instructor-panel/AddWebinar';
import Wrapper from './Wrapper';

export default function AddWebinarPage() {
  return (
    <div className="sub_page">
      <Helmet>
        <title>Add Webinar</title>
        <meta name="description" content="Add Webinar Page" />
      </Helmet>
      <Wrapper id="list">
        <div className="custom_container">
          <Container fluid>
            <Row>
              <Col lg={12}>
                <h4>
                  <FormattedMessage {...messages.AddWebinar} />
                </h4>
                <AddWebinar />
              </Col>
            </Row>
          </Container>
        </div>
      </Wrapper>
    </div>
  );
}
