import React, { Component } from 'react';
import Historia from './Historia';
import Historial from './Historial';
import Opciones from './Opciones';
import data from './data.json';

export default class Contenedor extends Component {
  constructor() {
    super()
    this.state = {
      opcionElegida: [1, ""],
      historial: [],
      historiaMostrada: "",
      botonesOpciones: {},
    }
  }

  componentDidMount() {
    this.actualizarHistoriaMostrada(this.state.opcionElegida);
  }

  actualizarHistoriaMostrada = (opcionElegida) => {

    let historia = data.find(obj => obj.id == String(opcionElegida[0]).concat("", opcionElegida[1]));

    if (opcionElegida[0] < 6) {
      this.setState({
        historiaMostrada: historia.historia,
        botonesOpciones: historia.opciones,
      })
    } else {
      alert("FIN")
    }
  }

  actualizarHistorial = (opcionElegida) => {
    this.setState(prevState => ({
      historial: [...prevState.historial, opcionElegida]
    }));

  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.opcionElegida != this.state.opcionElegida) {
      this.actualizarHistorial(this.state.opcionElegida)
      this.actualizarHistoriaMostrada(this.state.opcionElegida)
    }
  }

  handleClick = (opcion) => {
    this.setState(prevState => ({
      opcionElegida: [prevState.opcionElegida[0] + 1, opcion],
    }))
  }

  render() {
    return (
      <>
        <div className='layout'>
          <Historia historiaMostrada={this.state.historiaMostrada} />
          <Opciones botonesOpciones={this.state.botonesOpciones} clickMe={this.handleClick} />
          <Historial historial={this.state.historial} ultimaEleccion={this.state.opcionElegida[1]} />
        </div>
      </>
    )
  }
}
