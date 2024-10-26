import {
  GAME_ATTEMPT_RANGE,
  NAME_LENGTH_RANGE,
  PARTICIPANT_COUNT_RANGE,
  VALID_USERNAME_REGEX,
  REMOVE_ALL_SPACES_REGEX,
  VALIDATION_ERROR_MESSAGE,
} from '../constants/constants';

export const isEmptyStringIncluded = (input) => {
  if (input === null || input == undefined || input === '') {
    throw new Error(VALIDATION_ERROR_MESSAGE.INCLUDE_EMPTY_SPACE);
  }

  const removed_all_spaced = input.replace(REMOVE_ALL_SPACES_REGEX, '');
  if (input.length !== removed_all_spaced.length) {
    throw new Error(VALIDATION_ERROR_MESSAGE.INCLUDE_EMPTY_SPACE);
  }
  return true;
};
export const isPositiveInteger = (input) => {
  const number = Number(input);
  if (Number.isNaN(number) || !Number.isInteger(number) || number <= 0) {
    throw new Error(VALIDATION_ERROR_MESSAGE.IS_NOT_POSITIVE_INTEGER);
  }
  return true;
};

export const isValidCarName = (input) => {
  if (!input.match(VALID_USERNAME_REGEX)) {
    throw new Error(VALIDATION_ERROR_MESSAGE.INVALID_NAME_FORMAT);
  }
  if (
    NAME_LENGTH_RANGE.MIN > input.length ||
    input.length > NAME_LENGTH_RANGE.MAX
  ) {
    throw new Error(VALIDATION_ERROR_MESSAGE.NAME_LENGTH_OUT_OF_RANGE);
  }
  return true;
};

export const isValidGameAttempts = (input) => {
  if (GAME_ATTEMPT_RANGE.MIN > input || GAME_ATTEMPT_RANGE.MAX < input) {
    throw new Error(VALIDATION_ERROR_MESSAGE.GAME_ATTEMPT_OUT_OF_RAGNE);
  }
  return true;
};

export const isValidParticipantAmount = (input) => {
  const participantsNumber = input.split(',').length;
  console.log(participantsNumber, input);
  if (
    PARTICIPANT_COUNT_RANGE.MIN > participantsNumber ||
    PARTICIPANT_COUNT_RANGE.MAX < participantsNumber
  ) {
    throw new Error(VALIDATION_ERROR_MESSAGE.PARTICIPANT_COUNT_OUT_OF_RANGE);
  }
  return true;
};
