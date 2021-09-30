/*
 * Articles Component
 */
import React, { useEffect, useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { Container, Row, Col, Button } from 'reactstrap';
import Slider from 'react-slick';
// import Img from 'react-optimized-image';
import axios from 'axios';
import history from 'utils/history';
import messages from './messages';
import Wrapper from './Wrapper';
import { API } from '../../../../config/config';
import articleicon from '../../../../images/articleicon.svg';
import article1 from '../../../../images/interactive_tools.jpg';
import Loader from '../../../Loader';

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
        setArticleList(res && res.data.data);
        setLoader(false);
      })
      .catch(() => {
        setLoader(false);
      });
  };
  const handleArticleDetails = id => {
    history.push(`/article_details/${id}`);
  };

  const settings = {
    autoplay: true,
    dots: true,
    infinite: true,
    speed: 5000,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
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
            <Loader />
          ) : articleList.length > 1 ? (
            <Slider {...settings}>
              {articleList.map(article => (
                <div
                  id={article.id}
                  key={article.id}
                  tabIndex={0}
                  role="button"
                  onKeyDown={() => handleArticleDetails(article.id)}
                  onClick={() => handleArticleDetails(article.id)}
                >
                  <div className="single_item">
                    <div className="left">
                      <img
                        src={articleicon}
                        alt="IconImg"
                        height="100%"
                        width="100%"
                      />
                      <h5>{article.title}</h5>
                      <p> {article.subTitle} </p>
                      <Button
                        className="read_more"
                        onClick={() => handleArticleDetails(article.id)}
                      >
                        <FormattedMessage {...messages.ReadMore} />
                      </Button>
                    </div>
                    <div className="right">
                      <img
                        src={article.image ? article.image : article1}
                        alt="ArticleImage"
                        height="100%"
                        width="100%"
                      />
                      {/* <img src={article1} alt="Article" /> */}
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          ) : (
            <>
              {articleList[0] ? (
                <Container fluid="xl">
                  <Row>
                    <Col lg={6} md={6} sm={12}>
                      <div
                        id={articleList[0].id}
                        key={articleList[0].id}
                        tabIndex={0}
                        role="button"
                        onKeyDown={() =>
                          handleArticleDetails(articleList[0].id)
                        }
                        onClick={() => handleArticleDetails(articleList[0].id)}
                      >
                        <div className="single_item">
                          <div className="left">
                            <img
                              src={articleicon}
                              alt="IconImg"
                              height="100%"
                              width="100%"
                            />
                            <h5>{articleList[0].title}</h5>
                            <p> {articleList[0].subTitle} </p>
                            <Button
                              className="read_more"
                              onClick={() =>
                                handleArticleDetails(articleList[0].id)
                              }
                            >
                              <FormattedMessage {...messages.ReadMore} />
                            </Button>
                          </div>
                          <div className="right">
                            {/* <img src={articleList[0].image} alt="ArticleImage" /> */}
                            <img src={article1} alt="Article" height="100%" width="100%" />
                          </div>
                        </div>
                      </div>
                    </Col>
                    <Col lg={6} md={6} sm={12} />
                  </Row>
                </Container>
              ) : (
                ''
              )}
            </>
          )}
        </Row>
      </Container>
    </Wrapper>
  );
}

export default Articles;
