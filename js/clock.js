const clock = document.querySelector(".clock");
const today = document.querySelector(".today");
const weekList = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

function getDate() {
  const date = new Date();
  const month = date.getMonth()+1;
  const day = date.getDate();
  const week = weekList[date.getDay()];
  today.innerHTML = `${month}월 ${day}일 ${week}`;
}

getDate();
getClock();
setInterval(getClock, 1000);