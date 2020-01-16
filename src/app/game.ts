
import {Card} from './card';

export interface Game {
  id: number;
  name: string;
  creationDate: string;
  updateDate: string;
  category: string;
  cardList: Card[];
}
