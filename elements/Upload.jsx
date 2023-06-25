import { Upload, message } from 'antd';
import { InboxOutlined } from '@ant-design/icons';

const { Dragger } = Upload;

const UIUpload = (props) => {
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
    onChange,
    onDrop,
    onDownload,
    onPreview,
    onRemove,
    content
  } = props;

  const handleChange = (info) => {
    if (info.file.status === 'done') {
      message.success(`${info.file.name} uploaded successfully`);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} upload failed.`);
    }
    onChange && onChange(info);
  };

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
      onChange={handleChange}
      onDrop={onDrop}
      onDownload={onDownload}
      onPreview={onPreview}
      onRemove={onRemove}
    >
        {content}
    </Dragger>
  );
};

export default UIUpload;



{/* <UploadComponent
  accept=".png,.jpg"
  action="/api/upload"
  beforeUpload={(file) => {
    // Perform validation or other checks before uploading the file
    console.log('Before upload', file);
    return true; // Return false or a rejected Promise to stop the upload
  }}
  onChange={(info) => {
    console.log('Upload change', info);
  }}
/> */}