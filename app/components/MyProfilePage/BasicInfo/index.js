/*
 * Basic Info Component
 */
import React, { useEffect, useState } from 'react';
import { FormattedMessage } from 'react-intl';
import {
  FormGroup,
  Label,
  Row,
  Col,
  Button,
  Input,
  FormText,
} from 'reactstrap';
// ToastContainer,
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import InputBase from '@material-ui/core/InputBase';
import { withStyles } from '@material-ui/core/styles';
// import Switch from '@material-ui/core/Switch';
// import { BsPencil } from 'react-icons/bs';
// import { FaCheckCircle } from 'react-icons/fa';
import axios from 'axios';
// import QRCode from 'qrcode.react';
// import { FiCamera } from 'react-icons/fi';
import messages from './messages';
import Wrapper from './Wrapper';
import { API } from '../../../config/config';

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
    border: '1px solid #d8d8d8',
    fontSize: 14,
    color: '#484848',
    padding: '0.82rem 1.5rem 0.82rem 1rem',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Lato font.
    fontFamily: ['Lato', 'sans-serif'].join(','),
    '&:focus': {
      borderRadius: 4,
    },
  },
}))(InputBase);

function BasicInfo() {
  const [userInfo, setUserInfo] = useState({
    firstName: '',
    lastName: '',
    profession: '',
    email: '',
    roles: [],
    description: '',
    country: 'PAK',
    gender: 'Male',
    address: '',
  });
  const [errors, setErrors] = useState({});
  // const [loader, setLoader] = useState(false);
  const [disableBtn, setDisableBtn] = useState(false);
  const updateProfileValidator = values => {
    const error = {};
    if (!values.firstName) {
      error.firstName = 'First Name is required';
    } else if (!values.lastName) {
      error.lastName = 'Last Name is required';
    }
    return error;
  };
  const getCurrentUserInfo = () => {
    const token = localStorage.getItem('token');
    const userId = JSON.parse(localStorage.getItem('userInfo'));
    const authHeaders = token ? { Authorization: `Bearer ${token}` } : {};
    if (token) {
      axios
        .get(`${API}api/user/${userId && userId.id}`, {
          headers: {
            Accept: 'application/json',
            ...authHeaders,
          },
        })
        .then(res => {
          setUserInfo({
            firstName: res.data.data.firstName,
            lastName: res.data.data.lastName,
            description: res.data.data.description,
            country: res.data.data.country ? res.data.data.country : 'PAK',
            address: res.data.data.address,
            roles: res.data.data.roles,
            profession: res.data.data.profession,
            email: res.data.data.email,
            gender: res.data.data.gender ? res.data.data.gender : 'Male',
          });
        })
        .catch(err => {
          toast.error(
            err.response && err.response.data.message
              ? err.response.data.message.toString()
              : 'Message Not Readable',
          );
        });
    }
  };
  const handleUpdateProfileSave = () => {
    if (Object.keys(updateProfileValidator(userInfo)).length > 0) {
      setErrors(updateProfileValidator(userInfo));
      setTimeout(() => {
        setErrors({});
      }, 4000);
    } else {
      // setLoader(true);
      setDisableBtn(true);
      const token = localStorage.getItem('token');
      const authHeaders = token ? { Authorization: `Bearer ${token}` } : {};
      const bodyFormData = {
        firstName: userInfo.firstName,
        lastName: userInfo.lastName,
        gender: userInfo.gender,
        description: userInfo.description,
        country: userInfo.country,
        address: userInfo.address,
      };
      axios
        .put(`${API}api/user`, bodyFormData, {
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            ...authHeaders,
          },
        })
        .then(res => {
          // setLoader(false);
          toast.success(
            res && res.data ? res.data.message : 'Message Not Readable',
          );
          // setUserInfo({
          //   firstName: '',
          //   lastName: '',
          //   description: '',
          //   country: 'PAK',
          //   roles: [],
          //   address: '',
          //   profession: '',
          //   email: '',
          //   gender: 'Male',
          // });
          setTimeout(() => {
            setDisableBtn(false);
            getCurrentUserInfo();
          }, 3000);
        })
        .catch(err => {
          // setLoader(false);
          toast.error(
            err.response && err.response.data.message
              ? err.response.data.message.toString()
              : 'Message Not Readable',
          );
          setTimeout(() => {
            setDisableBtn(false);
          }, 3000);
        });
    }
  };
  useEffect(() => {
    setErrors({});
    getCurrentUserInfo();
  }, []);
  return (
    <Wrapper>
      <div className="basic_info">
        <Row>
          <Col lg={6} md={6} sm={6} xs={12}>
            <FormGroup>
              <Label for="firstName">
                <FormattedMessage {...messages.Fname} />
              </Label>
              <Input
                type="text"
                name="firstName"
                id="firstName"
                placeholder="Enter first name"
                value={userInfo.firstName}
                onChange={e => {
                  setUserInfo({
                    ...userInfo,
                    [e.target.name]: e.target.value,
                  });
                }}
              />
              <FormText className="form-text">
                {errors.firstName ? (
                  <p className="error">{errors.firstName}</p>
                ) : (
                  ''
                )}
              </FormText>
            </FormGroup>
          </Col>
          <Col lg={6} md={6} sm={6} xs={12}>
            <FormGroup>
              <Label for="lastName">
                <FormattedMessage {...messages.Lname} />
              </Label>
              <Input
                type="text"
                name="lastName"
                id="lastName"
                placeholder="Enter last name"
                value={userInfo.lastName}
                onChange={e => {
                  setUserInfo({
                    ...userInfo,
                    [e.target.name]: e.target.value,
                  });
                }}
              />
              <FormText className="form-text">
                {errors.lastName ? (
                  <p className="error">{errors.lastName}</p>
                ) : (
                  ''
                )}
              </FormText>
            </FormGroup>
          </Col>
          <Col lg={6} md={6} sm={6} xs={12}>
            <FormGroup>
              <Label for="userType">
                <FormattedMessage {...messages.Type} />
              </Label>
              <Input
                type="text"
                id="userType"
                readOnly
                value={userInfo.roles.map((res) => res.roleName)}
              />
              <FormText className="form-text">
                {errors.userType ? (
                  <p className="error">{errors.userType}</p>
                ) : (
                  ''
                )}
              </FormText>
            </FormGroup>
          </Col>
          <Col lg={6} md={6} sm={6} xs={12}>
            <FormGroup>
              <Label for="email">
                <FormattedMessage {...messages.Email} />
              </Label>
              <Input
                type="text"
                name="email"
                id="email"
                readOnly
                value={userInfo.email}
                onChange={e => {
                  setUserInfo({
                    ...userInfo,
                    [e.target.name]: e.target.value,
                  });
                }}
              />
              <FormText className="form-text">
                {errors.email ? (
                  <p className="error">{errors.email}</p>
                ) : (
                  ''
                )}
              </FormText>
            </FormGroup>
          </Col>
          <Col lg={6} md={6} sm={6} xs={12}>
            <FormGroup>
              <FormControl fullWidth>
                <Label for="profession">
                  <FormattedMessage {...messages.Profession} />
                </Label>
                <Input
                  type="text"
                  name="profession"
                  id="profession"
                  readOnly
                  value={userInfo.profession}
                  onChange={e => {
                    setUserInfo({
                      ...userInfo,
                      [e.target.name]: e.target.value,
                    });
                  }}
                />
                <FormText className="form-text">
                  {errors.profession ? (
                    <p className="error">{errors.profession}</p>
                  ) : (
                    ''
                  )}
                </FormText>
              </FormControl>
            </FormGroup>
          </Col>
          <Col lg={6} md={6} sm={6} xs={12}>
            <FormGroup>
              <FormControl fullWidth>
                <Label>
                  <FormattedMessage {...messages.Gender} />
                </Label>
                <Select
                  value={userInfo.gender}
                  onChange={e => {
                    setUserInfo({
                      ...userInfo,
                      [e.target.name]: e.target.value,
                    });
                  }}
                  name="gender"
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
                  <MenuItem value="Other">Other</MenuItem>
                </Select>
              </FormControl>
            </FormGroup>
          </Col>
          <Col lg={6} md={6} sm={6} xs={12}>
            <FormGroup>
              <FormControl fullWidth>
                <Label>
                  <FormattedMessage {...messages.Country} />
                </Label>
                <Select
                  value={userInfo.country}
                  onChange={e => {
                    setUserInfo({
                      ...userInfo,
                      [e.target.name]: e.target.value,
                    });
                  }}
                  input={<BootstrapInput />}
                  fullWidth
                  name="country"
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
          </Col>
          <Col lg={6} md={6} sm={6} xs={12}>
            <FormGroup>
              <Label for="address">
                <FormattedMessage {...messages.Address} />
              </Label>
              <Input
                type="text"
                name="address"
                id="address"
                placeholder="Enter Address"
                value={userInfo.address}
                onChange={e => {
                  setUserInfo({
                    ...userInfo,
                    [e.target.name]: e.target.value,
                  });
                }}
              />
              <FormText className="form-text">
                {errors.address ? (
                  <p className="error">{errors.address}</p>
                ) : (
                  ''
                )}
              </FormText>
            </FormGroup>
          </Col>
          <Col lg={12} md={12} sm={12} xs={12}>
            <FormGroup>
              <Label for="description">
                <FormattedMessage {...messages.MyBiography} />
              </Label>
              <Input
                type="textarea"
                name="description"
                id="description"
                placeholder="Enter Bio"
                value={userInfo.description}
                onChange={e => {
                  setUserInfo({
                    ...userInfo,
                    [e.target.name]: e.target.value,
                  });
                }}
              />
              <FormText className="form-text">
                {errors.description ? (
                  <p className="error">{errors.description}</p>
                ) : (
                  ''
                )}
              </FormText>
            </FormGroup>
          </Col>
        </Row>
        <div className="form_footer">
          <div className="bottom_btns">
            <Button disabled={disableBtn || !userInfo.firstName || !userInfo.lastName} className="btn_submit" onClick={handleUpdateProfileSave}>
              <FormattedMessage {...messages.Save} />
            </Button>
            {/* <Button
              className="btn_submit"
              onClick={handleUpdateProfileSave}
              disabled={disableBtn}
            >
              {loader ? 'Loading' : <FormattedMessage {...messages.Save} />}
            </Button> */}
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default BasicInfo;
