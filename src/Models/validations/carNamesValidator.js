function carNamesLengthValidator(trimmedEachCarName) {
  return trimmedEachCarName.every(element => element.length < 6);
}

export default carNamesLengthValidator;
