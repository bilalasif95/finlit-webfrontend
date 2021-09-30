/*
 * Main Search Component
 */
import React from 'react';
import { FormattedMessage } from 'react-intl';
import {
  Container,
  Row,
  Col,
  InputGroup,
  InputGroupAddon,
  Button,
  Input,
} from 'reactstrap';
import messages from './messages';
import dots from '../../../../images/dots.svg';
import Wrapper from './Wrapper';

function MainSearch() {
  return (
    <Wrapper>
      <Container fluid="xl">
        <Row>
          <Col lg={2} md={1} sm={12} />
          <Col lg={8} md={10} sm={12}>
            <div className="main_content">
              <h4>
                <FormattedMessage {...messages.HowCanWeHelp} />
              </h4>
              <div className="obj_cont">
                <div className="circle">circle</div>
                <img src={dots} alt="dots" className="dots" height="100%" width="100%" />
                <div className="search_bar">
                  <InputGroup>
                    <Input placeholder="Search for help on specific topics" />
                    <InputGroupAddon addonType="append">
                      <Button>
                        <FormattedMessage {...messages.MainSearchBtn} />
                      </Button>
                    </InputGroupAddon>
                  </InputGroup>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={2} md={1} sm={12} />
        </Row>
      </Container>
    </Wrapper>
  );
}

export default MainSearch;
