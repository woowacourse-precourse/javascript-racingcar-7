export function NameParser(nameInput) {
  console.log(nameInput);
  let nameList = nameInput.split(",");
  for (let name of nameList) NameChecker(name);
  return nameList;
}

function NameChecker(name) {
  const isCorrectName = /^[\w]*$/;
  // 이름은 숫자와 문자만 입력받을 수 있음.
  if (!isCorrectName.test(name))
    throw new Error(
      "[ERROR] 자동차의 이름은 숫자와 문자, 언더스코어(_)만 입력할 수 있어요."
    );
  else if (name.length > 5 || name.length < 1)
    throw new Error(
      "[ERROR] 자동차의 이름은 1자 이상, 5자 이하만 입력할 수 있어요."
    );
}

export function NumberParser(numberInput) {
  let number = Number(numberInput);
  if (number === NaN)
    throw new Error("[ERROR] 실행 횟수는 숫자만 입력할 수 있어요.");
  else if (number < 0)
    throw new Error("[ERROR] 실행 횟수는 음수를 입력할 수 없어요.");
  else if (!Number.isInteger(number))
    throw new Error("[ERROR] 실행 횟수는 정수만 입력할 수 있어요.");
  else return number;
}
