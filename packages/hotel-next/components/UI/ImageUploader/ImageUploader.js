import React from 'react';
import { FaCamera } from 'react-icons/fa';
import { Upload, Modal } from 'antd';
import { ImageUpload } from './imageUploader.style';

export default class ImageUploader extends React.Component {
  state = {
    previewVisible: false,
    previewImage: '',
    fileList: [
      {
        uid: '-1',
        name: 'xxx.png',
        status: 'done',
        url:
          'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
      },
    ],
  };

  handleCancel = () => this.setState({ previewVisible: false });

  handlePreview = (file) => {
    this.setState({
      previewImage: file.url || file.thumbUrl,
      previewVisible: true,
    });
  };

  handleChange = ({ fileList }) => this.setState({ fileList });

  render() {
    const { previewVisible, previewImage, fileList } = this.state;
    const Dragger = Upload.Dragger;

    const uploadButton = (
      <ImageUpload>
        <div className="image-drag-area">
          <FaCamera />
        </div>
        <div className="ant-upload-text">Upload Photos</div>
      </ImageUpload>
    );
    return (
      <div className="clearfix">
        <Dragger
          action="//jsonplaceholder.typicode.com/posts/"
          listType="picture-card"
          fileList={fileList}
          onPreview={this.handlePreview}
          onChange={this.handleChange}
          className="image_uploader"
        >
          {fileList.length >= 4 ? null : uploadButton}
        </Dragger>
        <Modal
          visible={previewVisible}
          footer={null}
          onCancel={this.handleCancel}
        >
          <img alt="example" style={{ width: '100%' }} src={previewImage} />
        </Modal>
      </div>
    );
  }
}
