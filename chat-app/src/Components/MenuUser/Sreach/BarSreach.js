import React, { useState } from 'react';
import { TreeSelect } from 'antd';
const treeData = [];
const BarSreach = () => {
  const [value, setValue] = useState();
  const onChange = (newValue) => {
    setValue(newValue);
  };
  const onPopupScroll = (e) => {
    console.log('onPopupScroll', e);
  };
  return (
    <TreeSelect
      showSearch
      style={{
        width: '100%',
      }}
      value={value}
      dropdownStyle={{
        maxHeight: 400,
        overflow: 'auto',
      }}
      placeholder="Please select"
      allowClear
      treeDefaultExpandAll
      onChange={onChange}
      treeData={treeData}
      onPopupScroll={onPopupScroll}
    />
  );
};
export default BarSreach;