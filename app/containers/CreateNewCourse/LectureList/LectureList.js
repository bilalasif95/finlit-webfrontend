import React from 'react';
import {
  Row,
  Col,
  Button,
} from 'reactstrap';
import { FiEdit3 } from 'react-icons/fi';
import { MdDelete, MdCheckCircle } from 'react-icons/md';
import AddLecture from '../AddLecture/AddLecture';
function LectureList(props) {
  const { res, toggleLectureHandler, editToggleLectureHandler, lessonIndex, 
    toggleLectureEditView, toggleLectureReadView } = props;
  // console.log(item,"=====")
  return (
    <React.Fragment>
      <Row>
        <Col lg={12}>
        <div className="custom_accordin  mt-5">
        {res.savedLectureList.length > 0 && res.savedLectureList.map((item, i) => 
              <div key={i} className="accordin_item">
              <div className="accordin_header">
                <Button
                  className="title_btn"
                  onClick={() => toggleLectureHandler(i, lessonIndex)}
                >
                  <div className="tick_icon">
                    <MdCheckCircle />
                  </div>
                 {item.title}
                </Button>
                <div className="action_btns">
                  <Button>
                    <FiEdit3
                      onClick={() =>
                        editToggleLectureHandler(i, lessonIndex)
                      }
                    />
                  </Button>
                  <Button
                    // onClick={e => onDeleteSection(e, index)}
                  >
                    <MdDelete />
                  </Button>
                </div>
              </div>
                {res.savedLectureList[i].readView ===  true && <div className="accordin_content">
                  <div className="section_in">
                   {/* <AddLecture /> */}
                   <h2> Usman Read</h2>
                  </div>
                </div>} 
                {res.savedLectureList[i].editView ===  true && <div className="accordin_content">
                  <div className="section_in">
                  <h2> Usman toggleEditView</h2>
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