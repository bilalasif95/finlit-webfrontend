/*
 * Courses List Component
 */
import React from 'react';
import { Row, Col } from 'reactstrap';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
import Wrapper from './Wrapper';
import Img from '../../../Img';

function ArticleImage(props) {
  const imgSrc = props.img;
  return (
    <Row>
      <Col lg={12}>
        <Wrapper>
          <Img src={imgSrc} alt="Article" />
        </Wrapper>
      </Col>
    </Row>
  );
}
ArticleImage.propTypes = {
  img: PropTypes.any,
};
export default ArticleImage;
