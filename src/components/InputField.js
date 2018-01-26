import React from 'react';
import TextField from 'material-ui/TextField';

export const InputField = () => (
      <TextField
        type='number'
        style={{ width: 50, cursor: 'pointer' }}
        // onChange={this.props.changeInputValue}
        defaultValue={1}
        // id={this.props.id}
      />
    );
 