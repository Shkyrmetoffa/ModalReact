import React from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';

const selectIconStyle = {
  color: '4a4a4a',
  fill: '4a4a4a'
};

const SelectBox = props => {
  const handleChangeValue = (event, index, valueData) => {
    props.handleChange(Object.assign({}, props.data, { value: valueData}));
  }
  const handleChangeInputValue = (event, valueData) => {
    props.handleChange(Object.assign({}, props.data, { inputValue: +valueData}));

  }
  const renderMenuItems = (item) => {
  return (<MenuItem key={item.value} value={item.value} primaryText={item.primaryText} />)
  }
return (
  <div>
    <SelectField
      value={props.data.value}
      onChange={handleChangeValue}
      iconStyle={selectIconStyle}
      style={{ width: 150, float: 'left' }}
    >
      {props.menusArray.map(item => renderMenuItems(item))}
    </SelectField>
      <TextField
        type='number'
        style={{ width: 50, cursor: 'pointer', float: 'left' }}
        onChange={handleChangeInputValue}
        defaultValue={props.data.inputValue}
        id={props.data.key + ''}
      />
    </div>
  );
}
   
export default SelectBox;