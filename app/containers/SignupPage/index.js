/*
 * Sign Up Page
 */
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import {
  Button,
  FormGroup,
  Label,
  Input,
  Row,
  Col,
  InputGroup,
  InputGroupAddon,
} from 'reactstrap';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import InputBase from '@material-ui/core/InputBase';
import { withStyles } from '@material-ui/core/styles';
import { BsEyeFill } from 'react-icons/bs';
// BsEyeSlashFill
import { Link } from 'react-router-dom';
import axios from 'axios';
import './app.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import messages from './messages';
import { API } from '../../config/config';
import Logo from '../../images/logo.svg';
import instructorImg from '../../images/instructorImg.png';
import studentImg from '../../images/studentImg.png';
import Img from '../../components/Img';

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
  // const [firstName, setFirstName] = useState('');
  // const [lastName, setLastName] = useState('');
  const [roleId, setRoleId] = useState(1);
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  // const [gender, setGender] = useState('Male');
  // const [country, setCountry] = useState('PAK');
  const [profession, setProfession] = useState('Software Developer');
  // const [address, setAddress] = useState('');
  const [instructorDiv, setInstructorDiv] = useState(true);
  const [error, setError] = useState({ type: '', error: '' });
  const [btnClick, setBtnClick] = useState(false);

  const signup = () => {
    setError({ type: '', error: '' });
    if (!email) {
      setError({ type: 'email', error: 'Email is required' });
    } else if (!/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}/.test(email)) {
      setError({ type: 'email', error: 'Please enter valid email' });
    }
    // else if (
    //   !/^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/.test(firstName)
    // ) {
    //   setError({ type: 'FirstName', error: 'First Name is not valid' });
    // } else if (firstName.length > 255) {
    //   setError({
    //     type: 'FirstName',
    //     error: 'First Name should be of less than 255 characters',
    //   });
    // } else if (
    //   !/^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/.test(lastName)
    // ) {
    //   setError({ type: 'LastName', error: 'Last Name is not valid' });
    // } else if (lastName.length > 255) {
    //   setError({
    //     type: 'LastName',
    //     error: 'Last Name should be of less than 255 characters',
    //   });
    // }
    else if (
      !/(?=.*\d)(?=.*\W+)(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/.test(password) ||
      (!password.length >= 8 && !password.length <= 15)
    ) {
      setError({
        type: 'password',
        error:
          'Password must contains one special character or capital letter and length should be in between 8 to 15 characters.',
      });
    } else if (password !== passwordConfirmation) {
      setError({ type: 'passwordconfirm', error: '**Password does not match' });
    } else {
      setBtnClick(true);
      axios
        .post(`${API}api/auth/register`, {
          email,
          // firstName,
          firstName: 'firstName',
          lastName: 'lastname',
          // lastName,
          roleId,
          password,
          passwordConfirmation,
          gender: 'male',
          // gender,
          country: 'country',
          profession,
          // address,
        })
        .then(result => {
          toast.success(
            result.data && result.data.message
              ? result.data.message
              : 'Message Not Readable',
          );
          setTimeout(() => {
            setBtnClick(false);
          }, 5000);
        })
        .catch(err => {
          toast.error(
            err.response && err.response.data.message
              ? err.response.data.message.toString()
              : 'Message Not Readable',
          );
          setTimeout(() => {
            setBtnClick(false);
          }, 5000);
        });
    }
    // else if (instructorDiv && address !== '' && address.length > 255) {
    //   setError({ type: 'address', error: 'Address should be or less than 255 characters' });
    // }
    setTimeout(() => {
      setError({ type: '', error: '' });
    }, 5000);
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
            <Link to="/dashboard">
              <img
                src={Logo}
                alt="FinLit"
                className="logo"
                height="100%"
                width="100%"
              />
            </Link>
            <h2>
              <FormattedMessage {...messages.CreateAnAccount} />
            </h2>
            <div className="form">
              {/* <Col lg={6} md={6} sm={12}>
                  <FormGroup>
                    <Label for="name">
                      <FormattedMessage {...messages.FName} /> {'*'}
                    </Label>
                    <Input
                      type="text"
                      name="name"
                      id="name"
                      onChange={e => setFirstName(e.target.value)}
                      placeholder="First name"
                    />
                    <p className="error">
                      {' '}
                      {error.type === 'FirstName' ? error.error : ''}
                    </p>
                  </FormGroup>
                </Col>
                <Col lg={6} md={6} sm={12}>
                  <FormGroup>
                    <Label for="name">
                      <FormattedMessage {...messages.LName} /> {'*'}
                    </Label>
                    <Input
                      type="text"
                      name="name"
                      id="name"
                      onChange={e => setLastName(e.target.value)}
                      placeholder="Last name"
                    />
                    <p className="error">
                      {' '}
                      {error.type === 'LastName' ? error.error : ''}
                    </p>
                  </FormGroup>
                </Col> */}
              {instructorDiv ? (
                <Row>
                  <Col lg={6} md={6} sm={12}>
                    <FormGroup>
                      <FormControl fullWidth>
                        <Label>
                          <FormattedMessage {...messages.SelectType} /> {'*'}
                        </Label>
                        <Select
                          value={roleId}
                          onChange={e => {
                            setRoleId(e.target.value);
                            if (e.target.value === 1) {
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
                          <MenuItem value={1}>Educator</MenuItem>
                          <MenuItem value={2}>Student</MenuItem>
                        </Select>
                      </FormControl>
                    </FormGroup>
                  </Col>
                  <Col lg={6} md={6} sm={12}>
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
                  </Col>
                </Row>
              ) : (
                <Row>
                  <Col lg={12} md={12} sm={12}>
                    <FormGroup>
                      <FormControl fullWidth>
                        <Label>
                          <FormattedMessage {...messages.SelectType} /> {'*'}
                        </Label>
                        <Select
                          value={roleId}
                          onChange={e => {
                            setRoleId(e.target.value);
                            if (e.target.value === 2) {
                              setInstructorDiv(false);
                            } else {
                              setInstructorDiv(true);
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
                          <MenuItem value={1}>Educator</MenuItem>
                          <MenuItem value={2}>Student</MenuItem>
                        </Select>
                      </FormControl>
                    </FormGroup>
                  </Col>
                </Row>
              )}
              <Row>
                {/* <Col lg={12} md={12} sm={12}>
                  <FormGroup>
                    <FormControl fullWidth>
                      <Label>
                        <FormattedMessage {...messages.SelectType} /> {'*'}
                      </Label>
                      <Select
                        value={roleId}
                        onChange={e => {
                          setRoleId(e.target.value);
                          if (e.target.value === 2) {
                            setInstructorDiv(false);
                          } else {
                            setInstructorDiv(true);
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
                        <MenuItem value={1}>Educator</MenuItem>
                        <MenuItem value={2}>Student</MenuItem>
                      </Select>
                    </FormControl>
                  </FormGroup>
                </Col> */}
                <Col lg={12} md={12} sm={12}>
                  <FormGroup>
                    <Label for="email">
                      <FormattedMessage {...messages.EmailAddress} /> {'*'}
                    </Label>
                    <Input
                      type="email"
                      name="email"
                      id="email"
                      onChange={e => setEmail(e.target.value)}
                      placeholder="Your email"
                    />
                    <p className="error">
                      {' '}
                      {error.type === 'email' ? error.error : ''}
                    </p>
                  </FormGroup>
                </Col>
                <Col lg={6} md={6} sm={12}>
                  <FormGroup>
                    <Label for="password">
                      <FormattedMessage {...messages.CreatePassword} /> {'*'}
                    </Label>
                    <InputGroup>
                      <Input
                        type="password"
                        name="createpassword"
                        id="createpassword"
                        onChange={e => setPassword(e.target.value)}
                        placeholder="******"
                      />
                      <InputGroupAddon addonType="append">
                        <Button className="btn_eye">
                          <BsEyeFill />
                        </Button>
                        {/* <BsEyeSlashFill /> */}
                      </InputGroupAddon>
                    </InputGroup>
                    {/* <Input
                      type="password"
                      name="createpassword"
                      id="createpassword"
                      onChange={e => setPassword(e.target.value)}
                      placeholder="******"
                    /> */}
                    <p className="error">
                      {' '}
                      {error.type === 'password' ? error.error : ''}
                    </p>
                  </FormGroup>
                </Col>
                <Col lg={6} md={6} sm={12}>
                  <FormGroup className="form_err">
                    <Label for="password">
                      <FormattedMessage {...messages.ConfirmPassword} /> {'*'}
                    </Label>
                    <InputGroup>
                      <Input
                        type="password"
                        name="confirmpassword"
                        id="confirmpassword"
                        onChange={e => setPasswordConfirmation(e.target.value)}
                        placeholder="******"
                      />
                      <InputGroupAddon addonType="append">
                        <Button className="btn_eye">
                          <BsEyeFill />
                        </Button>
                        {/* <BsEyeSlashFill /> */}
                      </InputGroupAddon>
                    </InputGroup>
                    {/* <Input
                      type="password"
                      name="confirmpassword"
                      id="confirmpassword"
                      onChange={e => setPasswordConfirmation(e.target.value)}
                      placeholder="******"
                    /> */}
                    <p className="error">
                      {' '}
                      {error.type === 'passwordconfirm' ? error.error : ''}
                    </p>
                  </FormGroup>
                </Col>
              </Row>
              {/* {instructorDiv === true ? (
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
                        <MenuItem value="PAK">PAK</MenuItem>
                        <MenuItem value="KSA">KSA</MenuItem>
                        <MenuItem value="KR">KR</MenuItem>
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
                    <p className="error">
                      {' '}
                      {error.type === 'address' ? error.error : ''}
                    </p>
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

                </>
              ) : null} */}
              {/* <div className="error-box">
                {error && <p className="error">{error}</p>}
              </div> */}
              <Button onClick={signup} disabled={btnClick}>
                <FormattedMessage {...messages.SignUp} />
              </Button>
              <div className="reg_footer">
                <p>
                  <FormattedMessage {...messages.AlreadyHaveAccount} />
                  &nbsp; &nbsp;
                  <Link to="/login">
                    <FormattedMessage {...messages.Login} />
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="img_container">
          {instructorDiv ? (
            <Img src={instructorImg} alt="instrutor" height="100%" width="100%" />
          ) : (
            <Img src={studentImg} alt="instrutor" height="100%" width="100%" />
          )}
        </div>
      </div>
      <ToastContainer />
    </>
  );
}
