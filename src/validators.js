const invalidLength = namesArray => namesArray.some(name => name.length === 0 || name.length > 5);

const invalidDuplicate = namesArray => namesArray.length !== new Set(namesArray).size;

const invalidCharacter = namesArray => namesArray.some(name => !/[a-zA-Z]/.test(name));

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
