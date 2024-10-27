const REGEX = {
  ONLY_NUMBER: /^-?\d+(\.\d+)?$/,
  POINT_NUMBER: /^-?\d*\.\d+$/,
  POSITIVE_NUMBER: /^[1-9]\d*$/,
  CONSECUTIVE_DELIMITERS: /,,+/,
  DELIMITER_START_OR_END: /^,|,$/,
};

export default REGEX;
