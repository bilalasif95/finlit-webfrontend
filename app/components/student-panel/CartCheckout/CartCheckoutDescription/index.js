/*
 * Cart Checkout Description Component
 */
import React from 'react';
import { FormattedMessage } from 'react-intl';
import {
  AiFillStar,
  AiOutlineClockCircle,
  AiOutlineDelete,
} from 'react-icons/ai';
import { BiUser } from 'react-icons/bi';
import PropTypes from 'prop-types';
import { Breadcrumb, BreadcrumbItem, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import messages from './messages';
import Wrapper from './Wrapper';
import CartImg from '../../../../images/cartImg.png';
import CartImg1 from '../../../../images/cartImg1.png';
import Bag from '../../../../images/bag.png';
import Bin from '../../../../images/bin.png';
import Card from '../../../../images/cardImg1.png';
import Card2 from '../../../../images/cardImg2.png';
import CardIcon from '../../../../images/cardIcon.png';
import Cart from '../../../../images/cart.png';
import MoreCourses from '../../MoreCourses';
function CartCheckoutDescription(props) {
  return (
    <Wrapper id="list">
      <div className="cart_checkout">
        {/* <div className="header"> */}
        {/* <InputGroup>
            <Input type="text" name="search" id="seach" placeholder="Search" />
            <Button>
              <BiSearchAlt2 />
            </Button>
          </InputGroup> */}
        {/* <div className="cart"> */}
        {/* <div className="num_cont"> <IoMdSearch /></div> */}
        {/* <div className="num_cont">
              <IoMdCart />
              {props.details &&
              props.details.items &&
              props.details.items.length === 0 ? null : (
                <span className="no_item">
                  {props.details &&
                    props.details.items &&
                    props.details.items.length}
                </span>
              )}
            </div>
          </div>
        </div> */}
        {/* <div className="table-responsive">
          <table>
            <thead>
              <tr>
                <th>
                  <FormattedMessage {...messages.Courses} />
                </th>
                <th>
                  <FormattedMessage {...messages.Price} />
                </th>
                <th>
                  <FormattedMessage {...messages.Remove} />
                </th>
              </tr>
            </thead>
            <tbody>
              {props.details &&
                props.details.items &&
                props.details.items.length > 0 &&
                props.details.items.map(item => (
                  <tr key={item.id}>
                    <td>
                      <div className="detail">
                        <div className="icon">
                          <img
                            src={item.product && item.product.eventImage}
                            alt="Icon"
                          />
                        </div>
                        <div className="desc">
                          <div className="title">
                            {item.product && item.product.data.mainTitle}
                          </div>
                          <p>{item.product && item.product.data.subTitle}</p>
                          <div className="provider">
                            {item.providedby} {item.product.data.creator}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>${item.product && item.product.data.price}</td>
                    <td>
                      <Button
                        onClick={() => props.RemoveFromCart(item.cartItemId)}
                      >
                        <AiOutlineDelete />
                      </Button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div> */}
        <div className="breadcrumb_bar">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/">
                Home
              </Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>
              My Cart
            </BreadcrumbItem>
          </Breadcrumb>
        </div>
        <div className="cartDetailsCont">
          <div className="courseDetail">
            <div className="checkoutDetails">
              <div className="courseDetailImg">
                <img className="img-fluid" src={CartImg} alt="Cart" />
              </div>
              <div className="courseDetailText">
                <h2>Programming with Python</h2>
                <p>By Kirill Eremenko</p>
                <h3>$44.99</h3>
                <img className="deleteImg" src={Bin} alt="Bin" />
              </div>
            </div>
            <ul className="list-unstyled courseDetailList">
              <li>
                <AiFillStar />
                4.5 Instructor Rating
              </li>
              <li>
                <BiUser />
                1917 Students
              </li>
              <li>
                <AiOutlineClockCircle />
                4.5 Instructor Rating
              </li>
              <li>
                <img src={Bag} alt="Bag" />
                All Lavels
              </li>
            </ul>
          </div>

          <div className="courseDetail">
            <div className="checkoutDetails">
              <div className="courseDetailImg">
                <img className="img-fluid" src={CartImg1} alt="Cart1" />
              </div>
              <div className="courseDetailText">
                <h2>Programming with Python</h2>
                <p>By Kirill Eremenko</p>
                <h3>$44.99</h3>
                <img className="deleteImg" src={Bin} alt="Bin" />
              </div>
            </div>
            <ul className="list-unstyled courseDetailList">
              <li>
                <AiFillStar />
                4.5 Instructor Rating
              </li>
              <li>
                <BiUser />
                1917 Students
              </li>
              <li>
                <AiOutlineClockCircle />
                4.5 Instructor Rating
              </li>
              <li>
                <img src={Bag} alt="Bag" />
                All Lavels
              </li>
            </ul>
          </div>
          <div className="customBorder" />
          <MoreCourses />
          {/* <div className="moreCourses">
            <h2>More courses for you</h2>
            <div className="row">
              <div className="col-md-6">
                <div className="card">
                  <img className="card-img-top" src={Card2} alt="CardCap" />
                  <div className="card-body">
                    <h5 className="card-title">
                      The Complete Android N Developer Course
                    </h5>
                    <ul className="list-unstyled cardList">
                      <li>
                        <img src={CardIcon} alt="CardIcon" />
                        Advance
                      </li>
                      <li>
                        <img src={CardIcon} alt="CardIcon" />
                        14
                      </li>
                      <li>
                        <img src={CardIcon} alt="CardIcon" />
                        5.0
                      </li>
                    </ul>
                  </div>
                  <div className="card-footer">
                    <div className="price">
                      <h4>$19.00</h4>
                    </div>
                    <div className="addCart">
                      <button type="button" className="btn btn-default">
                        <img src={Cart} alt="Cart" />
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card">
                  <img className="card-img-top" src={Card} alt="CardCap" />
                  <div className="card-body">
                    <h5 className="card-title">
                      The Complete Android N Developer Course
                    </h5>
                    <ul className="list-unstyled cardList">
                      <li>
                        <img src={CardIcon} alt="CardIcon" />
                        Advance
                      </li>
                      <li>
                        <img src={CardIcon} alt="CardIcon" />
                        14
                      </li>
                      <li>
                        <img src={CardIcon} alt="CardIcon" />
                        5.0
                      </li>
                    </ul>
                  </div>
                  <div className="card-footer">
                    <div className="price">
                      <h4>$19.00</h4>
                    </div>
                    <div className="addCart">
                      <button type="button" className="btn btn-default">
                        <img src={Cart} alt="Cart" />
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
        <div className="footer">
          <div className="sub_total">
            {props.details.total > 0 ? (
              <p>
                <FormattedMessage {...messages.Subtotal} /> $
                {props.details.total}
              </p>
            ) : (
              ''
            )}
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
CartCheckoutDescription.propTypes = {
  details: PropTypes.any,
  RemoveFromCart: PropTypes.any,
};
export default CartCheckoutDescription;
