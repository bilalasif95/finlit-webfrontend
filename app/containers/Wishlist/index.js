/*
 * Wishlist Page
 *
 */
import React from 'react';
// import InputBase from '@material-ui/core/InputBase';
import { Helmet } from 'react-helmet';
// import { FormattedMessage } from 'react-intl';
import '../../components/student-panel/Header/profile.css';
// import { withStyles } from '@material-ui/core/styles';
import {
  Container,
  Row,
  Col,
  Button,
  Breadcrumb,
  BreadcrumbItem,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import {
  AiFillStar,
  AiOutlineClockCircle,
  // AiOutlineDelete,
} from 'react-icons/ai';
import { BiUser } from 'react-icons/bi';
import { GrCart } from 'react-icons/gr';
import { FaHeart } from 'react-icons/fa';
// import messages from './messages';
import Wrapper from './Wrapper';
import CartImg from '../../images/cartImg.png';
import CartImg1 from '../../images/cartImg1.png';
import Bag from '../../images/bag.png';

export default function Wishlist() {
  return (
    <div className="sub_pages">
      <Helmet>
        <title>Wishlist</title>
        <meta name="description" content="Wishlist Page" />
      </Helmet>
      <Wrapper>
        <Container fluid="xl">
          <Row>
            <Col lg={12}>
              <div className="wishlist">
                <div className="breadcrumb_bar">
                  <Breadcrumb>
                    <BreadcrumbItem>
                      <Link to="/">Home</Link>
                    </BreadcrumbItem>
                    <BreadcrumbItem active>Wishlist</BreadcrumbItem>
                  </Breadcrumb>
                </div>
                <div className="wishlist_cont">
                  <div className="wishlist_item">
                    <div className="wishlist_details">
                      <div className="wishlist_img">
                        <img className="img-fluid" src={CartImg} alt="Cart" />
                      </div>
                      <div className="wishlist_desc">
                        <h2>Programming with Python</h2>
                        <p>By Kirill Eremenko</p>
                        <h3>$44.99</h3>
                        <div className="action_btns">
                          <Button>
                            <GrCart />
                          </Button>
                          <Button>
                            <FaHeart />
                          </Button>
                        </div>
                      </div>
                    </div>
                    <ul className="list-unstyled wishlist_outcomes">
                      <li>
                        <AiFillStar />
                        Course
                      </li>
                      <li>
                        <BiUser />
                        1917 Students
                      </li>
                      <li>
                        <AiOutlineClockCircle />
                        44.5Total hours
                      </li>
                      <li>
                        <img src={Bag} alt="Bag" />
                        All Levels
                      </li>
                    </ul>
                  </div>
                  <div className="wishlist_item">
                    <div className="wishlist_details">
                      <div className="wishlist_img">
                        <img className="img-fluid" src={CartImg1} alt="Cart1" />
                      </div>
                      <div className="wishlist_desc">
                        <h2>Programming with Python</h2>
                        <p>By Kirill Eremenko</p>
                        <h3>$44.99</h3>
                        <div className="action_btns">
                          <Button>
                            <GrCart />
                          </Button>
                          <Button>
                            <FaHeart />
                          </Button>
                        </div>
                      </div>
                    </div>
                    <ul className="list-unstyled wishlist_outcomes">
                      <li>
                        <AiFillStar />
                        Course
                      </li>
                      <li>
                        <BiUser />
                        1917 Students
                      </li>
                      <li>
                        <AiOutlineClockCircle />
                        44.5Total hours
                      </li>
                      <li>
                        <img src={Bag} alt="Bag" />
                        All Levels
                      </li>
                    </ul>
                  </div>
                  <div className="wishlist_item">
                    <div className="wishlist_details">
                      <div className="wishlist_img">
                        <img className="img-fluid" src={CartImg} alt="Cart" />
                      </div>
                      <div className="wishlist_desc">
                        <h2>Programming with Python</h2>
                        <p>By Kirill Eremenko</p>
                        <h3>$44.99</h3>
                        <div className="action_btns">
                          <Button>
                            <GrCart />
                          </Button>
                          <Button>
                            <FaHeart />
                          </Button>
                        </div>
                      </div>
                    </div>
                    <ul className="list-unstyled wishlist_outcomes">
                      <li>
                        <AiFillStar />
                        Course
                      </li>
                      <li>
                        <BiUser />
                        1917 Students
                      </li>
                      <li>
                        <AiOutlineClockCircle />
                        44.5 Total hours
                      </li>
                      <li>
                        <img src={Bag} alt="Bag" />
                        All Levels
                      </li>
                    </ul>
                  </div>
                  <div className="wishlist_item">
                    <div className="wishlist_details">
                      <div className="wishlist_img">
                        <img className="img-fluid" src={CartImg1} alt="Cart1" />
                      </div>
                      <div className="wishlist_desc">
                        <h2>Programming with Python</h2>
                        <p>By Kirill Eremenko</p>
                        <h3>$44.99</h3>
                        <div className="action_btns">
                          <Button>
                            <GrCart />
                          </Button>
                          <Button>
                            <FaHeart />
                          </Button>
                        </div>
                      </div>
                    </div>
                    <ul className="list-unstyled wishlist_outcomes">
                      <li>
                        <AiFillStar />
                        Course
                      </li>
                      <li>
                        <BiUser />
                        1917 Students
                      </li>
                      <li>
                        <AiOutlineClockCircle />
                        44.5 Total hours
                      </li>
                      <li>
                        <img src={Bag} alt="Bag" />
                        All Levels
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </Wrapper>
    </div>
  );
}
