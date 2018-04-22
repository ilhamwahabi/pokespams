import React from 'react';
import {List, ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import ActionAssignment from 'material-ui/svg-icons/action/assignment';
import {blue500} from 'material-ui/styles/colors';
import FontIcon from 'material-ui/FontIcon';

export default class Filter extends React.Component {
  render(){
    return (
      <section>
      <List>
      {
        this.props.text.map((t, i) => {
          return (
            <React.Fragment key={i}>
              <ListItem
                leftAvatar={<Avatar icon={<ActionAssignment />} backgroundColor={blue500} />}
                rightIcon={<FontIcon className="material-icons">delete</FontIcon>}
                primaryText={t}
              />
            </React.Fragment>
          )
        })
      }
      </List>
      </section>
    )
  }
}
