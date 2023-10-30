import { Game } from './game';

export type Participation = {
  id: number;
  game: Game;
  isVictory: boolean;
};
