let count = 0;
const countID = document.getElementById("count");

document.getElementById("increment").addEventListener("click", function () {
  count++;
  countID.textContent = count;
});

document.getElementById("decrement").addEventListener("click", function () {
  count--;
  countID.textContent = count;
});

document.getElementById("reset").addEventListener("click", function () {
  count = 0;
  countID.textContent = count;
});
