import React, { Component } from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import { InputField } from './InputField';

const listButtonStyle = {
  color: '#f44336',
  fill: '#f44336',
  background: '#fbe6e9',
  border: '3px solid #fbe6e9',
  borderRadius: '50%'
};

const selectIconStyle = {
    color: '4a4a4a',
    fill: '4a4a4a'
  };
  
export default class SelectBox extends Component {
    state = {
        value: 1
      };
      handleChange = (event, index, value) => this.setState({value});
      
      render() {
    return (
    <div><SelectField
          value={this.state.value}
          onChange={this.handleChange}
          iconStyle={selectIconStyle}
          style={{ width: 150 }}
        >
          <MenuItem value={1} primaryText="Twin" />
          <MenuItem value={2} primaryText="Tripple" />
          <MenuItem value={3} primaryText="Quadro" />
        </SelectField>
        <InputField />
        <IconButton 
        iconStyle={listButtonStyle} 
        className='icon-button' 
        // onTouchTap={() => this.deleteListItem(listItem.id)} 
      ><NavigationClose />
      </IconButton>
        </div>
    )
      }
      
}