/*
 * Sign Up Page
 */
import React from 'react';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { Button, FormGroup, Label, Input, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import messages from './messages';

export default function SignupPage() {
  return (
    <div className="registration_page">
      <Helmet>
        <title>- Sign Up</title>
        <meta name="description" content="FinLit - Sign up Page" />
      </Helmet>
      <div className="form_container">
        <div className="form_content">
          <h2>
            <FormattedMessage {...messages.CreateAnAccount} />
          </h2>
          <div className="form">
            <FormGroup>
              <Label for="email">
                <FormattedMessage {...messages.EmailAddress} />
              </Label>
              <Input
                type="email"
                name="email"
                id="email"
                placeholder="Your email"
              />
            </FormGroup>
            <Row>
              <Col lg={6} md={6} sm={12}>
                <FormGroup>
                  <Label for="select">
                    <FormattedMessage {...messages.SelectType} />
                  </Label>
                  <Input type="select" name="select" id="select">
                    <option>Type 1</option>
                    <option>Type 2</option>
                    <option>Type 3</option>
                    <option>Type 4</option>
                    <option>Type 5</option>
                  </Input>
                </FormGroup>
              </Col>
              <Col lg={6} md={6} sm={12}>
                <FormGroup>
                  <Label for="name">
                    <FormattedMessage {...messages.YourName} />
                  </Label>
                  <Input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Enter name"
                  />
                </FormGroup>
              </Col>
            </Row>
            <FormGroup>
              <Label for="password">
                <FormattedMessage {...messages.CreatePassword} />
              </Label>
              <Input
                type="password"
                name="createpassword"
                id="createpassword"
                placeholder="******"
              />
            </FormGroup>
            <FormGroup>
              <Label for="password">
                <FormattedMessage {...messages.ConfirmPassword} />
              </Label>
              <Input
                type="password"
                name="confirmpassword"
                id="confirmpassword"
                placeholder="******"
              />
            </FormGroup>
            <Button>
              <FormattedMessage {...messages.SignUp} />
            </Button>
            <div className="reg_footer">
              <p>
                <FormattedMessage {...messages.AlreadyHaveAccount} />
                &nbsp;
                <Link to="/login">
                  <FormattedMessage {...messages.Login} />
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="img_container" />
    </div>
  );
}
