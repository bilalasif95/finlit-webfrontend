/*
 * Add Courses Pagee
 *
 */
import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Helmet } from 'react-helmet';
import { Container, Row, Col } from 'reactstrap';
import messages from './messages';
import Wrapper from './Wrapper';
import AddCourse from '../../../components/instructor-panel/AddCourse';

export default function AddCoursesPagee() {
  return (
    <div className="sub_pages">
      <Helmet>
        <title>Add Courses Pagee</title>
        <meta name="description" content="Add Courses Pagee" />
      </Helmet>
      <Wrapper id="list">
        <div className="custom_container">
          <Container fluid="xl">
            <Row>
              <Col lg={12}>
                <h4>
                  <FormattedMessage {...messages.AddCourse} />
                </h4>
                <AddCourse />
              </Col>
            </Row>
          </Container>
        </div>
      </Wrapper>
    </div>
  );
}
