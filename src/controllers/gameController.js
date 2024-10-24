import initializeCars from './carContoller.js';
import { getRoundCount } from './inputController.js';

export default async function startGame() {
  await initializeCars();

  const roundCountInput = await getRoundCount();
}
