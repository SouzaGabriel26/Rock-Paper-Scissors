import { FormEvent, useState } from 'react';
import { GameAction } from '../types/GameAction';
import { GameOption } from '../types/GameOption';
import { sleep } from '../utils/sleep';
import { Option } from './Option';
import { Spinner } from './Spinner';
import { HandFist } from './icons/HandFirst';
import { HandOpen } from './icons/HandOpen';
import { HandScissors } from './icons/HandScissors';

type PlayProps = {
  dispatchEvent: React.Dispatch<GameAction>;
};

export function Play({ dispatchEvent }: PlayProps) {
  const [playerChoice, setPlayerChoice] = useState<GameOption | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  function handlePlayerChoice(option: GameOption) {
    setPlayerChoice(option);
  }

  async function handleFormSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setIsLoading(true);
    await sleep(1000);
    setIsLoading(false);

    if (playerChoice) {
      dispatchEvent({ type: 'SET_PLAYER_CHOICE', option: playerChoice });
    }
  }

  return (
    <div>
      <div className="mb-6 text-2xl text-slate-800">
        <h2>Choose one:</h2>
      </div>

      <form
        onSubmit={handleFormSubmit}
        className="flex items-center justify-center gap-4"
      >
        <Option
          value="rock"
          disabled={isLoading}
          children={<HandFist />}
          onPlayerChoice={handlePlayerChoice}
        />
        <Option
          value="paper"
          disabled={isLoading}
          children={<HandOpen />}
          onPlayerChoice={handlePlayerChoice}
        />
        <Option
          value="scissors"
          disabled={isLoading}
          children={<HandScissors />}
          onPlayerChoice={handlePlayerChoice}
        />
      </form>

      {isLoading && <Spinner />}
    </div>
  );
}
