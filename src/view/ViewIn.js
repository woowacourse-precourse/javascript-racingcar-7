import { INPUT } from '../constants/message.js';
import { Console } from '@woowacourse/mission-utils';

export default class ViewIn {
  static async getCars() {
    return Console.readLineAsync(`${INPUT.CARS}\n`);
  }

  static async getCount() {
    return Console.readLineAsync(`${INPUT.COUNT}\n`);
  }
}