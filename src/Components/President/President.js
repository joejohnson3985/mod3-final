import React, { Component } from 'react'
import './President.scss'

class President extends Component {

  render() {
  const { number, president, birth_year, death_year, took_office, left_office, party } = this.props
    return(
      <div className='president-card'>
        <p>Number: {number}</p>
        <p>Name: {president}</p>
        <p>Born: {birth_year}</p>
        <p>Died: {death_year}</p>
        <p>Took Ofice: {took_office}</p>
        <p>Left Office: {left_office}</p>
        <p>Party: {party}</p>
      </div>
    )
  }
}

export default President