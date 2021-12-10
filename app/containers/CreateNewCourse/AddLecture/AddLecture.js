import React from 'react';
import {
  FormGroup,
  Label,
  Row,
  Col,
  Button,
  Progress,
} from 'reactstrap';
import { FormattedMessage } from 'react-intl';
import messages from '../messages';

import Dropzone from 'react-dropzone';
import {  FiUpload } from 'react-icons/fi';
import { IoIosClose } from 'react-icons/io';

function AddLecture(props) {
  const {lectureVideo, setLectureVideo} = props;
  return (
  <React.Fragment>
    <Row>
      <Col lg={12}>
        <div className="profileHeader">
          <h3>Lecture</h3>
        </div>
      </Col>
    </Row>
    <div className="add_lecture_list">
      <Row>
        <Col lg={6}>
          <FormGroup>
            <Label>Lecture 1</Label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter Lecture Title"
            />
          </FormGroup>
        </Col>
        <Col lg={6}>
          {lectureVideo === '' ? (
            <Dropzone
              accept="video/*"
              multiple={false}
              onDrop={acceptedFiles => {
                if (acceptedFiles && acceptedFiles[0]) {
                  const lecVdo = acceptedFiles[0];
                  lecVideo.lectureVideo = lecVdo;
                  // setcourseVideoFile(acceptedFiles[0]);
                  const reader = new FileReader();
                  reader.onload = e => {
                    setLectureVideo(e.target.result);
                  };
                  reader.readAsDataURL(acceptedFiles[0]);
                }
              }}
            >
              {({ getRootProps, getInputProps }) => (
                <div
                  className="upload_file"
                  {...getRootProps()}
                >
                  <input {...getInputProps()} />
                  <div
                    type="button"
                    className="uploadBtn"
                  >
                    <span>
                      <FiUpload />
                    </span>
                  </div>
                  <p>
                    <FormattedMessage
                      {...messages.UploadVideo}
                    />
                  </p>
                </div>
              )}
            </Dropzone>
          ) : (
            <div className="uploading_video">
              <div className="file_progress">
                <p>
                  File
                  <span>video File name here</span>
                  is uploading
                </p>
                <Progress value={70} />
              </div>
              <div className="del_video">
                <Button
                  // onClick={() => {
                  //   setLectureVideo('');
                  //   lecVideo.lectureVideo = null;
                  // }}
                  className="del_btn"
                >
                  <IoIosClose />
                </Button>
              </div>
            </div>
          )}
        </Col>
        <Col lg={12}>
          <div className="sec_footer">
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
                Save Lecture
              </Button>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  </React.Fragment>)

}

export default AddLecture;