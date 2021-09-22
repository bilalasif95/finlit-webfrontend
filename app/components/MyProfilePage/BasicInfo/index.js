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

function BasicInfo() {
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
                // defaultValue={currentProfile.firstName}
                // onChange={e => {
                //   const currentProfileObj = currentProfile;
                //   const updateProfileObj = profileUpdate;
                //   currentProfileObj.firstName = e.target.value;
                //   updateProfileObj.firstName = e.target.value;
                //   setCurrentProfile(currentProfileObj);
                //   setProfileUpdate(updateProfileObj);
                // }}
              />
              <FormText className="form-text">
                {/* {errors.firstName ? ( */}
                  <p className="error"></p>
                {/* ) : (
                  ''
                )} */}
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
                // defaultValue={currentProfile.lastName}
                // onChange={e => {
                //   const currentProfileObj = currentProfile;
                //   const updateProfileObj = profileUpdate;
                //   currentProfileObj.lastName = e.target.value;
                //   updateProfileObj.lastName = e.target.value;
                //   setCurrentProfile(currentProfileObj);
                //   setProfileUpdate(updateProfileObj);
                // }}
              />
             {/* <FormText className="form-text">
                {errors.lastName ? (
                  <p className="error">{errors.lastName}</p>
                ) : (
                  ''
                )}
              </FormText> */}
            </FormGroup>
          </Col>
          <Col lg={6} md={6} sm={6} xs={12}>
            <FormGroup>
              <Label for="profession">
                <FormattedMessage {...messages.Title} />
              </Label>
              <Input
                type="text"
                name="profession"
                id="profession"
                placeholder="Enter profession"
                // defaultValue={currentProfile.profession}
                // onChange={e => {
                //   const currentProfileObj = currentProfile;
                //   const updateProfileObj = profileUpdate;
                //   currentProfileObj.profession = e.target.value;
                //   updateProfileObj.profession = e.target.value;
                //   setCurrentProfile(currentProfileObj);
                //   setProfileUpdate(updateProfileObj);
                // }}
              />
                {/* <FormText className="form-text">
                {errors.lastName ? (
                  <p className="error">{errors.lastName}</p>
                ) : (
                  ''
                )}
              </FormText> */}
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
                // value={currentProfile.email}
                // defaultValue={currentProfile.email}
                readOnly
              />
            </FormGroup>
          </Col>
          <Col lg={12} md={12} sm={12} xs={12}>
            <FormGroup>
              <Label for="aboutme">
                <FormattedMessage {...messages.MyBiography} />
              </Label>
              <Input
                type="textarea"
                name="aboutMe"
                id="aboutme"
                placeholder="Enter description about yourself"
                // defaultValue={currentProfile.description}
                // onChange={e => {
                //   const currentProfileObj = currentProfile;
                //   const updateProfileObj = profileUpdate;
                //   currentProfileObj.description = e.target.value;
                //   updateProfileObj.aboutMe = e.target.value;
                //   setCurrentProfile(currentProfileObj);
                //   setProfileUpdate(updateProfileObj);
                // }}
              />
                {/* <FormText className="form-text">
                {errors.aboutMe ? (
                  <p className="error">{errors.aboutMe}</p>
                ) : (
                  ''
                )}
              </FormText> */}
            </FormGroup>
          </Col>
        </Row>
        <div className="form_footer">
          <div className="bottom_btns">
            <Button className="btn_cancel">
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

export default BasicInfo;
