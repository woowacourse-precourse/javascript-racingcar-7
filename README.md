# javascript-racingcar-precourse

## 구현할 기능 목록

### 1. 기능 구현 (App.js에서 모든 기능 구현)

1. **입력 기능**
   - 사용자의 입력을 통해 경주에 참가할 자동차 이름과 시도할 횟수를 입력받습니다.
      - `경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)`
         - 예시 입력: `pobi,woni , jun`
         - 자동차 이름은 5자 이하로 제한되며, 앞뒤 공백이 제거됩니다.
         - 길이가 0인 이름은 입력될 수 없습니다.
         - 자동차를 **2개 이상** 입력해야 합니다.
         - **중복되는 자동차 이름**은 입력할 수 없습니다.
      - `시도할 횟수는 몇 회인가요?`
         - 예시 입력: `5`
         - 시도 횟수는 **1 이상의 양수**여야 합니다.
      - 잘못된 입력 시 `[ERROR]`로 시작하는 오류 메시지를 출력하고 프로그램을 종료합니다.

2. **자동차 전진 기능**
   - 각 자동차는 **주어진 시도 횟수만큼 전진**하거나 **멈추는** 과정을 반복합니다.
      - **전진 조건**: 0에서 9 사이의 랜덤 숫자를 생성하여, 숫자가 **4 이상일 경우** 자동차가 전진합니다.
      - 전진 여부는 `Random.pickNumberInRange(0,9)`를 이용하여 결정합니다.

3. **경주 진행 및 결과 출력 기능**
   - 각 시도마다 **모든 자동차의 위치**를 출력합니다.
      - 출력 예시:
         ```
         실행 결과
         pobi : -
         woni : -
         jun :
         ```
   - 각 **라운드마다 경주 결과**를 모두 출력합니다.

4. **우승자 출력 기능**
   - 모든 시도가 완료된 후 가장 멀리 전진한 자동차를 **우승자**로 선정합니다.
      - **우승자가 여러 명**일 경우 쉼표`(,)`로 구분하여 출력합니다.
      - 예시 출력: `최종 우승자 : pobi, jun`


### 2. 리팩토링 계획 (기능 구현 후)

1. **모듈화 작업**
   - 입력 처리, 게임 로직, 유효성 검사를 각각의 **독립적인 모듈**로 분리합니다.
   - 상수값 (메시지, 에러 메시지 등)을 **constants.js** 파일로 분리하여 관리합니다.
   - 주요 기능들을 각각 별도의 함수나 클래스로 분리하여 가독성을 높입니다.

2. **네이밍 규칙 적용**
   - 변수, 함수, 클래스 이름을 **Airbnb JavaScript 스타일 가이드**에 맞춰 정리합니다.
   - 예를 들어, **상수**는 대문자와 밑줄(`_`)로 구분하고, 변수와 함수는 **카멜 케이스**를 사용합니다.

3. **깊이(depth) 규칙 준수**
   - 들여쓰기 깊이를 최대 **2까지만 허용**하도록 코드를 정리합니다.
   - 중첩된 로직이 있을 경우, 이를 **함수로 분리**하여 깊이를 줄이는 방식으로 개선합니다.

4. **코드 리뷰 및 클린 코드 적용**
   - 작성한 코드를 다시 검토하여 **중복 코드 제거**, **불필요한 주석 삭제** 등 **클린 코드** 원칙을 적용합니다.
### 3. 구현 및 리팩토링 과정
- **1단계**: App.js에서 **모든 기능을 구현**하고 기능이 정상적으로 동작하는지 확인합니다.
- **2단계**: 기능 구현이 완료되면, 코드를 **리팩토링**하여 가독성과 유지보수성을 높입니다.
- **3단계**: Jest를 이용하여 **테스트 케이스 작성**을 진행합니다.
  - **입력 값 검증 테스트**: 자동차 이름이 올바른지, 시도 횟수가 유효한지를 검증합니다.
  - **파라미터화 테스트**: 다양한 입력 조합에 대해 반복 테스트하기 위해 `test.each()` 또는 `describe.each()`를 사용합니다.

## 실행 예시
```
경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)
pobi,woni,jun
시도할 횟수는 몇 회인가요?
3

실행 결과
pobi : -
woni :
jun : -

pobi : --
woni : -
jun : --

pobi : --
woni : -
jun : --

최종 우승자 : pobi, jun
```
