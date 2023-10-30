import { Room } from './room';

export type Game = {
  id: number;
  game_balls: number[];
  played_date: string;
  room: Room;
};
