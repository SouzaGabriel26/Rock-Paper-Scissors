import { GameOption } from './GameOption';

export type GameAction = {
  type:
    | 'INCREMENT_SCORE'
    | 'DECREMENT_SCORE'
    | 'SET_PLAYER_CHOICE'
    | 'SET_MACHINE_CHOICE'
    | 'RESET_GAME';
  option?: GameOption;
};
