class HandleError {
  static makeError(message) {
    throw new Error(`[ERROR]: ${message}`);
  }

  static ATTEMPT_INPUT_ERROR = {
    IsEmpty: '시도 횟수를 입력해주세요.',
    IsBlank: '시도 횟수를 공백으로 입력하지 마세요. 자연수로 입력해주세요.',
    IsNotInt: '시도 횟수는 자연수로 입력해주세요.',
  };

  static NAME_INPUT_ERROR = {
    IsEmpty: '이름을 입력해주세요',
    IsBlank: '이름이 전부 공백이어서는 안됩니다.',
    TooLongName: '이름은 5자 이하로 설정해야합니다.',
  };
}

export default HandleError;
