export function CountName(inputName) {
  const names = inputName.split(",");

  names.forEach((name) => {
    if (name.length > 5) {
      throw new Error("[ERROR]");
    }
  });
  return names;
}
