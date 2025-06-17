/*
 * Bank Detail Component
 */
import React, { useState } from 'react';
// import { FormattedMessage } from 'react-intl';
import {
  Button,
  Row,
  Col,
  FormGroup,
  Label,
  Input,
  // FormText,
} from 'reactstrap';
import { FormattedMessage } from 'react-intl';
import NumberFormat from 'react-number-format';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import InputBase from '@material-ui/core/InputBase';
import { withStyles } from '@material-ui/core/styles';
import 'react-toastify/dist/ReactToastify.css';
// import axios from 'axios';
// import { Link } from 'react-router-dom';
// import history from 'utils/history';
import messages from './messages';
import Wrapper from './Wrapper';

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

function BankDetail(props) {
  const [currency, setCurrency] = useState('USD');
  return (
    <Wrapper>
      <h2>
        <FormattedMessage {...messages.BankAccountDetail} />
      </h2>
      <div className="account-data-form">
        <div className="add_form">
          <Row>
            <Col lg={6} md={6} sm={12} xs={12}>
              <FormGroup>
                <Label for="account-holder-name">
                  <FormattedMessage {...messages.AccountHolderName} />
                </Label>
                <Input
                  type="text"
                  name="account-holder-name"
                  id="account-holder-name"
                  value=""
                  placeholder="Enter name"
                  // onChange={e => handleChangeEvent(e)}
                />
                {/* <FormText color="danger">
                  {errors.mainTitle ? (
                    <p className="error">{errors.mainTitle}</p>
                  ) : null}
                </FormText> */}
              </FormGroup>
            </Col>
            <Col lg={6} md={6} sm={12} xs={12}>
              <FormGroup>
                <Label for="account-number">
                  <FormattedMessage {...messages.AccountNumber} />
                </Label>
                <NumberFormat
                  format="#### #### #### ####"
                  mask="_"
                  name="cardNumber"
                  // value={checkoutInfo.cardNumber}
                  // onChange={e => handleChangeEvent(e)}
                  placeholder="Enter number"
                  className="form-control"
                />
                {/* <FormText color="danger">
                  {errors.subTitle ? (
                    <p className="error">{errors.subTitle}</p>
                  ) : null}
                </FormText> */}
              </FormGroup>
            </Col>
            <Col lg={6} md={6} sm={12} xs={12}>
              <FormGroup>
                <FormControl fullWidth>
                  <Label>
                    <FormattedMessage {...messages.Currency} />
                  </Label>
                  <Select
                    value={currency}
                    onChange={e => {
                      setCurrency(e.target.value);
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
                    <MenuItem value="USD">USD</MenuItem>
                    <MenuItem value="Riyal">Riyal</MenuItem>
                    <MenuItem value="Other">Other</MenuItem>
                  </Select>
                </FormControl>
              </FormGroup>
            </Col>
            <Col lg={6} md={6} sm={12} xs={12}>
              <FormGroup>
                <Label for="swift-code">
                  <FormattedMessage {...messages.SwiftCode} />
                </Label>
                <Input
                  type="text"
                  name="swift-code"
                  id="swift-code"
                  value=""
                  placeholder="Enter code"
                  // onChange={e => handleChangeEvent(e)}
                />
                {/* <FormText color="danger">
                  {errors.mainTitle ? (
                    <p className="error">{errors.mainTitle}</p>
                  ) : null}
                </FormText> */}
              </FormGroup>
            </Col>
            <Col lg={6} md={6} sm={12} xs={12}>
              <FormGroup>
                <Label for="iban-number">
                  <FormattedMessage {...messages.IBAN} />
                </Label>
                <NumberFormat
                  format="#### #### #### ####"
                  mask="_"
                  name="iban-number"
                  // value={checkoutInfo.cardNumber}
                  // onChange={e => handleChangeEvent(e)}
                  placeholder="Enter number"
                  className="form-control"
                />
                {/* <FormText color="danger">
                  {errors.subTitle ? (
                    <p className="error">{errors.subTitle}</p>
                  ) : null}
                </FormText> */}
              </FormGroup>
            </Col>
            <Col lg={6} md={6} sm={12} xs={12}>
              <FormGroup>
                <Label for="address">
                  <FormattedMessage {...messages.Address} />
                </Label>
                <Input
                  type="text"
                  name="address"
                  id="address"
                  value=""
                  placeholder="Enter address"
                  // onChange={e => handleChangeEvent(e)}
                />
                {/* <FormText color="danger">
                  {errors.mainTitle ? (
                    <p className="error">{errors.mainTitle}</p>
                  ) : null}
                </FormText> */}
              </FormGroup>
            </Col>
          </Row>
        </div>
        <div className="form_footer">
          <div className="bottom_btns">
            <Button
              className="btn_back"
              onClick={() => props.setPaymentOption(true)}
            >
              <FormattedMessage {...messages.Back} />
            </Button>
            <Button className="btn_submit">
              <FormattedMessage {...messages.Save} />
            </Button>
          </div>
        </div>
        {/* <div className="form_footer">
          <div className="bottom_btns">
            <Button
              className="btn_back"
            >
              <FormattedMessage {...messages.Back} />
            </Button>
            <Button className="btn_submit"
            >
              <FormattedMessage {...messages.Update} />
            </Button>
          </div>
        </div> */}
      </div>
    </Wrapper>
  );
}

export default BankDetail;
