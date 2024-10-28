# 🚕 [우아한 테크코스/프리코스 ] 2주차 - 자동차경주 🚕

## 🍞 기능 목록 정리

### 1️⃣ 설계

1. **변수**
    1. 자동차 입력 : carsInput
        1. 자동차를 , 기준으로 나눈 배열 : carInputNameArray
    2. 차수 입력 : degreeInput
    3. 자동차 객체 배열 : carArray
    4. 최대 거리 : maxDistance
    5. 이긴 자동차 이름 리스트 : winnerCarNameArray
2. **클래스**
    1. 자동차 `Car`
        1. 이름 (`name`)
        2. 거리 (`distance`, 옵션**)**
3. **함수**
    1. 입력받기 `Console.readLineAsync()`
    2. 이동했는지 구하기
        1. 랜덤 값 구하기 `getRandomValue()`
        2. 랜덤값 얻어서, 4이상인지 판단해서 1 증가시킬지 구하기 **`isValueMoreThanFour()`**
        3. 자동차 거리 1 증가시키기 `increaseCarDistance(car)`
    3. 현재 상태 출력하기 `printCurrentCarDistanceResult()`
    4. 최대 거리 구하기 `getMaxDistance(carArray)`
    5. 이긴 자동차 이름 리스트 구하기 `getWinnerCarNameArrayWithMaxValue()`
    6. 전체 결과 출력하기(이름 배열) `printNames(이름 배열)`
    7. 최대 거리 구하기 (차 배열) `getMaxDistance()`
    8. 에러 띄우기 `throwError(에러이름)`

### 2️⃣ 기능 정리

1. **선언하기**

    - Car.js 파일로 자동차 클래스를 만들어준다.

1. **입력받기**

    1. **자동차 입력받기**
        1. “경주할 자동차 이름을 입력하세요. (이름은 쉼표(,) 기준으로 구분) 을 입력하며, 경주할 자동차의 이름을 **입력**받는다.
        2. 입력받은 자동차는 (,) 쉼표를 기준으로 `split()` 해서 배열로 만들어준다.
        3. 각 배열로 차 인스턴스를 만들어준다.
    2. **시도할 횟수 입력받기**
        1. “시도할 횟수는 몇 회인가요?” 를 출력하며, 시도할 횟수를 **입력**받는다. (number)

1. **자동차 경주하기**

    1. **“실행 결과”를 출력한다.**
    2. **‘시도할 횟수’까지 각 차수마다 로직을 반복한다.**
        1. **<자동차 1회 경주 로직 구현> : `oneRaceStart()`**
            1. 각 자동차마다,  `Random.pickNumberInRange()` 를 활용해 0~9 사이의 무작위 값을 구한다. → `getRandomValue()`
            2. 이때, 무작 위 값이 **4 이상인 경우를 판단한다. →** `isValueMoreThanFour()`
            3. 무작위 값이 4 이상이면 자동차의 거리 1을 전진한다. → `increaseCarDistance(car)`
        2. 경주가 한판 끝나면, 자동차를 순회하며 각 자동차 거리를 ‘-’ 를 사용해 출력한다. → `printCurrentCarDistanceResult(car)`

1. **경주 결과 출력하기**
    1. 각 자동차중 최대 거리를 구한다. `getMaxDistance(carArray)`
    2. 최종 자동차 이름 리스트를 구한다. 이때 각 자동차의 거리 값으로, 최대 거리에 맞춰서 우승자 리스트에 추가한다. → `getWinnerCarNameArrayWithMaxValue()`
    3. (우승자 리스트로) “최종 우승자 이름” : 이름 형식으로 출력한다. → `printWinnerNames(car배열, max)`
        1. 단독 우승자의 경우, 단독 우승자의 경우, 한명의 이름만 출력한다.
        2. 공동 우승자의 경우, 모두 출력한다.

### 4️⃣ 예외

사용자가 잘못된 값을 입력할 경우 "`[ERROR]`"로 시작하는 메시지와 함께 `Error`를 발생시킨 후 애플리케이션은 종료되어야 한다.

