/*
 * Add Webinar Page

 */
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { Container, Row, Col } from 'reactstrap';
import PropTypes from 'prop-types';
import messages from './messages';
import EditWebinar from '../../../components/instructor-panel/EditWebinar';
import Wrapper from './Wrapper';

export default function EditWebinarPage(props) {
  useEffect(() => {}, [props.match.params.id]);
  return (
    <div className="sub_page">
      <Helmet>
        <title>Add Webinar</title>
        <meta name="description" content="Add Webinar Page" />
      </Helmet>
      <Wrapper id="list">
        <div className="custom_container">
          <Container fluid>
            <Row>
              <Col lg={12}>
                <h4>
                  <FormattedMessage {...messages.EditWebinar} />
                </h4>
                <EditWebinar id={props.match.params.id} />
              </Col>
            </Row>
          </Container>
        </div>
      </Wrapper>
    </div>
  );
}
EditWebinarPage.propTypes = {
  match: PropTypes.any,
};
