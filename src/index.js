import React from 'react';
import ReactDOM from 'react-dom';
import ModalDialog from './components/ModalDialog';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import './index.css';

ReactDOM.render(
  <MuiThemeProvider>
    <ModalDialog />
  </MuiThemeProvider>
, document.getElementById('root'));
