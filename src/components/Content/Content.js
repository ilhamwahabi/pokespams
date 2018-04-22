import React from 'react'

import Methode from '../Methode/Methode'
import Result from '../Result/Result'
import Pattern from '../Pattern/Pattern'

import './Content.css'

export default class Content extends React.Component {
  render(){
    return (
      <main id="content">
        <section id="variable">
          <Methode />
          <Pattern />
        </section>
        <section id="d1" />
        <section id="value">
          <Result />
        </section>
      </main>
    )
  }
}