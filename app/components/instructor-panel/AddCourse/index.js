import React, { useState, useRef } from 'react';
import JoditEditor from 'jodit-react';
import { FormattedMessage } from 'react-intl';
import {
  Col,
  Button,
  FormGroup,
  Label,
  Row,
  Input,
  InputGroup,
  InputGroupAddon,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  FormText,
} from 'reactstrap';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import { IoMdAttach, IoIosClose, IoMdClose } from 'react-icons/io';
import { MdEdit } from 'react-icons/md';
// MdPhotoLibrary
import { FaVideo } from 'react-icons/fa';
import Dropzone from 'react-dropzone';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputBase from '@material-ui/core/InputBase';
import { withStyles } from '@material-ui/core/styles';
import Wrapper from './Wrapper';
import messages from './messages';
import { JoditEditorConfig } from '../../../config/config';
import 'react-accessible-accordion/dist/fancy-example.css';
import TagsComponent from '../../Tag/TagsComponent';

const BootstrapInput = withStyles(theme => ({
  root: {
    'label + &': {
      marginTop: 0,
    },
  },
  input: {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #d8d8d8',
    fontSize: 14,
    color: '#484848',
    padding: '0.82rem 1.5rem 0.82rem 1rem',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Lato font.
    fontFamily: ['Lato', 'sans-serif'].join(','),
    '&:focus': {
      borderRadius: 4,
    },
  },
}))(InputBase);

