/*
 * Main Services Component
 */
import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Container, Row, Col } from 'reactstrap';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import messages from './messages';
import education from '../../../../images/education.svg';
import livewebinar from '../../../../images/livewebinar.svg';
import goaledu from '../../../../images/goaledu.svg';
import gift from '../../../../images/gift.svg';
import Hackathon from '../../../../images/hackathon.svg';
import One from '../../../../images/one.svg';
import Wrapper from './Wrapper';

function MainServices() {
  const MainServicesList = [
    {
      id: 0,
      icon: education,
      alt: 'Accredited Education',
      title: <FormattedMessage {...messages.AccreditedEducation} />,
      desc: <FormattedMessage {...messages.AccreditedEducationDesc} />,
      redirectLink: 'course_list',
    },
    {
      id: 1,
      icon: livewebinar,
      alt: 'Live Webinars',
      title: <FormattedMessage {...messages.LiveWebinars} />,
      desc: <FormattedMessage {...messages.LiveWebinarsDesc} />,
      redirectLink: 'webinar_list',
    },
    {
      id: 2,
      icon: goaledu,
      alt: 'Goal Based Education',
      title: <FormattedMessage {...messages.GoalBasedEducation} />,
      desc: <FormattedMessage {...messages.GoalBasedEducationDesc} />,
      redirectLink: '/',
    },
    {
      id: 3,
      icon: gift,
      alt: 'Free Gifts &amp; Rewards',
      title: <FormattedMessage {...messages.FreeGiftsRewards} />,
      desc: <FormattedMessage {...messages.FreeGiftsRewardsDesc} />,
      redirectLink: '/',
    },
    {
      id: 4,
      icon: Hackathon,
      alt: 'Free Gifts &amp; Rewards',
      title: <FormattedMessage {...messages.hackathon} />,
      desc: <FormattedMessage {...messages.FreeGiftsRewardsDesc} />,
      redirectLink: 'hackathons_list',
    },
    {
      id: 5,
      icon: gift,
      alt: 'Free Gifts &amp; Rewards',
      title: <FormattedMessage {...messages.Bootcamp} />,
      desc: <FormattedMessage {...messages.FreeGiftsRewardsDesc} />,
      redirectLink: 'bootcamps_list',
    },
    {
      id: 6,
      icon: One,
      alt: 'Free Gifts &amp; Rewards',
      title: <FormattedMessage {...messages.OneonOne} />,
      desc: <FormattedMessage {...messages.FreeGiftsRewardsDesc} />,
      redirectLink: '/',
    },
  ];
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
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
        {/* <Row>
          {MainServicesList.map(item => (
            <Col lg={3} md={3} sm={6} xs={12} key={item.id}>
              <Link className="single_item" to={item.redirectLink}>
                <img src={item.icon} alt={item.alt} />
                <h5>{item.title}</h5>
                <p>{item.desc}</p>
              </Link>
            </Col>
          ))}
        </Row> */}
        <Row>
          <Col lg={12}>
            <Slider {...settings}>
              {MainServicesList.map(item => (
                <div key={item.id}>
                  <Link className="single_item" to={item.redirectLink}>
                    <img src={item.icon} alt={item.alt} />
                    <h5>{item.title}</h5>
                    <p>{item.desc}</p>
                  </Link>
                </div>
              ))}
            </Slider>
          </Col>
        </Row>
      </Container>
    </Wrapper>
  );
}
export default MainServices;
