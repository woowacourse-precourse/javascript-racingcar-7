export function CountNumber(inputCount) {
  const regex = /^[0-9]+$/;

  if (regex.test(inputCount)) {
    const number = Number(inputCount);
    return number;
  } else {
    throw new Error("[ERROR]");
  }
}
