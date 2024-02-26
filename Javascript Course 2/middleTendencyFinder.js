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

// MEAN CALC END

const medianCalculateButton = document.getElementById('medianCalculateButton');
const medianResult = document.getElementById('medianResult');
const medianInput = document.getElementById('medianInput').value;

medianCalculateButton.addEventListener('click', () => {
  const numbers = medianInput.split(',').map(Number);
  const sortedNumbers = numbers.sort((a, b) => a - b);
  const middleIndex = Math.floor(sortedNumbers.length / 2);

  if (sortedNumbers.length % 2 === 0) {
    const middle1 = sortedNumbers[middleIndex - 1];
    const middle2 = sortedNumbers[middleIndex];
    const median = (middle1 + middle2) / 2;
    medianResult.textContent = `The median is ${median}`;
  } else {
    const median = sortedNumbers[middleIndex];
    medianResult.textContent = `The median is ${median}`;
  }
});

// MEDIAN CALC END


