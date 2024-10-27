import InputView from '../views/InputView.js';

const getRoundCount = async () => {
  const countInput = await InputView.readInput('시도할 횟수는 몇 회인가요?');
  return parseInt(countInput, 10);
};

export default getRoundCount;
