import React from 'react';
import logo from './logo.svg';
import './App.css';
import produce from 'immer';

class App extends React.Component {

  constructor(){
    super();
    this.baseState={
      input: ''
    };
    this.nextState=null;
  }

  handleInputChange=(event)=>{
    console.log('handleInputChange called...');
    this.nextState=produce(this.baseState, derivedState=>{
      this.baseState.input=event.target.value;
    });
    console.log('nextState', this.nextState);
  }
  render(){
  return (
    <div className="App">
      <h1>React Immer Demo</h1>
          <input type="text" placeholder="enter something !" onChange={(event)=>this.handleInputChange(event)}/> 
          {this.nextState ? this.nextState.input: ''}
    </div>
  );
}

}

export default App;
