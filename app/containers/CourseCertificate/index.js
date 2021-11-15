/*
 * Course Certificate Page
 *
 */
import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
// import { withStyles } from '@material-ui/core/styles';
import { Container } from 'reactstrap';
// import Img from '../../components/Img';
import messages from './messages';
import Wrapper from './Wrapper';
import Logo from '../../images/logowhite.svg';
// import circlebg from '../../images/circlebg.png';
import Doc from './DocService';
import PdfContainer from './PDFContainer';

export default function CourseCertificate() {
  const createPdf = html => Doc.createPdf(html);
  return (
    <div className="sub_pages">
      <Helmet>
        <title>Course Certificate</title>
        <meta name="description" content="Course  Certificate Page" />
      </Helmet>
      <Wrapper>
        <Container fluid="xl">
          <PdfContainer createPdf={createPdf} paperSize="A4">
            <div className="course_certificate">
              {/* <Img src={circlebg} alt="bg" height="100%" width="100%" className="circle_bg" /> */}
              <div className="header">
                <h4>
                  <FormattedMessage {...messages.FinLitAcademy} />
                </h4>
                <h2>
                  <FormattedMessage {...messages.CertificateCompletion} />
                </h2>
              </div>
              <div className="certificate_details">
                <div className="name_date">
                  <h1>Chad Sanders</h1>
                  <div className="comp_date">
                    <p>Has successfully completed.</p>
                    <p>Date of Achievement: 14-Feb-2021</p>
                  </div>
                  <div className="course_title">
                    <p>Course</p>
                    <p>
                      <FormattedMessage {...messages.CourseName} />
                    </p>
                  </div>
                  <div className="certified_by">
                    <p className="name">RandyHayes</p>
                    <p>Randy Hayes</p>
                    <p>General Manager</p>
                    <p>FinLit Learning Experiences Group</p>
                  </div>
                </div>
              </div>
              <div className="footer">
                <Link to="/">www.finlit.com</Link>
                <div className="logo">
                  <img src={Logo} alt="FinLit" height="100%" width="100%" />
                </div>
              </div>
            </div>
          </PdfContainer>
        </Container>
      </Wrapper>
    </div>
  );
}
