import React from 'react';
import {
  Row,
  Col,
  Button,
} from 'reactstrap';
import { FiEdit3 } from 'react-icons/fi';
import { MdDelete, MdCheckCircle } from 'react-icons/md';
function QuestionList(props) {
  const { lectureVideo, setLectureVideo } = props;
  return (
    <React.Fragment>
      <Row>
        <Col lg={12}>
          <div className="details_list mt-5">
            {/* {detailsSection.map((res, index) => ( */}
            <div className="item">
              <Button className="title_btn">
                <MdCheckCircle /> Question 1
              </Button>
              <div className="action_btns">
                <Button>
                  <FiEdit3 />
                </Button>
                <Button
                // onClick={e => onDeleteSection(e, index)}
                >
                  <MdDelete />
                </Button>
              </div>
            </div>
            {/* ))} */}
          </div>
        </Col>
      </Row>
    </React.Fragment>)

}

export default QuestionList;