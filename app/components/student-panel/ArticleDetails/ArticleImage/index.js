/*
 * Courses List Component
 */
import React from 'react';
import { Row, Col } from 'reactstrap';
// import { Link } from 'react-router-dom';
import Wrapper from './Wrapper';
import Img from '../../../Img';
import article from '../../../../images/article.png';

function ArticleImage() {
  return (
    <Row>
      <Col lg={12}>
        <Wrapper>
          <Img src={article} alt="Article" />
        </Wrapper>
      </Col>
    </Row>
  );
}

export default ArticleImage;
