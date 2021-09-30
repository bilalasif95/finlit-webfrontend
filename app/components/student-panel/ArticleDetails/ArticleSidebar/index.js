/*
 * Article Sidebar Component
 */
import React, { useState, useEffect } from 'react';
import { FormattedMessage } from 'react-intl';
import { Row, Col } from 'reactstrap';
import PropTypes from 'prop-types';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { API } from '../../../../config/config';
import Wrapper from './Wrapper';
import messages from './messages';

function ArticleSidebar(props) {
  const [articles, setArticles] = useState([]);
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
  return (
    <Row>
      <Col lg={12}>
        <Wrapper>
          <h4>
            <FormattedMessage {...messages.Title} />
            <span className="btm_line" />
          </h4>
          <ul>
            {articles.length > 0 &&
              articles.slice(0, 6).map(article =>
                article.id.toString() === props.notToAdd ? (
                  <></>
                ) : (
                  <li>
                    <a href={`/article_details/${article.id}`}>
                      {article.title}
                    </a>
                  </li>
                ),
              )}
          </ul>
        </Wrapper>
      </Col>
    </Row>
  );
}
ArticleSidebar.propTypes = {
  notToAdd: PropTypes.any,
};
export default ArticleSidebar;
