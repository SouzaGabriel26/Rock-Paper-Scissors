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
  function handleClick() {
    onPlayerChoice(value);
  }

  return (
    <div className="relative">
      <span
        className={`absolute -top-2.5 left-0 -z-10 w-0 origin-center scale-0 transform rounded-full bg-slate-100 transition-all duration-100 has-[:checked]:h-24 has-[:checked]:w-24 has-[:checked]:scale-100`}
      >
        <input type="checkbox" id={value} className="hidden" />
      </span>

      <label
        className={`cursor-pointer ${disabled && 'cursor-not-allowed'}`}
        onClick={handleClick}
        htmlFor={value}
      >
        {children}
      </label>
    </div>
  );
}
