import React, { Component } from 'react'
import Dice from './Dice'
import Rolls from './Rolls'
import './App.css'

class App extends Component {
    constructor(props){
        super(props)
        this.state={
            history: [],
            currentRoll: null,
        }
    }

    diceRoll = () =>{
        //deconstruct line 16
        const{ history, currentRoll } = this.state
        let randomNr = Math.floor ( Math.random () * 6 + 1 )
        console.log("random Number" + randomNr);

        history.push(randomNr)
        console.log("rolls" + history);
        this.setState({currentRoll: randomNr, history: history})
        // this.setState({rolls})
    }
    render(){
        const{ history, currentRoll } = this.state
        console.log(history);

  return (
      <div>
        <Dice onRoll = {this.diceRoll} draw={currentRoll} />
        <Rolls list={history}/>
      </div>
  );
}
}
export default App;
