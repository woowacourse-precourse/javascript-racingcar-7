import { MissionUtils } from '@woowacourse/mission-utils';
import GAME from '../constants/Game.js';

const generateRandomNumber = () =>
  MissionUtils.Random.pickNumberInRange(GAME.minRandomNumber, GAME.maxRandomNumber);

export default generateRandomNumber;
