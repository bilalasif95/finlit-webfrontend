/*
 * Add Article Page

 */
import React from 'react';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { Container, Row, Col } from 'reactstrap';
import AddArticle from '../../../components/instructor-panel/AddArticle';
import messages from './messages';
import Wrapper from './Wrapper';

export default function AddArticlePage() {
  return (
    <div className="sub_pages">
      <Helmet>
        <title>Add Article</title>
        <meta name="description" content="Add Article Page" />
      </Helmet>
      <Wrapper id="list">
        <div className="custom_container">
          <Container fluid="xl">
            <Row>
              <Col lg={12}>
                <h4>
                  <FormattedMessage {...messages.AddArticle} />
                </h4>
                <AddArticle />
              </Col>
            </Row>
          </Container>
        </div>
      </Wrapper>
    </div>
  );
}
