import {useReducer} from 'react'

function reducer(state,action){
  switch (action.typee) {
    case "START":
      break;
  
    default:
      break;
  }
}

export default function useGame(){
  const initialState = {
    frame: null,
    spawnIntervalId: null,
    watchSpawnIntervalId: null,
    projectiles: [],
    particles: [],
    enemies: [],
    score: 0,
    paused: false,
    started: false,
    reverseBulletsActivated: false,
    blackHoleBulletsActivated: false,
    level: 1,
    numberOfEnemiesToThrow: 2,
    numberOfEnemiesThrown: 0,
    rewards: {
      reverseBullets: 0,
      blackHoleBullets: 0
    }
  }

  return useReducer(reducer, initialState)
}