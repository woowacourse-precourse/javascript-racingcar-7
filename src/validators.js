const invalidLength = namesArray => namesArray.some(name => name.length === 0 || name.length > 5);

const invalidDuplicate = namesArray => {
  const namesSet = new Set(namesArray);
  return namesArray.length !== namesSet.size;
};

const invalidCharacter = namesArray => {
  const regex = /[a-zA-Z]/;
  return namesArray.some(name => !regex.test(name));
};

const invalidRange = count => count < 1;

const invalidInteger = count => Number(count) !== Math.floor(count);

const invalidNumber = count => Number.isNaN(Number(count));

export {
  invalidLength,
  invalidDuplicate,
  invalidCharacter,
  invalidRange,
  invalidInteger,
  invalidNumber,
};