function AddCourse() {
  const editor = useRef(null);
  const [content, setContent] = useState('');
  const [language, setLanguage] = useState('0');
  const [category, setCategory] = useState('0');
  // const [courseImage, setCourseImage] = useState('');
  // const [courseVideo, setCourseVideo] = useState('');
  const [lectureVideo, setLectureVideo] = useState('');
  const data = { courseImage: '' };
  // const dataVideo = { courseVideo: null };
  const lecVideo = { lectureVideo: '' };
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  return (
    <Wrapper>
      <div className="add_forms">
        {/* <p>
          <FormattedMessage {...messages.AllFields} />
        </p> */}
        <div className="add_form">
          <Accordion preExpanded={['a']}>
            <AccordionItem uuid="a">
              <AccordionItemHeading className="headingBtn">
                <AccordionItemButton>
                  <FormattedMessage {...messages.AboutCourse} />
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <Row>
                  <Col lg={4} md={6} sm={6} xs={12}>
                    <FormGroup>
                      <Label for="maintitle">
                        <FormattedMessage {...messages.MainTitle} />
                      </Label>
                      <Input
                        type="text"
                        name="maintitle"
                        id="maintitle"
                        placeholder="Enter Your Title"
                      />
                      <FormText>
                        <div className="error">
                          {/* <span>Error message</span> */}
                        </div>
                        <span>0/60</span>
                      </FormText>
                    </FormGroup>
                  </Col>
                  <Col lg={4} md={6} sm={6} xs={12}>
                    <FormGroup>
                      <Label for="subtitle">
                        <FormattedMessage {...messages.SubTitle} />
                      </Label>
                      <Input
                        type="text"
                        name="subtitle"
                        id="subtitle"
                        placeholder="Enter Your Sub Title"
                      />
                      <FormText>
                        <div className="error">
                          {/* <span>Error message</span> */}
                        </div>
                        <span>0/60</span>
                      </FormText>
                    </FormGroup>
                  </Col>
                  <Col lg={4} md={6} sm={6} xs={12}>
                    <FormGroup>
                      <FormControl fullWidth>
                        <Label>
                          <FormattedMessage {...messages.CourseLanguage} />
                        </Label>
                        <Select
                          value={language}
                          onChange={e => setLanguage(e.target.value)}
                          input={<BootstrapInput />}
                          fullWidth
                          MenuProps={{
                            anchorOrigin: {
                              vertical: 'bottom',
                              horizontal: 'left',
                            },
                            getContentAnchorEl: null,
                          }}
                        >
                          <MenuItem value={0}>Select Language</MenuItem>
                          <MenuItem value={1}>USA</MenuItem>
                          <MenuItem value={2}>KSA</MenuItem>
                          <MenuItem value={3}>KR</MenuItem>
                        </Select>
                      </FormControl>
                    </FormGroup>
                  </Col>
                  <Col lg={4} md={6} sm={6} xs={12}>
                    <FormGroup className="custom">
                      <Label for="price">
                        <FormattedMessage {...messages.Price} />
                      </Label>
                      <InputGroup>
                        <Input
                          type="text"
                          name="price"
                          id="price"
                          placeholder="Enter Price"
                        />
                        <InputGroupAddon addonType="prepend">$</InputGroupAddon>
                      </InputGroup>
                      {/* <FormText color="danger">
                  <p className="error"> Error message</p>
                </FormText> */}
                    </FormGroup>
                  </Col>
                  <Col lg={4} md={6} sm={6} xs={12}>
                    <FormGroup>
                      <Label for="category">
                        <FormattedMessage {...messages.CourseCategory} />
                      </Label>
                      {/* <Input
                            type="text"
                            name="category"
                            id="category"
                            placeholder="Select Category"
                          /> */}
                      <Select
                        value={category}
                        onChange={e => setCategory(e.target.value)}
                        input={<BootstrapInput />}
                        fullWidth
                        MenuProps={{
                          anchorOrigin: {
                            vertical: 'bottom',
                            horizontal: 'left',
                          },
                          getContentAnchorEl: null,
                        }}
                      >
                        <MenuItem value={0}>Select Category</MenuItem>
                        <MenuItem value={1}>Category 1</MenuItem>
                        <MenuItem value={2}>Category 2</MenuItem>
                        <MenuItem value={3}>Category 3</MenuItem>
                        <MenuItem value={4}>Category 4</MenuItem>
                        <MenuItem value={5}>Category 5</MenuItem>
                      </Select>
                      {/* <FormText color="danger">
                  <p className="error"> Error message</p>
                </FormText> */}
                    </FormGroup>
                  </Col>
                  <Col lg={4} md={6} sm={6} xs={12}>
                    <FormGroup>
                      <Label for="price">
                        <FormattedMessage {...messages.AddTag} />
                      </Label>
                      <TagsComponent data={{ tags: [] }} tags={[]} />
                      {/* <FormText color="danger">
                  <p className="error"> Error message</p>
                </FormText> */}
                    </FormGroup>
                  </Col>
                  <Col lg={12} md={12} sm={12} xs={12}>
                    <FormGroup>
                      <Label for="description">
                        <FormattedMessage {...messages.Description} />
                      </Label>
                      <JoditEditor
                        ref={editor}
                        value={content}
                        config={JoditEditorConfig}
                        tabIndex={0} // tabIndex of textarea
                        onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
                      />
                      <FormText>
                        <div className="error">
                          {/* <span>Error message</span> */}
                        </div>
                        <span>0/5000</span>
                      </FormText>
                    </FormGroup>
                  </Col>
                  {/* <Col lg={6}>
                    <p>Preview:</p>
                    <div>
                      <div>
                        <div>
                          {logo === '' ? (
                            'dummy'
                          ) : (
                            <img
                              src={
                                data.logo
                                  ? typeof data.logo === 'string'
                                    ? data.logo
                                    : logo
                                  : logo
                              }
                            />
                          )}
                        </div>
                      </div>

                      <div>
                        <Dropzone
                          accept="image/*"
                          multiple={false}
                          onDrop={acceptedFiles => {
                            if (acceptedFiles && acceptedFiles[0]) {
                              data.logo = acceptedFiles[0];
                              // setLogoFile(acceptedFiles[0]);
                              const reader = new FileReader();
                              reader.onload = e => {
                                setLogo(e.target.result);
                              };
                              reader.readAsDataURL(acceptedFiles[0]);
                            }
                          }}
                        >
                          {({ getRootProps, getInputProps }) => (
                            <section>
                              <div {...getRootProps()}>
                                <input {...getInputProps()} />
                                <p>Drag and drop an image here or click</p>
                                'file upload img'
                              </div>
                            </section>
                          )}
                        </Dropzone>
                      </div>
                    </div>
                    <button
                      onClick={() => {
                        setLogo('');
                        data.logo = null;
                      }}
                    >
                      Remove
                    </button>
                  </Col>
                  <Col lg={6} md={6} sm={12} xs={12}>
                    <div className="graphics">
                      {courseImage === '' ? (
                        <div className="view_graphic">
                          <MdPhotoLibrary />
                        </div>
                      ) : (
                        <div className="view_graphic">
                          <Button
                            onClick={() => {
                              setCourseImage('');
                              data.courseImage = null;
                            }}
                            className="del_btn"
                          >
                            <IoIosClose />
                          </Button>
                          <img
                            src={
                              data.courseImage
                                ? typeof data.courseImage === 'string'
                                  ? data.courseImage
                                  : courseImage
                                : courseImage
                            }
                            alt="course"
                          />
                        </div>
                      )}
                      <FormGroup>
                        <Label for="uploadimage">
                          <FormattedMessage {...messages.CourseImage} />
                        </Label>
                        <Dropzone
                          accept="image/*"
                          multiple={false}
                          onDrop={acceptedFiles => {
                            if (acceptedFiles && acceptedFiles[0]) {
                              const courseImg = acceptedFiles[0];
                              data.courseImage = courseImg;
                              // setLogoFile(acceptedFiles[0]);
                              const reader = new FileReader();
                              reader.onload = e => {
                                setCourseImage(e.target.result);
                              };
                              reader.readAsDataURL(acceptedFiles[0]);
                            }
                          }}
                        >
                          {({ getRootProps, getInputProps }) => (
                            <div className="camera" {...getRootProps()}>
                              <input {...getInputProps()} />
                              <div className="form-control">
                                <p>Upload Image</p>
                                <span>
                                  <IoMdAttach />
                                </span>
                              </div>
                            </div>
                          )}
                        </Dropzone>
                      </FormGroup>
                    </div>
                  </Col> */}
                  {/* <Col lg={6} md={6} sm={12} xs={12}>
                    <div className="graphics">
                      {courseVideo === '' ? (
                        <div className="view_graphic">
                          <FaVideo />
                        </div>
                      ) : (
                        <div className="view_graphic">
                          <Button
                            onClick={() => {
                              setCourseVideo('');
                              dataVideo.courseVideo = null;
                            }}
                            className="del_btn"
                          >
                            <IoIosClose />
                          </Button>
                          <video>
                            <source
                              src={
                                dataVideo.courseVideo
                                  ? typeof dataVideo.courseVideo === 'string'
                                    ? dataVideo.courseVideo
                                    : courseVideo
                                  : courseVideo
                              }
                            />
                            <track
                              src={
                                dataVideo.courseVideo
                                  ? typeof dataVideo.courseVideo === 'string'
                                    ? dataVideo.courseVideo
                                    : courseVideo
                                  : courseVideo
                              }
                              kind="captions"
                              srcLang="en"
                              label="Course Video"
                            />
                          </video>
                        </div>
                      )}
                      <FormGroup>
                        <Label>
                          <FormattedMessage {...messages.DemoVideo} />
                        </Label>
                        <Dropzone
                          accept="video/*"
                          multiple={false}
                          onDrop={acceptedFiles => {
                            if (acceptedFiles && acceptedFiles[0]) {
                              const courseVdo = acceptedFiles[0];
                              dataVideo.courseVideo = courseVdo;
                              // setcourseVideoFile(acceptedFiles[0]);
                              const reader = new FileReader();
                              reader.onload = e => {
                                setCourseVideo(e.target.result);
                              };
                              reader.readAsDataURL(acceptedFiles[0]);
                            }
                          }}
                        >
                          {({ getRootProps, getInputProps }) => (
                            <div className="camera" {...getRootProps()}>
                              <input {...getInputProps()} />
                              <div className="form-control">
                                <p>Upload Video</p>
                                <div>
                                  <IoMdAttach />
                                </div>
                              </div>
                            </div>
                          )}
                        </Dropzone>
                      </FormGroup>
                    </div>
                  </Col> */}
                </Row>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem uuid="b">
              <AccordionItemHeading>
                <AccordionItemButton>
                  <FormattedMessage {...messages.AboutLecture} />
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <div className="add_forms">
                  <div className="add_form">
                    <Row>
                      <Col lg={6} md={6} sm={6} xs={12}>
                        <FormGroup className="addInput">
                          <Label for="category">
                            <FormattedMessage {...messages.selectLevel} />
                          </Label>
                          {/* <Input
                            type="text"
                            name="category"
                            id="category"
                            placeholder="Select Category"
                            /> */}
                          <Button>Add</Button>
                          <Select
                            value={category}
                            onChange={e => setCategory(e.target.value)}
                            input={<BootstrapInput />}
                            fullWidth
                            className="levelSelect"
                            MenuProps={{
                              anchorOrigin: {
                                vertical: 'bottom',
                                horizontal: 'left',
                              },
                              getContentAnchorEl: null,
                            }}
                          >
                            <MenuItem value={0}>Level 01</MenuItem>
                            <MenuItem value={1}>Level 02</MenuItem>
                            <MenuItem value={2}>Level 03</MenuItem>
                            <MenuItem value={3}>Level 04</MenuItem>
                            <MenuItem value={4}>Level 05</MenuItem>
                            <MenuItem value={5}>Level 06</MenuItem>
                          </Select>
                        </FormGroup>
                      </Col>
                      <Col lg={6} md={6} sm={6} xs={12}>
                        <FormGroup>
                          <Label for="sub_title">
                            <FormattedMessage {...messages.SubTitleLecture} />
                          </Label>
                          <Input
                            type="text"
                            name="title"
                            id="sub_title"
                            placeholder="Enter Your Title"
                          />
                          <FormText color="danger">
                            <p className="error"> Error message</p>
                          </FormText>
                        </FormGroup>
                      </Col>
                      <Col lg={12} md={12} sm={12} xs={12}>
                        <FormGroup>
                          <Label for="description">
                            <FormattedMessage {...messages.Description} />
                          </Label>
                          <JoditEditor
                            ref={editor}
                            value={content}
                            config={JoditEditorConfig}
                            tabIndex={0} // tabIndex of textarea
                            onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
                          />
                          {/* onChange={newContent => { }} */}
                        </FormGroup>
                      </Col>
                      <Col lg={6} md={6} sm={12} xs={12}>
                        <div className="graphics">
                          {lectureVideo === '' ? (
                            <div className="view_graphic">
                              <FaVideo />
                            </div>
                          ) : (
                            <div className="view_graphic">
                              <Button
                                onClick={() => {
                                  setLectureVideo('');
                                  data.lectureVideo = null;
                                }}
                                className="del_btn"
                              >
                                <IoIosClose />
                              </Button>
                              <video>
                                <source
                                  src={
                                    lecVideo.lectureVideo
                                      ? typeof lecVideo.lectureVideo ===
                                        'string'
                                        ? lecVideo.lectureVideo
                                        : lectureVideo
                                      : lectureVideo
                                  }
                                />
                                <track
                                  src={
                                    lecVideo.lectureVideo
                                      ? typeof lecVideo.lectureVideo ===
                                        'string'
                                        ? lecVideo.lectureVideo
                                        : lectureVideo
                                      : lectureVideo
                                  }
                                  kind="captions"
                                  srcLang="en"
                                  label="Course Video"
                                />
                              </video>
                            </div>
                          )}
                          <FormGroup>
                            <Label>
                              <FormattedMessage {...messages.LectureVideo} />
                            </Label>
                            <Dropzone
                              accept="video/*"
                              multiple={false}
                              onDrop={acceptedFiles => {
                                if (acceptedFiles && acceptedFiles[0]) {
                                  const lectureVdo = acceptedFiles[0];
                                  data.lectureVideo = lectureVdo;
                                  // setlectureVideoFile(acceptedFiles[0]);
                                  const reader = new FileReader();
                                  reader.onload = e => {
                                    setLectureVideo(e.target.result);
                                  };
                                  reader.readAsDataURL(acceptedFiles[0]);
                                }
                              }}
                            >
                              {({ getRootProps, getInputProps }) => (
                                <div className="camera" {...getRootProps()}>
                                  <input {...getInputProps()} />
                                  <div className="form-control">
                                    <p>Upload Video</p>
                                    <div>
                                      <IoMdAttach />
                                    </div>
                                  </div>
                                </div>
                              )}
                            </Dropzone>
                          </FormGroup>
                        </div>
                      </Col>
                      <Col lg={12} md={12} sm={12} xs={12}>
                        <div className="addLecture">
                          <Button>
                            <span>+</span>Add New Lecture
                          </Button>
                          <Button>Update</Button>
                        </div>
                        <div className="lectureList">
                          <p>Mattis Suscipit</p>
                          <div className="list-icons">
                            <Button>
                              <MdEdit />
                            </Button>
                            <Button color="danger" onClick={toggle}>
                              <IoMdClose />
                            </Button>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </div>
              </AccordionItemPanel>
              {/* Quiz */}
              <AccordionItemPanel className="mb-0">
                <div className="add_forms">
                  <h4>
                    <FormattedMessage {...messages.Quiz} />
                  </h4>
                  <div className="add_form">
                    <Row>
                      <Col lg={12} md={12} sm={12} xs={12}>
                        <FormGroup>
                          <Label for="sub_title">
                            <FormattedMessage {...messages.Type} />
                          </Label>
                          <Input
                            type="text"
                            name="title"
                            id="sub_title"
                            placeholder="Type Your Question"
                          />
                        </FormGroup>
                        <div className="selectAnswer">
                          <div className="Answers">
                            <input
                              className="radio"
                              type="radio"
                              id="age1"
                              name="age"
                              value="30"
                            />
                            <input
                              className="textField"
                              placeholder="Type Answer 1"
                              type="text"
                            />
                          </div>
                          <div className="Answers">
                            <input
                              className="radio"
                              type="radio"
                              id="age2"
                              name="age"
                              value="60"
                            />
                            <input
                              className="textField"
                              placeholder="Type Answer 2"
                              type="text"
                            />
                          </div>
                          <div className="Answers">
                            <input
                              className="radio"
                              type="radio"
                              id="age3"
                              name="age"
                              value="100"
                            />
                            <input
                              className="textField"
                              placeholder="Type Answer 3"
                              type="text"
                            />
                          </div>
                        </div>
                      </Col>
                      <Col lg={12} md={12} sm={12} xs={12}>
                        <div className="graphicsLecture" />
                        <div className="addLecture">
                          <Button>
                            <span>+</span>Add New Question
                          </Button>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </div>
              </AccordionItemPanel>
              <AccordionItemPanel>
                <div className="add_forms">
                  {/* <h4>
                        <FormattedMessage {...messages.Quiz} />
                      </h4> */}
                  <div className="add_form">
                    <Row>
                      <Col lg={12} md={12} sm={12} xs={12}>
                        <div className="lectureList">
                          <p>The instructor was well prepared for the class?</p>
                          <div className="list-icons">
                            <Button>
                              <MdEdit />
                            </Button>
                            <Button color="danger" onClick={toggle}>
                              <IoMdClose />
                            </Button>
                          </div>
                        </div>
                        <div className="lectureList">
                          <p>Well prepared for the class?</p>
                          <div className="list-icons">
                            <Button>
                              <MdEdit />
                            </Button>
                            <Button color="danger" onClick={toggle}>
                              <IoMdClose />
                            </Button>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </div>
              </AccordionItemPanel>
            </AccordionItem>
          </Accordion>
          <div className="form_footer">
            <div className="bottom_btns">
              <Button className="btn_save">
                <FormattedMessage {...messages.SaveAs} />
              </Button>
              <Button className="btn_submit">
                <FormattedMessage {...messages.Publish} />
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Modal
          isOpen={modal}
          modalTransition={{ timeout: 100 }}
          backdropTransition={{ timeout: 100 }}
          toggle={toggle}
          className="customModal"
        >
          <ModalHeader toggle={toggle} />
          <ModalBody className="deleteModal">
            <h2>Delete?</h2>
            <p className="">Are you sure you want to delete</p>
          </ModalBody>
          <ModalFooter>
            <Button className="cancelBtn" onClick={toggle}>
              No
            </Button>
            <Button className="checkBtn" onClick={toggle}>
              Yes
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    </Wrapper>
  );
}

export default AddCourse;
