# javascript-racingcar-precourse

<a href="https://club-project-one.vercel.app/" target="_blank">
</a>

<br/>
<br/>

# 0. Getting Started (시작하기)

```bash
$ npm run test
$ npm run start
```

[fork된 Repository 링크](https://github.com/mun-kyeong/javascript-racingcar-7.git)

[미션 PR]()

<br/>
<br/>

# 1. Overview (개요)

- 이름: javascript-calculator-7
- 프로젝트 설명: 우아한테크코스 - 프리코스 2주차 기능 목록 소개 README
- 작성자 : [mun-kyeong](https://github.com/mun-kyeong)

<br/>
<br>

# 2. Key Features (주요 기능)

### [ 입력받기 ]

- **1. [OUTPUT] 자동차 이름 입력을 받기 위한 문구 출력하기**
  - `경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)` 메시지 출력
- **2. [INPUT] 사용자로부터 자동차 이름 입력받기**
  - **2-A) [VALIDATION]** 문자열 분리가 가능한지 유효성 검사
  - **2-B) [FEAT]** "`,`" 기준으로 문자열 나누기
  - **2-C) [VALIDATION]** 각 문자열이 올바른 형식을 가지는지 유효성 검사
- **3. [OUTPUT] 시도할 횟수 입력받기 위한 문구 출력**
  - `시도할 횟수는 몇 회인가요?` 메시지 출력
- **4. [INPUT] 사용자로부터 시도횟수 입력받기**
  - **4-A) [VALIDATION]** 입력받은 시도횟수가 올바른 값을 가지는지 유효성 검사

### [ 경주시작 ]

- **1. [OUTPUT] "실행결과" 메시지 출력**

`for( n번 반복 ){`

- **2. [FEAT] 각 자동차당 Random 숫자 돌리기**
- **3. [FEAT] Random 숫자가 4 이상인지 판단**
- **4. [FEAT] Random 숫자가 4 이상인 자동차의 경우 전진(+1 값 증가)**
- **5. [OUTPUT] 현재 자동차 경주 상태 출력**

`}`

### [ 경주종료 ]

- **1. [FEAT] 현재 자동차들 중 최대값을 가지는 자동차 찾기**
- **2. [OUTPUT] 사용자에게 우승한 자동차 출력하기**

# 3. 예외처리 목록

- **2-A) 문자열 분리가 가능한지 유효성 검사**
  - 빈 문자열이 입력으로 들어왔을 경우 에러 출력
  - 문자열에 공백이 존재하는 경우 에러 출력
- **2-C) 각 문자열이 올바른 형식을 가지는지 유효성 검사**
  - 각각의 자동차 이름이 5자를 넘는 경우 에러 출력
  - 빈 문자열이 존재하는 경우 에러출력 (입력으로 "car,,car2" 형식으로 들어온 경우)
  - 문자열이 ","로 끝나는 경우 에러출력
  - 동일한 이름이 존재하는 경우 에러 출력
- **4-A) 입력받은 시도횟수가 올바른 값을 가지는지 유효성 검사**
  - 빈 문자열이 입력으로 들어온 경우 에러 출력
  - 입력받은 값이 숫자가 아닌경우 에러 출력
  - 입력받은 값이 정수가 아닌 경우(소수인경우) 에러 출력
  - 입력받은 값이 음수인 경우 에러 출력
  - 입력받은 값이 0인 경우 에러 출력 (게임 진행 불가 및 우승자 판별 불가)

<br/>
<br/>

# 4. 입출력 요구사항

- 입력 :
  1. **경주할 자동차 이름(이름은 쉼표(,) 기준으로 구분)** 입력받기
  ```
  pobi,woni,jun
  ```
  2. **시도할 횟수** 입력받기
  ```
  5
  ```
- 출력 :
  1.  차수별 실행 결과
  ```
  pobi : --
  woni : ----
  jun : ---
  ```
  2-1. 단독 우승자 안내 문구
  ```
  최종 우승자 : pobi
  ```
  2-2. 공동 우승자 안내 문구
  ```
  최종 우승자 : pobi, jun
  ```
- 실행결과 예시

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

<br/>
<br/>

# 5. Project Structure (프로젝트 구조)

```plaintext
javascript-calculator-7/
├── __tests__/
│   ├── ApplicationTest.js/
├── src/
│   ├── Validator/
│   │   └── validator.js  # 유효성 검사 진행
│   ├── Constants/
│   │   └── constant.js  # 상수 값 저장
│   ├── Error/
│   │   └── handleError.js  # 에러 핸들링
│   ├── App.js/
│   ├── Components/
│   |   └── Input/
│   │       └── InputCarList.js  # 자동차 리스트 입력받기
│   │       └── InputRepeatNum.js  # 반복 횟수 입력받기
│   |   └── Output/
│   │       └── PrintGideMessage.js  # 가이드 메시지 출력
│   │       └── PrintWinnigCar.js  # 우승한 차 리스트 출력
│   │       └── PrintCurrStateGame.js  # 현재 게임 현황 출력
│   |   └── RaceCar/
│   │       └── RaceCar.js  # 가이드 메시지 출력
│   ├── Utils/
│       └── randomGenerator.js  # 랜덤 숫자 출력하기
|       └── parser.js  # 문자열 구분 진행
└── package.json          # 프로젝트 설정 파일
└── README.md             # 프로젝트 소개 및 기능 정의 파일

```

<br/>
<br/>

# 6. Development Workflow (개발 워크플로우)

## 브랜치 전략 (Branch Strategy)

- [woowacourse 저장소](https://github.com/woowacourse-precourse/javascript-racingcar-7.git)에서 fork 하여 과제 진행
- `mun-kyeong` branch 사용

<br/>
<br/>

# 7. 커밋 컨벤션

## 기본 구조

```md
<type>(<scope>): <subject>

<body>

<footer>
```

<br/>

## type 종류

```
feat (feature) - 기능
fix (bug fix)  - 수정
docs (documentation) - 문서작업
style (formatting, missing semi colons, …) - 스타일 (서식 누락)
refactor - 리팩토링
test (when adding missing tests)- 테스트
chore (maintain) - 잡일(기타..)
```

<br/>
<br/>

## 커밋 형식 설명

- `type` : 커밋 타입
- `scope` : 커밋이 변경된 위치 작성
  - 함수 변경되면 함수이름, 메서드 추가 및 클래스 이름이 될 수도 있음
- `subject` : 명령형, 현재형 언어 사용. 커밋 주제
- `body` : 변경된 부분 설명 및 이전 행동과 대조
- `footer` : 주요 변경사항은 참고 사항이랑 footer에 언급필요

<br/>
<br/>

## 커밋 예시

```md
[FEAT] (Controller, Model) : 기본 구분자로 문자열 구분

- Controller에서 Model로 input값 전달
- Model에선 parseInt()을 통해 문자열 구분
- parseInt()는 현재 기본 구분자만 구분 가능

기본 구분자 기준으로 문자열을 파씽할 수 있도록 작성했습니다.
추후 기능 추가가 필요한 부분은 @todo를 통해 확인할 수 있습니다.
```

<br/>
