import { Console } from '@woowacourse/mission-utils';
import { GUIDE_MESSAGE } from '../constants/messages.js';

const displayGameGuide = function displayInputGuideFunc() {
  Console.print(GUIDE_MESSAGE.HEADER);
  Console.print(GUIDE_MESSAGE.INTRO);
  Console.print(GUIDE_MESSAGE.NAME_RULE_1);
  Console.print(GUIDE_MESSAGE.NAME_RULE_2);
  Console.print(GUIDE_MESSAGE.NAME_RULE_3);
  Console.print(GUIDE_MESSAGE.TRY_COUNT_RULE);
  Console.print(GUIDE_MESSAGE.MOVE_RULE);
  Console.print(GUIDE_MESSAGE.WINNER_RULE);
  Console.print(GUIDE_MESSAGE.FOOTER);
};

export default displayGameGuide;
