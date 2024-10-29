const throwError = (errorMessage) => {
  throw new Error(`[ERROR] ${errorMessage}`);
};

export const checkUserFormat = (userList) => {
  userList.forEach((user) => {
    if (user === '' || user.length > 5) {
      throwError('Please enter a name with 1 to 5 characters.');
    }
  });
};

export const checkUserDuplicate = (userList) => {
  let uniqueUserList = new Set(userList);
  if (userList.length !== uniqueUserList.size) {
    throwError('Duplicate names are not allowed.');
  }
};

export const checkRoundFormat = (roundNum) => {
  if (isNaN(roundNum)) {
    throwError('Please enter a number.');
  }
};

export const checkRoundNaturalNumber = (roundNum) => {
  if (roundNum < 1 || !Number.isInteger(roundNum)) {
    throwError('Please enter a natural number.');
  }
};
