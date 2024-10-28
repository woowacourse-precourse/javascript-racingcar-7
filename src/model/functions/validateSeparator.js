import { ERROR } from '../../constants/constants.js';

export const validateSeparator = (input) => {
  const invalidCharacterRegex = /[^a-zA-Z0-9,]/;

  const isInvalidCharacter = invalidCharacterRegex.test(input);

  if (isInvalidCharacter) {
    throw new Error(ERROR.SEPARATOR_STRING);
  }
};