1. **자동차 이름을 입력 받을 때, (전체 체크 함수 : `checkCarInputError`)**
    1. **(기본) 입력받은 이름이 5글자 초과일 경우 : [ERROR] 자동차 이름은 5글자 이하로 입력 가능합니다.**
        - 배열을 순회하며 이름이 5글자 초과인지 확인하는 함수 추가.
        - `isCarNamesCharMoreThanFive(carArray)`
    2. 이름을 쉼표(,) 외 다른 기호로 구분한 경우 : **[ERROR] 이름은 쉼표(,)로 구분 가능합니다.**
        - **`isCarsInputSymbolOtherThanComma(carInput)`**
        - 정규식 작성 : `[^,가-힣\w\s]` (, 제외한 나머지기호 모두 찾기 ), test() 코드를 이용하여 `true false`로 찾는다.
    3. 아무것도 입력받지 않은 경우, undeinfd인 경우 등 ( falsy ), 공백만 입력받는 경우 : **[ERROR] 경주할 자동차 이름을 입력하세요**
        - `isInputFalsy(carInput)`
        - Falsy인 경우 판별
        - 공백만 있는 경우 판별.
2. **시도할 횟수를 입력받을때 (전체 체크 함수 →** `checkDegreeInputError(degreeInput)` )
    1. 시도할 횟수가 ‘0’ 인 경우 : **[ERROR] 경기를 치르지 않았습니다.**
        1. `isDegreeZero(degreeInput)`
    2. 시도할 횟수가 ‘’”이거나, Falsy하거나, 공백인경우 : **[ERROR] 시도할 횟수를 입력해주세요.**
        1. `isInputFalsy(degreeInput)`


### 5️⃣ 테스트

1. **예외 테스트**
    1. 입력받은 이름이 5글자 초과할 경우
    2. 쉼표(,) 이외에 다른 구분자를 사용하는 경우
    3. 공백을 입력한 경우
    4. 아무것도 입력하지 않은 경우
    5. 시도할 횟수가 0회인 경우
    6. 시도할 횟수가 공백일 경우
    7. 시도할 횟수를 입력하지 않은 경우
2. **자동차 경기 및 결과 테스트**
    1. 랜덤 값이 4가 넘는지 판별하는가?
    2. 자동차의 거리가 1 증가하는가?
    3. 자동차 배열 중 최대 거리 값이 출력되는가?
    4. 최대 거리값으로 이긴 자동차들의 이름 배열이 반환되는가?


