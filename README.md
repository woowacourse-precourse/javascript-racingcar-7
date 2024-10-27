# 프리코스 2주차 과제 - 자동차 경주

> 우아한테크코스 7기 프리코스 2주차 과제 - 자동차 경주를 구현한 저장소입니다.

## 시작하기

- 레지포터리를 자신의 계정으로 fork한다.
- fork한 저장소를 자신의 컴퓨터로 클론한다.
- 브랜치를 생성하고 통합 개발 환경(IDE)으로 가져온다.

```git
git clone https://github.com/bin778/javascript-racingcar-7.git
cd javascript-racingcar-7
git checkout -b bin778
```

## 문제 분석

### 기능 요구 사항

- 사용자는 자동차에 이름을 입력한다. 이 때, 자동차 이름은 쉼표(,)를 기준으로 구분하며 이름은 5자 이하만 가능하다.
- 사용자는 몇 번의 이동을 할 것인지 입력한다.
- 주어진 횟수 동안 n대의 자동차는 전진 또는 멈출 수 있다.
- 전진하는 조건은 0에서 9 사이에서 랜덤 값을 구한 후 랜덤 값이 4 이상일 경우이다.
- 자동차 경주 게임을 완료한 후 누가 우승했는지를 알려준다.
- 우승자가 여러 명일 경우 쉼표(,)를 이용하여 구분한다.
- 사용자가 잘못된 값을 입력할 경우 "[ERROR]"로 시작하는 메시지와 함께 Error를 발생시킨 후 애플리케이션을 종료한다.

### 입출력 요구 사항

1. 입력

- 경주할 자동차 이름(이름은 쉼표(,) 기준으로 구분)

```
pobi,woni,jun
```

- 시도할 횟수

```
5
```

2. 출력

- 차수별 실행 결과

```
pobi : --
woni : ----
jun : ---
```

- 단독 우승자 안내

```
최종 우승자 : pobi
```

- 공동 우승자 안내

```
최종 우승자 : pobi, jun
```

3. 최종 실행 결과

```
경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)
pobi,woni,jun
시도할 횟수는 몇 회인가요?
5

실행 결과
pobi : -
woni :
jun : -

pobi : --
woni : -
jun : --

pobi : ---
woni : --
jun : ---

pobi : ----
woni : ---
jun : ----

pobi : -----
woni : ----
jun : -----

최종 우승자 : pobi, jun
```

### 프로그래밍 요구 사항 1

- Node.js 20.17.0 버전에서 실행 가능하다.
- package.json 파일은 변경할 수 없으며, 제공된 라이브러리와 스타일 라이브러리 이외의 외부 라이브러리는 사용하지 않는다.
- 프로그램 종료 시 process.exit()를 호출하지 않는다.
- 프로그래밍 요구 사항에서 달리 명시하지 않는 한 파일, 패키지 등의 이름을 바꾸거나 이동하지 않는다.
- 자바스크립트 코드 컨벤션([JavaScript Style Guide](https://github.com/woowacourse/woowacourse-docs/tree/main/styleguide/javascript))을 지키면서 프로그래밍한다.
- Console.readLineAsync()와 Console.print()를 활용하여 입력 및 출력해야 한다.
- Random 값 추출은 Random.pickNumberInRange()를 활용한다.

```
MissionUtils.Random.pickNumberInRange(0, 9);
```

### 프로그래밍 요구 사항 2

- 들여쓰기 깊이는 3이 넘지 않도록 구현한다. 2까지만 허용한다.
  - 예를 들어 while문 안에 if문이 있으면 들여쓰기는 2이다.
  - 들여쓰기를 줄이는 가장 좋은 방법은 메서드를 분리하는 것이다.
- 삼항 연산자를 쓰지 않는다.
- 함수는 한 가지 일만 하도록 한다.
- Jest를 이용하여 정리한 기능 목록이 정상적으로 작동하는지 테스트 코드로 확인한다.

## 풀이 과정

### 구현

- 사용자에게 자동차 이름 문자열을 입력받는다.
- 사용자가 입력한 자동차는 split(',') 함수로 분리하고 앞뒤 공백을 처리한다.
- 모든 배열에서 사용자가 적절한 이름을 입력했는지 확인하고 잘못 입력하면 [ERROR] 처리한다.
  - 자동차 이름 문자열의 길이가 1~5 인지 검사한다.
  - 자동차 이름에 중복이 있는지 검사한다.
  - 입력한 값이 한글, 영어, 숫자, 특정한 특수문자만 있는지 검사한다.
  - 사용자가 입력한 자동차가 2개 이상인지 검사한다.
- 몇 번 이동할지 사용자에게 숫자로 입력받고, 잘못 입력하면 [ERROR] 처리한다.
  - 숫자 이외의 값을 입력하지 않았는지 검사한다.
  - 1 이상의 값을 입력했는지 검사한다.
- 랜덤 값이 4 이상일 경우 자동차를 전진시키고, 아닌 경우 자동차를 멈추게 한다.
  - 시도 횟수 만큼 자동차 전진 및 멈춤을 반복한다.
- 자동차 경주 게임을 완료한 후 누가 우승했는지 알려준다.
  - 이때 우승자는 여러 명일 수 있다(쉼표로 구분).

### 구조

- [ERROR] 메시지는 사용자에게 의미를 확실하게 전달하도록 한다.
- 다른 JS파일을 만들어 메서드로 기능을 분리한다.
- 에러는 다른 JS 파일에 따로 분리한다.

## 실행 결과
![image](https://github.com/user-attachments/assets/38aa98ed-3b93-4242-bd6a-b62fd3b6e5de)

## 디렉터리 구조

```bash
┣ src
┃ ┣ CarRacing
┃ ┃ ┣ CarRacing.js
┃ ┃ ┗ CarScore.js
┃ ┣ Error
┃ ┃ ┗ Error.js
┃ ┣ InputControl
┃ ┃ ┣ Check.js
┃ ┃ ┗ Input.js
┃ ┣ SearchWinner
┃ ┃ ┗ SearchWinner.js
┃ ┣ App.js
┃ ┗ index.js
┣ __tests__
┃ ┣ ApplicationTest.js
┃ ┣ CarRacingPrintTest.js
┃ ┣ ExceptionTest.js
┃ ┗ WinnerTest.js
┣ .gitignore
┣ .npmrc
┣ package-lock.json
┣ package.json
┗ README.md
```
