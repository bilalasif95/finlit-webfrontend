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
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import InputBase from '@material-ui/core/InputBase';
import { withStyles } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';
import { BsPencil } from 'react-icons/bs';
import { FaCheckCircle } from 'react-icons/fa';
import axios from 'axios';
import QRCode from 'qrcode.react';
import { FiCamera } from 'react-icons/fi';
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
    border: '1px solid #e6e6e6',
    fontSize: 14,
    color: '#484848',
    padding: '0.95rem 1.5rem 0.95rem 1rem',
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
    description: '',
    country: '',
    gender: '',
    address: '',
  });
  const [errors, setErrors] = useState({});
  const updateProfileValidator = values => {
    const error = {};
    if (!values.firstName) {
      error.firstName = 'First Name Is required';
    } else if (!values.lastName) {
      error.lastName = 'Last Name Is required';
    } else if (!values.gender) {
      error.gender = 'Gender is Required';
    } else if (!values.description) {
      error.description = 'About me description is required';
    }
    return error;
  };
  const getCurrentUserInfo = () => {
    const token = localStorage.getItem('token');
    const userId = JSON.parse(localStorage.getItem('userInfo'));
    const authHeaders = token ? { Authorization: `Bearer ${token}` } : {};
    axios
      .get(`${API}api/user/${userId.id}`, {
        headers: {
          Accept: 'application/json',
          ...authHeaders,
        },
      })
      .then(res => {
        setUserInfo({
          firstName: res.data.firstName,
          lastName: res.data.lastName,
          description: res.data.description,
          country: res.data.country,
          address: res.data.address,
          profession: res.data.profession,
          email: res.data.email,
          gender: res.data.gender,
        });
      })
      .catch(err => {
        toast.error(
          err.response && err.response.data.message
            ? err.response.data.message.toString()
            : 'Message Not Readable',
        );
      });
  };
  const handleUpdateProfileSave = () => {
    if (Object.keys(updateProfileValidator(userInfo)).length > 0) {
      setErrors(updateProfileValidator(userInfo));
      setTimeout(() => {
        setErrors({});
      }, 4000);
    } else {
      const token = localStorage.getItem('token');
      const authHeaders = token ? { Authorization: `Bearer ${token}` } : {};
      const bodyFormData = new FormData();
      bodyFormData.append('firstName', userInfo.firstName);
      bodyFormData.append('lastName', userInfo.lastName);
      bodyFormData.append('gender', userInfo.gender);
      bodyFormData.append('profileImage', {});
      bodyFormData.append('description', userInfo.description);
      bodyFormData.append('profession', userInfo.profession);
      bodyFormData.append('country', userInfo.country);
      bodyFormData.append('address', userInfo.address);
      axios
        .put(`${API}api/user`, bodyFormData, {
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            ...authHeaders,
          },
        })
        .then(res => {
          toast.success(
            res && res.data ? res.data.message : 'Message Not Readable',
          );
          getCurrentUserInfo();
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
  useEffect(() => {
    getCurrentUserInfo();
  }, []);
  return (
    <Wrapper>
      <div className="basic_info">
        <h4>
          <FormattedMessage {...messages.BasicInfo} />
        </h4>
        <Row>
          <Col lg={6} md={6} sm={6} xs={12}>
            <FormGroup>
              <Label for="fname">
                <FormattedMessage {...messages.Fname} />
              </Label>
              <Input
                type="text"
                name="firstName"
                id="fname"
                placeholder="Enter first name"
                defaultValue={userInfo.firstName}
                onChange={e => {
                  setUserInfo({
                    ...userInfo,
                    [e.target.name]: e.target.value,
                  });
                }}
              />
              <FormText className="form-text">
                {errors.firstName ? <p className="error">{errors.firstName}</p> : ''}
              </FormText>
            </FormGroup>
          </Col>
          <Col lg={6} md={6} sm={6} xs={12}>
            <FormGroup>
              <Label for="lname">
                <FormattedMessage {...messages.Lname} />
              </Label>
              <Input
                type="text"
                name="lastName"
                id="lname"
                placeholder="Enter last name"
                defaultValue={userInfo.lastName}
                onChange={e => {
                  setUserInfo({
                    ...userInfo,
                    [e.target.name]: e.target.value,
                  });
                }}
              />
              <FormText className="form-text">
                {errors.lastName ? <p className="error">{errors.lastName}</p> : ''}
              </FormText>
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
                  <FormattedMessage {...messages.Profession} />
                </Label>
                <Select
                  value={userInfo.profession}
                  onChange={e => {
                    setUserInfo({
                      ...userInfo,
                      [e.target.name]: e.target.value,
                    });
                  }}
                  input={<BootstrapInput />}
                  fullWidth
                  name="profession"
                  MenuProps={{
                    anchorOrigin: {
                      vertical: 'bottom',
                      horizontal: 'left',
                    },
                    getContentAnchorEl: null,
                  }}
                >
                  <MenuItem value="Financial Literacy">
                    Financial Literacy
                  </MenuItem>
                  <MenuItem value="Accountant">Accountant</MenuItem>
                  <MenuItem value="Speech-Language">Speech-Language</MenuItem>
                  <MenuItem value="Software Developer">
                    Software Developer
                  </MenuItem>
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
                  <MenuItem value="USA">USA</MenuItem>
                  <MenuItem value="KSA">KSA</MenuItem>
                  <MenuItem value="KRA">KRA</MenuItem>
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
                defaultValue={userInfo.address}
                onChange={e => {
                  setUserInfo({
                    ...userInfo,
                    [e.target.name]: e.target.value,
                  });
                }}
              />
            </FormGroup>
          </Col>
          <Col lg={6} md={6} sm={6} xs={12}>
            <FormGroup>
              <Label for="email">
                <FormattedMessage {...messages.Email} />
              </Label>
              <Input
                type="email"
                name="email"
                id="email"
                placeholder="Enter email"
                defaultValue={userInfo.email}
                readOnly
              />
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
                placeholder="Enter description about yourself"
                value={userInfo.description}
                onChange={e => {
                  setUserInfo({
                    ...userInfo,
                    [e.target.name]: e.target.value,
                  });
                }}
              />
              <FormText className="form-text">
                {errors.description ? <p className="error">{errors.description}</p> : ''}
              </FormText>
            </FormGroup>
          </Col>
        </Row>
        <div className="form_footer">
          <div className="bottom_btns">
            <Button className="btn_cancel">
              <FormattedMessage {...messages.Cancel} />
            </Button>
            <Button className="btn_submit" onClick={handleUpdateProfileSave}>
              <FormattedMessage {...messages.Save} />
            </Button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default BasicInfo;
