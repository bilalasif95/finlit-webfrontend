/*
 * Footer Component
 */
import React from 'react';
import { FormattedMessage } from 'react-intl';
// import LocaleToggle from 'containers/LocaleToggle';
import { Container, Row, Col } from 'reactstrap';
import {
  FaFacebookSquare,
  FaLinkedin,
  FaYoutube,
  FaSkype,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import messages from './messages';
import A from '../../A/index';
import Wrapper from './Wrapper';

function Footer() {
  return (
    <Wrapper id="footer">
      <Container fluid="xl">
        <Row>
          <Col lg={5} md={4} sm={12}>
            <div className="copyright_social">
              <div className="copyright">
                <p>
                  &copy;&nbsp;
                  <FormattedMessage {...messages.AllRightsReserved} />
                </p>
              </div>
              <ul className="social-links">
                <li>
                  <A href="/" target="_blank" type="text/html">
                    <FaFacebookSquare />
                  </A>
                </li>
                <li>
                  <A href="/" target="_blank" type="text/html">
                    <FaLinkedin />
                  </A>
                </li>
                <li>
                  <A href="/" target="_blank" type="text/html">
                    <FaYoutube />
                  </A>
                </li>
                <li>
                  <A href="/" target="_blank" type="text/html">
                    <FaSkype />
                  </A>
                </li>
              </ul>
            </div>
          </Col>
          <Col lg={7} md={8} sm={12}>
            <ul className="footer_links">
              <li>
                <Link to="/features">
                  <FormattedMessage {...messages.Category} />
                </Link>
              </li>
              <li>
                <Link to="/">
                  <FormattedMessage {...messages.AboutCompany} />
                </Link>
              </li>
              <li>
                <Link to="/">
                  <FormattedMessage {...messages.Terms} />
                </Link>
              </li>
              <li>
                <Link to="/">
                  <FormattedMessage {...messages.PrivacyPolicy} />
                </Link>
              </li>
              <li>
                <Link to="/">
                  <FormattedMessage {...messages.HelpCenter} />
                </Link>
              </li>
              <li>
                <Link to="/">
                  <FormattedMessage {...messages.ContactUs} />
                </Link>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Wrapper>
  );
}

export default Footer;
