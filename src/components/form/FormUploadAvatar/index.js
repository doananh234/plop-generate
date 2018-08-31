import React from 'react';
import PropTypes from 'prop-types';
import { Icon, Form, Modal } from 'antd';
import FormTitle from '../FormTitle';
import { uploadPhoto } from '../../../api/uploadPhoto';
import { UploadWrapper, ImgWrapper } from './styles';

const FormItem = Form.Item;
const beforeUpload = file => {
  return file;
};

class UploadAvatar extends React.Component {
  state = {
    loading: false,
    fileList: this.props.defaultValue
      ? [
          {
            uid: -1,
            name: 'xxx.png',
            status: 'done',
            url: this.props.defaultValue,
          },
        ]
      : [],
  };

  onRemove = () => {
    this.setState({ fileList: [] });
    this.props.form.setFieldsValue({
      [this.props.source]: null,
    });
  };

  handleChange = info => {
    if (info.file.status === 'uploading' && info.fileList.length !== this.state.fileList.length) {
      this.setState({
        fileList: [info.file],
        loading: true,
      });
      uploadPhoto(info.file.originFileObj).then(response => {
        this.props.form.setFieldsValue({
          [this.props.source]: response,
        });
        this.setState({
          loading: false,
          fileList: [
            {
              uid: -1,
              name: 'xxx.png',
              status: 'done',
              url: response,
            },
          ],
        });
      });
    }
  };

  handlePreview = file => {
    this.setState({
      previewImage: file.url || file.thumbUrl || file.src,
      previewVisible: true,
    });
  };

  handleCancel = () => this.setState({ previewVisible: false });

  render() {
    const {
      title,
      source,
      icon,
      form,
      rules,
      defaultValue,
      className,
      required,
      requiredMessage,
    } = this.props;
    const { previewVisible, previewImage, fileList, loading } = this.state;
    const uploadButton = (
      <div>
        <Icon type={this.state.loading ? 'loading' : 'plus'} />
        <div className="ant-upload-text">Upload</div>
      </div>
    );

    return (
      <FormItem className={className}>
        <FormTitle title={title} icon={icon} />
        {form.getFieldDecorator(source, {
          valuePropName: 'value',
          rules: [{ required, message: requiredMessage, ...rules }],
          initialValue: defaultValue,
        })(
          <UploadWrapper
            action="https://api.imgur.com/3/image"
            headers={{
              Authorization: 'Client-ID 50b73e2dc3f6fb5',
            }}
            listType="picture-card"
            className="avatar-uploader"
            fileList={fileList}
            beforeUpload={beforeUpload}
            showUploadList={false}
            onPreview={this.handlePreview}
            onChange={this.handleChange}
            onRemove={this.onRemove}
          >
            {fileList[0] && !loading ? <ImgWrapper src={fileList[0].url} alt="" /> : uploadButton}
          </UploadWrapper>,
        )}
        <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
          <img alt="example" style={{ width: '100%' }} src={previewImage} />
        </Modal>
      </FormItem>
    );
  }
}

UploadAvatar.propTypes = {
  source: PropTypes.string,
  title: PropTypes.string,
  icon: PropTypes.string,
  form: PropTypes.object,
  defaultValue: PropTypes.any,
  rules: PropTypes.object,
  className: PropTypes.string,
  required: PropTypes.bool,
  requiredMessage: PropTypes.string,
};
UploadAvatar.defaultProps = {
  required: false,
  requiredMessage: 'The field is required',
  rules: {},
};
export default UploadAvatar;
