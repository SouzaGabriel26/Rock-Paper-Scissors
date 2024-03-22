import { FormEvent, useState } from 'react';
import { GameAction } from '../types/GameAction';
import { GameOption } from '../types/GameOption';

type PlayProps = {
  dispatchEvent: React.Dispatch<GameAction>;
};

export function Play({ dispatchEvent }: PlayProps) {
  const [playerChoice, setPlayerChoice] = useState<GameOption | null>(null);

  function handlePlayerChoice(option: GameOption) {
    setPlayerChoice(option);
  }

  function handleFormSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (playerChoice) {
      dispatchEvent({ type: 'SET_PLAYER_CHOICE', option: playerChoice });
    }
  }

  return (
    <div>
      <div>
        <h2>Choose one:</h2>
      </div>

      <form onSubmit={handleFormSubmit}>
        <button type="submit" onClick={() => handlePlayerChoice('rock')}>
          Rock
        </button>
        <button type="submit" onClick={() => handlePlayerChoice('paper')}>
          Paper
        </button>
        <button type="submit" onClick={() => handlePlayerChoice('scissors')}>
          Scissors
        </button>
      </form>
    </div>
  );
}
