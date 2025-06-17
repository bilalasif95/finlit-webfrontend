/*
 * Courses List Page
 *
 */
import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import messages from './messages';
import CoursesList from '../../../components/instructor-panel/CoursesList';
import Wrapper from './Wrapper';

export default function CoursesListPage() {
  return (
    <div className="sub_pages">
      <Helmet>
        <title>Courses List Page</title>
        <meta name="description" content="Courses List Page" />
      </Helmet>
      <Wrapper id="list">
        <div className="custom_container">
          <Container fluid="xl">
            <Row>
              <Col lg={12}>
                <div className="Head-Link">
                  <h4>
                    <FormattedMessage {...messages.CoursesList} />
                  </h4>
                  <Link to="/add_course">
                    <span>+</span> Add
                  </Link>
                </div>
                <CoursesList />
              </Col>
            </Row>
          </Container>
        </div>
      </Wrapper>
    </div>
  );
}
