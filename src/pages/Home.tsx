import { useReducer } from 'react';
import Game from '../components/Game';
import { Header } from '../components/Header';
import { Play } from '../components/Play';
import { GameAction, GameState } from '../types/GameAction';

function reducer(state: GameState, action: GameAction): GameState {
  switch (action.type) {
    case 'INCREMENT_PLAYER_SCORE':
      return {
        ...state,
        playerScore: state.playerScore + 1,
      };

    case 'INCREMENT_MACHINE_SCORE':
      return {
        ...state,
        machineScore: state.machineScore + 1,
      };

    case 'SET_WINNER':
      return {
        ...state,
        winner: action.winner,
      };

    case 'TRY_AGAIN':
      return {
        ...state,
        winner: null,
        machineChoice: null,
        playerChoice: null,
      };

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
  playerScore: 0,
  machineScore: 0,
  playerChoice: null,
  machineChoice: null,
  winner: null,
};

export default function Home() {
  const [state, dispatch] = useReducer(reducer, initialGameState);

  return (
    <main className="h-full w-full border">
      <Header
        scores={{
          player: state.playerScore,
          machine: state.machineScore,
        }}
      />

      <div className="mx-auto mt-10 max-w-[500px] text-center">
        {!state.playerChoice && !state.winner && (
          <Play dispatchEvent={dispatch} />
        )}

        {state.playerChoice && (
          <Game gameState={state} dispatchEvent={dispatch} />
        )}
      </div>
    </main>
  );
}
