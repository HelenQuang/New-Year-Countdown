const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const countdownEl = document.getElementById("newyear-countdown");
const lunarCountdownEl = document.getElementById("lunar-countdown");

const lunarDays = document.getElementById("lunar-days");
const lunarHours = document.getElementById("lunar-hours");
const lunarMinutes = document.getElementById("lunar-minutes");
const lunarSeconds = document.getElementById("lunar-seconds");

const currentYear = new Date().getFullYear();

const year = document.getElementById("year");
year.innerText = currentYear + 1;

const loading = document.getElementById("loading");
setTimeout(() => {
  loading.remove();
  countdownEl.style.display = "flex";
  lunarCountdownEl.style.display = "flex";
}, 1000);

const newYearTime = new Date(`January 01 ${currentYear + 1} 00:00:00`);

const lunarNewYearTime = new Date(`January 22 ${currentYear + 1} 00:00:00`);

const updateNewYearCountdown = () => {
  const currentTime = new Date();

  const diff = newYearTime - currentTime;

  const d = Math.floor(diff / 1000 / 60 / 60 / 24);
  const h = Math.floor(diff / 1000 / 60 / 60) % 24;
  const m = Math.floor(diff / 1000 / 60) % 60;
  const s = Math.floor(diff / 1000) % 60;

  days.innerHTML = d;
  hours.innerHTML = h < 10 ? "0" + h : h;
  minutes.innerHTML = m < 10 ? "0" + m : m;
  seconds.innerHTML = s < 10 ? "0" + s : s;
};
setInterval(updateNewYearCountdown, 1000);

const updateLunarNewYearCountdown = () => {
  const currentTime = new Date();

  const diff = lunarNewYearTime - currentTime;

  const d = Math.floor(diff / 1000 / 60 / 60 / 24);
  const h = Math.floor(diff / 1000 / 60 / 60) % 24;
  const m = Math.floor(diff / 1000 / 60) % 60;
  const s = Math.floor(diff / 1000) % 60;

  lunarDays.innerHTML = d;
  lunarHours.innerHTML = h < 10 ? "0" + h : h;
  lunarMinutes.innerHTML = m < 10 ? "0" + m : m;
  lunarSeconds.innerHTML = s < 10 ? "0" + s : s;
};

setInterval(updateLunarNewYearCountdown, 1000);
