import InputView from '../views/InputView.js';
import validateCarNames from './validateCarNames.js';

const getCarNames = async () => {
  const carInput = await InputView.readInput(
    '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)',
  );

  const carNames = carInput.split(',').map((name) => name.trim());

  validateCarNames(carNames);
  return carNames;
};

export default getCarNames;
