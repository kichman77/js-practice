const btnStart = document.querySelector('.start-btn');
console.log(btnStart);
const btnStop = document.querySelector('.stop-btn');
console.log(btnStop);
const counter = document.querySelector('.count');
console.log(counter);

const timer = {
  timerId: '',
  time: 0,
  start() {
    this.timerId = setInterval(() => {
      counter.textContent = `${this.time++}`;
    }, 1000);
  },
  stop() {
    clearInterval(this.timerId);
    counter.textContent = "0";
  },
};
btnStart.addEventListener('click', () => {
  timer.start();
});

btnStop.addEventListener('click', () => {
  timer.stop();

});

