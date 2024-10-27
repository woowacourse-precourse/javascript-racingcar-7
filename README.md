# 자동차 경주
***
## 요구 기능
+ 주어진 횟수 동안 n대의 자동차는 전진 또는 멈출 수 있다.
+ 각 자동차에 이름을 부여할 수 있다. 전진하는 자동차를 출력할 때 자동차 이름을 같이 출력한다.
+ 자동차 이름은 쉼표(,)를 기준으로 구분하며 이름은 5자 이하만 가능하다.
+ 사용자는 몇 번의 이동을 할 것인지를 입력할 수 있어야 한다.
+ 전진하는 조건은 0에서 9 사이에서 무작위 값을 구한 후 무작위 값이 4 이상일 경우이다.
+ 자동차 경주 게임을 완료한 후 누가 우승했는지를 알려준다. 우승자는 한 명 이상일 수 있다.
+ 우승자가 여러 명일 경우 쉼표(,)를 이용하여 구분한다.
+ 사용자가 잘못된 값을 입력할 경우 "[ERROR]"로 시작하는 메시지와 함께 Error를 발생시킨 후 애플리케이션은 종료되어야 한다.

***
## 기능 명세
+ 입력
    + n대의 자동차 이름 입력(, 으로 구분, 5자 이하)
    + 몇 번의 이동인지 입력
+ 진행 방식
    + 0~9사이 무작위 값을 구한 후 값이 4 이상일 경우 전진
+ 결과
    + 우승자 출력(여러명의 우승자 가능, ,로 구분해서 출력)
+ 필요 기능
    + 레이싱 시작(CarRacing)
        + 시작(run)
        + car 생성(createCar)
        + 우승자 출력(checkWinner)
        + 실제 동작 메서드(startRacing)
    + 자동차 생성(car)
        + 무작위 수 반환(getRandom)
        + 전진 or 멈춤 처리(move)
        + 진행 상황 출력(printProcess)
    + 입출력 관리(HandleIo)
        + 입력(getInput)
    + 에러 확인(ErrorChecker)
        + tryCount값 체크(checkTryCount)
            + 횟수를 음수, 소수를 입력한 경우(checkDecimal,checkNegative)
            + 숫자가 아닌 값을 입력한 경우(checkTryCountNotNumber)
            + 100을 초과해서 입력할 경우(checkOverHundred)
            + 입력값이 공백인 경우(checkTryVoid)
        + nameInput값 체크(checkNameInput)
            + 이름이 5글자를 초과한 경우(checkNameLength)
            + 이름이 공백일경우(checkVoid)