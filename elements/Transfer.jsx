import { Transfer } from 'antd';

const UITransfer = (props) => {
//   const dataSource = []; // Your data source array
//   const targetKeys = []; // Array of keys of elements listed on the right column
  const {dataSource, targetKeys} = props;
  const handleChange = (targetKeys, direction, moveKeys) => {
    // Callback function when transfer between columns is complete
    console.log(targetKeys, direction, moveKeys);
  };

  const handleSelectChange = (sourceSelectedKeys, targetSelectedKeys) => {
    // Callback function when selected items are changed
    console.log(sourceSelectedKeys, targetSelectedKeys);
  };

  return (
    <Transfer
      dataSource={dataSource}
      targetKeys={targetKeys}
      onChange={handleChange}
      onSelectChange={handleSelectChange}
      // Add other props here
    />
  );
};

export default UITransfer;