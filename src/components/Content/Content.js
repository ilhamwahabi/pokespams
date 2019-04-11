import React from 'react'

import Methode from '../Methode/Methode'
import Result from '../Result/Result'

import './Content.css'

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