/*
 * Add BootCamp Page
 *
 */
import React, { useEffect } from 'react';
import { FormattedMessage } from 'react-intl';
import { Helmet } from 'react-helmet';
import { Container, Row, Col } from 'reactstrap';
import PropTypes from 'prop-types';
import messages from './messages';
import Wrapper from './Wrapper';
import EditBootCamp from '../../../components/instructor-panel/EditBootcamp';

export default function EditBootCampPage(props) {
  useEffect(() => {}, [props.match.params.id]);
  return (
    <div className="sub_page">
      <Helmet>
        <title>Edit BootCamp Page</title>
        <meta name="description" content="Edit BootCamp Page" />
      </Helmet>
      <Wrapper id="list">
        <div className="custom_container">
          <Container fluid>
            <Row>
              <Col lg={12}>
                <h4>
                  <FormattedMessage {...messages.EditBootCamp} />
                </h4>
                <EditBootCamp id={props.match.params.id} />
              </Col>
            </Row>
          </Container>
        </div>
      </Wrapper>
    </div>
  );
}
EditBootCampPage.propTypes = {
  match: PropTypes.any,
};
