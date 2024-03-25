import { useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { Option } from '../components/Option';
import { Spinner } from '../components/Spinner';
import { Tooltip } from '../components/Tooltip';
import { useGameContext } from '../hooks/useGameContext';
import { GameOption } from '../types/GameOption';
import { sleep } from '../utils/sleep';

export function Play() {
  const { dispatch, checkPlayerChoice, setPlayerChoice } = useGameContext();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [rockOptionError, setRockOptionError] = useState(false);

  async function handlePlayerChoice(playerOption: GameOption) {
    setIsLoading(true);
    await sleep(1000);
    setIsLoading(false);

    if (playerOption) {
      const playerChoice = checkPlayerChoice(playerOption);

      if (!playerChoice.ok) {
        setRockOptionError(true);
        return toast.error(playerChoice.message ?? 'Invalid option');
      }

      setPlayerChoice(playerOption);

      const options: GameOption[] = ['rock', 'paper', 'scissors'];
      const randomIndex = Math.floor(Math.random() * options.length);
      const selectedMachineChoice = options[randomIndex];
      dispatch({
        type: 'SET_MACHINE_CHOICE',
        option: selectedMachineChoice,
      });
    }

    navigate('/game');
  }

  return (
    <div>
      <div className="mb-6 text-center text-2xl text-slate-800">
        <h2>Choose one:</h2>
      </div>

      <div
        className={`flex items-center justify-center gap-4 ${isLoading && 'pointer-events-none'}`}
      >
        <Tooltip content="Rock">
          <Option
            value="rock"
            disabled={isLoading}
            optionError={rockOptionError}
            onPlayerChoice={handlePlayerChoice}
          />
        </Tooltip>

        <Tooltip content="Paper">
          <Option
            value="paper"
            disabled={isLoading}
            onPlayerChoice={handlePlayerChoice}
          />
        </Tooltip>

        <Tooltip content="Scissors">
          <Option
            value="scissors"
            disabled={isLoading}
            onPlayerChoice={handlePlayerChoice}
          />
        </Tooltip>
      </div>

      {isLoading && <Spinner />}
    </div>
  );
}
