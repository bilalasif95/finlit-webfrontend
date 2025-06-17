/*
 * Add Hackathon Page

 */
import React from 'react';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { Container, Row, Col } from 'reactstrap';
import AddHackathon from '../../../components/instructor-panel/AddHackathon';
import messages from './messages';
import Wrapper from './Wrapper';

export default function AddHackathonPage() {
  return (
    <div className="sub_pages">
      <Helmet>
        <title>Add Hackathon</title>
        <meta name="description" content="Add Hackathon Page" />
      </Helmet>
      <Wrapper id="list">
        <div className="custom_container">
          <Container fluid="xl">
            <Row>
              <Col lg={12}>
                <h4>
                  <FormattedMessage {...messages.AddHackathon} />
                </h4>
                <AddHackathon />
              </Col>
            </Row>
          </Container>
        </div>
      </Wrapper>
    </div>
  );
}
