const aprSlider = document.getElementById("apr");
const interestOutput = document.getElementById("accumulated");
const calculateButton = document.getElementById("calculate");
const totalOutput = document.getElementById("total");

aprSlider.addEventListener("input", () => {
  interestOutput.textContent = aprSlider.value;
});

calculateButton.addEventListener("click", (e) => {
  e.preventDefault();
  const periodSelect = document.getElementById("period");
  const principal = parseFloat(document.getElementById("principal").value);
  const period = parseFloat(periodSelect.value);
  const years = parseFloat(document.getElementById("years").value);
  const apr = parseFloat(aprSlider.value) / 100;

  const total = principal * Math.pow(1 + apr / period, period * years);

  document.getElementById("totalOutput").innerHTML = total.toFixed(2);
});
