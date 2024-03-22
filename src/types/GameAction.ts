import { GameOption } from './GameOption';

export type GameAction = {
  type:
    | 'INCREMENT_PLAYER_SCORE'
    | 'INCREMENT_MACHINE_SCORE'
    | 'SET_WINNER'
    | 'SET_PLAYER_CHOICE'
    | 'SET_MACHINE_CHOICE'
    | 'TRY_AGAIN';
  option?: GameOption;
  winner?: 'player' | 'machine' | 'draw';
};

export type GameState = {
  playerScore: number;
  machineScore: number;
  playerChoice: GameOption | null;
  machineChoice: GameOption | null;
  winner?: 'player' | 'machine' | 'draw' | null;
};
