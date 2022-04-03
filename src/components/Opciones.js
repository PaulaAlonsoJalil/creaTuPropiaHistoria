import React, { Component } from 'react'

export default class Opciones extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { clickMe } = this.props
    return (
      <div className='opciones'>
        <div className='opcion'>
          <button className='botones' onClick={() => clickMe("a")}>A</button><h2 className='opcion'>{this.props.botonesOpciones.a}</h2>
        </div>
        <div className='opcion'>
          <button className='botones' onClick={() => clickMe("b")}>B</button><h2 className='opcion'>{this.props.botonesOpciones.b}</h2>
        </div>
      </div>
    )
  }
}
