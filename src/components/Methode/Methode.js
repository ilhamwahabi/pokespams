import React from 'react'
import {Tabs, Tab} from 'material-ui/Tabs';
import FontIcon from 'material-ui/FontIcon';

export default class Methode extends React.Component {
  render(){
    return (
      <section>
        <Tabs>
          <Tab
            icon={<FontIcon className="material-icons">view_day</FontIcon>}
            label="Knuth-Morris-Pratt"
          >
          </Tab>
          <Tab
            icon={<FontIcon className="material-icons">local_drink</FontIcon>}
            label="Boyer-Moore"
          />
          <Tab
          icon={<FontIcon className="material-icons">code</FontIcon>}
          label="Regular Expression"
          />
        </Tabs>
      </section>
    )
  }
}