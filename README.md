# ** 자동차 경주 게임**

## 구현할 기능 목록
### 1. 자동차 이름 입력 기능
- [X] 쉼표를 포함한 문자열로 자동차 이름을 입력받는다
- [X] 입력받은 문자열을 쉼표 기준으로 분리한다
- [X] 각 이름의 앞뒤 공백을 제거

### 2. 자동차 객체 생성 기능
- [ ] 입력받은 이름으로 자동차 객체 생성
- [ ] 자동차의 초기 위치는 0으로 설정

### 3. 자동차 객체 생성 기능
- [ ] 시도할 횟수 입력

### 4. 자동차 이동 기능
- [ ] 0-9 사이의 무작위 값을 생성한다
- [ ] 무작위 값이 4 이상인 경우 전진한다
- [ ] 각 라운드마다 모든 자동차의 이름 및 위치를 출력

### 5. 결과 출력 기능
- [ ] 가장 멀리 이동한 거리를 구한다
- [ ] 해당 거리만큼 이동한 자동차들을 찾아서 출력


### 6. 예외 처리
#### 자동차 에러 -> 에러 발생 후 애플리케이션 종료
- [X] 자동차 이름이 5자 이상인 경우
- [X] 자동차 이름이 빈 문자열일 경우
- [X] 자동차 이름이 중복될 경우
- [X] 자동차가 1개일 경우

#### 시도횟수 에러 -> 에러 발생 후 애플리케이션 종료
- [ ] 시도 횟수가 숫자가 아닌 다른 문자일 경우
- [ ] 시도 횟수를 입력하지 않았을 경우
- [ ] 시도 횟수가 0일 경우

### 7. 예외 처리 테스트코드 추가
- [ ] 단일 우승자인 경우
- [ ] 공동 우승자인 경우
- [X] 자동차 이름이 5자 이상인 경우
- [X] 자동차 이름이 빈 문자열일 경우
- [X] 자동차 이름이 중복될 경우
- [X] 자동차가 1개일 경우
- [ ] 시도 횟수가 숫자가 아닌 다른 문자일 경우
- [ ] 시도 횟수를 입력하지 않았을 경우
- [ ] 시도 횟수가 0일 경우
- [ ] 시도 횟수가 1인 경우


# 기능 요구 사항

**초간단 자동차 경주 게임을 구현한다.**

- 주어진 횟수 동안 n대의 자동차는 전진 또는 멈출 수 있다.
- 각 자동차에 이름을 부여할 수 있다. 전진하는 자동차를 출력할 때 자동차 이름을 같이 출력한다.
- 자동차 이름은 쉼표(,)를 기준으로 구분하며 이름은 5자 이하만 가능하다.
- 사용자는 몇 번의 이동을 할 것인지를 입력할 수 있어야 한다.
- 전진하는 조건은 0에서 9 사이에서 무작위 값을 구한 후 무작위 값이 4 이상일 경우이다.
- 자동차 경주 게임을 완료한 후 누가 우승했는지를 알려준다. 우승자는 한 명 이상일 수 있다.
- 우승자가 여러 명일 경우 쉼표(,)를 이용하여 구분한다.
- 사용자가 잘못된 값을 입력할 경우 "[ERROR]"로 시작하는 메시지와 함께 Error를 발생시킨 후 애플리케이션은 종료되어야 한다.

## 입출력 요구 사항

### 입력

- 경주할 자동차 이름(이름은 쉼표(,) 기준으로 구분)

```
pobi,woni,jun
```

- 시도할 횟수

```
s
```

### 출력

- 차수별 실행 결과


```
pobi : --
woni : ----
jun : ---
```

- 단독 우승자 안내 문구
```
최종 우승자 : pobi
```

- 공동 우승자 안내 문구

```
최종 우승자 : pobi, jun
```

### 실행 결과 예시

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

# 프로그래밍 요구 사항

- Node.js 20.17.0 버전에서 실행 가능해야 한다.
- 프로그램 실행의 시작점은 App.js의 run()이다.
- package.json 파일은 변경할 수 없으며, 제공된 라이브러리와 스타일 라이브러리 이외의 외부 라이브러리는 사용하지 않는다.
- 프로그램 종료 시 process.exit()를 호출하지 않는다.
- 프로그래밍 요구 사항에서 달리 명시하지 않는 한 파일, 패키지 등의 이름을 바꾸거나 이동하지 않는다.
- 자바스크립트 코드 컨벤션을 지키면서 프로그래밍한다.
  - 기본적으로 JavaScript Style Guide를 원칙으로 한다.

# 프로그래밍 요구 사항 2
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

## 라이브러리

- @woowacourse/mission-utils에서 제공하는 Console API를 사용하여 구현해야 한다.
  - Random 값 추출은 Random.pickNumberInRange()를 활용한다.
  - 사용자의 값을 입력 및 출력하려면 Console.readLineAsync()와 Console.print()를 활용한다.