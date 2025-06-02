document.getElementById('calculate-btn').addEventListener('click', function () {
  const age = parseInt(document.getElementById('age').value);
  const years = parseInt(document.getElementById('years').value);
  let pay = parseFloat(document.getElementById('pay').value);
  const maxWeeklyPay = 643; // UK statutory cap 2024

  const resultEl = document.getElementById('result');

  if (isNaN(age) || isNaN(years) || isNaN(pay)) {
    resultEl.textContent = 'Please fill in all fields correctly.';
    return;
  }

  if (age < 16 || age > 100) {
    resultEl.textContent = 'Age must be between 16 and 100.';
    return;
  }

  if (years < 0 || years > 50) {
    resultEl.textContent = 'Years of service must be between 0 and 50.';
    return;
  }

  if (pay < 0) {
    resultEl.textContent = 'Weekly pay must be a positive number.';
    return;
  }

  pay = Math.min(pay, maxWeeklyPay);

  let totalWeeks = 0;

  for (let i = 0; i < years; i++) {
    const yearAge = age - (years - 1 - i);

    if (yearAge < 22) {
      totalWeeks += 0.5;
    } else if (yearAge < 41) {
      totalWeeks += 1;
    } else {
      totalWeeks += 1.5;
    }
  }

  const redundancy = (totalWeeks * pay).toFixed(2);

  resultEl.textContent = `Statutory Redundancy Pay: £${redundancy}`;
});
