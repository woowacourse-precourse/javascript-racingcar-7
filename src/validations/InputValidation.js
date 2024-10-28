import {
  isNotEmpty,
  hasNoWhitespace,
  matchesRegex,
  isWithinRange,
  isPositiveInteger,
  hasNoDuplicates,
  composeValidators,
} from './ValidationUtils.js';

import {
  GAME_ATTEMPT_RANGE,
  NAME_LENGTH_RANGE,
  PARTICIPANT_COUNT_RANGE,
  VALID_USERNAME_REGEX,
  VALIDATION_ERROR_MESSAGE,
} from '../constants/constants.js';

const validateCarName = composeValidators(
  (input) => matchesRegex(VALID_USERNAME_REGEX, input),
  (input) =>
    isWithinRange(
      NAME_LENGTH_RANGE.MIN,
      NAME_LENGTH_RANGE.MAX,
      input.length,
      VALIDATION_ERROR_MESSAGE.NAME_LENGTH_OUT_OF_RANGE,
    ),
);

const validateGameAttempts = composeValidators(isPositiveInteger, (number) =>
  isWithinRange(
    GAME_ATTEMPT_RANGE.MIN,
    GAME_ATTEMPT_RANGE.MAX,
    number,
    VALIDATION_ERROR_MESSAGE.GAME_ATTEMPT_OUT_OF_RANGE,
  ),
);

const validateParticipants = composeValidators(hasNoDuplicates, (names) => {
  const participantsNumber = names.length;
  return isWithinRange(
    PARTICIPANT_COUNT_RANGE.MIN,
    PARTICIPANT_COUNT_RANGE.MAX,
    participantsNumber,
    VALIDATION_ERROR_MESSAGE.PARTICIPANT_COUNT_OUT_OF_RANGE,
  );
});

const validateInputStrings = composeValidators(isNotEmpty, hasNoWhitespace);

export {
  validateCarName,
  validateGameAttempts,
  validateParticipants,
  validateInputStrings,
};
