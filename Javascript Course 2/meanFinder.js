const meanCalculateButton = document.getElementById('meanCalculateButton');
const meanInput = document.getElementById('meanInput');
const meanResult = document.getElementById('meanResult');

meanCalculateButton.addEventListener('click', () => {
  const numbers = meanInput.value.split(',').map(Number);
  const mean =  calculateMean(numbers);
  meanResult.textContent = `Mean: ${mean}`;
});

function calculateMean(numbers) {
  const sum = numbers.reduce((a, b) => a + b, 0);
  return sum / numbers.length;
}