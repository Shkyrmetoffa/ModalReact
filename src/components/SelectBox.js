import React from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';

const selectIconStyle = {
  color: '4a4a4a',
  fill: '4a4a4a'
};

const items = [
  <MenuItem key={1} value={1} primaryText="Twin" />,
  <MenuItem key={2} value={2} primaryText="Tripple" />,
  <MenuItem key={3} value={3} primaryText="Quadro" />
];

const SelectBox = props => (
  <div>
    <SelectField
      value={props.value}
      onChange={props.handleChange}
      iconStyle={selectIconStyle}
      style={{ width: 150, float: 'left' }}
    >
      { items }
    </SelectField>
      <TextField
        type='number'
        style={{ width: 50, cursor: 'pointer', float: 'left' }}
        // onChange={props.changeInputValue}
        defaultValue={props.inputValue}
        id={props.id}
      />
  </div>
);
   
export default SelectBox;