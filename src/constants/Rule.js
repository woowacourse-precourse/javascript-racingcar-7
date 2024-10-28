const CAR_NAME_SPLITER = Object.freeze(',');

const CAR_NAME_RULE = Object.freeze({
  MIN_LENGTH: 1,
  MAX_LENGTH: 5,
});

const RANDOM_MOVE_RULE = Object.freeze({
  MIN: 0,
  MAX: 9,
  MOVE_CONDITION: 4,
});

export { CAR_NAME_SPLITER, CAR_NAME_RULE, RANDOM_MOVE_RULE };
