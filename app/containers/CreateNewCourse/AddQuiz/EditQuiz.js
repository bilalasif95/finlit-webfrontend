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
import _ from 'lodash';
import Dropzone from 'react-dropzone';
import { FiUpload } from 'react-icons/fi';
import { IoIosClose, IoMdChatboxes } from 'react-icons/io';

function EditQuiz(props) {
    const { res, lessonIndex, lessonsList, setLessonsList,
        saveQuestionHandler, readOnly, item, questionIndex } = props;
    // const [initialData, setInitialData] = React.useState([...res.quiz.questions])

    // React.useEffect(() => {
    //   setInitialData(res.quiz.questions)
    // },[res.quiz.questions])


    const addQuestionHandler = (lessonIndex) => {
        const lessonsArray = _.cloneDeep(lessonsList);
        const lessonItem = lessonsArray[lessonIndex]
        lessonItem.showQuiz = true;
        lessonItem.quiz.questions.push({
            question: "", possibleAnswers: [], rightAnswer: ""
        })
        setLessonsList(lessonsArray);
    };


    const updateQuestionHandler = (questionIndex, lessonIndex) => {
        const lessonsArray = _.cloneDeep(lessonsList);
        const lessonItem = lessonsArray[lessonIndex]
        lessonItem.quiz.savedQuestions[questionIndex].editView = false
        lessonItem.quiz.savedQuestions[questionIndex].question = lessonItem.quiz.savedQuestions[questionIndex].editableTitle
        setLessonsList(lessonsArray)
    };

    const questionsChangeHandler = (e, questionIndex, lessonIndex) => {
        const lessonsArray = _.cloneDeep(lessonsList);
        const lessonItem = lessonsArray[lessonIndex];
        lessonItem.quiz.savedQuestions[questionIndex][e.target.name] = e.target.value;
        // setInitialData((prevState) => ({ ...prevState, [questionIndex][e.target.name] : e.target.value}))
        // questions[questionIndex][e.target.name] = e.target.value;
        // setInitialData(questions);
        // console.log(initialData)
        setLessonsList(lessonsArray)
    }

    const cancelQuestionHandler =(questionIndex, lessonIndex)=> {
        const lessonsArray = _.cloneDeep(lessonsList);
        const lessonItem = lessonsArray[lessonIndex];
        lessonItem.quiz.savedQuestions[questionIndex].editView = false
        setLessonsList(lessonsArray)
    }

    return (
        <React.Fragment>
            {/* {initialData.map((item, i) => */}
            {/* {_.get(lessonsList, `[${lessonIndex}].quiz.questions`, []).map((item, i) => */}
            {/* <div  className="card">
          <div className="card-body"> */}
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
                                    name="editableTitle"
                                    readOnly={readOnly}
                                    onChange={(e) => questionsChangeHandler(e, questionIndex, lessonIndex)}
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
                                            disabled={readOnly}
                                            type="radio"
                                            onChange={(e) => questionsChangeHandler(e, questionIndex, lessonIndex)}
                                            value={item.firstAnswer}
                                            checked={item.firstAnswer === item.rightAnswer}
                                        />
                                    </div>
                                    <Input
                                        placeholder="Answer 1"
                                        name="firstAnswer"
                                        readOnly={readOnly}
                                        onChange={(e) => questionsChangeHandler(e, questionIndex, lessonIndex)}
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
                                            disabled={readOnly}
                                            onChange={(e) => questionsChangeHandler(e, questionIndex, lessonIndex)}
                                            value={item.secondAnswer}
                                            checked={item.secondAnswer === item.rightAnswer}

                                        />
                                    </div>
                                    <Input
                                        placeholder="Answer 2"
                                        name="secondAnswer"
                                        readOnly={readOnly}
                                        onChange={(e) => questionsChangeHandler(e, questionIndex, lessonIndex)}
                                        value={item.secondAnswer}
                                        type="text"
                                    />
                                </div>
                                <div className="Answers">
                                    <div className="check_quiz">
                                        <Input
                                            className="radio"
                                            type="radio"
                                            disabled={readOnly}
                                            onChange={(e) => questionsChangeHandler(e, questionIndex, lessonIndex)}
                                            name="rightAnswer"
                                            value={item.thirdAnswer}
                                            checked={item.thirdAnswer === item.rightAnswer}

                                        />
                                    </div>
                                    <Input
                                        placeholder="Answer 3"
                                        name="thirdAnswer"
                                        readOnly={readOnly}
                                        onChange={(e) => questionsChangeHandler(e, questionIndex, lessonIndex)}
                                        value={item.thirdAnswer}
                                        type="text"
                                    />
                                </div>
                            </div>
                        </Col>
                        <Col hidden={readOnly} lg={12}>
                            <div className="sec_footer mt-4">
                                <div className="bottom_btns">
                                    <Button
                                        className="btn_back"
                                        onClick={() => cancelQuestionHandler(questionIndex, lessonIndex)}
                                    >
                                        Cancel
                                    </Button>
                                    <Button
                                        disabled={!item.question || !item.firstAnswer || !item.secondAnswer || !item.thirdAnswer || !item.rightAnswer}
                                        className="btn_save"
                                        onClick={() => updateQuestionHandler(questionIndex, lessonIndex)}
                                    >
                                        Save Question
                                    </Button>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
            {/* </div>
        </div> */}
            {/* )} */}

        </React.Fragment>)

}

export default EditQuiz;