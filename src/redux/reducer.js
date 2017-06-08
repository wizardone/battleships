import defaultState from './state.js';
import {startPositioning, endPositioning} from './actions/positioning.js';

let battleshipApp = (state = defaultState, action) => {
  switch(action.type) {
    case 'START_POSITIONING':
      return Object.assign({}, state, {
        battleshipInPositioning: [...state.battleshipInPositioning, action.battleshipId],
        battleshipPositioning: true
      })
    case 'END_GAME':
      return Object.assign({}, state, {
        gameOver: true
      })
    default:
      return defaultState;
  }
}

module.exports = battleshipApp;