import React from 'react'

import Methode from '../Methode/Methode'
import Result from '../Result/Result'

import './Content.css'

export default class Content extends React.Component {
  render(){
    return (
      <main id="content">
        <section id="variable">
          <Methode />
        </section>
        <section id="d1" />
        <section id="value">
          <Result responseData={this.props.responseData} />
        </section>
      </main>
    )
  }
}