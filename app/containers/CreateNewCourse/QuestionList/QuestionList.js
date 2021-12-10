import React from 'react';
import {
  Row,
  Col,
  Button,
} from 'reactstrap';
import { FiEdit3 } from 'react-icons/fi';
import { MdDelete, MdCheckCircle } from 'react-icons/md';
import AddQuiz from '../AddQuiz/AddQuiz';
function QuestionList(props) {
  const { lectureVideo, setLectureVideo } = props;
  return (
    <React.Fragment>
      <Row>
        <Col lg={12}>
          <div className="custom_accordin">
            <div className="accordin_item">
              <div className="accordin_header">
                <Button
                  className="title_btn"
                // onClick={() => toggleHandler(index)}
                >
                  <div className="tick_icon">
                    <MdCheckCircle />
                  </div>
                  Question
                </Button>
                <div className="action_btns">
                  <Button>
                    <FiEdit3
                    // onClick={() =>
                    //   editToggleHandler(index, item)
                    // }
                    />
                  </Button>
                  <Button
                  // onClick={e => onDeleteSection(e, index)}
                  >
                    <MdDelete />
                  </Button>
                </div>
              </div>
              <div className="accordin_content">
                <div className="section_in">
                  <AddQuiz />
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </React.Fragment>)

}

export default QuestionList;