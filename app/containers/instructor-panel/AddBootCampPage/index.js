/*
 * Add BootCamp Page
 *
 */
import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Helmet } from 'react-helmet';
import { Container, Row, Col } from 'reactstrap';
import messages from './messages';
import Wrapper from './Wrapper';
import AddBootCamp from '../../../components/instructor-panel/AddBootCamp';

export default function AddBootCampPage() {
  return (
    <div className="sub_page">
      <Helmet>
        <title>Add BootCamp Page</title>
        <meta name="description" content="Add BootCamp Page" />
      </Helmet>
      <Wrapper id="list">
        <div className="custom_container">
          <Container fluid>
            <Row>
              <Col lg={12}>
                <h4>
                  <FormattedMessage {...messages.AddBootCamp} />
                </h4>
                <AddBootCamp />
              </Col>
            </Row>
          </Container>
        </div>
      </Wrapper>
    </div>
  );
}
