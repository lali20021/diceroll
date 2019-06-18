
import React, { Component } from 'react'
import Rolls from './Rolls'
import './App.css'

class Dice extends Component {
    render(){
  return (
    <div>
        <h1>Number: {this.props.draw}</h1>
        <button className="square" onClick={this.props.onRoll}>
        Roll Dice</button>
    </div>
  );
}
}
export default Dice
