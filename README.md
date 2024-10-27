<p align="center">
    <img src="./logo_full_light.png" alt="우아한테크코스" width="250px">
</p>

# 프리코스 2주차 미션 - 자동차 경주

---

![Generic badge](https://img.shields.io/badge/precourse-week2-green.svg)
![Generic badge](https://img.shields.io/badge/test-5_passed-blue.svg)

> 우아한테크코스 7기 2주차 미션, 자동차 경주 게임을 구현한 저장소입니다.

<br>

# 목차

- [시작하기](#시작하기)
- [기능 요구사항](#기능-요구사항)
    - [1. 사용자 입력](#1-사용자-입력)
    - [2. 자동차 전진 조건 설정](#2-자동차-전진-조건-설정)
    - [3. 게임 진행](#3-게임-진행)
    - [4. 우승자 판별](#4-우승자-판별)
    - [5. 결과 출력](#5.-결과-출력)
- [프로그래밍 요구사항](#프로그래밍-요구사항)
      
## 시작하기
레포지토리를 Clone 하고 IDE에서 애플리케이션을 실행합니다.

```git
git clone -b as --single-branch https://github.com/yiju1755/javascript-racingcar-7.git
```

## 기능 요구사항

### 1. 사용자 입력
- [ ] 경주할 자동차 이름을 쉼표(,)로 구분하여 입력받기
  - [ ] 각 자동차 이름은 최대 5자 이하의 길이로 제한
  - [ ] 잘못된 형식의 입력이 들어올 경우, "[ERROR]"로 시작하는 오류 메시지를 출력하고 프로그램 종료
- [ ] 사용자가 시도할 횟수를 입력받기

### 2. 자동차 전진 조건 설정
- [ ] 0에서 9까지의 무작위 숫자를 생성하여 4 이상일 경우 자동차를 전진
  - [ ] 무작위 숫자 생성을 위해 `@woowacourse/mission-utils`의 `Random.pickNumberInRange()` 사용

### 3. 게임 진행
- [ ] 입력된 시도 횟수만큼 라운드를 반복하여 각 자동차의 이동 기록을 출력
  - [ ] 매 라운드마다 각 자동차가 전진한 결과를 이름과 함께 출력

### 4. 우승자 판별
- [ ] 모든 라운드가 종료된 후 가장 많이 전진한 자동차를 우승자로 발표
  - [ ] 우승자가 여러 명일 경우, 쉼표(,)로 구분하여 공동 우승자로 출력

### 5. 결과 출력
- [ ] 라운드별 자동차 전진 결과와 최종 우승자 목록을 화면에 출력하기

## 프로그래밍 요구사항
- Node.js 20.17.0 버전에서 실행 가능해야 한다.
- 프로그램 실행의 시작점은 App.js의 run()이다.
- package.json 파일은 변경할 수 없으며, 제공된 라이브러리와 스타일 라이브러리 이외의 외부 라이브러리는 사용하지 않는다.
- 프로그램 종료 시 process.exit()를 호출하지 않는다.
- 프로그래밍 요구 사항에서 달리 명시하지 않는 한 파일, 패키지 등의 이름을 바꾸거나 이동하지 않는다.
- 자바스크립트 코드 컨벤션을 지키면서 프로그래밍한다.
  - 기본적으로 JavaScript Style Guide를 원칙으로 한다.
- indent(인덴트, 들여쓰기) depth를 3이 넘지 않도록 구현한다. 2까지만 허용한다.
  - 예를 들어 while문 안에 if문이 있으면 들여쓰기는 2이다.
  - 힌트: indent(인덴트, 들여쓰기) depth를 줄이는 좋은 방법은 함수(또는 메서드)를 분리하면 된다.
- 3항 연산자를 쓰지 않는다.
- 함수(또는 메서드)가 한 가지 일만 하도록 최대한 작게 만들어라.
- Jest를 이용하여 정리한 기능 목록이 정상적으로 작동하는지 테스트 코드로 확인한다.

