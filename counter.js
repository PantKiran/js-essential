// applying bind methos

const btn = document.querySelector('.btn');
const value = document.getElementById('value');
const resetbtn = document.querySelector('.resetbtn');

const counter = {
  count: 0,
  increment: function () {
    this.count++;
    console.log(this.count);
    value.textContent = this.count;
  },
  reset: function () {
    this.count = 0;
    value.textContent = this.count;
  },
};

btn.addEventListener('click', counter.increment.bind(counter));
resetbtn.addEventListener('click', counter.reset.bind(counter));
