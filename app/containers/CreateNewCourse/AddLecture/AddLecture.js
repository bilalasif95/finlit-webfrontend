import React from 'react';
import { FormGroup, Label, Row, Col, Button } from 'reactstrap';
import LectureVideoUpload from '../LectureVideoUpload/LectureVideoUpload';

function AddLecture(props) {
  const { removeLectureHandler, addLectureChangeHandler, lessonsList, setLessonsList,
    lessonIndex, item, loading, saveLectureHandler } = props;
  return (
    <React.Fragment>
      <Row>
        <Col lg={12}>
          <div className="profileHeader">
            <h3>Lecture</h3>
          </div>
        </Col>
      </Row>
      {item.lectureList.length > 0 &&
        item.lectureList.map((item, i) => (
          <div key={i} className="add_lecture_list">
            <Row>
              <Col lg={6}>
                <FormGroup>
                  <Label>Lecture {i + 1}</Label>
                  <input
                    type="text"
                    className="form-control"
                    name="title"
                    value={item.title}
                    onChange={(e) => addLectureChangeHandler(e, i, lessonIndex)}
                    placeholder="Enter Lecture Title"
                  />
                </FormGroup>
              </Col>
              <Col lg={6}>
                <LectureVideoUpload
                  lessonsList={lessonsList}
                  setLessonsList={setLessonsList}
                  lessonIndex={lessonIndex}
                  lectureIndex={i} />

              </Col>
              <Col lg={12}>
                <div className="sec_footer">
                  <div className="bottom_btns">
                    <Button
                      className="btn_back"
                      onClick={() => removeLectureHandler(i, lessonIndex)}
                    >
                      Cancel
                    </Button>
                    <Button
                      className="btn_save"
                      disabled={!item.lectureVideo || !item.title || loading}
                      onClick={() => saveLectureHandler(i, lessonIndex)}
                    >
                      Save Lecture
                    </Button>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        ))}
    </React.Fragment>
  );
}

export default AddLecture;
