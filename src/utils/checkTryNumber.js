import { ERROR } from "../constants/error.js";

export default function checkTryNumber(tryNumber) {
  if (tryNumber <= 0) {
    throw new Error(ERROR.POSITIVE);
  }
}
