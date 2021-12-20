/*
 * Payment Option Component
 */
import React, { useState, useEffect } from 'react';
// import { FormattedMessage } from 'react-intl';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from 'reactstrap';
import { FormattedMessage } from 'react-intl';
import { FiEdit3 } from 'react-icons/fi';
import { MdDelete } from 'react-icons/md';
// import { Link } from 'react-router-dom';
// import messages from './messages';
import history from 'utils/history';
import messages from './messages';
import Wrapper from './Wrapper';
import { API } from '../../../../config/config';
import Loader from '../../../Loader';
import Img from '../../../../components/Img';
import Bank from '../../../../images/Bank.png';
import Delete from '../../../../images/delete.png';

function PaymentOption(props) {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  return (
    <Wrapper>
      <h2>Payments</h2>
      <div className="payment-option">
        <Button className="item" onClick={() => props.setPaymentOption(false)}>
          <Img src={Bank} alt="Bank Account" height="100%" width=" 100%" />
          <p><FormattedMessage {...messages.BankAccount} /></p>
        </Button>
      </div>
      <div className="account-detail">
        <div className="title-action">
          <h4>
            <FormattedMessage {...messages.BankAccountDetail} />
          </h4>
          <div className="del-edit">
            <Button onClick={toggle}>
              <MdDelete />
            </Button>
            <Button>
              <FiEdit3 />
            </Button>
          </div>
        </div>
        <div className="account-data">
          <div className="item">
            <div className="property">
              Account Holder Name
            </div>
            <div className="value">
              Jacob
            </div>
          </div>
          <div className="item">
            <div className="property">
              Account Number
            </div>
            <div className="value">
              1234512321312
            </div>
          </div>
          <div className="item">
            <div className="property">
              Currency
            </div>
            <div className="value">
              USD
            </div>
          </div>
          <div className="item">
            <div className="property">
              Swift Code/ BIC
            </div>
            <div className="value">
              BWESTGBAV
            </div>
          </div>
          <div className="item">
            <div className="property">
              IBAN
            </div>
            <div className="value">
              GB82 1234 1234 1234 23
            </div>
          </div>
          <div className="item">
            <div className="property">
              Address
            </div>
            <div className="value">
              Al Jubail Kingdom of Saudi Arabia
            </div>
          </div>
        </div>
      </div>
      {/* Modal */}
      <Modal isOpen={modal} toggle={toggle} className="ratingModal deleteModal">
        <ModalHeader toggle={toggle} />
        <ModalBody>
          <Img src={Delete} alt="Delete" />
          <p>Do you really want to delete account?</p>
        </ModalBody>
        <ModalFooter>
          <Button className="deleteBtn" onClick={toggle}>
            Delete
          </Button>
        </ModalFooter>
      </Modal>
    </Wrapper>
  );
}

export default PaymentOption;
