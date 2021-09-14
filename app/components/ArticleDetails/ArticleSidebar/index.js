/*
 * Article Sidebar Component
 */
import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Row, Col, InputGroup, Input, Button } from 'reactstrap';
import { BiSearchAlt2 } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import Wrapper from './Wrapper';
import messages from './messages';

function ArticleSidebar() {
  return (
    <Row>
      <Col lg={12}>
        <Wrapper>
          <h4>
            <FormattedMessage {...messages.Title} />
            <span className="btm_line" />
          </h4>
          <InputGroup>
            <Input type="text" name="search" id="seach" placeholder="Search" />
            <Button>
              <BiSearchAlt2 />
            </Button>
          </InputGroup>
        </Wrapper>
        <Wrapper>
          <h4>
            <FormattedMessage {...messages.Title} />
            <span className="btm_line" />
          </h4>
          <ul>
            <li>
              <Link to="/">
                <FormattedMessage {...messages.Article} />
              </Link>
            </li>
            <li>
              <Link to="/">
                <FormattedMessage {...messages.Article} />
              </Link>
            </li>
            <li>
              <Link to="/">
                <FormattedMessage {...messages.Article} />
              </Link>
            </li>
            <li>
              <Link to="/">
                <FormattedMessage {...messages.Article} />
              </Link>
            </li>
            <li>
              <Link to="/">
                <FormattedMessage {...messages.Article} />
              </Link>
            </li>
            <li>
              <Link to="/">
                <FormattedMessage {...messages.Article} />
              </Link>
            </li>
          </ul>
        </Wrapper>
      </Col>
    </Row>
  );
}

export default ArticleSidebar;
