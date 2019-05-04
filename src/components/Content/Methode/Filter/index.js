import React from 'react';
import { List, ListItem } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import ActionAssignment from 'material-ui/svg-icons/action/assignment';
import { blue500 } from 'material-ui/styles/colors';
import FontIcon from 'material-ui/FontIcon';
import FlipMove from 'react-flip-move';

import './index.css'

const Filter = ({ text, onDelete }) => {
  const handleDelete = (id) => onDelete(id)

  return (
    <section id="filter">
      <List>
        <FlipMove duration={500} easing="ease-out">
      {
        !text[0] ? 
          <ListItem
            primaryText="Kata identifikasi spam kosong"
            key={0}
          /> :
        text.map((t, i) => {
          return (
            <ListItem
              leftAvatar={<Avatar icon={<ActionAssignment />} backgroundColor={blue500} />}
              rightIcon={<FontIcon className="material-icons">delete</FontIcon>}
              primaryText={t.text}
              key={t.id}
              onClick={handleDelete.bind(null, t.id)}
            />
          )
        })
      }
        </FlipMove>
      </List>
    </section>
  )
}

export default Filter