import React from 'react';
import { FormGroup, Label, Input, Row, Col, Button } from 'reactstrap';
import { FormattedMessage } from 'react-intl';
import _ from 'lodash';
import messages from '../messages';

function AddQuiz(props) {
  const {
    res,
    lessonIndex,
    lessonsList,
    setLessonsList,
    saveQuestionHandler,
  } = props;
  // const [initialData, setInitialData] = React.useState([...res.quiz.questions])

  // React.useEffect(() => {
  //   setInitialData(res.quiz.questions)
  // },[res.quiz.questions])

  const addQuestionHandler = lessonIndex => {
    const lessonsArray = _.cloneDeep(lessonsList);
    const lessonItem = lessonsArray[lessonIndex];
    lessonItem.showQuiz = true;
    lessonItem.quiz.questions.push({
      question: '',
      possibleAnswers: [],
      rightAnswer: '',
    });
    setLessonsList(lessonsArray);
  };
  // const saveQuestions = () => {
  //   if(_.size(initialData) === 0) {
  //     return
  //   }
  //   saveQuestionHandler(initialData)
  // }
  // const saveQuestionHandler = (questionIndex, lessonIndex) => {
  //   const lessonsArray = _.cloneDeep(lessonsList);
  //   const lessonItem = lessonsArray[lessonIndex]
  //   lessonItem.quiz.savedQuestions.push(lessonItem.quiz.questions[questionIndex])
  //   lessonItem.quiz.questions.splice(questionIndex, 1)
  //   console.log(lessonItem);
  //   setLessonsList(lessonsArray)
  // };
  const removeQuestionHandler = (questionIndex, lessonIndex) => {
    const lessonsArray = _.cloneDeep(lessonsList);
    const lessonItem = lessonsArray[lessonIndex];
    if (
      lessonItem.quiz.questions.length === 1 &&
      lessonItem.quiz.savedQuestions.length === 0
    ) {
      lessonItem.quiz.questions.splice(questionIndex, 1);
      lessonItem.showQuestion = false;
      setLessonsList(lessonsArray);
    }
    lessonItem.quiz.questions.splice(questionIndex, 1);
    setLessonsList(lessonsArray);
  };
  const questionsChangeHandler = (e, questionIndex, lessonIndex) => {
    const lessonsArray = _.cloneDeep(lessonsList);
    const lessonItem = lessonsArray[lessonIndex];
    lessonItem.quiz.questions[questionIndex][e.target.name] = e.target.value;
    lessonItem.quiz.questions[questionIndex].question =
      lessonItem.quiz.questions[questionIndex].editableTitle;
    setLessonsList(lessonsArray);
  };

  return (
    <React.Fragment>
      <div className="profileHeader">
        <h4>Quiz</h4>
      </div>
      {/* {initialData.map((item, i) => */}
      {_.get(lessonsList, `[${lessonIndex}].quiz.questions`, []).map(
        (item, i) => (
          <div key={i} className="card mt-4 mb-5">
            <div className="card-body">
              <div className="add_forms">
                <div className="add_form">
                  <Row>
                    <Col lg={12} md={12} sm={12} xs={12}>
                      <FormGroup className="mb-3">
                        <Label for="sub_title">
                          <FormattedMessage {...messages.Type} />
                        </Label>
                        <Input
                          type="text"
                          name="editableTitle"
                          onChange={e =>
                            questionsChangeHandler(e, i, lessonIndex)
                          }
                          value={item.editableTitle}
                          id="sub_title"
                          placeholder="Type the Question"
                        />
                      </FormGroup>
                      <div className="quizAnswer">
                        <div className="Answers">
                          <div className="check_quiz">
                            <Input
                              className="radio"
                              name="rightAnswer"
                              type="radio"
                              onChange={e =>
                                questionsChangeHandler(e, i, lessonIndex)
                              }
                              value={item.firstAnswer}
                            />
                          </div>
                          <Input
                            placeholder="Answer 1"
                            name="firstAnswer"
                            onChange={e =>
                              questionsChangeHandler(e, i, lessonIndex)
                            }
                            value={item.firstAnswer}
                            type="text"
                          />
                        </div>
                        <div className="Answers">
                          <div className="check_quiz">
                            <Input
                              className="radio"
                              type="radio"
                              name="rightAnswer"
                              onChange={e =>
                                questionsChangeHandler(e, i, lessonIndex)
                              }
                              value={item.secondAnswer}
                            />
                          </div>
                          <Input
                            placeholder="Answer 2"
                            name="secondAnswer"
                            onChange={e =>
                              questionsChangeHandler(e, i, lessonIndex)
                            }
                            value={item.secondAnswer}
                            type="text"
                          />
                        </div>
                        <div className="Answers">
                          <div className="check_quiz">
                            <Input
                              className="radio"
                              type="radio"
                              onChange={e =>
                                questionsChangeHandler(e, i, lessonIndex)
                              }
                              name="rightAnswer"
                              value={item.thirdAnswer}
                            />
                          </div>
                          <Input
                            placeholder="Answer 3"
                            name="thirdAnswer"
                            onChange={e =>
                              questionsChangeHandler(e, i, lessonIndex)
                            }
                            value={item.thirdAnswer}
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
                            onClick={() =>
                              removeQuestionHandler(i, lessonIndex)
                            }
                          >
                            Cancel
                          </Button>
                          <Button
                            disabled={
                              !item.question ||
                              !item.firstAnswer ||
                              !item.secondAnswer ||
                              !item.thirdAnswer ||
                              !item.rightAnswer
                            }
                            className="btn_save"
                            onClick={() => saveQuestionHandler(i, lessonIndex)}
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
        ),
      )}
    </React.Fragment>
  );
}
export default AddQuiz;
