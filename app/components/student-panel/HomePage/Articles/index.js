/*
 * Articles Component
 */
import React, { useEffect, useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
import messages from './messages';
import Wrapper from './Wrapper';
import { API } from '../../../../config/config';
import articleicon from '../../../../images/articleicon.svg';
import loaderImg from '../../../../images/loader.svg';

function Articles() {
  const [articleList, setArticleList] = useState([]);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    getArticlesList();
  }, []);

  const getArticlesList = () => {
    setLoader(true);
    axios
      .get(`${API}api/article`, {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      })
      .then(res => {
        setArticleList(res && res.data);
        setLoader(false);
      })
      .catch(() => {
        setLoader(false);
      });
  };
  return (
    <Wrapper id="services">
      <Container fluid="xl">
        <Row>
          <Col lg={12}>
            <div className="header">
              <h4>
                <FormattedMessage {...messages.Articles} />
              </h4>
            </div>
          </Col>
        </Row>
        <Row>
          {loader ? (
            <img className="loader" src={loaderImg} alt="Loader" />
          ) : (
            <>
              {articleList.map(article => (
                <Col lg={6} md={6} sm={12} xs={12} key={article.id}>
                  <div className="single_item">
                    <div className="left">
                      <img src={articleicon} alt="Icon" />
                      <h5>{article.title}</h5>
                      <p>
                        <FormattedMessage {...messages.InteractiveToolsDesc} />
                      </p>
                      <Link className="read_more" to="/article_details">
                        <FormattedMessage {...messages.ReadMore} />
                      </Link>
                    </div>
                    <div className="right">
                      <img src={article.articleImage} alt="ArticleImage" />
                    </div>
                  </div>
                </Col>
              ))}
            </>
          )}
        </Row>
      </Container>
    </Wrapper>
  );
}

export default Articles;
