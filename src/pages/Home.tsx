import { useReducer } from 'react';
import Game from '../components/Game';
import { Header } from '../components/Header';
import { Play } from '../components/Play';
import { GameAction } from '../types/GameAction';
import { GameState } from '../types/GameState';

function reducer(state: GameState, action: GameAction): GameState {
  switch (action.type) {
    case 'INCREMENT_SCORE':
      return {
        ...state,
        score: state.score + 1,
      };

    case 'DECREMENT_SCORE':
      return {
        ...state,
        score: state.score - 1,
      };

    case 'RESET_GAME':
      return initialGameState;

    case 'SET_MACHINE_CHOICE':
      return {
        ...state,
        machineChoice: action.option ?? null,
      };

    case 'SET_PLAYER_CHOICE':
      return {
        ...state,
        playerChoice: action.option ?? null,
      };

    default:
      return state;
  }
}

const initialGameState: GameState = {
  score: 0,
  playerChoice: null,
  machineChoice: null,
};

export default function Home() {
  const [state, dispatch] = useReducer(reducer, initialGameState);

  return (
    <main className="h-full w-full border">
      <Header score={state.score} />

      <div className="mx-auto mt-10 max-w-[500px] text-center">
        {!state.playerChoice && <Play dispatchEvent={dispatch} />}

        {state.playerChoice && <Game dispatchEvent={dispatch} />}
      </div>
    </main>
  );
}
