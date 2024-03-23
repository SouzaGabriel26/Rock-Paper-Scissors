import { useCallback, useEffect } from 'react';
import { GameAction, GameState } from '../types/GameAction';
import { GameOption } from '../types/GameOption';
type GameProps = {
  dispatchEvent: React.Dispatch<GameAction>;
  gameState: GameState;
};

export default function Game({ dispatchEvent, gameState }: GameProps) {
  const { playerChoice, machineChoice, winner } = gameState;

  const machinePlay = useCallback(() => {
    const options: GameOption[] = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * options.length);
    const machineChoice = options[randomIndex];

    dispatchEvent({ type: 'SET_MACHINE_CHOICE', option: machineChoice });
  }, [dispatchEvent]);

  const getResult = useCallback(() => {
    machinePlay();

    if (playerChoice === 'paper' && machineChoice === 'paper') {
      dispatchEvent({ type: 'SET_WINNER', winner: 'draw' });
    } else if (playerChoice === 'paper' && machineChoice === 'rock') {
      dispatchEvent({ type: 'INCREMENT_PLAYER_SCORE' });
      dispatchEvent({ type: 'SET_WINNER', winner: 'player' });
    } else if (playerChoice === 'paper' && machineChoice === 'scissors') {
      dispatchEvent({ type: 'INCREMENT_MACHINE_SCORE' });
      dispatchEvent({ type: 'SET_WINNER', winner: 'machine' });
    } else if (playerChoice === 'rock' && machineChoice === 'rock') {
      dispatchEvent({ type: 'SET_WINNER', winner: 'draw' });
    } else if (playerChoice === 'rock' && machineChoice === 'paper') {
      dispatchEvent({ type: 'INCREMENT_MACHINE_SCORE' });
      dispatchEvent({ type: 'SET_WINNER', winner: 'machine' });
    } else if (playerChoice === 'rock' && machineChoice === 'scissors') {
      dispatchEvent({ type: 'INCREMENT_PLAYER_SCORE' });
      dispatchEvent({ type: 'SET_WINNER', winner: 'player' });
    } else if (playerChoice === 'scissors' && machineChoice === 'scissors') {
      dispatchEvent({ type: 'SET_WINNER', winner: 'draw' });
    } else if (playerChoice === 'scissors' && machineChoice === 'rock') {
      dispatchEvent({ type: 'INCREMENT_MACHINE_SCORE' });
      dispatchEvent({ type: 'SET_WINNER', winner: 'machine' });
    } else if (playerChoice === 'scissors' && machineChoice === 'paper') {
      dispatchEvent({ type: 'INCREMENT_PLAYER_SCORE' });
      dispatchEvent({ type: 'SET_WINNER', winner: 'player' });
    } else {
      dispatchEvent({ type: 'SET_WINNER', winner: 'draw' });
    }
  }, [dispatchEvent, playerChoice, machineChoice, machinePlay]);

  useEffect(() => {
    getResult();
  }, [getResult]);

  return (
    <div>
      <div>
        Player 1:
        <span>{playerChoice}</span>
      </div>

      <div>
        Machine:
        <span>{machineChoice}</span>
      </div>

      <div>{winner && <p>{winner}</p>}</div>

      <button
        onClick={() => {
          dispatchEvent({ type: 'TRY_AGAIN' });
        }}
      >
        Try again
      </button>
    </div>
  );
}
