/*
 * Add Hackathon Page

 */
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { Container, Row, Col } from 'reactstrap';
import PropTypes from 'prop-types';
import EditHackathon from '../../../components/instructor-panel/EditHackathon';
import messages from './messages';
import Wrapper from './Wrapper';

export default function EditHackathonPage(props) {
  useEffect(() => {}, [props.match.params.id]);
  return (
    <div className="sub_page">
      <Helmet>
        <title>Add Hackathon</title>
        <meta name="description" content="Edit Hackathon Page" />
      </Helmet>
      <Wrapper id="list">
        <div className="custom_container">
          <Container fluid>
            <Row>
              <Col lg={12}>
                <h4>
                  <FormattedMessage {...messages.EditHackathon} />
                </h4>
                <EditHackathon id={props.match.params.id} />
              </Col>
            </Row>
          </Container>
        </div>
      </Wrapper>
    </div>
  );
}
EditHackathonPage.propTypes = {
  match: PropTypes.any,
};
