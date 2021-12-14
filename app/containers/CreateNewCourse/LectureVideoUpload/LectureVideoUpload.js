import React, { Component } from 'react';
import axios from 'axios';
import {
  Button,
  Progress,
} from 'reactstrap';
import { FormattedMessage } from 'react-intl';
import messages from '../messages';
import Dropzone from 'react-dropzone';
import { FiUpload } from 'react-icons/fi';
import { IoIosClose } from 'react-icons/io';
import { apiGetRequest, apiPostRequest } from '../../../helpers/Requests';

export default class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fileSelected: null,
      fileSize: 0,
      videoDuration: 0,
      percentage: 0,
      uploadId: '',
      fileName: '',
      backendUrl: 'https://dev-finlit-backend.rnssol.com/api/upload',
    };
  }

  async startUpload() {
    try {
      const params = {
        fileName: this.state.fileName,
        contentType: this.state.fileSelected.type,
      };
      let resp = await apiGetRequest(`${this.state.backendUrl}/start-upload?fileName=${params.fileName}&contentType=${params.contentType}`)

      let uploadId = resp.data.data.uploadId;
      this.setState({ uploadId });
      this.uploadMultipartFile();
    } catch (err) {
      console.log(err);
    }
  }

  async uploadMultipartFile() {
    try {
      const CHUNK_SIZE = 10000000; // 10MB
      const fileSize = this.state.fileSelected.size;
      const CHUNKS_COUNT = Math.floor(fileSize / CHUNK_SIZE) + 1;
      let promisesArray = [];
      let start, end, blob;

      for (let index = 1; index < CHUNKS_COUNT + 1; index++) {
        this.setState( {percentage: (index / CHUNKS_COUNT) * 100 })
        this.props.setData((prevState) => ({ ...prevState,  percentage: (index / CHUNKS_COUNT) * 100 }))
        start = (index - 1) * CHUNK_SIZE;
        end = index * CHUNK_SIZE;
        blob =
          index < CHUNKS_COUNT
            ? this.state.fileSelected.slice(start, end)
            : this.state.fileSelected.slice(start);

        let getUploadUrlResp = await apiGetRequest(`${this.state.backendUrl}/get-upload-url?fileName=${this.state.fileName}&partNumber=${index}&uploadId=${this.state.uploadId}&contentType=${this.state.fileSelected.type}`)

        let { presignedUrl } = getUploadUrlResp.data.data;
        // Send part aws server
        let uploadResp = await axios.put(presignedUrl, blob, {});
        promisesArray.push(uploadResp);
      }

      let resolvedArray = await Promise.all(promisesArray);
      let uploadPartsArray = [];
      resolvedArray.forEach((resolvedPromise, index) => {

        uploadPartsArray.push({
          ETag: resolvedPromise.headers.etag,
          PartNumber: index + 1,
        });
      });

      let completeUploadResp = await apiPostRequest(
        `${this.state.backendUrl}/complete-upload`,
        {
          params: {
            fileName: this.state.fileName,
            parts: uploadPartsArray,
            uploadId: this.state.uploadId,
            courseId: 41,
            lessonId: 2,
          },
        }
      );

      console.log(completeUploadResp.data.data.key, 'complete upload response');
      this.props.setData((prevState) => ({ ...prevState, lectureVideo: completeUploadResp.data.data.key }))

    } catch (err) {
      console.log(err);
    }
  }

  render() {
    const { setData , item } = this.props;
    return (
      <div>
        {!this.state.fileSelected ? (
          <Dropzone
            accept="video/*"
            multiple={false}
            onDrop={(acceptedFiles) => {
              try {
                if (acceptedFiles && acceptedFiles[0]) {
                  let fileSelected = acceptedFiles[0];
                  let fileName = fileSelected.name;
                  const reader = new FileReader();
                  reader.onload = (e) => {
                    var media = new Audio(e.target.result);
                    media.onloadedmetadata = (e) => {
                      this.setState({ videoDuration: media.duration })
                      setData((prevState) => ({ ...prevState, lectureTime: media.duration }))

                    };
                  };
                  reader.readAsDataURL(acceptedFiles[0]);
                  this.setState({ ...this.state, fileSelected, fileName, fileSize: fileSelected.size });
                  this.startUpload()
                }

              } catch (err) {
                console.error(err, err.message);
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
                <span>{this.state.fileSelected.name}</span>
                is uploading
              </p>
              <Progress value={this.state.percentage} />
            </div>
            <div className="del_video">
              <Button
                onClick={() => {
                  this.setState({
                    fileSelected: null
                  })
                  setData((prevState) => ({ ...prevState, lectureVideo: ""}))
                }}
                className="del_btn"
              >
                <IoIosClose />
              </Button>
            </div>
          </div>
        )}
      </div>
    );
  }
}