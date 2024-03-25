import { ComponentProps } from 'react';
import { GameOption } from '../types/GameOption';
import { HandFist } from './icons/HandFirst';
import { HandOpen } from './icons/HandOpen';
import { HandScissors } from './icons/HandScissors';

type OptionProps = {
  value: GameOption;
  onPlayerChoice?: (value: GameOption) => void;
  disabled?: boolean;
  optionError?: boolean;
} & ComponentProps<'div'>;

export function Option({
  value,
  onPlayerChoice,
  disabled,
  optionError,
  ...props
}: OptionProps) {
  function handleClick() {
    onPlayerChoice?.(value);
  }
  return (
    <div className="relative" {...props}>
      <span
        className={`absolute -top-2.5 left-0 -z-10 w-0 origin-center scale-0 transform rounded-full bg-slate-100 transition-all duration-100 has-[:checked]:h-24 has-[:checked]:w-24 has-[:checked]:scale-100 ${optionError && 'hidden'}`}
      >
        <input type="checkbox" id={value} className="hidden" />
      </span>

      <label
        className={`cursor-pointer ${disabled && 'cursor-not-allowed'}`}
        onClick={handleClick}
        htmlFor={value}
      >
        {value === 'rock' && <HandFist />}
        {value === 'paper' && <HandOpen />}
        {value === 'scissors' && <HandScissors />}
      </label>
    </div>
  );
}
