/*
 * Article Sidebar Component
 */
import React, { useState, useEffect } from 'react';
import { FormattedMessage } from 'react-intl';
import { Row, Col, InputGroup, Input, Button } from 'reactstrap';
import { BiSearchAlt2 } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { API } from '../../../../config/config';
import Wrapper from './Wrapper';
import messages from './messages';

function ArticleSidebar(props) {
  const [articles, setArticles] = useState([]);
  const [loader , setLoader] = useState(false);
  useEffect(() => {
    getArticleDetail();
  }, []);

  const getArticleDetail = () => {
    setLoader(true);
    axios
      .get(`${API}api/article`, {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      })
      .then(res => {
        setArticles(res && res.data);
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
        {/* <Wrapper>
          <h4>
            <FormattedMessage {...messages.Title} />
            <span className="btm_line" />
          </h4>
          <InputGroup>
            <Input type="text" name="search" id="seach" placeholder="Search" />
            <Button>
              <BiSearchAlt2 />
            </Button>
          </InputGroup>
        </Wrapper> */}
        <Wrapper>
          <h4>
            <FormattedMessage {...messages.Title} />
            <span className="btm_line" />
          </h4>
          <ul>
            {articles.map(article =>
              article.id.toString() === props.notToAdd ? (
                <></>
              ) : (
                <li>
                  <a href={`/article_details/${article.id}`} target="_blank">
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

export default ArticleSidebar;
