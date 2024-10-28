import getCarNames from '../utils/getCarNames.js';
import getRoundCount from '../utils/getRoundCount.js';

async function initializeRace() {
  const carNames = await getCarNames();
  const rounds = await getRoundCount();
  return { carNames, rounds };
}

export default initializeRace;
