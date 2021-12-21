/*
 * Payments Page
 *
 */
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
// import { Link } from 'react-router-dom';
import '../../components/student-panel/Header/profile.css';
import Sidebar from '../../components/student-panel/Sidebar/index';
import PaymentOption from '../../components/instructor-panel/Payments/PaymentOption';
import BankDetail from '../../components/instructor-panel/Payments/BankDetail';

export default function Payments() {
  const [paymentOption, setPaymentOption] = useState(true);
  return (
    <div className="profilePages">
      <Helmet>
        <title>Payments</title>
        <meta name="description" content="Payments Page" />
      </Helmet>
      <div className="profileMain">
        <Sidebar />
        {/* Payments Content */}
        <div className="profileContent">
          <div className="mainCont">
            {paymentOption ? (
              <PaymentOption setPaymentOption={setPaymentOption} />
            ) : (
              <BankDetail setPaymentOption={setPaymentOption} />
            )}
          </div>
        </div>
      </div>
      {/* end */}
    </div>
  );
}
