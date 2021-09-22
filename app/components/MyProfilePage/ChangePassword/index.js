/*
 * Change Password Component
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
  InputGroup,
  InputGroupAddon,
  // FormText,
} from 'reactstrap';
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

function ChangePassword() {
  return (
    <Wrapper>
      <div className="basic_info">
        <h4>
          <FormattedMessage {...messages.ChangePassword} />
        </h4>
        <Row>
          <Col lg={6} md={6} sm={6} xs={12}>
            <FormGroup>
              {/* <Label for="password">{apiError || ''}</Label>
              <Label for="password">{apiSuccessMessage || ''}</Label> */}
              <Label for="password">
                <FormattedMessage {...messages.YourCurrentPassword} />
              </Label>
              <Input
                type="password"
                name="currentPassword"
                id="password"
                placeholder="**********"
              // onChange={e => handleChangeEvent(e)}
              />
              {/* <Label for="password">
                {errors.currentPassword ? errors.currentPassword : ''}
              </Label> */}
            </FormGroup>


          </Col>
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
              // onChange={e => handleChangeEvent(e)}
              />
              {/* <Label for="password">
                {errors.newPassword ? errors.newPassword : ''}
              </Label> */}
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
                onChange={e => handleChangeEvent(e)}
              />
              {/* <Label for="password">
                {errors.confirmPassword ? errors.confirmPassword : ''}
              </Label>
              <Label for="password">
                {errors.passwordMatching ? errors.passwordMatching : ''}
              </Label> */}
            </FormGroup>
          </Col>
        </Row>
        <div className="form_footer">
          <div className="bottom_btns">
            <Button className="btn_save">
              <FormattedMessage {...messages.Cancel} />
            </Button>
            <Button
              className="btn_submit"
            // onClick={handleUpdateProfileSave}
            >
              <FormattedMessage {...messages.Save} />
            </Button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default ChangePassword;
