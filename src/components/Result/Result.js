import React from 'react'
import {List, ListItem} from 'material-ui/List';
import ActionInfo from 'material-ui/svg-icons/action/info';
import Subheader from 'material-ui/Subheader';
import Avatar from 'material-ui/Avatar';
import FileFolder from 'material-ui/svg-icons/file/folder';
import FontIcon from 'material-ui/FontIcon';

export default class Result extends React.Component {
  render(){
    return (
      <section>
      <List>
        <Subheader inset={true}>Search Results</Subheader>
        <ListItem 
          leftAvatar={<Avatar icon={<FontIcon className="material-icons">not_interested</FontIcon>} />}
          rightIcon={<FontIcon className="material-icons">done_all</FontIcon>}
          primaryText="Spam Not Detected"
        />
      </List>
      </section>
    )
  }
}

// <ListItem
//   leftAvatar={<Avatar icon={<FileFolder />} />}
//   rightIcon={<FontIcon className="material-icons">link</FontIcon>}
//   primaryText="Photos"
//   secondaryText="Jan 9, 2014"
// />