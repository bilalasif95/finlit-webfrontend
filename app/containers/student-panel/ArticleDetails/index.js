/*
 * Article Details Page
 */
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Container, Row, Col } from 'reactstrap';
import axios from 'axios';
import PropTypes from 'prop-types';
import { API } from '../../../config/config';
import ArticleDescription from '../../../components/student-panel/ArticleDetails/ArticleDescription';
import ArticleImage from '../../../components/student-panel/ArticleDetails/ArticleImage';
import ArticleMostViewed from '../../../components/student-panel/ArticleDetails/ArticleMostViewed';
import ArticleSidebar from '../../../components/student-panel/ArticleDetails/ArticleSidebar';
import Loader from '../../../components/Loader';

ArticleDetails.propTypes = {
  match: PropTypes.any,
};

export default function ArticleDetails(props) {
  const [loader, setLoader] = useState(false);
  const [image, setImage] = useState('');
  const [articleDetails, setArticleDetails] = useState({});
  useEffect(() => {
    getArticleDetail();
  }, [props.match.params.id]);

  const getArticleDetail = () => {
    setLoader(true);
    axios
      .get(`${API}api/article/getById/${props.match.params.id}`, {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      })
      .then(res => {
        setArticleDetails(res.data);
        setImage(res.data.image);
        setLoader(false);
      })
      .catch(() => {
        setLoader(false);
      });
  };
  return (
    <div className="sub_pages">
      <Helmet>
        <title>Article Details</title>
        <meta name="description" content="Article Details" />
      </Helmet>
      {loader ? (
        <Loader />
      ) : (
        <>
          <Container fluid="xl">
            <ArticleImage img={image} />
            <Row>
              <Col lg={8} md={8} sm={12}>
                <ArticleDescription details={articleDetails} />
              </Col>
              <Col lg={4} md={4} sm={12}>
                <ArticleSidebar notToAdd={props.match.params.id} />
              </Col>
            </Row>
          </Container>
          <ArticleMostViewed id={props.match.params.id}/>
        </>
      )}
    </div>
  );
}
