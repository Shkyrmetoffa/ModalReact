import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import injectTapEventPlugin from 'react-tap-event-plugin';
import ModalDialog from './components/ModalDialog';
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import './index.css';


export default class App extends Component {
  render() {
    return (
   <div className='modal-wrap'>
     <ModalDialog/>
  </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById('root'));