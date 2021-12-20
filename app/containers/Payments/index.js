/*
 * Payments Page
 *
 */
import React, { useState, useEffect } from 'react';
import { FormattedMessage } from 'react-intl';
import { Helmet } from 'react-helmet';
// import { Link } from 'react-router-dom';
import '../../components/student-panel/Header/profile.css';
import {
  Label,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from 'reactstrap';
import Delete from '../../images/delete.png';
import messages from './messages';
import 'react-toastify/dist/ReactToastify.css';
import Img from '../../components/Img';
import Cam from '../../images/cam.png';
import BasicInfo from '../../components/MyProfilePage/BasicInfo';
import Sidebar from '../../components/student-panel/Sidebar/index';

export default function Payments() {
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
            <h2>Payments</h2>
          </div>
        </div>
      </div>
      {/* end */}
    </div>
  );
}
