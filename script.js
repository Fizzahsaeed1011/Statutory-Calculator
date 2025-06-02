document.addEventListener('DOMContentLoaded', function () {
  const ageInput = document.getElementById('age');
  const yearsInput = document.getElementById('years');
  const payInput = document.getElementById('pay');
  const resultOutput = document.getElementById('result');
  const calculateBtn = document.getElementById('calculateBtn');
  const resetBtn = document.getElementById('resetBtn');

  calculateBtn.addEventListener('click', function () {
    const age = parseInt(ageInput.value);
    const years = parseInt(yearsInput.value);
    let pay = parseFloat(payInput.value);
    const maxWeeklyPay = 643; // 2024 cap

    if (isNaN(age) || isNaN(years) || isNaN(pay)) {
      resultOutput.textContent = 'Please fill in all fields correctly.';
      return;
    }

    if (age < 16 || age > 100) {
      resultOutput.textContent = 'Age must be between 16 and 100.';
      return;
    }

    if (years < 0 || years > 50) {
      resultOutput.textContent = 'Years of service must be between 0 and 50.';
      return;
    }

    if (pay < 0) {
      resultOutput.textContent = 'Weekly pay must be a positive number.';
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

    const redundancyPay = (totalWeeks * pay).toFixed(2);
    resultOutput.textContent = `Statutory Redundancy Pay: £${redundancyPay}`;
  });

  resetBtn.addEventListener('click', function () {
    ageInput.value = '';
    yearsInput.value = '';
    payInput.value = '';
    resultOutput.textContent = '';
  });
});

