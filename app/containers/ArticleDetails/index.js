/*
 * Article Details Page
 */
import React from 'react';
import { Helmet } from 'react-helmet';
import { Container, Row, Col } from 'reactstrap';
import ArticleDescription from '../../components/ArticleDetails/ArticleDescription';
import ArticleImage from '../../components/ArticleDetails/ArticleImage';
import ArticleSidebar from '../../components/ArticleDetails/ArticleSidebar';

export default function ArticleDetails() {
  return (
    <div className="sub_pages">
      <Helmet>
        <title>Article Details</title>
        <meta name="description" content="Article Details" />
      </Helmet>
      <Container fluid="xl">
        <ArticleImage />
        <Row>
          <Col lg={9} md={8} sm={12}>
            <ArticleDescription />
          </Col>
          <Col lg={3} md={4} sm={12}>
            <ArticleSidebar />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
