import { Console } from '@woowacourse/mission-utils'
import { INPUT } from '../constants/message.js'

export default class ViewIn {
  static async getCarsName () {
    return Console.readLineAsync(`${INPUT.CARS}`)
  }

  static async getAttemptCount () {
    return Console.readLineAsync(`${INPUT.COUNT}`)
  }
}