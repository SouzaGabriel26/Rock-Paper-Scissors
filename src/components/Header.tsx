import { useGameContext } from '../hooks/useGameContext';

export function Header() {
  const { state } = useGameContext();

  return (
    <header className="flex items-center justify-between bg-gray-200 px-6 py-4 md:px-24 md:py-6">
      <h1 className="text-xl font-bold text-slate-800 md:text-2xl lg:text-4xl">
        Jan Ken Pon
      </h1>

      <div className="relative flex flex-col items-center justify-center rounded-md border border-slate-400 px-6 py-2">
        <strong>Score:</strong>
        <div className="flex w-[70px] items-center justify-between gap-2">
          <small>Player:</small>
          <span className="font-bold">{state.playerScore}</span>
        </div>

        <div className="flex w-[70px] items-center justify-between gap-2">
          <small>Machine:</small>
          <span className="font-bold">{state.machineScore}</span>
        </div>
      </div>
    </header>
  );
}
