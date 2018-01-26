import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';

import { Header } from './Header';
import ModalList from './ModalList';

export default class ModalDialog extends Component {
    state = {
      open: false,
    };
    handleOpen = () => {
      this.setState({open: true});
    };
  
    handleClose = () => {
      this.setState({open: false});
    };
  
    render() {
      const actions = [
        <FlatButton
          label="Добавить"
          primary={true}
          onClick={this.handleClose}
        />,
        <FlatButton
          label="Сохранить"
          primary={true}
          disabled={true}
          onClick={this.handleClose}
        />,
        <FlatButton
          label="Отмена"
          primary={true}
          onClick={this.handleClose}
        />,
      ];
  
      return (
        <div>
          <RaisedButton 
            label="Open Modal" 
            onClick={this.handleOpen} 
          />
          <Dialog
            title={
              <div 
                className="header"
              >
                <Header />
                <IconButton 
                  hoveredStyle={{ background: '#ccc' }} 
                  style={{ borderRadius: '50%' }} 
                  primary={true}
                  onClick={this.handleClose}>
                    <NavigationClose />
                </IconButton>
              </div>
            }
            actions={actions}
            modal={true}
            open={this.state.open}
          >
          <ModalList />
          </Dialog>
        </div>
      );
    }
  }