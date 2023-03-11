let randomNum = 0;
let input = document.getElementById("user-input");
let playButton = document.getElementById("play-button");
let resetButton = document.getElementById("reset-button");
let resultArea = document.getElementById("result-area");
let chanceArea = document.getElementById("chance-area");
let chances = 5; //남은 기회
let gameOver = false;
let inputList = []; //user가 입력한 숫자 리스트

playButton.addEventListener("click", play);
resetButton.addEventListener("click", reset);
input.addEventListener("focus", function () {
  input.value = "";
});

function pickRandomNum() {
  //랜덤 숫자 뽑기
  randomNum = Math.floor(Math.random() * 100) + 1;
  console.log("정답 : ", randomNum);
}

function play() {
  // 숫자 추측하기
  let userValue = input.value;

  //input 조건 지정
  if (userValue < 1 || userValue > 100) {
    resultArea.textContent = "범위 밖의 숫자입니다. 다시 입력해주세요!";
    return;
  }
  if (inputList.includes(userValue)) {
    resultArea.textContent = "이미 입력한 숫자입니다. 다시 입력해주세요!";
    return;
  }

  chances--;
  chanceArea.textContent = `남은 기회 : ${chances}번`;
  inputList.push(userValue);

  if (userValue < randomNum) {
    resultArea.textContent = "UP!!";
  } else if (userValue > randomNum) {
    resultArea.textContent = "DOWN!!";
  } else {
    resultArea.textContent = "정답입니다~~!!";
    gameOver = true;
  }

  if (chances < 1) {
    gameOver = true;
  }
  if (gameOver == true) {
    playButton.disabled = true;
  }
}

function reset() {
  // 리셋
  pickRandomNum();
  input.value = "";
  resultArea.textContent = "무조건 맞추자!!!";
  chances = 5;
  chanceArea.textContent = `남은 기회 : ${chances}번`;
  gameOver = false;
  playButton.disabled = false;
  inputList = [];
}

pickRandomNum();
