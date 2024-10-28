# javascript-racingcar-precourse

## 필요한 기능

1. n대의 자동차와 시도할 횟수를 입력한다.
2. ","를 기준으로 자동차를 분류한다.
3. 시도할 횟수만큼 시도를 실시한다.
4. 각 자동차마다 랜덤숫자를 기준으로 움직일지 말지를 판단하고 이동한다.
5. 실행 결과를 보여준다.
6. 최종 우승자를 보여준다.
7. 에러 기능 -> 다양한 에러에 대해서 [ERROR] 를 앞에 붙여서 다양한 에러에 대해서 대응하는 기능

   a. 이름을 입력하지 않을 경우 (ex: "")

   b. 쉼표 이전 혹은 다음에 값을 입력하지 않은 경우 (ex: ",pobi", "pobi,")

   c. 이름이 5자 초과할 경우 (ex: "javajigi")

   d. 시도할 횟수 입력하지 않을 경우 (ex: "")

   e. 시도할 횟수에 숫자 이외의 값이 들어갈 경우 (ex: "a")

   f. 시도할 횟수에 자연수 이외의 값이 들어갈 경우 (ex: "-3")

## 프로그래밍 요구사항

1. 제공 라이브러리와 스타일 라이브러리 이외의 외부 라이브러리 사용 금지
2. process.exit() 사용 금지
3. indent depth를 2까지만 허용
4. 3항 연산자 사용 금지

## 구조

### 클래스

#### App 클래스

**역할**: 프로그램 시작, 사용자의 입력을 받은 다음 각 단계를 순차적으로 진행하고 마지막 결과를 보여준다

**메서드**:

- run(): 입력, 실행, 결과 출력을 관리
- startGame(): 게임을 시작하고 각 자동차의 움직임을 시뮬레이션
- declareWinner(): 최종 우승자를 확인하고 출력

#### Car 클래스

**역할**: 자동차 한 대의 위치와 이름을 관리한다

**변수**:

- name(String): 자동차 이름
- position(Number): 현재 위치

**메서드**:

- move(): 자동차가 전진할지를 결정, 무작위 값이 4 이상일 때만 위치를 증가
- getPosition(): 현재 위치 반환
- getName(): 자동차 이름 반환

#### Race 클래스

**역할**: 자동차들과 시도 횟수를 관리하고 시도할 횟수만큼 실행

**변수**:

- cars(Car[]): 경주에 참여하는 자동차 배열
- numAttempts(Number): 시도 횟수

**메서드**:

- attempt(Number): 시도 횟수만큼 자동차를 전진
- printRoundResult(): 자동차들의 위치를 출력
- getWinners(): 최종 우승자 반환

#### InputHandler 클래스

**역할**: 사용자 입력을 받아 파싱

**메서드**:

- parseCarNames(input): 쉼표로 구분된 자동차 이름을 배열로 분리
- parseAttempts(input): 시도 횟수를 숫자로 변환

#### ErrorHandler 클래스

**역할**: 입력값에 대한 유효성을 검사 및 에러 메시지 출력

**메서드**:

- checkCarName(name): 자동차 이름이 5자 이하인지 확인
- checkCarNull(name): 자동차 이름이 공백인지 확인
  - ,를 제대로 안찍으면 Car 배열에서 ""의 이름을 가진 차가 생김
  - 아무것도 입력안했으면 Car 배열에서 ""의 이름을 가진 차가 생김
- checkAttemptInt(attempt): 시도 횟수가 자연수인지 확인
  - 아무것도 입력안하고 숫자로 반환하면 0으로 나오므로 에러 체크
  - 정수를 입력하고 숫자로 반환하면 NaN이 반환되므로 에러 체크

## 구현 순서

0. App 클래스 구현

- [O] run() - 값을 입력받음

1. InputHandler 클래스 구현

- 자동차 이름과 시도 횟수를 입력받아 파싱하는 기능 구현
- [O] parseCarNames(input)
  - Console.print()로 분리된 자동차 이름 배열 출력
- [O] parseAttempts(input)
  - Console.print()로 변환된 시도 횟수 출력

2. Car 클래스 구현

- 자동차 객체를 만들고 전진 여부에 따라 위치를 업데이트하는 기능을 구현
- [O] move()
  - Console.print()로 무작위 값과 이동 여부 확인
- [O] getPosition(), getName()
  - Console.print()로 위치와 이름 확인

3. Race 클래스 구현 - 자동차 생성

- [O] Car클래스를 통해 만들어진 car를 Race 클래스에서 배열로 구현
- [O] 생성자에서 자동차 이름 배열을 받아 Car 인스턴스 배열로 초기화
  - Console.print()로 자동차 배열이 잘 생성되었는지 확인

4. Race 클래스 구현 - attempt() 메서드

- [O] 시도 횟수만큼 자동차 이동
- [O] attempt() - 반복문을 사용해 각 시도에+서 모든 자동차의 move() 메서드 호출
  - [O] printRoundResult() - Console.print()로 각 시도마다 자동차의 위치 상태 출력

5. Race 클래스 구현 - getWinners() 메서드

- [O] 최종 우승자를 계산하고 우승자 목록 반환
- [O] getWinners() - 모든 자동차의 위치를 비교해 가장 멀리 이동한 자동차(또는 공동 우승자)를 확인하고 이름 배열 반환
  - Console.print()로 최종 우승자를 출력해 확인합니다.

6. App 클래스 구현

- [O] InputHandler와 Race 클래스를 호출해 프로그램 제어
- [O] run(): 입력 받아 Race 초기화, 시도 횟수만큼 attempt()를 호출, 게임을 진행한 후 결과 출력

7. ErrorHandler 클래스 구현

- [O] 입력값 유효성 검사 및 에러가 있을 경우 [ERROR] 메시지 출력
- [O] 각 에러 조건을 확인하고 조건을 충족하지 않을 경우 Console.print("[ERROR] ...")로 에러 메시지를 출력
