const meanCalculateButton = document.getElementById('meanCalculateButton');
const meanInput = document.getElementById('meanInput');
const meanResult = document.getElementById('meanResult');

meanCalculateButton.addEventListener('click', () => {
  const numbers = meanInput.value.split(',').map(Number);
  if (numbers.some(isNaN)) {
    meanResult.textContent = 'Invalid input. Please enter numbers separated by commas.'
  } else {
    const mean = calculateMean(numbers);
    meanResult.textContent = `Mean: ${mean}`;
  }
});

function calculateMean(numbers) {
  const sum = numbers.reduce((a, b) => a + b, 0);
  return sum / numbers.length;
}

// MEAN CALC END

const medianInput = document.getElementById('medianInput');
const medianCalculateButton = document.getElementById('medianCalculateButton');
const medianResult = document.getElementById('medianResult');

function calculateMedian(numbers) {
  const sortedNumbers = numbers.sort((a, b) => a - b);
  const middleIndex = Math.floor(sortedNumbers.length / 2);

  if (sortedNumbers.length % 2 === 0) {
    return (sortedNumbers[middleIndex - 1] + sortedNumbers[middleIndex]) / 2;
  } else {
    return sortedNumbers[middleIndex];
  }
}

medianCalculateButton.addEventListener('click', () => {
  const numbers = medianInput.value.split(',').map(Number);
  if (numbers.some(isNaN)) {
    medianResult.textContent = 'Invalid input. Please enter numbers separated by commas.';
  } else {
    medianResult.textContent = 'Median: ' + calculateMedian(numbers);
  }
});

// MEDIAN CALC END

const modeCalculateButton = document.getElementById('modeCalculateButton');
const modeInput = document.getElementById('modeInput');
const modeResult = document.getElementById('modeResult');

modeCalculateButton.addEventListener('click', () => {
  const numbers = modeInput.value.split(',').map(Number);
  if (numbers.some(isNaN)) {
    modeResult.textContent = 'Invalid input. Please enter numbers separated by commas.'
  } else {
    const mode = calculateMode(numbers);
    modeResult.textContent = `Mode: ${mode}`;
  }
});

function calculateMode(numbers) {
  const count = {};
  let maxCount = 0;
  let mode;

  numbers.forEach(number => {
    count[number] = (count[number] || 0) + 1;
    if (count[number] > maxCount) {
      maxCount = count[number];
      mode = number;
    }
  });

  return mode;
}

// MODE CALC END
