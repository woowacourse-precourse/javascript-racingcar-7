# javascript-racingcar-precourse

## 기능 요구 사항
**초간단 자동차 경주 게임을 구현한다.**

- 주어진 횟수 동안 n대의 자동차는 전진 또는 멈출 수 있다.
- 각 자동차에 이름을 부여할 수 있다. 전진하는 자동차를 출력할 때 자동차 이름을 같이 출력한다.
- 자동차 이름은 쉼표(,)를 기준으로 구분하며 이름은 5자 이하만 가능하다.
- 사용자는 몇 번의 이동을 할 것인지를 입력할 수 있어야 한다.
- 전진하는 조건은 0에서 9 사이에서 무작위 값을 구한 후 무작위 값이 4 이상일 경우이다.
- 자동차 경주 게임을 완료한 후 누가 우승했는지를 알려준다. 우승자는 한 명 이상일 수 있다.
- 우승자가 여러 명일 경우 쉼표(,)를 이용하여 구분한다.
- 사용자가 잘못된 값을 입력할 경우 "[ERROR]"로 시작하는 메시지와 함께 Error를 발생시킨 후 애플리케이션은 종료되어야 한다.

## 주요 기능 분리
### 경주할 자동차 이름 목록과 반복 횟수 입력받기
**경주할 자동차의 목록, 반복 횟수 입력받기**
- 경주할 자동차의 목록 입력받기 
- 전진의 반복 횟수 입력받기
**입력받은 값으로 Racingcar클래스의 인스턴스 생성하기**
- 입력받은 자동차 목록 문자열을 ','을 기준으로 나누기
- 자동차 목록 배열과 반복 횟수를 속성 값으로 Racingcar클래스의 인스턴스 생성
### 반복 횟수에 따라 라운드 실행 결과 출력하기
**라운드 실행하기**
- 각 자동차별 전진 여부 정하기
- 전진 여부에 따라 전진 형황 수정하기
**라운드 결과 출력하기**
- 자동차별 전진 현황 출력하기
**반복 횟수에 따라 라운드 실행하기**
- 반복 횟수에 따라 라운드 실행하기
### 우승자 안내 문구 출력하기
**우승자 안내 문구 출력하기**
- 제일 많은 전진을 한 자동차의 전진 현황 가져오기
- 제일 많은 전진을 한 자동차의 전진 현황을 토대로 우승자 필터링하기
- 우승자 목록 출력하기

### 엣지 케이스에 따른 오류 메시지 출력하기
**자동차 목록 혹은 반복 횟수에 널값이 입력된 경우**
**자동차 이름이 5자를 초과한 경우**
**자동차 이름이 중복된 경우**
**반복 횟수에 숫자가 아닌 값이 입력된 경우**

## 입출력 요구 사항
### 입력 
- 경주할 자동차 이름(이름은 쉼표(,) 기준으로 구분)
```javascript
pobi,woni,jun
```
- 시도할 횟수
```javascript
5
```
### 출력
- 차수별 실행 결과
```javascript
pobi : --
woni : ----
jun : ---
```
- 단독 우승자 안내 문구
```javascript
최종 우승자 : pobi
```
- 공동 우승자 안내 문구
```javascript
최종 우승자 : pobi, jun
```

### 실행 결과 예시
```javascript
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

## 프로그래밍 요구 사항

### 프로그래밍 요구 사항 1
- Node.js 20.17.0 버전에서 실행 가능해야 한다.
- 프로그램 실행의 시작점은 App.js의 run()이다.
- package.json 파일은 변경할 수 없으며, 제공된 라이브러리와 스타일 라이브러리 이외의 외부 라이브러리는 사용하지 않는다.
- 프로그램 종료 시 process.exit()를 호출하지 않는다.
- 프로그래밍 요구 사항에서 달리 명시하지 않는 한 파일, 패키지 등의 이름을 바꾸거나 이동하지 않는다.
- 자바스크립트 코드 컨벤션을 지키면서 프로그래밍한다.
- 기본적으로 JavaScript Style Guide를 원칙으로 한다.

### 프로그래밍 요구 사항 2
- indent(인덴트, 들여쓰기) depth를 3이 넘지 않도록 구현한다. 2까지만 허용한다.
- 예를 들어 while문 안에 if문이 있으면 들여쓰기는 2이다.
- 힌트: indent(인덴트, 들여쓰기) depth를 줄이는 좋은 방법은 함수(또는 메서드)를 분리하면 된다.
- 3항 연산자를 쓰지 않는다.
- 함수(또는 메서드)가 한 가지 일만 하도록 최대한 작게 만들어라.
- Jest를 이용하여 정리한 기능 목록이 정상적으로 작동하는지 테스트 코드로 확인한다.
- 테스트 도구 사용법이 익숙하지 않다면 아래 문서를 참고하여 학습한 후 테스트를 구현한다.
- Using Matchers
- Testing Asynchronous Code
- Jest로 파라미터화 테스트하기: test.each(), describe.each()

### 라이브러리
- @woowacourse/mission-utils에서 제공하는 Random 및 Console API를 사용하여 구현해야 한다.
- Random 값 추출은 Random.pickNumberInRange()를 활용한다.
- 사용자의 값을 입력 및 출력하려면 Console.readLineAsync()와 Console.print()를 활용한다.

**사용 예시**
- 0에서 9까지의 정수 중 한 개의 정수 반환
```javascript
MissionUtils.Random.pickNumberInRange(0, 9);
```