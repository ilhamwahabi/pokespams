import React from 'react';
import {List, ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import ActionAssignment from 'material-ui/svg-icons/action/assignment';
import {blue500} from 'material-ui/styles/colors';
import FontIcon from 'material-ui/FontIcon';
import FlipMove from 'react-flip-move';

export default class Filter extends React.Component {
  componentDidMount(){
    console.log(this.props.text)
  }

  render(){
    return (
      <section>
        <List>
          <FlipMove duration={500} easing="ease-out">
        {
          this.props.text.map((t, i) => {
            return (
              <ListItem
                leftAvatar={<Avatar icon={<ActionAssignment />} backgroundColor={blue500} />}
                rightIcon={<FontIcon className="material-icons">delete</FontIcon>}
                primaryText={t.text}
                key={t.id}
              />
            )
          })
        }
          </FlipMove>
        </List>
      </section>
    )
  }
}
