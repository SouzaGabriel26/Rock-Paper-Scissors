import { GameAction } from '../types/GameAction';

type GameProps = {
  dispatchEvent: React.Dispatch<GameAction>;
};

export default function Game({ dispatchEvent }: GameProps) {
  return (
    <div>
      Machine playing...
      <p>result...</p>
      <button
        onClick={() => {
          dispatchEvent({ type: 'RESET_GAME' });
        }}
      >
        Try again
      </button>
    </div>
  );
}
