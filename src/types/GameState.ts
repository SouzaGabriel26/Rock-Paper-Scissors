import { GameOption } from './GameOption';

export type GameState = {
  score: number;
  playerChoice: GameOption | null;
  machineChoice: GameOption | null;
};
