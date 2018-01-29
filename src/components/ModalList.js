import React from 'react';
import Chip from 'material-ui/Chip';
import { List } from 'material-ui/List';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import SelectBox from './SelectBox';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around'
  },
  gridList: {
    width: 500,
    height: 150,
    overflowY: 'auto'
  },
  listButtonStyle: {
    color: '#f44336',
    fill: '#f44336',
    background: '#fbe6e9',
    border: '3px solid #fbe6e9',
    borderRadius: '50%'
  },
  chip: {
    background: 'white',
  },
  delete: {
    display: 'none'
  },
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
  }
};

const ModalList = props => {
  let counter = 20;
  const renderChip = data => {
    return (
      <div
        key={counter++}
      >
        <Chip
          key={data.key}
          style={styles.chip}
          deleteIconStyle={styles.delete}
        >
          {
            <div>
              <SelectBox 
                handleChange={props.handleChange}
                data={data}
                menusArray={props.menusArray}
                id={`id ${counter++}`}
              />
                <IconButton 
                  iconStyle={styles.listButtonStyle} 
                  className="icon-button" 
                  onClick ={() => props.handleRequestDelete(data.key)} 
                >
                  <NavigationClose />
                </IconButton>
            </div>
          }
        </Chip>
      </div>
    );
  };
    return (
      <div 
        style={styles.root}>
        <List
          style={styles.gridList}
        >
          <div style={styles.wrapper}>
            {props.chipData.map(renderChip)}
          </div>
        </List>
      </div>
    );
};

export default ModalList;
