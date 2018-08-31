import React from 'react';
import PropTypes from 'prop-types';
import { Upload, Icon, Form, Modal } from 'antd';
import FormTitle from '../FormTitle';
import { uploadPhoto } from '../../../api/uploadPhoto';

const FormItem = Form.Item;

class MultiUpload extends React.Component {
  state = {
    loading: false,
    fileList: this.props.defaultValue
      ? this.props.defaultValue.map((data, index) => {
          return {
            uid: index,
            name: `${index}.png`,
            status: 'done',
            url: data,
            thumbUrl: data,
          };
        })
      : [],
  };

  onRemove = e => {
    this.state.fileList.splice(e.uid, 1);
    const newList = [...this.state.fileList].map((data, index) => {
      return { ...data, uid: index };
    });
    this.setState({ fileList: newList });
    this.props.form.setFieldsValue({
      [this.props.source]: newList.map(data => data.url),
    });
  };

  handleChange = info => {
    if (info.file.status === 'uploading' && info.fileList.length !== this.state.fileList.length) {
      this.setState({ loading: true });
      uploadPhoto(info.file.originFileObj).then(response => {
        this.props.form.setFieldsValue({
          [this.props.source]: [response, ...this.state.fileList.map(data => data.url)],
        });
        this.setState({
          loading: false,
          fileList: [
            ...this.state.fileList,
            {
              uid: this.state.fileList.length,
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
    const { title, source, icon, form, rules, defaultValue } = this.props;
    const { previewVisible, previewImage, fileList } = this.state;
    const uploadButton = (
      <div>
        <Icon type={this.state.loading ? 'loading' : 'plus'} />
        <div className="ant-upload-text">Drag and drop pictures</div>
      </div>
    );

    return (
      <FormItem>
        <FormTitle title={title} icon={icon} />
        {form.getFieldDecorator(source, {
          valuePropName: 'fakeValue',
          rules,
          initialValue: defaultValue,
        })(
          <Upload.Dragger
            action="https://api.imgur.com/3/image"
            headers={{
              Authorization: 'Client-ID 50b73e2dc3f6fb5',
            }}
            multiple
            listType="picture-card"
            fileList={fileList}
            onPreview={this.handlePreview}
            onChange={this.handleChange}
            onRemove={this.onRemove}
          >
            {fileList.length <= 5 && uploadButton}
          </Upload.Dragger>,
        )}
        <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
          <img alt="example" style={{ width: '100%' }} src={previewImage} />
        </Modal>
      </FormItem>
    );
  }
}

MultiUpload.propTypes = {
  source: PropTypes.string,
  title: PropTypes.string,
  icon: PropTypes.string,
  form: PropTypes.object,
  defaultValue: PropTypes.any,
  rules: PropTypes.array,
};
MultiUpload.defaultProps = {
  required: false,
  requiredMessage: 'The field is required',
  rules: {},
};

export default MultiUpload;
