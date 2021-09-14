/*
 * Articles Component
 */
import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import messages from './messages';
import Wrapper from './Wrapper';
import article from '../../../images/article.svg';
import interactivetools from '../../../images/interactive_tools.jpg';
import simulations from '../../../images/simulations.jpg';

function Articles() {
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
          <Col lg={6} md={6} sm={12} xs={12}>
            <div className="single_item">
              <div className="left">
                <img src={article} alt="Icon" />
                <h5>
                  <FormattedMessage {...messages.InteractiveTools} />
                </h5>
                <p>
                  <FormattedMessage {...messages.InteractiveToolsDesc} />
                </p>
                <Link className="read_more" to="/article_details">
                  <FormattedMessage {...messages.ReadMore} />
                </Link>
              </div>
              <div className="right">
                <img src={interactivetools} alt="Interactive Tools" />
              </div>
            </div>
          </Col>
          <Col lg={6} md={6} sm={12} xs={12}>
            <div className="single_item">
              <div className="left">
                <img src={article} alt="icon" />
                <h5>
                  <FormattedMessage {...messages.LiveWebinars} />
                </h5>
                <p>
                  <FormattedMessage {...messages.LiveWebinarsDesc} />
                </p>
                <Link className="read_more" to="/article_details">
                  <FormattedMessage {...messages.ReadMore} />
                </Link>
              </div>
              <div className="right">
                <img src={simulations} alt="Simulations" />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </Wrapper>
  );
}

export default Articles;
