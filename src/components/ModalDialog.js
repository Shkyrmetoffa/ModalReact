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
      // value: 1,
      // inputValue: 1,
      open: false,
      save: true,
      menusArray: [
        { value: 1, primaryText: "Twin" },
        { value: 2, primaryText: "Tripple" },
        { value: 3, primaryText: "Quadro" }
      ],
      chipData: [
        { key: 1, value: 1, inputValue: 1 }
      ]
    };
  }
    handleOpen = () => this.setState({ open: true, save: true });
  
    handleClose = () => this.setState({ open: false });

    handleChange = obj => this.setState({ 
      chipData: this.state.chipData.map( chip => 
        chip.key === obj.key ? obj : chip),
        save: false 
      });
    // changeInputValue = (event, inputValue) => this.setState({inputValue});
    addItem() {
      this.setState({
        chipData: this.state.chipData.concat({ key: Date.now(), inputValue: 1, value: 1 }),
        save: false
      })
    };

    handleRequestDelete = key => {
      this.setState({ chipData: this.state.chipData.filter(item => item.key!==key), save: false });
    };

    render() {
      const actions = [
        <FlatButton
          label="Добавить"
          primary={true}
          onClick={() => this.addItem()}
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
          <div className="modal-wrap">
            <RaisedButton 
              label="Open Modal" 
              onClick={this.handleOpen} 
              // style={{ display: 'block', margin: '0 auto'}}
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
                menusArray={this.state.menusArray}
                chipData={this.state.chipData}
                handleChange={this.handleChange}
                handleRequestDelete={this.handleRequestDelete}
              />
            </Dialog>
          </div>
        );
    };
};
