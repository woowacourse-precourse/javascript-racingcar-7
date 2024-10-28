# 기능 구현 목록

## 입출력

### 입력

- 자동차 이름 입력
- 자동차 경주 시도 횟수 입력

### 출력

- 자동차 경주 실행 결과 출력
- 자동차 경주 최종 우승자 출력

## 기능 구현

### 검증

- 자동차 이름 검증 기능 구현
- 자동차 이름 사이 구분자 (,) 검증 기능 구현
- 시도 횟수 숫자 검증 기능 구현

### 자동차 게임 진행

- 자동차 전진을 위한 무작위 값 생성 기능 구현
- 무작위 값이 4 이상일때 자동차 전진 기능 구현
- 자동차 전진 시 각 자동차에 진행상황('-') 추가 기능 구현

### 자동차 게임 결과

- 가장 많이 전진한 자동차를 최종 우승자로 선정 기능 구현
- 최종 우승자가 2명 이상일 경우 공동 우승자로 선정 기능 구현

## 기타

### 상수화

- 입출력 문구 상수화
- 에러 메세지 상수화
- 기타 문구 상수화

### 예외처리

- 자동차 이름이 문자가 아닐 때
- 구분자가 쉼표(,)가 아닐 때
- 입력에 띄어쓰기(' ') 가 존재할 때
- 시도 횟수가 숫자가 아닐 때
- 시도 횟수가 0일때
