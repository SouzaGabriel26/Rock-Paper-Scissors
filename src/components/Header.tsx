type HeaderProps = {
  score: number;
};

export function Header({ score }: HeaderProps) {
  return (
    <header className="flex items-center justify-between bg-gray-200 px-24 py-4 md:py-6">
      <h1 className="text-xl text-slate-800">Rock Paper Scissors GAME</h1>

      <div className="flex flex-col items-center justify-center rounded-sm border border-slate-400 px-6 py-2">
        <strong className="">Score:</strong>
        <div>
          <span>{score}</span>
        </div>
      </div>
    </header>
  );
}
