import { useState } from 'react';
import { GameAction } from '../types/GameAction';
import { GameOption } from '../types/GameOption';
import { sleep } from '../utils/sleep';
import { Option } from './Option';
import { Spinner } from './Spinner';
import { Tooltip } from './Tooltip';
import { HandFist } from './icons/HandFirst';
import { HandOpen } from './icons/HandOpen';
import { HandScissors } from './icons/HandScissors';

type PlayProps = {
  dispatchEvent: React.Dispatch<GameAction>;
};

export function Play({ dispatchEvent }: PlayProps) {
  const [isLoading, setIsLoading] = useState(false);

  async function handlePlayerChoice(playerOption: GameOption) {
    setIsLoading(true);
    await sleep(1000);
    setIsLoading(false);

    if (playerOption) {
      dispatchEvent({
        type: 'SET_PLAYER_CHOICE',
        option: playerOption,
      });

      const options: GameOption[] = ['rock', 'paper', 'scissors'];
      const randomIndex = Math.floor(Math.random() * options.length);
      const selectedMachineChoice = options[randomIndex];
      dispatchEvent({
        type: 'SET_MACHINE_CHOICE',
        option: selectedMachineChoice,
      });
    }
  }

  return (
    <div>
      <div className="mb-6 text-2xl text-slate-800">
        <h2>Choose one:</h2>
      </div>

      <div
        className={`flex items-center justify-center gap-4 ${isLoading && 'pointer-events-none'}`}
      >
        <Tooltip content="Rock">
          <Option
            value="rock"
            disabled={isLoading}
            children={<HandFist />}
            onPlayerChoice={handlePlayerChoice}
          />
        </Tooltip>

        <Tooltip content="Paper">
          <Option
            value="paper"
            disabled={isLoading}
            children={<HandOpen />}
            onPlayerChoice={handlePlayerChoice}
          />
        </Tooltip>

        <Tooltip content="Scissors">
          <Option
            value="scissors"
            disabled={isLoading}
            children={<HandScissors />}
            onPlayerChoice={handlePlayerChoice}
          />
        </Tooltip>
      </div>

      {isLoading && <Spinner />}
    </div>
  );
}
