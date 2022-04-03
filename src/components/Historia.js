import React, { Component } from 'react'

export default class Historia extends Component {
    constructor(props){
        super(props);
    }

  render() {
    return (
        <>
            <div className='historia'>
                <h1>{this.props.historiaMostrada}</h1>
            </div>
        </>
      
    )
  }
}
