/*
 * Dashboard Sidebar Component
 */
import React, { useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { BiUserCircle } from 'react-icons/bi';
import { BsChatSquare } from 'react-icons/bs';
import { FaChevronDown } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
import { RiUserSettingsLine } from 'react-icons/ri';
import { Button, Collapse, Card, CardBody } from 'reactstrap';
import PropTypes from 'prop-types';
import Bell from '../../../images/bell.svg';
import Logo from '../../../images/logoS.png';
import Wrapper from './Wrapper';

function Sidebar(props) {
  const [collapse, setCollapse] = useState(false);
  const [active, setActive] = useState(props.location.pathname);

  return (
    <Wrapper>
      <div className="profileAside">
        <Link to="/#">
          <img className="img-fluid mx-auto d-block" src={Logo} alt="Logo" />
        </Link>
        <div className="sideNav">
          <div
            className={
              active === '/my_profile' ? 'active sideNavLink' : 'sideNavLink'
            }
          >
            <Link to="/my_profile">
              <p>
                <BiUserCircle />
              </p>
              Profile
            </Link>
          </div>
          <div
            className={
              active === 'customDropdown'
                ? 'active customDropdown'
                : 'customDropdown'
            }
            role="button"
            tabIndex={0}
            onKeyDown={() => setActive('customDropdown')}
            onClick={() => setActive('customDropdown')}
          >
            <Button
              className="sideNavLink btn btn-default"
              type="button"
              color="primary"
              onClick={() => setCollapse(!collapse)}
              style={{
                marginBottom: '1rem',
              }}
            >
              <p>
                <BsChatSquare />
              </p>
              My Collection &nbsp;
              <span>
                <FaChevronDown />
              </span>
            </Button>
            {collapse && (
              <Collapse className={collapse ? 'show' : ''}>
                <Card>
                  <CardBody>
                    <ul className="list-unstyled sideList">
                      <li>
                        <Link to="/my_courses">Course</Link>
                      </li>
                      <li>
                        <Link to="/#">Bootcamp</Link>
                      </li>
                      <li>
                        <Link to="/#">Hackathon</Link>
                      </li>
                      <li>
                        <Link to="/#">One to one session</Link>
                      </li>
                      <li>
                        <Link to="/#">Live webinar</Link>
                      </li>
                      <li>
                        <Link to="/#">Article</Link>
                      </li>
                    </ul>
                  </CardBody>
                </Card>
              </Collapse>
            )}
          </div>
          <div
            className={
              active === '/setting' ? 'active sideNavLink' : 'sideNavLink'
            }
          >
            <Link to="/setting">
              <p>
                <RiUserSettingsLine />
              </p>
              Setting
            </Link>
          </div>

          <div
            className={
              active === '/notification' ? 'active sideNavLink' : 'sideNavLink'
            }
          >
            <Link to="/notification">
              <p>
                <img src={Bell} alt="bell" />
              </p>
              Notification
            </Link>
          </div>
        </div>
        <div className="homeBtn">
          <Link to="/" className="backBtn">
            Back to Home
          </Link>
        </div>
      </div>
      {/* Mobile Nav */}
      <div className="profileAside MobileNav">
        <div className="d-flex justify-content-between align-items-center">
          <Link to="/#">
            <img className="img-fluid" src={Logo} alt="Logo" />
          </Link>
          <button
            className="btn btn-default collapseBtn"
            type="button"
            data-toggle="collapse"
            data-target="#collapseExample"
            aria-expanded="false"
            aria-controls="collapseExample"
          >
            <GiHamburgerMenu />
          </button>
        </div>
        <div className="collapse" id="collapseExample">
          <div>
            <div className="sideNav">
              <div
                className={
                  active === '/my_profile'
                    ? 'active sideNavLink'
                    : 'sideNavLink'
                }
              >
                <Link to="/my_profile">
                  <p>
                    <BiUserCircle />
                  </p>
                  Profile
                </Link>
              </div>
              <div
                className={
                  active === 'customDropdown'
                    ? 'active customDropdown'
                    : 'customDropdown'
                }
                role="button"
                tabIndex={0}
                onKeyDown={() => setActive('customDropdown')}
                onClick={() => setActive('customDropdown')}
              >
                <Button
                  className="sideNavLink btn btn-default"
                  type="button"
                  color="primary"
                  onClick={() => setCollapse(!collapse)}
                  style={{
                    marginBottom: '1rem',
                  }}
                >
                  <p>
                    <BsChatSquare />
                  </p>
                  My Collection &nbsp;
                  <span>
                    <FaChevronDown />
                  </span>
                </Button>
                {collapse && (
                  <Collapse className={collapse ? 'show' : ''}>
                    <Card>
                      <CardBody>
                        <ul className="list-unstyled sideList">
                          <li>
                            <Link to="/my_courses">Course</Link>
                          </li>
                          <li>
                            <Link to="/#">Bootcamp</Link>
                          </li>
                          <li>
                            <Link to="/#">Hackathon</Link>
                          </li>
                          <li>
                            <Link to="/#">One to one session</Link>
                          </li>
                          <li>
                            <Link to="/#">Live webinar</Link>
                          </li>
                          <li>
                            <Link to="/#">Article</Link>
                          </li>
                        </ul>
                      </CardBody>
                    </Card>
                  </Collapse>
                )}
              </div>
              <div
                className={
                  active === '/setting' ? 'active sideNavLink' : 'sideNavLink'
                }
              >
                <Link to="/setting">
                  <p>
                    <RiUserSettingsLine />
                  </p>
                  Setting
                </Link>
              </div>

              <div
                className={
                  active === '/notification'
                    ? 'active sideNavLink'
                    : 'sideNavLink'
                }
              >
                <Link to="/notification">
                  <p>
                    <img src={Bell} alt="bell" />
                  </p>
                  Notification
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile Nav */}
    </Wrapper>
  );
}

Sidebar.propTypes = {
  location: PropTypes.any,
};

export default withRouter(Sidebar);
