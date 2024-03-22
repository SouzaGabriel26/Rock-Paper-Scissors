import { useState } from 'react';
import { GameOption } from '../types/GameOption';

type OptionProps = {
  children: React.ReactNode;
  value: GameOption;
  onPlayerChoice: (value: GameOption) => void;
  disabled: boolean;
};

export function Option({
  children,
  value,
  onPlayerChoice,
  disabled,
}: OptionProps) {
  const [isSelected, setIsSelected] = useState(false);

  function handleClick() {
    setIsSelected(true);
    onPlayerChoice(value);
  }

  return (
    <div className="group relative">
      <span
        className={`absolute -top-2.5 -z-10 w-0 origin-center scale-0 transform rounded-full bg-slate-100 transition-all duration-100 ${isSelected && 'h-24 w-24 scale-100'}`}
      ></span>
      <button type="submit" onClick={handleClick} disabled={disabled}>
        {children}
      </button>
    </div>
  );
}
