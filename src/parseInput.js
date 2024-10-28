import errorMessage from './ErrorMessage';

export function parsePlayers(inputstring) {
  if (inputstring === '') throw new Error(errorMessage.NO_PLAYER);
  const resultArray = inputstring.split(',');
  if (resultArray.some((value) => value.length > 5))
    throw new Error(errorMessage.NAME_IS_TOO_LONG);
  return resultArray;
}
export function parseRound(inputstring) {
  const inputNumber = parseInt(inputstring);
  if (isNaN(inputNumber)) throw new Error(errorMessage.NOT_A_NUMBER);
  else if (inputNumber < 0) throw new Error(errorMessage.NEGATIVE_NUMBER);
  return inputNumber;
}
