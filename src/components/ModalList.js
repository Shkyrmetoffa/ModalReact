import React from 'react';
import Chip from 'material-ui/Chip';
import {List} from 'material-ui/List';
import SelectBox from './SelectBox';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 500,
    height: 450,
    overflowY: 'auto',
  },
};
export default class ModalList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {chipData: [
      {key: 0, label: 'Vue'},
      {key: 1, label: 'React'},
      {key: 2, label: 'Ang'},
      {key: 3, label: 'Ang'},
      {key: 4, label: 'Ang'},
      {key: 5, label: 'Ang'},
      {key: 6, label: 'Ang'},
    ]};
    this.styles = {
      chip: {
        margin: 4,
      },
      wrapper: {
        display: 'flex',
        flexWrap: 'wrap',
      },
    };
  }

  handleRequestDelete = (key) => {

    this.chipData = this.state.chipData;
    const chipToDelete = this.chipData.map((chip) => chip.key).indexOf(key);
    this.chipData.splice(chipToDelete, 1);
    this.setState({chipData: this.chipData});
  };

  renderChip(data) {
    return (
      <Chip
        key={data.key}
        onRequestDelete={() => this.handleRequestDelete(data.key)}
        style={this.styles.chip}
      >
        {<SelectBox />}
      </Chip>
    );
  }

//   render() {
//     return (
//       <ul style={this.styles.wrapper}>
//         {this.state.chipData.map(this.renderChip, this)}
//       </ul>
//     );
//   }
render() {
  return (
    <div style={styles.root}>
    <List
    cellHeight={180}
    style={styles.gridList}
  >
<div style={this.styles.wrapper}>
         {this.state.chipData.map(this.renderChip, this)}
       </div>
{/* <ListItem primaryText="Inbox" leftIcon={<ContentInbox />} />
<ListItem primaryText="Starred" leftIcon={<ActionGrade />} />
<ListItem primaryText="Sent mail" leftIcon={<ContentSend />} />
<ListItem primaryText="Drafts" leftIcon={<ContentDrafts />} />
<ListItem primaryText="Inbox" leftIcon={<ContentInbox />} /> */}
</List>

</div>
)
}
}