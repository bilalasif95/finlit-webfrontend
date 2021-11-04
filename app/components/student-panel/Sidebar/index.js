/*
 * Footer Component
 */
import React, { useState, useEffect } from 'react';
import Logo from "../../../images/logoS.png";
import { Link, withRouter } from 'react-router-dom';
import { BiUserCircle, } from 'react-icons/bi';
import { BsChatSquare } from 'react-icons/bs';
import { FaChevronDown } from 'react-icons/fa';
import { RiUserSettingsLine } from 'react-icons/ri';
import Bell from '../../../images/bell.svg';
import {
  Button,
  Collapse,
  Card,
  CardBody,
} from 'reactstrap';


function Sidebar(props) {
  console.log(props)
  const [collapse, setCollapse] = useState(false);
  const [active, setActive] = useState(props.location.pathname);

  return (
    <div className="profileAside">
      <img className="img-fluid mx-auto d-block" src={Logo} alt="Logo" />
      <div className="sideNav">
        <div className={active === "/my_profile" ? "active sideNavLink" : "sideNavLink"}>
          <Link to="/my_profile">
            <p><BiUserCircle /></p>
            Profile
          </Link>
        </div>
        <div className={active === "customDropdown" ? "active customDropdown" : "customDropdown"} onClick={() => setActive("customDropdown")}>
          <Button
            className="sideNavLink btn btn-default"
            type="button"
            color="primary"
            onClick={() => setCollapse(!collapse)}
            style={{
              marginBottom: '1rem'
            }}
          >
            <p><BsChatSquare /></p>
            My Collection &nbsp;<span><FaChevronDown /></span>
          </Button>
          {collapse &&
            <Collapse className={collapse ? "show" : ""}>
              <Card>
                <CardBody>
                  <ul className="list-unstyled sideList">
                    <li><Link>Course</Link></li>
                    <li><Link>Bootcamp</Link></li>
                    <li><Link>Hackathon</Link></li>
                    <li><Link>One to one session</Link></li>
                    <li><Link>Live webinar</Link></li>
                    <li><Link>Article</Link></li>
                  </ul>
                </CardBody>
              </Card>
            </Collapse>}
        </div>
        <div className={active === "/setting" ? "active sideNavLink" : "sideNavLink"}>
        <Link to="/setting">
          <p><RiUserSettingsLine /></p>
          Setting
        </Link>
        </div>
        
        <div className={active === "/notification" ? "active sideNavLink" : "sideNavLink"}>
          <Link to="/notification">
            <p><img src={Bell} alt="bell" /></p>
            Notification
          </Link>
        </div>
      </div>
      <div className="homeBtn">
        <Link to="/" className="backBtn">Back to Home</Link>
      </div>
    </div>
  );
}

export default withRouter(Sidebar);
