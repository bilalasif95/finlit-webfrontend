/*
 * Add Article Page

 */
import React from 'react';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { Container, Row, Col } from 'reactstrap';
import EditArticle from '../../../components/instructor-panel/EditArticle';
import messages from './messages';
import Wrapper from './Wrapper';

export default function EditArticlePage() {
  return (
    <div className="sub_pages">
      <Helmet>
        <title>Edit Article</title>
        <meta name="description" content="Edit Article Page" />
      </Helmet>
      <Wrapper id="list">
        <div className="custom_container">
          <Container fluid="xl">
            <Row>
              <Col lg={12}>
                <h4>
                  <FormattedMessage {...messages.EditArticle} />
                </h4>
                <EditArticle />
              </Col>
            </Row>
          </Container>
        </div>
      </Wrapper>
    </div>
  );
}
