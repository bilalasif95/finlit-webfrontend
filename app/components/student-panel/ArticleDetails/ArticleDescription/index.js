/*
 * Courses List Component
 */
import React from 'react';
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';
import { MdChat } from 'react-icons/md';
import { HiUser } from 'react-icons/hi';
import { AiOutlineHeart, AiFillLike } from 'react-icons/ai';
// import { AiFillHeart } from 'react-icons/ai';
// import { Link } from 'react-router-dom';
import messages from './messages';
import Wrapper from './Wrapper';

function ArticleDescription(props) {
  const article = props.details;
  const { title, description } = article;
  return (
    <Wrapper id="list">
      <div className="article">
        <h4>{title}</h4>
        <div className="article_outcomes">
          <div className="item">
            <AiOutlineHeart />
            <FormattedMessage {...messages.PublishedDate} />
          </div>
          <div className="item">
            <HiUser />
            <FormattedMessage {...messages.PublishedBy} />
          </div>
          <div className="item">
            <AiFillLike />
            <FormattedMessage {...messages.Likes} />
          </div>
          <div className="item">
            <MdChat /> 0 &nbsp;
            <FormattedMessage {...messages.Comments} />
          </div>
        </div>
        <div className="article_desc" dangerouslySetInnerHTML={{__html: description}}>

        </div>
      </div>
    </Wrapper>
  );
}

ArticleDescription.propTypes = {
  details: PropTypes.any,
};
export default ArticleDescription;
