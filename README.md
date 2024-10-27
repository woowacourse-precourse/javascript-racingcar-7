# 구현 기능 목록

## 1. Model

#### 1.1 어떤 역할을 하나요?

개발 과정에서 주요 오브젝트들을 관리하는 디렉토리입니다.

#### 1.2. 어떤 기능을 포함하나요?

- 자동차를 의미하는 Car 객체를 관리합니다.
  - Car 객체는 자동차 이름, 이동한 횟수를 변수를 통해 관리합니다.
  - Car 객체는 해당 객체의 이동 횟수를 증가시키는 전진 메서드를 포함합니다.
- 경주장을 의미하는 Track 객체를 관리합니다.
  - 해당 객체에서 Car 인스턴스를 생성하여 경주를 실행합니다.
  - 자동차 경주 게임이 완료된 후, 누가 우승했는지를 판별하는 함수가 있습니다.

## 2. Util

#### 2.1. 어떤 역할을 하나요?

자동차 경주 게임에서 필요한 기본적인 로직을 관리하는 디렉토리입니다.

#### 2.2. 어떤 기능을 포함하나요?

- 콘솔을 통해 입/출력을 진행하는 함수가 있습니다.
- 숫자를 "-"로 변경하는 함수가 있습니다.

## 3. Validator

#### 3.1. 어떤 역할을 하나요?

유효성 검사 로직을 관리하는 디렉토리입니다.

#### 3.2. 어떤 기능을 포함하나요?

- 사용자가 입력한 자동차 이름이 올바른 포맷을 유지하는지 검사하는 로직을 포함합니다.
  - 자동차 이름은 최소 2개 이상 들어와야 합니다.
  - 자동차의 이름은 5글자 이하만 가능합니다.
  - 자동차의 이름에는 구분자(,)가 포함될 수 없습니다.
- 입력된 시도 횟수가 적절한지 확인합니다.
  - 시도 횟수는 숫자만 가능합니다.
  - 시도 횟수는 1이상의 숫자만 가능합니다.

## 4. View

#### 4.1. 어떤 역할을 하나요?

사용자에게 보여줄 콘솔 화면을 구성하는 로직을 포함한 디렉토리입니다.

#### 4.2. 어떤 기능을 포함하나요?

- 경주할 자동차 입력을 받기 위한 안내 메세지를 출력합니다.
- 시도할 횟수를 입력 받기 위한 안내 메세지를 출력합니다.
- 매 횟수마다 출력할 메세지를 관리합니다.
- 최종 우승자를 출력할 메세지를 관리합니다.

## 5. Constant

#### 5.1. 어떤 역할을 하나요?

상수화가 필요한 데이터를 관리하는 디렉토리입니다.

#### 5.2. 어떤 데이터를 관리하나요?

- 에러메세지를 상수로 관리합니다.
- 콘솔에 출력할 메세지를 관리합니다.
