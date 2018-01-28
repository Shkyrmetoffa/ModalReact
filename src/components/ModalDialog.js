import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';

import ModalList from './ModalList';

const customContentStyle = {
  maxWidth: '400px',
  minWidth: '320px'
};

export default class ModalDialog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 1,
      inputValue: 1,
      open: false,
      save: true,
      chipData: [
        { key: 1 },
        { key: 2 }
      ]
    };
  }
    handleOpen = () => this.setState({ open: true });
  
    handleClose = () => this.setState({ open: false });

    changeSaveButton = () => this.setState({ save: false });

    handleChange = (event, index, value) => this.setState({value});

    changeInputValue = (event, inputValue) => this.setState({inputValue});

    addItem(el) {
      this.chipData = this.state.chipData;
      this.chipData.push(el);
      this.setState({ chipData: this.chipData });
      this.changeSaveButton();
      this.forceUpdate();
    };

    handleRequestDelete = key => {
      this.chipData = this.state.chipData;
      const chipToDelete = this.chipData.map(chip => chip.key).indexOf(key);
      this.chipData.splice(chipToDelete, 1);
      this.setState({chipData: this.chipData});
      this.changeSaveButton();
      this.forceUpdate();
    };

    render() {
      const actions = [
        <FlatButton
          label="Добавить"
          primary={true}
          onClick={() => this.addItem({key: 4})}
        />,
        <FlatButton
          label="Сохранить"
          disabled={this.state.save}
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
              contentClassName='modal-container'
              contentStyle={customContentStyle}
              actions={actions}
              modal={true}
              open={this.state.open}
              title={
                <div className="header">
                  <span className="header-title"> 
                    Структура номеров
                  </span>
                    <IconButton 
                      hoveredStyle={{ background: '#ccc' }} 
                      style={{ borderRadius: '50%' }} 
                      onClick={this.handleClose}>
                        <NavigationClose />
                    </IconButton>
                </div>
              }
            >
              <ModalList 
                value={this.state.value}
                inputValue={this.state.inputValue}
                handleChange={this.handleChange}
                changeInputValue={this.changeInputValue}
                chipData={this.state.chipData}
                handleRequestDelete={this.handleRequestDelete}
              />
            </Dialog>
          </div>
        );
    };
};
