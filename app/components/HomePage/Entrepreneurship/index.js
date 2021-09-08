/*
 * Entrepreneurship Component
 */
import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import messages from './messages';
import Wrapper from './Wrapper';
import education from '../../../images/education.svg';

function Entrepreneurship() {
  const EntrepreneurshipList = [
    {
      id: 0,
      icon: education,
      alt: 'Accredited Education',
      title: <FormattedMessage {...messages.AccreditedEducation} />,
      desc: <FormattedMessage {...messages.AccreditedEducationDesc} />,
      readmore: <FormattedMessage {...messages.ReadMore} />,
    },
    {
      id: 1,
      icon: education,
      alt: 'Live Webinars',
      title: <FormattedMessage {...messages.LiveWebinars} />,
      desc: <FormattedMessage {...messages.LiveWebinarsDesc} />,
      readmore: <FormattedMessage {...messages.ReadMore} />,
    },
    {
      id: 2,
      icon: education,
      alt: 'Goal Based Education',
      title: <FormattedMessage {...messages.GoalBasedEducation} />,
      desc: <FormattedMessage {...messages.GoalBasedEducationDesc} />,
      readmore: <FormattedMessage {...messages.ReadMore} />,
    },
    {
      id: 3,
      icon: education,
      alt: 'Free Gifts &amp; Rewards',
      title: <FormattedMessage {...messages.FreeGiftsRewards} />,
      desc: <FormattedMessage {...messages.FreeGiftsRewardsDesc} />,
      readmore: <FormattedMessage {...messages.ReadMore} />,
    },
  ];
  return (
    <Wrapper id="services">
      <Container fluid="xl">
        <Row>
          <Col lg={12}>
            <div className="header">
              <h4>
                <FormattedMessage {...messages.Entrepreneurship} />
              </h4>
              <Link to="/">
                <FormattedMessage {...messages.ViewAll} />
              </Link>
            </div>
          </Col>
        </Row>
        <Row>
          {EntrepreneurshipList.map(item => (
            <Col lg={3} md={3} sm={6} xs={12} key={item.id}>
              <div className="single_item">
                <img src={item.icon} alt={item.alt} />
                <h5>{item.title}</h5>
                <p>{item.desc}</p>
                <Link className="read_more" to="/">
                  {item.readmore}
                </Link>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </Wrapper>
  );
}

export default Entrepreneurship;
