import InputView from '../views/InputView.js';
import validateRoundCount from './validateRoundCount.js';

const getRoundCount = async () => {
  const countInput = await InputView.readInput('시도할 횟수는 몇 회인가요?');
  const roundCount = parseInt(countInput, 10);

  validateRoundCount(roundCount);
  return roundCount;
};

export default getRoundCount;
