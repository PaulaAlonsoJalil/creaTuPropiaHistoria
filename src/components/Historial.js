import React, { Component } from 'react'

export default class Historial extends Component {
  render() {
    return (
      <>
        <div className='recordatorio'>
          <h3>Selección anterior: </h3>
          {this.props.ultimaEleccion.toUpperCase()}
          <h4>Historial de opciones elegidas:</h4>
          <ul>
            {this.props.historial.map(element => <li key={element[0]}>{element[1].toUpperCase()}</li>)}
          </ul>
        </div>
      </>
    )
  }
}
