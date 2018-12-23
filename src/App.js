import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Winnie from './Winnie'
import Bob from './Bob'
import Thomas from './Thomas'
import George from './George'

class App extends Component {

  state = {
    winnieCards: ["test1", "test2"],
    bobCards: ["test1", "test2"],
    thomasCards: ["test1", "test2"],
    georgeCards: ["test1", "test2"]
  }

  addACard = (e, arrName, message) => {
    let newArr = [...this.state[arrName], message]
    this.setState({
      [arrName] : newArr
    })
  }

  render() {
    return (
      <div className="container">
        <div>
          <Winnie addACard={this.addACard} notes={this.state.winnieCards} />
        </div>
        <div>
          <Bob addACard={this.addACard} notes={this.state.bobCards} />
        </div>
        <div>
          <Thomas addACard={this.addACard} notes={this.state.thomasCards} />
        </div>
        <div>
          <George addACard={this.addACard} notes={this.state.georgeCards} />
        </div>
      </div>
    );
  }
}

export default App;
