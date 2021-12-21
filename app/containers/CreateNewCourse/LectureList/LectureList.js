import React from 'react';
import {
  FormGroup,
  Label,
  Row,
  Col,
  Button,
} from 'reactstrap';
import EditLectureVideoUpload from '../LectureVideoUpload/EditLectureVideoUpload';
import { FiEdit3 } from 'react-icons/fi';
import { MdDelete, MdCheckCircle } from 'react-icons/md';
import { apiPutRequest, apiDeleteRequest } from '../../../helpers/Requests';


function LectureList(props) {
  const { res, toggleLectureHandler, editToggleLectureHandler, addLectureChangeHandler,
    lessonIndex, setLoading, loading, lessonsList, setLessonsList } = props;

  const cancelLectureHandler = (lectureIndex, lessonIndex) => {
    const lessonsArray = _.cloneDeep(lessonsList);
    const lessonItem = lessonsArray[lessonIndex];
    lessonItem.savedLectureList[lectureIndex].editView = false;
    lessonItem.savedLectureList[lectureIndex].editableTitle = lessonItem.savedLectureList[lectureIndex].title
    setLessonsList(lessonsArray)
  }

  const updateLectureHandler = async (lectureIndex, lessonIndex, id) => {
    const lessonsArray = _.cloneDeep(lessonsList)
    const lessonItem = lessonsArray[lessonIndex];
    lessonItem.savedLectureList[lectureIndex].title = lessonItem.savedLectureList[lectureIndex].editableTitle;
    const payload = {
      title: lessonItem.savedLectureList[lectureIndex].title,
      lectureVideo: lessonItem.savedLectureList[lectureIndex].lectureVideo,
      lectureTime: lessonItem.savedLectureList[lectureIndex].lectureTime,
      lessonId: lessonItem.lessonId
    }
    setLoading(true)
    try {
      const res = await apiPutRequest(`api/lecture/updateAsDraft/${id}`, payload);
      if (!res) {
        throw 'No Internet Access'
      }
      if (res.status !== 200) {
        throw 'Something Went Wrong'
      }
      lessonItem.savedLectureList[lectureIndex].editView = false;
      lessonItem.savedLectureList[lectureIndex].title = lessonItem.savedLectureList[lectureIndex].editableTitle
      setLessonsList(lessonsArray);
      setLoading(false)
    } catch {
      setLoading(false)
    }
    lessonItem.savedLectureList[lectureIndex].editView = false;
    lessonItem.savedLectureList[lectureIndex].title = lessonItem.savedLectureList[lectureIndex].editableTitle
    setLessonsList(lessonsArray);
  }

  const deleteLecturehandler = async (lectureIndex, lessonIndex, id) => {
    const lessonsArray = _.cloneDeep(lessonsList)
    const lessonItem = lessonsArray[lessonIndex];
    setLoading(true)
    try {
      const res = await apiDeleteRequest(`api//lecture/deleteDraft/${id}`);
      if (!res) {
        throw 'No Internet Access'
      }
      if (res.status !== 200) {
        throw 'Something Went Wrong'
      }
      if (lessonItem.lectureList.length === 0 && lessonItem.savedLectureList.length === 1) {
        lessonItem.savedLectureList.splice(lectureIndex, 1)
        lessonItem.showLecture = false;
        setLessonsList(lessonsArray)
      }
      lessonItem.savedLectureList.splice(lectureIndex, 1)
      setLessonsList(lessonsArray);
      setLoading(false)
    } catch {
      setLoading(false)
    }
    // if (lessonItem.lectureList.length === 0 && lessonItem.savedLectureList.length === 1) {
    //   lessonItem.savedLectureList.splice(lectureIndex, 1)
    //   lessonItem.showLecture = false;
    //   setLessonsList(lessonsArray)
    // }
    // lessonItem.savedLectureList.splice(lectureIndex, 1)
    // setLessonsList(lessonsArray);
  }

  return (
    <React.Fragment>
      <Row>
        <Col lg={12}>
          <div className="custom_accordin">
            {res.savedLectureList.length > 0 && res.savedLectureList.map((item, i) =>
              <div key={i} className="accordin_item">
                <div className="accordin_header">
                  <div className="title">
                    <Button
                      className="title_btn"
                      onClick={() => toggleLectureHandler(i, lessonIndex)}
                    >
                      <div className="tick_icon">
                        <MdCheckCircle />
                      </div>
                      {item.title}
                    </Button>
                  </div>
                  <div className="action_btns">
                    <Button>
                      <FiEdit3
                        onClick={() =>
                          editToggleLectureHandler(i, lessonIndex)
                        }
                      />
                    </Button>
                    <Button
                      disabled={loading}
                      onClick={() => deleteLecturehandler(i, lessonIndex, item.id)}
                    >
                      <MdDelete />
                    </Button>
                  </div>
                </div>
                {res.savedLectureList[i].readView === true && <div className="accordin_content">
                  <div className="section_in">
                    <Row>
                      <Col lg={6}>
                        <FormGroup>
                          <Label>Lecture {i + 1}</Label>
                          <input
                            type="text"
                            className="form-control"
                            name="title"
                            value={item.title}
                            readOnly
                          />
                        </FormGroup>
                      </Col>
                      <Col lg={6}>
                        <EditLectureVideoUpload
                          lessonsList={lessonsList}
                          setLessonsList={setLessonsList}
                          lessonIndex={lessonIndex}
                          lectureIndex={i} />

                      </Col>
                    </Row>
                  </div>
                </div>}
                {res.savedLectureList[i].editView === true && <div className="accordin_content">
                  <div className="section_in">
                    <Row>
                      <Col lg={6}>
                        <FormGroup>
                          <Label>Lecture {i + 1}</Label>
                          <input
                            type="text"
                            className="form-control"
                            name="title"
                            value={item.editableTitle}
                            onChange={(e) => addLectureChangeHandler(e, i, lessonIndex)}
                            placeholder="Enter Lecture Title"
                          />
                        </FormGroup>
                      </Col>
                      <Col lg={6}>
                        <EditLectureVideoUpload
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
                              onClick={() => cancelLectureHandler(i, lessonIndex)}
                            >
                              Cancel
                            </Button>
                            <Button
                              className="btn_save"
                              disabled={!item.lectureVideo || !item.editableTitle || !loading}
                              onClick={() => updateLectureHandler(i, lessonIndex, item.id)}
                            >
                              Save Lecture
                            </Button>

                          </div>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </div>}

              </div>
            )}
          </div>
        </Col>
      </Row>
    </React.Fragment>)

}

export default LectureList;