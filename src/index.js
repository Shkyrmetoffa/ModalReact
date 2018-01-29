import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ModalDialog from './components/ModalDialog';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import './index.css';

export default class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <ModalDialog/>
      </MuiThemeProvider>
    );
  }
}
ReactDOM.render(<App />, document.getElementById('root'));