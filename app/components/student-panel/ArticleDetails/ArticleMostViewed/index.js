/*
 * Article Most Viewed Component
 */
import React, { useState, useEffect, useRef } from 'react';
import { FormattedMessage } from 'react-intl';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
import JoditEditor from 'jodit-react';
import history from 'utils/history';
import messages from './messages';
import Wrapper from './Wrapper';
import articleIcon from '../../../../images/article.svg';
import { API } from '../../../../config/config';

function ArticleMostViewed(props) {
  const [articles, setArticles] = useState([]);
  const editor = useRef(null);
  const config = {
    readonly: true,
  };

  useEffect(() => {
    getArticleDetail();
  }, []);

  const getArticleDetail = () => {
    axios
      .get(`${API}api/article`, {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      })
      .then(res => {
        setArticles(res && res.data.data);
      })
      .catch(err => {
        toast.error(
          err.response
            ? err.response && err.response.message
            : 'Message Not Readable',
        );
      });
  };

  const showArticleDetails = id => {
    history.push(`/article_details/${id}`);
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
          {articles.length > 0 &&
            articles.slice(0, 3).map((article, index) =>
              props.id != article.id ? (
              <Col lg={6} md={6} sm={12} xs={12} key={index} onClick={() => showArticleDetails(article.id)}>
                <div className="single_item">
                    <div className="left">
                      <img src={articleIcon} alt="Icon" />
                    <h5>
                      {article.title}
                    </h5>
                    <p>
                        <JoditEditor
                          ref={editor}
                        value={article.description}
                          config={config}
                          tabIndex={0}
                      />
                        <FormattedMessage {...messages.InteractiveToolsDesc} />
                    </p>
                    <Link className="read_more" to={`/article_details/${article.id}`}>
                        <FormattedMessage {...messages.ReadMore} />
                      </Link>
                    </div>
                    <div className="right">
                      <img src={article.image} alt="Interactive Tools" />
                  </div>
                  </div>
                </Col>
              :""
              ),
            )}
        </Row>
      </Container>
    </Wrapper>
  );
}

export default ArticleMostViewed;
