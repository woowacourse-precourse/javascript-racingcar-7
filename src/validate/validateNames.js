import { validateInput } from "./validateInput.js";

export function validateNames(inputtedNames) {
  validateInput(inputtedNames);
  const names = splitNames(inputtedNames);
  names.forEach(name => validateSingleNames(name));
  validateNoDuplicates(names);
  return names;
}

function splitNames(input) {
  const names = input.split(',');
  return names;
}

function validateSingleNames(name) {
  const trimedName = trimName(name);
  if (trimedName.length > 5) {
    throw new Error('[ERROR] 이름이 5자 이상입니다');
  }
}

function trimName(names) {
  const name = names.trim();
  return name;
}

function validateNoDuplicates(names) {
  let i = 0;
  const uniqueNames = new Set();

  while (i < names.length) {
    if (uniqueNames.has(names[i])) {
      throw new Error('[ERROR] 이름이 중복되었습니다');
    }
    uniqueNames.add(names[i]);
    i++;
  }
}