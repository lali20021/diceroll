import React, { Component } from 'react'
import Dice from './Dice'

import './App.css'

class Rolls extends Component {
    render(){
        let {list} = this.props
  return (
    <div>
        // <h1>History: {this.props.list}</h1>
        <hi>{list.map((value) =>{
        return (
            <li>{value}</li>
        )
    } )}
        </h1>
    </div>
  );
}
}
export default Rolls
