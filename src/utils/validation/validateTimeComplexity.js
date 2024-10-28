import ErrorMessage from '../../resources/ErrorMessage.js';
import Rules from '../../resources/Rules.js';

export default function validateTimeComplexity(names, repetitionString) {
  const N = names.split(',').length * Number(repetitionString);
  if (N > Rules.VALID_TIMECOMPLEXITY) {
    throw new Error(ErrorMessage.OVER_VALID_TIMECOMPLEXITY);
  }
}
