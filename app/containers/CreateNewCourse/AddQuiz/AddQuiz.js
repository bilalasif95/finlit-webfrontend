import React from 'react';
import {
  FormGroup,
  Label,
  Input,
  Row,
  Col,
  Button,
  Progress,
} from 'reactstrap';
import { FormattedMessage } from 'react-intl';
import messages from '../messages';

import Dropzone from 'react-dropzone';
import { FiUpload } from 'react-icons/fi';
import { IoIosClose } from 'react-icons/io';

function AddQuiz(props) {
  const { lectureVideo, setLectureVideo } = props;
  return (
    <React.Fragment>
      <div className="profileHeader">
        <h3>Quiz</h3>
      </div>
      <div className="card mt-4 mb-5">
        <div className="card-body">
          <div className="add_forms">
            <div className="add_form">
              <Row>
                <Col lg={12} md={12} sm={12} xs={12}>
                  <FormGroup className="mb-3">
                    <Label for="sub_title">
                      <FormattedMessage
                        {...messages.Type}
                      />
                    </Label>
                    <Input
                      type="text"
                      name="title"
                      id="sub_title"
                      placeholder="Type the Question"
                    />
                  </FormGroup>
                  <div className="quizAnswer">
                    <div className="Answers">
                      <div className="check_quiz">
                        <Input
                          className="radio"
                          type="radio"
                          id="age1"
                          name="age"
                          value="30"
                        />
                      </div>
                      <Input
                        placeholder="Answer 1"
                        type="text"
                      />
                    </div>
                    <div className="Answers">
                      <div className="check_quiz">
                        <Input
                          className="radio"
                          type="radio"
                          id="age2"
                          name="age"
                          value="60"
                        />
                      </div>
                      <Input
                        placeholder="Answer 2"
                        type="text"
                      />
                    </div>
                    <div className="Answers">
                      <div className="check_quiz">
                        <Input
                          className="radio"
                          type="radio"
                          id="age3"
                          name="age"
                          value="100"
                        />
                      </div>
                      <Input
                        placeholder="Answer 3"
                        type="text"
                      />
                    </div>
                  </div>
                </Col>
                <Col lg={12}>
                  <div className="sec_footer mt-4">
                    <div className="bottom_btns">
                      <Button
                        className="btn_back"
                      // onClick={handleCourseStepOne}
                      >
                        Cancel
                      </Button>
                      <Button
                        className="btn_save"
                      // onClick={handleCourseStepThree}
                      >
                        Save Question
                      </Button>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>)

}

export default AddQuiz;