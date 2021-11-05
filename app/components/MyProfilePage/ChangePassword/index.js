/*
 * Change Password Component
 */
import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import {
  FormGroup,
  Label,
  Row,
  Col,
  Button,
  Input,
  FormText,
  // FormText,
} from 'reactstrap';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import Select from '@material-ui/core/Select';
// import MenuItem from '@material-ui/core/MenuItem';
// import FormControl from '@material-ui/core/FormControl';
// import InputBase from '@material-ui/core/InputBase';
// import { withStyles } from '@material-ui/core/styles';
// import Switch from '@material-ui/core/Switch';
// import { BsPencil } from 'react-icons/bs';
// import { FaCheckCircle } from 'react-icons/fa';
import axios from 'axios';
// import QRCode from 'qrcode.react';
// import { FiCamera } from 'react-icons/fi';
import messages from './messages';
import Wrapper from './Wrapper';
import { API } from '../../../config/config';

function ChangePassword() {
  const [changePassword, setChangePassword] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });
  const [errors, setErrors] = useState({});
  const [loader, setLoader] = useState(false);
  const [disableBtn, setDisableBtn] = useState(false);
  const passwordValidator = values => {
    const error = {};
    if (!values.currentPassword) {
      error.currentPassword = 'Current Password Is required';
    } else if (!values.newPassword) {
      error.newPassword = 'New Password Is required';
    } else if (!values.confirmPassword) {
      error.confirmPassword = 'Password Confirmation Is required';
    }
    if (
      values.confirmPassword &&
      values.newPassword !== values.confirmPassword
    ) {
      error.passwordMatching =
        'New Password and Confirm Password Does Not Match';
    }
    if (
      values.confirmPassword &&
      values.newPassword === values.confirmPassword
    ) {
      if (
        !/(?=.*\d)(?=.*\W+)(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/.test(
          values.newPassword,
        ) ||
        (!values.newPassword.length >= 8 && !values.newPassword.length <= 15)
      ) {
        error.weakPassword =
          'New Password must contains one special character or capital letter and length should be in between 8 to 15 characters.';
      }
    }
    return error;
  };
  const cancelOperation = () => {
    setChangePassword({
      currentPassword: '',
      newPassword: '',
      confirmPassword: '',
    });
  };
  const handleChangePasswordSave = () => {
    if (Object.keys(passwordValidator(changePassword)).length > 0) {
      setErrors(passwordValidator(changePassword));
      setTimeout(() => {
        setErrors({});
      }, 4000);
    } else {
      const token = localStorage.getItem('token');
      const authHeaders = token ? { Authorization: `Bearer ${token}` } : {};
      const { currentPassword, newPassword } = changePassword;
      const postData = {
        currentPassword,
        password: newPassword,
      };
      setLoader(true);
      setDisableBtn(true);
      axios
        .post(`${API}api/auth/changePassword`, postData, {
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            ...authHeaders,
          },
        })
        .then(res => {
          setLoader(false);
          setChangePassword({
            currentPassword: '',
            newPassword: '',
            confirmPassword: '',
          });
          toast.success(
            res && res.data ? res.data.message : 'Message Not Readable',
          );
          setTimeout(() => {
            setDisableBtn(false);
          }, 5000);
        })
        .catch(err => {
          setLoader(false);
          toast.error(
            err.response && err.response.data.message
              ? err.response.data.message.toString()
              : 'Message Not Readable',
          );
          setTimeout(() => {
            setDisableBtn(false);
          }, 5000);
        });
    }
  };
  return (
    <Wrapper>
      <div className="basic_info">
        <Row>
          <Col lg={6} md={6} sm={6} xs={12}>
            <FormGroup>
              <Label for="password">
                <FormattedMessage {...messages.YourCurrentPassword} />
              </Label>
              <Input
                type="password"
                name="currentPassword"
                id="password"
                placeholder="**********"
                value={changePassword.currentPassword}
                onChange={e => {
                  setChangePassword({
                    ...changePassword,
                    [e.target.name]: e.target.value,
                  });
                }}
              />
              <FormText className="form-text">
                {errors.currentPassword ? (
                  <p className="error">{errors.currentPassword}</p>
                ) : (
                  ''
                )}
              </FormText>
            </FormGroup>
          </Col>
          </Row>
          <Row>
          <Col lg={6} md={6} sm={6} xs={12}>
            <FormGroup>
              <Label for="password">
                <FormattedMessage {...messages.NewPassword} />
              </Label>
              <Input
                type="password"
                name="newPassword"
                id="password"
                placeholder="**********"
                value={changePassword.newPassword}
                onChange={e => {
                  setChangePassword({
                    ...changePassword,
                    [e.target.name]: e.target.value,
                  });
                }}
              />
              <FormText className="form-text">
                {errors.newPassword ? (
                  <p className="error">{errors.newPassword}</p>
                ) : (
                  ''
                )}
              </FormText>
            </FormGroup>
          </Col>
          <Col lg={6} md={6} sm={6} xs={12}>
            <FormGroup>
              <Label for="password">
                <FormattedMessage {...messages.ConfirmPassword} />
              </Label>
              <Input
                type="password"
                name="confirmPassword"
                id="password"
                placeholder="**********"
                value={changePassword.confirmPassword}
                onChange={e => {
                  setChangePassword({
                    ...changePassword,
                    [e.target.name]: e.target.value,
                  });
                }}
              />
              <FormText className="form-text">
                {errors.confirmPassword ? (
                  <p className="error">{errors.confirmPassword}</p>
                ) : (
                  ''
                )}
                {errors.passwordMatching ? (
                  <p className="error">{errors.passwordMatching}</p>
                ) : (
                  ''
                )}
                {errors.weakPassword ? (
                  <p className="error">{errors.weakPassword}</p>
                ) : (
                  ''
                )}
              </FormText>
            </FormGroup>
          </Col>
        </Row>
        <div className="form_footer">
          <div className="bottom_btns">
            <Button
              className="btn_submit"
              disabled={disableBtn}
              onClick={handleChangePasswordSave}
            >
              {loader ? 'Loading' : <FormattedMessage {...messages.Save} />}
            </Button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default ChangePassword;
