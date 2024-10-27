export function eraseWhiteSpace(extractCarNameArray) {
  const trimmedCarNameArray = extractCarNameArray.map((carName) => {
    return carName.trim();
  });
  return trimmedCarNameArray;
}
