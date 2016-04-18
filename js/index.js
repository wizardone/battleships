import React from 'react'
import ReactDom from 'react-dom'
import Board from './components/board.js'

class App extends React.Component {
  constructor(data) {
    super(data);
  }

  render() {
    let player1 = 'player1';
    let player2 = 'player2';
    return (
      <div>
      <Board player="player1"/>
      <p></p>
      <Board player="player2"/>
      </div>
    )
  }
}

ReactDom.render(<App />, document.getElementById('main'));
