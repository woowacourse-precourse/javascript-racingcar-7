## 🚗 [WOOWACOURSE 2주차] 자동차 경주

### ✨관련 노션 링크

- [🎁 이번주 배운 점](https://harvest-wool-819.notion.site/2-1271f2c49ce08160bf10decfb0adb82c?pvs=4)  
- [🐞 Trouble Shooting](https://harvest-wool-819.notion.site/Trouble-Shooting-1271f2c49ce081b5ad55edfb6f5fc4a1?pvs=4)
- [📄 TDD 과정](https://harvest-wool-819.notion.site/TDD-1271f2c49ce0808b954cd0791fff0341?pvs=4)
- [🛠 자동차 경주 프로그램 구조와 리팩토링](https://harvest-wool-819.notion.site/1271f2c49ce08076b008e9aa32211547?pvs=4)      
- [💻 이번주 백준](https://harvest-wool-819.notion.site/2-1271f2c49ce081bc8dd1c23f165f2524?pvs=4)


<br>

## 🌟 이번주 목표

- 1주차 공통 피드백을 최대한 반영한다
- Jest를 이용해 테스트 도구를 사용하는 방법을 배우고 프로그램이 제대로 작동하는지 테스트한다
- TDD 방식으로 개발해본다


<br>


## 🗄 디렉터리 구조

```plaintext
javascript-racing-car/
├── __tests__/
│   ├── ApplicationTest.js         # 전체 애플리케이션에 대한 통합 테스트
│   └── unit/
│       ├── RaceControllerTest.js  # RaceController 클래스에 대한 유닛 테스트
│       ├── RaceTest.js            # Race 클래스에 대한 유닛 테스트
│       └── validatorsTest.js      # 유효성 검사 함수에 대한 유닛 테스트
├── docs/
│   ├── FUNCTIONS.md               # 함수별 기능 설명 문서
│   └── REQUIREMENTS.md            # 프로젝트 요구사항 문서
├── node_modules/                  # 프로젝트 의존성 모듈들
├── src/
│   ├── common/
│   │   ├── constants.js           # 상수 파일
│   │   ├── utils.js               # 유틸리티 함수들
│   │   └── validators.js          # 입력값 검증 로직
│   ├── App.js                     # 프로그램 실행 시작점
│   ├── Car.js                     # 자동차 클래스
│   ├── index.js                   # 메인 진입점 파일
│   ├── Race.js                    # 레이스 로직이 포함된 클래스
│   └── RaceController.js          # 레이스 제어를 담당하는 클래스
├── .gitignore                     # Git에서 제외할 파일 설정
├── .npmrc                         # npm 설정 파일
├── package-lock.json              # 의존성 잠금 파일
├── package.json                   # 프로젝트 설정 및 의존성 목록
└── README.md                      # 프로젝트 설명 파일 (루트)
```

<br>

## 🌊 플로우 설명

### 1. 차 이름 입력 받기
- `RaceController.startRace` 메서드가 호출되면 게임이 시작됩니다.
- `setCarName` 메서드에서 `getCarName` 함수를 통해 사용자가 입력한 차 이름을 받습니다.
- 입력된 이름을 `validateCarName` 함수로 검증합니다.
  - 이름이 빈 값인지 확인하고 예외를 발생시킵니다.
  - 각 이름이 최대 길이를 초과하지 않는지 확인하고 초과할 경우 예외를 발생시킵니다.
  - 이름에 중복이 없는지 확인하고 중복일 경우 예외를 발생시킵니다.
- 입력된 차 이름은 `splitByDelimiter`로 구분자로 분리한 후, `Race.setCars` 메서드를 통해 `Car` 객체로 설정됩니다.

### 2. 시도 횟수 입력 받기
- `setAttemptCount` 메서드에서 `getAttempt` 함수를 통해 사용자가 입력한 시도 횟수를 받습니다.
- 입력된 시도 횟수는 `validateAttemptCount` 함수로 검증합니다.
  - 빈 값인지 확인하고 예외를 발생시킵니다.
  - 양의 정수인지 확인하고 아니면 예외를 발생시킵니다.
- 시도 횟수가 유효하면 `Race.setAttemptCount` 메서드로 설정됩니다.

### 3. 레이스 진행
- `runRaceRounds` 메서드에서 `attemptCount` 횟수만큼 반복하여 레이스를 진행합니다.
- 각 라운드마다 `Race.generateRandomDistances` 메서드를 호출해 무작위로 차가 이동할 거리를 생성합니다.
- 이동할 거리가 규칙상 이동 임계값을 넘으면 `Car.move` 메서드를 통해 차가 이동합니다.
- 라운드가 끝나면 `printRaceStatus` 메서드로 현재 각 차의 거리 상태를 출력합니다.

### 4. 우승자 출력
- 모든 라운드가 종료되면 `printWinners` 메서드가 호출되어 우승자가 출력됩니다.
- `Race.getWinners` 메서드를 통해 가장 멀리 간 차들의 이름을 가져와 출력합니다.

<br>


## ✅ 기능 리스트

- [x] 사용자에게서 경주할 자동차 이름을 받는 기능
- [x] 자동차 이름 유효성 검사 기능
- [x] 사용자에게서 시도할 횟수를 받는 기능
- [x] 무작위로 숫자를 생성하는 기능
- [x] 무작위 생성 숫자에서 이동 조건을 검사하는 기능
- [x] 주어진 숫자만큼 차를 이동시키는 기능
- [x] 차 이동 거리만큼 실행결과를 시각적으로 보여주는 기능
- [x] 차 이동 거리를 비교하는 기능
- [x] 우승자를 결정하는 기능 (우승자 1명 or 우승자 여러명)
- [x] 우승자를 출력하는 기능

<br>

## 🙈 예외 처리

### validateCarName(input)

1. **빈 문자열 검증**: 입력이 비었을 경우 `ERROR_MESSAGE.EMPTY_INPUT` 예외를 발생시킵니다.
2. **최대 길이 검증**: 각 차 이름이 최대 길이(`GAME_RULES.MAX_CAR_NAME_LENGTH`)를 초과하면 `ERROR_MESSAGE.INVALID_INPUT` 예외를 발생시킵니다.
3. **중복 이름 검증**: 이름에 중복이 있을 경우 `ERROR_MESSAGE.DUPLICATE_INPUT` 예외를 발생시킵니다.

### validateAttemptCount(input)

1. **빈 문자열 검증**: 입력이 비었을 경우 `ERROR_MESSAGE.EMPTY_INPUT` 예외를 발생시킵니다.
2. **양의 정수 검증**: 입력이 양의 정수가 아니면 `ERROR_MESSAGE.INVALID_ATTEMPTS_COUNT` 예외를 발생시킵니다.


