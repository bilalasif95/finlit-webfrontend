/*
 * About Course Page
 *
 */
import React, { useState, useEffect } from 'react';
// import InputBase from '@material-ui/core/InputBase';
import { Helmet } from 'react-helmet';
import '../../components/student-panel/Header/profile.css';
// import { withStyles } from '@material-ui/core/styles';
import {
  Container,
  Row,
  Col,
  Label,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Button,
  Collapse,
  Card,
  CardBody,
} from 'reactstrap';
import messages from './messages';
import Wrapper from './Wrapper';
import 'react-toastify/dist/ReactToastify.css';
import Logo from '../../images/logoS.png';
import Green from '../../images/green-e.png';
import Boy from '../../images/boy.png';
import Girl from '../../images/girl.png';
import Red from '../../images/red-e.png';
import Sidebar from '../../components/student-panel/Sidebar/index';
// import Profile from '../../images/profile.jpg';

export default function AboutCourse() {

  return (
    <>
      {/* <ToastContainer /> */}
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
                <b>Complete Programming with Python : HandsOn Introduction for Beginners</b>
                <p>Approved by <b>FinLit</b></p>
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
                        <p>Aenean sed lorem est. Sed quis neque ut nibh suscipit imperdiet ac non augue. Aenean ornare sit amet lectus non tristique. Nunc ut volutpat lectus. Nulla velit augue, pulvinar sed nisi sit amet, eleifend fermentum est.</p>
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
                    <Button>
                      FinLit certificate
                    </Button>
                  </Col>
                </Row>
              </div>
            </div>
          </Container>
        </Wrapper>
      </div>
    </>
  );
}
