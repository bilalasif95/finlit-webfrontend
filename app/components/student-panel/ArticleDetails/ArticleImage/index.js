/*
 * Article Image Component
 */
import React from 'react';
import { Row, Col } from 'reactstrap';
// import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
import Wrapper from './Wrapper';
import Img from '../../../Img';

function ArticleImage() {
  // const imgSrc = props.img;
  return (
    <Row>
      <Col lg={12}>
        <Wrapper>
          <Img
            src="https://cdn.wallpapersafari.com/24/95/0fDKTG.jpeg"
            alt="Article"
            height="100%"
            width="100%"
          />
        </Wrapper>
      </Col>
    </Row>
  );
}
// ArticleImage.propTypes = {
//   img: PropTypes.any,
// };
export default ArticleImage;
