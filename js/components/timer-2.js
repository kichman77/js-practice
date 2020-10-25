// ============================= Таймер ========================
const start = document.querySelector('[data-action="start"]');
const pause = document.querySelector('[data-action="pause"]');
const stop = document.querySelector('[data-action="stop"]');
const p = document.querySelector('#event-time');
p.textContent = `00:00:00`;

class Timer {
  constructor() {
    this.isActive = false;
    this.startTime = '';
    this.currentTime = '';
    this.deltaTime = '';
    this.startInt = '';
    this.pauseTime = '';
    this.pauseInt = '';
  }
  pad(value) {
    return String(value).padStart(2, '0');
  }
  getHours(time) {
    return this.pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    );
  }
  getMinutes(time) {
    return this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
  }
  getSeconds(time) {
    return this.pad(Math.floor((time % (1000 * 60)) / 1000));
  }
  updateClockFace(time) {
    return `${this.getHours(time)}:${this.getMinutes(time)}:${this.getSeconds(
      time,
    )}`;
  }
  start() {
    if (this.isActive) return;
    this.isActive = true;
    this.startTime = Date.now();
    console.log('start time', this.startTime);

    this.startInt = setInterval(() => {
      this.currentTime = Date.now();
      console.log('current time', this.currentTime);
      this.deltaTime = this.currentTime - this.startTime;
      p.textContent = this.updateClockFace(this.deltaTime);
    }, 1000);
    console.log('isActive', this.isActive);
    if (this.pauseTime > this.startTime) {
      this.pauseInt = setInterval(() => {
        console.log(this.deltaTime);
        p.textContent = this.updateClockFace(this.deltaTime + 1000);
      }, 1000);
    }
  }
  pause() {
    if (this.isActive) {
      this.pauseTime = Date.now();
      console.log(this.pauseTime);
      clearInterval(this.startInt);
      this.isActive = false;
    }
    console.log('isActive', this.isActive);
  }
  stop() {
    clearInterval(this.startInt);
    p.textContent = `00:00:00`;
    this.isActive = false;
    console.log('isActive', this.isActive);
  }
}
const timer = new Timer();
console.log(timer);
start.addEventListener('click', timer.start.bind(timer));
pause.addEventListener('click', timer.pause.bind(timer));
stop.addEventListener('click', timer.stop.bind(timer));
timer.start();
