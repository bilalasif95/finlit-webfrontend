/*
 * Sign Up Page
 */
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { Button, FormGroup, Label, Input, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
import messages from './messages';
import { API } from '../../config/config';

export default function SignupPage() {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [roleId, setRoleId] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [error, setError] = useState('');

  const signup = () => {
    setError('');
    if (!/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}/.test(email)) {
      setError('Please enter valid email');
    } else if (
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
        password,
      )
    ) {
      setError('Please enter valid password');
    }
    if (password !== passwordConfirmation) {
      setError('**Password are not matching');
      // setDisabled(false);
    } else {
      axios
        .post(`${API}api/auth/register`, {
          email,
          firstName,
          lastName,
          roleId,
          password,
          passwordConfirmation,
        })
        .then(() => {
          // console.log('signup', response);
        })
        .catch(err => {
          setError(err.response && err.response.data.message);
        });
    }
  };

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
                onChange={e => setEmail(e.target.value)}
                placeholder="Your email"
              />
            </FormGroup>
            <Row>
              <Col lg={6} md={6} sm={12}>
                <FormGroup>
                  <Label for="name">
                    <FormattedMessage {...messages.FName} />
                  </Label>
                  <Input
                    type="text"
                    name="name"
                    id="name"
                    onChange={e => setFirstName(e.target.value)}
                    placeholder="First name"
                  />
                </FormGroup>
              </Col>
              <Col lg={6} md={6} sm={12}>
                <FormGroup>
                  <Label for="name">
                    <FormattedMessage {...messages.LName} />
                  </Label>
                  <Input
                    type="text"
                    name="name"
                    id="name"
                    onChange={e => setLastName(e.target.value)}
                    placeholder="Last name"
                  />
                </FormGroup>
              </Col>
            </Row>
            <Col lg={12} md={12} sm={12}>
              <FormGroup>
                <Label for="select">
                  <FormattedMessage {...messages.SelectType} />
                </Label>
                <Input
                  type="select"
                  name="select"
                  id="select"
                  onChange={e => setRoleId(e.target.value)}
                >
                  <option value="student">Student</option>
                  <option value="instructor">Instructor</option>
                </Input>
              </FormGroup>
            </Col>
            <FormGroup>
              <Label for="password">
                <FormattedMessage {...messages.CreatePassword} />
              </Label>
              <Input
                type="password"
                name="createpassword"
                id="createpassword"
                onChange={e => setPassword(e.target.value)}
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
                onChange={e => setPasswordConfirmation(e.target.value)}
                placeholder="******"
              />
            </FormGroup>
            <div className="error-box">
              {error && <p className="error">{error}</p>}
            </div>
            <Button onClick={signup}>
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
