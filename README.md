# javascript-racingcar-precourse

# 자동차 경주

**경주할 자동차 이름과 시도할 횟수를 입력받아 랜덤으로 우승자를 배출하는 게임**

---

## 기능 요구 사항

### 경주할 자동차 이름 입력 요청 메시지 출력 및 입력 기능

- [x] "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)" 문구를 출력하고 자동차 이름을 입력받는다.

### 경주할 자동차 이름 입력값 분리 및 양식 검사 기능

- [x] 입력받은 경주할 자동차 이름 문자열을 쉼표(,) 기준으로 분리한다.
- [x] 분리된 자동차 이름 중 양식에 맞지 않다면 [ERROR]로 시작하는 메시지와 함께 Error를 발생시킨 후, 애플리케이션을 종료한다.
  - 자동차 이름을 입력하지 않은 경우
  - 6자 이상인 이름이 있는 경우
  - 중복된 자동차 이름을 입력한 경우

### 시도 횟수 입력 요청 메시지 출력 및 입력 기능

- [x] '시도할 횟수는 몇 회인가요?' 문구를 출력하고 시도 횟수를 입력받는다.

### 시도 횟수 입력값 양식 검사 및 문자열 숫자 변환 기능

- [x] 입력받은 시도 횟수가 양식에 맞지 않다면 [ERROR]로 시작하는 메시지와 함께 Error를 발생시킨 후, 애플리케이션을 종료한다.
  - 입력하지 않은 경우
  - 숫자가 아닌 값으로 입력한 경우
  - 음수로 입력한 경우
  - 0을 입력한 경우
  - 소수를 입력한 경우
- [x] 문자열을 숫자로 변환한다.

### 게임 기능

#### 초기화

- [x] 자동차 이름 배열을 토대로 진행 사항을 기록하기 위해 초기화를 진행한다.

#### 실행

- [x] 시도 횟수를 토대로 전진과 진행 사항 출력을 반복한다.

**전진 기능**

- [x] 0에서 9 사이에서 무작위 값을 구한 후 무작위 값이 4 이상일 경우 전진한다.

**진행 사항 출력 기능**

- [x] 진행 사항을 출력한다.

#### 결과

- [x] 우승자를 판별하기 위해 기록 객체에서 가장 많이 전진한 값을 저장한다.
- [x] 공동 우승의 가능성이 있으므로 기록 객체에서 키 배열로 순회하며 가장 많이 전진한 값과 같은 키를 우승자 배열에 저장한다.

**결과 출력 기능**

- [x] 단독 우승자일 경우 "최종 우승자 : (자동차 이름)"을 출력한다.
- [x] 우승자가 여러명일 경우 "최종 우승자 : (자동차 이름1), (자동차 이름2)"와 같이 쉼표와 공백을 붙여 출력한다.

---

## 프로그래밍 요구 사항

- [x] indent(인덴트, 들여쓰기) depth를 3이 넘지 않도록 구현하였는가?
- [x] 3항 연산자를 쓰지 않았는가?
- [x] 함수(또는 메서드)가 한 가지 일만 하도록 최대한 작게 만들었는가?
- [x] 이름을 통해 변수의 역할, 함수의 역할, 클래스의 역할에 대한 의도를 드러냈는가?
- [ ] 기능 목록이 정상적으로 작동하는지 Jest를 이용하여 테스트 코드로 확인했는가?
