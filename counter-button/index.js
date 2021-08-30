const btnInc = document.getElementById("inc");
const btnDec = document.getElementById("dec");
const btnRes = document.getElementById("reset");
const countValue = document.getElementById("counter");

var counter = 0;

btnInc.addEventListener("click", () => {
  counter++;
  countValue.innerHTML = counter;
});

btnDec.addEventListener("click", () => {
  counter--;
  countValue.innerHTML = counter;
});

btnRes.addEventListener("click", () => {
  counter = 0;
  countValue.innerHTML = counter;
});
