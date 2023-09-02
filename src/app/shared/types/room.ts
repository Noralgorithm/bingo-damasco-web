export type Room = {
  id: number;
  name: string;
  bingos_amount: number;
  lines_amount: number;
  bingo_prize: number;
  line_prize: number;
  is_premium: boolean;
  card_price: number;
  frequency: string;
}