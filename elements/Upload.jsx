import React from 'react';
import { Upload, message } from 'antd';
import { InboxOutlined } from '@ant-design/icons';

const { Dragger } = Upload;

class UIUpload extends React.Component {
  constructor(props) {
    super(props);

    if (props.onChange) {
      this.handleAffixChange = () => {
        console.log('Affix handleAffixChange!');
      };
    }
  }

  componentDidMount() {
    console.log('Component mounted');
  }

  componentWillUnmount() {
    console.log('Component will unmount');
    // Perform cleanup or other actions before the component is unmounted
  }
  handleChange = (info) => {
    if (info.file.status === 'done') {
      message.success(`${info.file.name} uploaded successfully`);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} upload failed.`);
    }
    if (this.props.onChange) {
      this.props.onChange(info);
    }
  };

  render() {
    const {
      accept,
      action,
      beforeUpload,
      customRequest,
      data,
      defaultFileList,
      directory,
      disabled,
      fileList,
      headers,
      iconRender,
      isImageUrl,
      itemRender,
      listType,
      maxCount,
      method,
      multiple,
      name,
      openFileDialogOnClick,
      previewFile,
      progress,
      showUploadList,
      withCredentials,
      onDrop,
      onDownload,
      onPreview,
      onRemove,
      content
    } = this.props;

    return (
      <Dragger
        accept={accept}
        action={action}
        beforeUpload={beforeUpload}
        customRequest={customRequest}
        data={data}
        defaultFileList={defaultFileList}
        directory={directory}
        disabled={disabled}
        fileList={fileList}
        headers={headers}
        iconRender={iconRender}
        isImageUrl={isImageUrl}
        itemRender={itemRender}
        listType={listType}
        maxCount={maxCount}
        method={method}
        multiple={multiple}
        name={name}
        openFileDialogOnClick={openFileDialogOnClick}
        previewFile={previewFile}
        progress={progress}
        showUploadList={showUploadList}
        withCredentials={withCredentials}
        onChange={this.handleChange}
        onDrop={onDrop}
        onDownload={onDownload}
        onPreview={onPreview}
        onRemove={onRemove}
      >
        {content}
      </Dragger>
    );
  }
}

export default UIUpload;
