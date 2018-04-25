import React from 'react'
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Avatar from 'material-ui/Avatar';
import FontIcon from 'material-ui/FontIcon';
import FileFolder from 'material-ui/svg-icons/file/folder';
import FlipMove from 'react-flip-move';


export default class Result extends React.Component {
  render(){
    return (
      <section>
        <List>
          <Subheader inset={true}>Search Results</Subheader>
            <FlipMove duration={500} easing="ease-out">          
            {
              !this.props.responseData[0] ?
                <ListItem 
                  leftAvatar={<Avatar icon={<FontIcon className="material-icons">not_interested</FontIcon>} />}
                  primaryText="Spam Not Detected"
                /> :
                this.props.responseData.map((r, i) => (
                  <ListItem
                    leftAvatar={<Avatar icon={<FileFolder />} />}
                    rightIcon={<FontIcon className="material-icons">link</FontIcon>}
                    primaryText={r[0]}
                    secondaryText={r[1]}
                    key={i}
                  />
                ))
            }
          </FlipMove>
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