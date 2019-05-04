import React from 'react'
import { List, ListItem } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Avatar from 'material-ui/Avatar';
import FontIcon from 'material-ui/FontIcon';
import FileFolder from 'material-ui/svg-icons/file/folder';
import FlipMove from 'react-flip-move';

const Result = ({ responseData }) => {
  return (
    <section id="result">
      <List>
        <Subheader inset={true}>
          Search Results
        </Subheader>
        <FlipMove id="result__flipmove" duration={500} easing="ease-out">          
        {
          !responseData[0] ?
          <ListItem 
            leftAvatar={
              <Avatar icon={<FontIcon className="material-icons">not_interested</FontIcon>} />
            }
            primaryText="Spam Not Detected"
          /> :
          responseData.map((r, i) => (
              <ListItem
                leftAvatar={<Avatar icon={<FileFolder />} />}
                rightIcon={<FontIcon className="material-icons">link</FontIcon>}
                primaryText={r[0]}
                secondaryText={r[1]}
                key={i}
              />
            )
          )
        }
        </FlipMove>
      </List>
    </section>
  )
}

export default Result