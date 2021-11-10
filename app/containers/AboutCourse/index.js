/*
 * About Course Page
 *
 */
import React from 'react';
// import InputBase from '@material-ui/core/InputBase';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import '../../components/student-panel/Header/profile.css';
// import { withStyles } from '@material-ui/core/styles';
import { Container, Row, Col, Button } from 'reactstrap';
import messages from './messages';
import Wrapper from './Wrapper';

export default function AboutCourse() {
  return (
    <div className="sub_pages">
      <Helmet>
        <title>About Course</title>
        <meta name="description" content="About Course Page" />
      </Helmet>
      <Wrapper>
        <Container fluid="xl">
          <div className="about_course">
            <div className="top_info">
              <h6>About this course</h6>
              <b>
                <FormattedMessage {...messages.Tagline} />
              </b>
              <p>
                Approved by <b>FinLit</b>
              </p>
            </div>
            <div className="user_details">
              <Row>
                <Col lg={4} md={6} sm={12}>
                  <ul>
                    <li>
                      <p>Student name</p>
                      <p>Chad Sanders</p>
                    </li>
                    <li>
                      <p>Language</p>
                      <p>English</p>
                    </li>
                    <li>
                      <p>Skill Level</p>
                      <p>Medium</p>
                    </li>
                    <li>
                      <p>Completion date</p>
                      <p>12/02/1978</p>
                    </li>
                  </ul>
                </Col>
                <Col lg={8} md={6} sm={12}>
                  <ul>
                    <li>
                      <p>Instructor</p>
                      <p>Beatrice Ross</p>
                    </li>
                    <li>
                      <p>Grade</p>
                      <p>A+</p>
                    </li>
                    <li>
                      <p>Marks</p>
                      <p>90%</p>
                    </li>
                    <li>
                      <p>Duration of course</p>
                      <p>2hr 30m</p>
                    </li>
                    <li>
                      <p>Description</p>
                      <p>
                        <FormattedMessage {...messages.Desc} />
                      </p>
                    </li>
                  </ul>
                </Col>
              </Row>
            </div>
            <div className="get_certificate">
              <Row>
                <Col lg={2} md={3} sm={3} xs={12}>
                  <p>Certificates</p>
                </Col>
                <Col lg={10} md={9} sm={9} xs={12}>
                  <p>Get FinLit certificate by completing entire course</p>
                  <Button> FinLit certificate </Button>
                </Col>
              </Row>
            </div>
          </div>
        </Container>
      </Wrapper>
    </div>
  );
}
