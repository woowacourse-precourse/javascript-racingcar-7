import { Console } from '@woowacourse/mission-utils';
import { INPUT } from '../constants/message.js';

export default class ViewIn {
  static async getCars() {
    return Console.readLineAsync(`${INPUT.CARS}\n`);
  }

  static async getCount() {
    return Console.readLineAsync(`${INPUT.COUNT}\n`);
  }
}