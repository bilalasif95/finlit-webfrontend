import React from 'react';
import {
  Row,
  Col,
  Button,
} from 'reactstrap';
import { FiEdit3 } from 'react-icons/fi';
import { MdDelete, MdCheckCircle } from 'react-icons/md';
import EditQuiz from '../AddQuiz/EditQuiz';
function QuestionList(props) {
  const { res,
    lessonIndex,
    lessonsList,
    setLessonsList,
    toggleQuestionHandler,
    editToggleQuestionHandler } = props;

  const deleteQuestionHandler = (questionIndex, lessonIndex) => {
    const lessonsArray = _.cloneDeep(lessonsList);
    const lessonItem = lessonsArray[lessonIndex]
    if (lessonItem.quiz.questions.length === 0 && lessonItem.quiz.savedQuestions.length === 1) {
      lessonItem.quiz.savedQuestions.splice(questionIndex, 1)
      lessonItem.showQuestion = false;
      setLessonsList(lessonsArray)
    }
    lessonItem.quiz.savedQuestions.splice(questionIndex, 1)
    setLessonsList(lessonsArray)
  }
  return (
    <React.Fragment>
      <Row>
        <Col lg={12}>
          <div className="custom_accordin">
            {res.quiz.savedQuestions.length > 0 && res.quiz.savedQuestions.map((item, i) =>
              <div key={i} className="accordin_item">
                <div className="accordin_header">
                  <Button
                    className="title_btn"
                    onClick={() => toggleQuestionHandler(i, lessonIndex)}
                  >
                    <div className="tick_icon">
                      <MdCheckCircle />
                    </div>
                    Question {i + 1} : {item.question}
                  </Button>
                  <div className="action_btns">
                    <Button>
                      <FiEdit3
                        onClick={() => editToggleQuestionHandler(i, lessonIndex)}
                      />
                    </Button>
                    <Button
                      onClick={e => deleteQuestionHandler(i, lessonIndex)}
                    >
                      <MdDelete />
                    </Button>
                  </div>
                </div>
                {res.quiz.savedQuestions[i].readView === true && <div className="accordin_content">
                  <div className="section_in">
                    <EditQuiz
                      lessonIndex={lessonIndex}
                      lessonsList={lessonsList}
                      setLessonsList={setLessonsList}
                      questionIndex={i}
                      item={item}
                      readOnly={true} />
                  </div>
                </div>}
                {res.quiz.savedQuestions[i].editView === true && <div className="accordin_content">
                  <div className="section_in">
                    <EditQuiz
                      lessonIndex={lessonIndex}
                      lessonsList={lessonsList}
                      setLessonsList={setLessonsList}
                      questionIndex={i}
                      readOnly={false}
                      item={item} />
                  </div>
                </div>}
              </div>
            )}

          </div>
        </Col>
      </Row>
    </React.Fragment>)

}

export default QuestionList;