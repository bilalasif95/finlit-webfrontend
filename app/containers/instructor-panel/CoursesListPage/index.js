/*
 * Courses List Page
 *
 */
import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Helmet } from 'react-helmet';
import { Container, Row, Col } from 'reactstrap';
import messages from './messages';
import CoursesList from '../../../components/instructor-panel/CoursesList';
import Wrapper from './Wrapper';

export default function CoursesListPage() {
  return (
    <div className="sub_page">
      <Helmet>
        <title>Courses List Page</title>
        <meta name="description" content="Courses List Page" />
      </Helmet>
      <Wrapper id="list">
        <div className="custom_container">
          <Container fluid>
            <Row>
              <Col lg={12}>
                <h4>
                  <FormattedMessage {...messages.CoursesList} />
                </h4>
                <CoursesList />
              </Col>
            </Row>
          </Container>
        </div>
      </Wrapper>
    </div>
  );
}
