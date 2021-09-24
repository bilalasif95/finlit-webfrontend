/*
 * Cart Checkout Description Component
 */
import React from 'react';
import { FormattedMessage } from 'react-intl';
import { IoMdCart } from 'react-icons/io';
import { AiOutlineDelete } from 'react-icons/ai';
// import { AiFillHeart } from 'react-icons/ai';
// import { Link } from 'react-router-dom';
import { InputGroup, Input, Button } from 'reactstrap';
import messages from './messages';
import Wrapper from './Wrapper';
import reg from '../../../../images/reg.png';

function CartCheckoutDescription(props) {
  console.log('detailsCart', props.details);

  return (
    <Wrapper id="list">
      <div className="cart_checkout">
        <div className="header">
          {/* <InputGroup>
            <Input type="text" name="search" id="seach" placeholder="Search" />
            <Button>
              <BiSearchAlt2 />
            </Button>
          </InputGroup> */}
          <div className="cart">
            <div className="num_cont">
              <IoMdCart />
              <span className="no_item">
                {props.details &&
                  props.details.items &&
                  props.details.items.length}
              </span>
            </div>
          </div>
        </div>
        <div className="table-responsive">
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
                            {/* {item.providedby} {item.product.data.creator} */}
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
        </div>
        <div className="footer">
          <div className="sub_total">
            <p>
              <FormattedMessage {...messages.Subtotal} /> ${props.details.total}
            </p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default CartCheckoutDescription;
