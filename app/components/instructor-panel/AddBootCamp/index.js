import React, { useState, useRef } from 'react';
import JoditEditor from 'jodit-react';
import { FormattedMessage } from 'react-intl';
import { Row, Col, FormGroup, Label, Input, Button } from 'reactstrap';
import { FiCamera } from 'react-icons/fi';
import Wrapper from './Wrapper';
import messages from './messages';

function AddBootCamp() {
  const editor = useRef(null);
  const [content, setContent] = useState('');

  const config = {
    readonly: false,
  };
  return (
    <Wrapper>
      <div className="add_forms">
        <p>
          <FormattedMessage {...messages.AllFields} />
        </p>
        <div className="add_form">
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
                  placeholder="Course title"
                />
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
                  placeholder="Sub title"
                />
              </FormGroup>
            </Col>
            <Col lg={4} md={6} sm={6} xs={12}>
              <FormGroup>
                <Label for="uploadimage">
                  <FormattedMessage {...messages.UploadImage} />
                </Label>
                <div className="camera">
                  <div className="form-control">
                    <p>Upload Image</p>
                    <div className="input--file">
                      <span>
                        <FiCamera />
                      </span>
                      <input
                        type="file"
                        name="uploadimage"
                        id="uploadimage"
                        placeholder="Upload Image"
                      />
                    </div>
                  </div>
                </div>
              </FormGroup>
            </Col>
            <Col lg={4} md={6} sm={6} xs={12}>
              <FormGroup>
                <Label for="startdate">
                  <FormattedMessage {...messages.StartDate} />
                </Label>
                <Input
                  type="date"
                  name="startdate"
                  id="startdate"
                  placeholder="00/00/0000"
                />
              </FormGroup>
            </Col>
            <Col lg={4} md={6} sm={6} xs={12}>
              <FormGroup>
                <Label for="enddate">
                  <FormattedMessage {...messages.EndDate} />
                </Label>
                <Input
                  type="date"
                  name="enddate"
                  id="enddate"
                  placeholder="00/00/0000"
                />
              </FormGroup>
            </Col>
            <Col lg={4} md={6} sm={6} xs={12}>
              <FormGroup>
                <Label for="starttime">
                  <FormattedMessage {...messages.StartTime} />
                </Label>
                <Input
                  type="time"
                  name="starttime"
                  id="starttime"
                  placeholder="00/00/0000"
                />
              </FormGroup>
            </Col>
            <Col lg={4} md={6} sm={6} xs={12}>
              <FormGroup>
                <Label for="endtime">
                  <FormattedMessage {...messages.EndTime} />
                </Label>
                <Input
                  type="time"
                  name="endtime"
                  id="endtime"
                  placeholder="00/00/0000"
                />
              </FormGroup>
            </Col>
            <Col lg={4} md={6} sm={6} xs={12}>
              <FormGroup>
                <Label for="price">
                  <FormattedMessage {...messages.Price} />
                </Label>
                <Input
                  type="number"
                  name="price"
                  id="price"
                  placeholder="Course Price"
                />
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
                  config={config}
                  tabIndex={0} // tabIndex of textarea
                  onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
                />
              </FormGroup>
            </Col>
          </Row>
        </div>
        <div className="form_footer">
          <div className="top_btns">
            <Button className="btn_add">
              <FormattedMessage {...messages.Add} />
            </Button>
            <Button className="btn_del">
              <FormattedMessage {...messages.Delete} />
            </Button>
          </div>
          <div className="bottom_btns">
            <Button className="btn_save">
              <FormattedMessage {...messages.SaveAs} />
            </Button>
            <Button className="btn_submit">
              <FormattedMessage {...messages.SubmitContinue} />
            </Button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default AddBootCamp;