### 6️⃣ 결과
![image](https://github.com/user-attachments/assets/a19a9fac-4b80-4fa5-95e7-85c1c93d1773)


### 7️⃣ 리팩토링 및 이외 사항

- **폴더 구조 리팩토링 (src/function/)**
    - 자동차 경기 함수 모음 : `darRacingFunctions.js`
    - 자동차 경기 결과 함수 모음 : `carRacingResultFunctions.js`
    - 자동차 경기 예외 함수 모음 : `carRacingExecptionFunctions.js`
    - ![image](https://github.com/user-attachments/assets/908ead51-caef-4fb9-aa3c-7561591894ea)
- `.prettierrc`를 활용한 코드 포맷팅
- 의미없는 주석 삭제
- 오류를 찾을 때 출력 함수 대신 VSCODE 디버거 사용
- ![image](https://github.com/user-attachments/assets/31b0614b-e47d-4b2c-8196-bc154168e56f)

- 이름을 통해 의도를 드러내고, 축약하지 않기
- 의미없는 주석 사용하지 않기
- JavaScript에서 제공하는 API를 적극 활용하기
    - `map`, `forEach`, `filter`, `Math`.`max`, `join`, 정규식 `test`, `some` 등

---
## 🍞 주어진 요구사항 체크

### ✅ **학습 목표**

-   [x] 여러 역할을 수행하는 큰 함수를 단일 역할을 수행하는 작은 함수로 분리한다.
-   [x] 테스트 도구를 사용하는 방법을 배우고 프로그램이 제대로 작동하는지 테스트한다.
-   [x] [1주 차 공통 피드백](https://docs.google.com/document/d/1l76wiXzM1Pp8AXuJ9V9oYPMVU4gR7NotVZM-zLoKVus/edit?usp=sharing)을 최대한 반영한다.

### ✅ **기능 요구 사항**

초간단 자동차 경주 게임을 구현한다.

-   [x] 주어진 횟수 동안 **n대의 자동차는 전진 또는 멈출 수 있다.**
-   [x] 각 자동차에 이름을 부여할 수 있다. 전진하는 자동차를 출력할 때 자동차 이름을 같이 출력한다.
-   [x] 자동차 **이름은 쉼표(,)를 기준으로 구분하며 이름은 5자 이하**만 가능하다.
-   [x] 사용자는 몇 **번의 이동을 할 것인지를 입력할** 수 있어야 한다.
-   [x] 전진하는 **조건은 0에서 9 사이에서 무작위 값을 구한 후 무작위 값이 4 이상**일 경우이다.
-   [x] 자동차 경주 **게임을 완료한 후 누가 우승했는지를 알려준다. 우승자는 한 명 이상일 수 있**다.
-   [x] 우승자가 **여러 명일 경우 쉼표(,)를 이용하여 구분**한다.
-   [x] 사용자가 잘못된 값을 입력할 경우 "[ERROR]"로 시작하는 메시지와 함께 `Error`를 발생시킨 후 애플리케이션은 종료되어야 한다.

### ✅ **입출력 요구 사항**

1. **입력**

    - 경주할 자동차 이름(이름은 쉼표(,) 기준으로 구분)

    ```
    pobi,woni,jun

    ```

    - 시도할 횟수

    ```
    5

    ```

2. **출력**

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

3. **실행 결과 예시**

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

### ✅ **프로그래밍 요구 사항 1**

-   [x] Node.js 20.17.0 버전에서 실행 가능해야 한다.
-   [x] 프로그램 실행의 시작점은 `App.js`의 `run()`이다.
-   [x] `package.json` 파일은 변경할 수 없으며, **제공된 라이브러리와 스타일 라이브러리 이외의 외부 라이브러리는 사용하지 않는다.**
-   [x] 프로그램 종료 시 `process.exit()`를 호출하지 않는다.
-   [x] 프로그래밍 요구 사항에서 달리 명시하지 않는 한 파일, 패키지 등의 이름을 바꾸거나 이동하지 않는다.
-   [x] 자바스크립트 코드 컨벤션을 지키면서 프로그래밍한다.
    -   기본적으로 [JavaScript Style Guide](https://github.com/woowacourse/woowacourse-docs/tree/main/styleguide/javascript)를 원칙으로 한다.

### ✅ **프로그래밍 요구 사항 2**

-   [x] indent(인덴트, 들여쓰기) depth를 3이 넘지 않도록 구현한다. 2까지만 허용한다.
    -   예를 들어 while문 안에 if문이 있으면 들여쓰기는 2이다.
    -   힌트: indent(인덴트, 들여쓰기) depth를 줄이는 좋은 방법은 함수(또는 메서드)를 분리하면 된다.
-   [x] 3항 연산자를 쓰지 않는다.
-   [x] 함수(또는 메서드)가 한 가지 일만 하도록 최대한 작게 만들어라.
-   [x] Jest를 이용하여 정리한 기능 목록이 정상적으로 작동하는지 테스트 코드로 확인한다.
    -   테스트 도구 사용법이 익숙하지 않다면 아래 문서를 참고하여 학습한 후 테스트를 구현한다.
    -   [Using Matchers](https://jestjs.io/docs/using-matchers)
    -   [Testing Asynchronous Code](https://jestjs.io/docs/asynchronous)
    -   [Jest로 파라미터화 테스트하기: test.each(), describe.each()](https://www.daleseo.com/jest-each)

### ✅ 1주차 공통 피드백 사항

-   [x] 요구 사항을 정확하게 준수한다
-   [x] 기본적인 Git 명령어를 숙지한다
-   [x] Git으로 관리할 자원을 고려한다
-   [x] package-lock.json의 역할을 이해한다
-   [x] 커밋 메시지를 의미 있게 작성한다
-   [x] 커밋 메시지에 이슈 또는 풀 리퀘스트 번호를 포함하지 않는다
-   [x] 풀 리퀘스트를 만든 후에는 닫지 말고 추가 커밋을 한다
-   [x] 오류를 찾을 때 출력 함수 대신 디버거를 사용한다
-   [x] 이름을 통해 의도를 드러낸다
-   [x] 축약하지 않는다
-   [x] 공백도 코딩 컨벤션이다
-   [x] 공백 라인을 의미 있게 사용한다
-   [x] 스페이스와 탭을 혼용하지 않는다
-   [x] 의미 없는 주석을 달지 않는다
-   [x] 코드 포매팅을 사용한다
-   [x] JavaScript에서 제공하는 API를 적극 활용한다
