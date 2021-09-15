/*
 * Events Component
 */
import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import messages from './messages';
import Wrapper from './Wrapper';
import event1 from '../../../../images/event1.png';
import event2 from '../../../../images/event2.png';
import event3 from '../../../../images/event3.png';
import pro1 from '../../../../images/pro1.png';
import pro2 from '../../../../images/pro2.png';

function Events() {
  const EventsList = [
    {
      id: 0,
      image: event1,
      alt: 'Event',
      type: <FormattedMessage {...messages.EventType} />,
      title: <FormattedMessage {...messages.EventOneTitle} />,
      date: <FormattedMessage {...messages.EventDate} />,
      publisherIcon: pro1,
      publisherName: <FormattedMessage {...messages.EventPublisher} />,
    },
    {
      id: 1,
      image: event2,
      alt: 'Event',
      type: <FormattedMessage {...messages.EventType} />,
      title: <FormattedMessage {...messages.EventTwoTitle} />,
      date: <FormattedMessage {...messages.EventDate} />,
      publisherIcon: pro2,
      publisherName: <FormattedMessage {...messages.EventPublisher} />,
    },
    {
      id: 2,
      image: event1,
      alt: 'Event',
      type: <FormattedMessage {...messages.EventType} />,
      title: <FormattedMessage {...messages.EventOneTitle} />,
      date: <FormattedMessage {...messages.EventDate} />,
      publisherIcon: pro1,
      publisherName: <FormattedMessage {...messages.EventPublisher} />,
    },
    {
      id: 3,
      image: event3,
      alt: 'Event',
      type: <FormattedMessage {...messages.EventType} />,
      title: <FormattedMessage {...messages.EventThreeTitle} />,
      date: <FormattedMessage {...messages.EventDate} />,
      register: <FormattedMessage {...messages.EventRegister} />,
    },
  ];
  return (
    <Wrapper id="services">
      <Container fluid="xl">
        <Row>
          <Col lg={12}>
            <div className="header">
              <h4>Recent Events</h4>
              <Link to="/">View all</Link>
            </div>
          </Col>
        </Row>
        <Row>
          {EventsList.map(item => (
            <Col lg={3} md={6} sm={6} xs={12} key={item.id}>
              <div className="single_item">
                <div className="event_img">
                  <img src={event1} alt={item.alt} />
                  <div className="title">
                    <p>Bootcamp</p>
                  </div>
                </div>
                <div className="desc">
                  <h5>Online Fitness Bootcamp mit Sanda - Mo lunch</h5>
                  <p>Mon, Aug 16, 2021 6:00 PM PKT</p>

                  {item.register ? (
                    <div className="register">
                      <Link to="/accredited_education_list">
                        {item.register}
                      </Link>
                    </div>
                  ) : (
                    <div className="posted_by">
                      <div className="posted_profile">
                        <img src={item.publisherIcon} alt="Publisher" />
                      </div>
                      <p className="posted_title">{item.publisherName}</p>
                    </div>
                  )}
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </Wrapper>
  );
}

export default Events;
