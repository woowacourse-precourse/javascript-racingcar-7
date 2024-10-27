export default {
  REGEX_SINGLE_NAME: /^[^,]{1,5}$/,
  REGEX_LONG_NAME: /^[^,]+(,[^,]+)*$/,
  REGEX_VALID_NAMES_FORMAT: /^[^,]{1,5}(,[^,]{1,5})+$/,

  REGEX_NOT_NUMBER: /[^0-9]+/,
  REGEX_ONLY_ZERO: /^[0]$/,
  REGEX_VALID_NUMBER_FORMAT: /^[1-9](\d+)*$/,
};
