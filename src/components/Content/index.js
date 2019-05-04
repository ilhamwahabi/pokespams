import React from 'react'

import Methode from './Methode'
import Result from './Result'

import './index.css'

const Content = ({ responseData }) => {
  return (
    <main id="content">
      <section id="variable">
        <Methode />
      </section>
      <section id="d1" />
      <section id="value">
        <Result responseData={responseData} />
      </section>
    </main>
  )
}

export default Content