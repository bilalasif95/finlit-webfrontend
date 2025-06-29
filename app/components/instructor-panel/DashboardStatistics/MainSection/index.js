import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import {
  Container,
  Row,
  Col,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
} from 'reactstrap';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Wrapper from './Wrapper';
import messages from './messages';

function MainSection(props) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [greetingMessage, setGreetingMessage] = useState('');
  const [userObj, setUserObj] = useState({});

  const toggle = () => setDropdownOpen(prevState => !prevState);
  const { statistics } = props;

  React.useEffect(() => {
    const userObj2 = JSON.parse(localStorage.getItem('userInfo')) || '';
    setUserObj(userObj2);
    const time = new Date().getHours();
    let greeting;
    if (time < 10) {
      greeting = 'Good Morning';
    } else if (time < 20) {
      greeting = 'Good Afternoon';
    } else {
      greeting = 'Good Evening';
    }
    setGreetingMessage(greeting);
  }, []);

  return (
    <Wrapper>
      <Container fluid="xl">
        <div className="main_section">
          <h4>
            Hi {userObj.firstName} {userObj.lastName}, {greetingMessage}
          </h4>
          <ul className="top_links">
            <li>
              <Link className="link" to="/my_profile">
                <FormattedMessage {...messages.MyProfile} />
              </Link>
            </li>
            {userObj &&
            userObj.role &&
            userObj.role.roleName === 'Instructor' ? (
              <>
                <li>
                  <Link className="link" to="/courses_list">
                    <FormattedMessage {...messages.MyCourses} />
                  </Link>
                </li>
                <li>
                  <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                    <DropdownToggle caret>Add Category</DropdownToggle>
                    <DropdownMenu>
                      <ul>
                        <li>
                          <Link className="dropdown_link" to="/add_course">
                            <FormattedMessage {...messages.AddCourses} />
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown_link" to="/add_webinar">
                            <FormattedMessage {...messages.AddWebinar} />
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown_link" to="/add_bootcamp">
                            <FormattedMessage {...messages.AddBootCamp} />
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown_link" to="/add_hackathon">
                            <FormattedMessage {...messages.AddHackathon} />
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown_link" to="/add_article">
                            <FormattedMessage {...messages.AddArticles} />
                          </Link>
                        </li>
                      </ul>
                    </DropdownMenu>
                  </Dropdown>
                </li>
              </>
            ) : (
              <></>
            )}
          </ul>
          <div className="main_links">
            {userObj &&
            userObj.role &&
            userObj.role.roleName === 'Instructor' ? (
              <>
                <Link to="/webinars_list">
                  <FormattedMessage {...messages.Webinars} />
                </Link>
                <Link to="/bootcamps_list">
                  <FormattedMessage {...messages.BootCamp} />
                </Link>
                <Link to="/hackathons_list">
                  <FormattedMessage {...messages.Hackathon} />
                </Link>
              </>
            ) : (
              <>
                <Link to="/webinar_list">
                  <FormattedMessage {...messages.Webinars} />
                </Link>
                <Link to="/bootcamp_list">
                  <FormattedMessage {...messages.BootCamp} />
                </Link>
                <Link to="/hackathon_list">
                  <FormattedMessage {...messages.Hackathon} />
                </Link>
              </>
            )}
          </div>
          {userObj && userObj.role && userObj.role.roleName === 'Instructor' ? (
            <>
              <div className="stats">
                <Row>
                  <Col lg={3} md={6} sm={6} xs={12}>
                    <div className="single_item">
                      <h2>{statistics && statistics.totalBootcamps}</h2>
                      <span className="vl" />
                      <p>
                        <FormattedMessage {...messages.Bootcamps} />
                      </p>
                    </div>
                  </Col>
                  <Col lg={3} md={6} sm={6} xs={12}>
                    <div className="single_item">
                      <h2>{statistics && statistics.totalWebinars}</h2>
                      <span />
                      <p>
                        <FormattedMessage {...messages.Webinars} />
                      </p>
                    </div>
                  </Col>
                  <Col lg={3} md={6} sm={6} xs={12}>
                    <div className="single_item">
                      <h2>{statistics && statistics.totalCourses}</h2>
                      <span />
                      <p>
                        <FormattedMessage {...messages.Courses} />
                      </p>
                    </div>
                  </Col>
                  <Col lg={3} md={6} sm={6} xs={12}>
                    <div className="single_item">
                      <h2>{statistics && statistics.totalHackathons}</h2>
                      <span />
                      <p>
                        <FormattedMessage {...messages.Hackathons} />
                      </p>
                    </div>
                  </Col>
                </Row>
              </div>
            </>
          ) : (
            <></>
          )}
        </div>
      </Container>
    </Wrapper>
  );
}

MainSection.propTypes = {
  statistics: PropTypes.any,
};

export default MainSection;
