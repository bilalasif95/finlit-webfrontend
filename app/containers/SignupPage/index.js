/*
 * Sign Up Page
 */
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { Button, FormGroup, Label, Input, Row, Col } from 'reactstrap';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import InputBase from '@material-ui/core/InputBase';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import messages from './messages';
import { API } from '../../config/config';

const BootstrapInput = withStyles(theme => ({
  root: {
    'label + &': {
      marginTop: 0,
    },
  },
  input: {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #e6e6e6',
    fontSize: 14,
    color: '#484848',
    padding: '10px 26px 10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Lato font.
    fontFamily: ['Lato', 'sans-serif'].join(','),
    '&:focus': {
      borderRadius: 4,
    },
  },
}))(InputBase);

export default function SignupPage() {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [roleId, setRoleId] = useState('1');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [gender, setGender] = useState('Male');
  const [country, setCountry] = useState('USA');
  const [profession, setProfession] = useState('Software Developer');
  const [address, setAddress] = useState('');
  const [instructorDiv, setInstructorDiv] = useState(false);
  const [error, setError] = useState('');
  const [btnClick, setBtnClick] = useState(false);

  const signup = () => {
    setError('');
    if (!/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}/.test(email)) {
      setError('Please enter valid email');
      return;
    }
    if (
      !/(?=.*\d)(?=.*\W+)(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/.test(password) ||
      (!password.length >= 8 && !password.length <= 12)
    ) {
      setError(
        'Password must contains one special character or capital letter and length should be in between 8 to 12 characters.',
      );
      return;
    }
    if (password !== passwordConfirmation) {
      setError('**Password are not matching');
    } else {
      setBtnClick(true);
      axios
        .post(`${API}api/auth/register`, {
          email,
          firstName,
          lastName,
          roleId,
          password,
          passwordConfirmation,
          gender,
          country,
          profession,
          address,
        })
        .then(result => {
          setBtnClick(false);
          toast.success(
            result.data && result.data.message
              ? result.data.message
              : 'Message Not Readable',
          );
        })
        .catch(err => {
          setBtnClick(false);
          toast.error(
            err.response && err.response.data.message
              ? err.response.data.message.toString()
              : 'Message Not Readable',
          );
        });
    }
  };

  return (
    <>
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
                  <FormControl fullWidth>
                    <Label>
                      <FormattedMessage {...messages.SelectType} />
                    </Label>
                    <Select
                      value={roleId}
                      onChange={e => {
                        setRoleId(e.target.value);
                        if (e.target.value === 3) {
                          setInstructorDiv(true);
                        } else {
                          setInstructorDiv(false);
                        }
                      }}
                      input={<BootstrapInput />}
                      fullWidth
                      MenuProps={{
                        anchorOrigin: {
                          vertical: 'bottom',
                          horizontal: 'left',
                        },
                        getContentAnchorEl: null,
                      }}
                    >
                      <MenuItem value={1}>Student</MenuItem>
                      <MenuItem value={3}>Educator</MenuItem>
                    </Select>
                  </FormControl>
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
              <FormGroup className="form_err">
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
              {instructorDiv === true ? (
                <>
                  <FormGroup>
                    <FormControl fullWidth>
                      <Label>
                        <FormattedMessage {...messages.SelectCountry} />
                      </Label>
                      <Select
                        value={country}
                        onChange={e => setCountry(e.target.value)}
                        input={<BootstrapInput />}
                        fullWidth
                        MenuProps={{
                          anchorOrigin: {
                            vertical: 'bottom',
                            horizontal: 'left',
                          },
                          getContentAnchorEl: null,
                        }}
                      >
                        <MenuItem value="USA">USA</MenuItem>
                        <MenuItem value="KSA">KSA</MenuItem>
                      </Select>
                    </FormControl>
                  </FormGroup>
                  <FormGroup>
                    <Label>
                      <FormattedMessage {...messages.Address} />
                    </Label>
                    <Input
                      type="text"
                      name="address"
                      id="address"
                      placeholder="Address"
                      onChange={e => {
                        setAddress(e.target.value);
                      }}
                    />
                  </FormGroup>
                  <FormGroup>
                    <FormControl fullWidth>
                      <Label>
                        <FormattedMessage {...messages.SelectGender} />
                      </Label>
                      <Select
                        value={gender}
                        onChange={e => setGender(e.target.value)}
                        input={<BootstrapInput />}
                        fullWidth
                        MenuProps={{
                          anchorOrigin: {
                            vertical: 'bottom',
                            horizontal: 'left',
                          },
                          getContentAnchorEl: null,
                        }}
                      >
                        <MenuItem value="Male">Male</MenuItem>
                        <MenuItem value="Female">Female</MenuItem>
                      </Select>
                    </FormControl>
                  </FormGroup>
                  <FormGroup>
                    <FormControl fullWidth>
                      <Label>
                        <FormattedMessage {...messages.SelectProfession} />
                      </Label>
                      <Select
                        value={profession}
                        onChange={e => setProfession(e.target.value)}
                        input={<BootstrapInput />}
                        fullWidth
                        MenuProps={{
                          anchorOrigin: {
                            vertical: 'bottom',
                            horizontal: 'left',
                          },
                          getContentAnchorEl: null,
                        }}
                      >
                        <MenuItem value="Financial Literacy">
                          <FormattedMessage {...messages.FinancialLiteracy} />
                        </MenuItem>
                        <MenuItem value="Software Developer">
                          <FormattedMessage {...messages.SoftwareDeveloper} />
                        </MenuItem>
                        <MenuItem value="Medical and Health Services">
                          <FormattedMessage
                            {...messages.MedicalHealthServices}
                          />
                        </MenuItem>
                        <MenuItem value="Statistician">
                          <FormattedMessage {...messages.Statistician} />
                        </MenuItem>
                        <MenuItem value="Speech-Language">
                          <FormattedMessage {...messages.SpeechLanguage} />
                        </MenuItem>
                        <MenuItem value="Data Scientist">
                          <FormattedMessage {...messages.DataScientist} />
                        </MenuItem>
                      </Select>
                    </FormControl>
                  </FormGroup>
                </>
              ) : null}
              <div className="error-box">
                {error && <p className="error">{error}</p>}
              </div>
              <Button onClick={signup} disabled={btnClick}>
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
      <ToastContainer />
    </>
  );
}
