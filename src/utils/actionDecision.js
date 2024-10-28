import generateRandomValue from "./generateRandomValue.js";

function actionDecision() {
  let randomValue = generateRandomValue();
  return randomValue < 4 ? 0 : randomValue;
}
export default actionDecision;
