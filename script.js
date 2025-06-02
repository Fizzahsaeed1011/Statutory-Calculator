document.getElementById('redundancyForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const age = parseInt(document.getElementById('age').value, 10);
  const years = parseInt(document.getElementById('years').value, 10);
  const pay = parseFloat(document.getElementById('pay').value);

  const resultEl = document.getElementById('result');

  if (isNaN(age) || age < 16 || age > 100) {
    resultEl.textContent = 'Please enter a valid age between 16 and 100.';
    return;
  }
  if (isNaN(years) || years < 0 || years > 50) {
    resultEl.textContent = 'Please enter valid years of service (0-50).';
    return;
  }
  if (isNaN(pay) || pay < 0) {
    resultEl.textContent = 'Please enter a valid weekly gross pay.';
    return;
  }

  const weeklyPayCap = 643;
  const cappedPay = Math.min(pay, weeklyPayCap);

  let totalPay = 0;

  for (let i = 1; i <= years; i++) {
    if (age < 22) {
      totalPay += 0.5 * cappedPay;
    } else if (age >= 22 && age <= 40) {
      totalPay += 1 * cappedPay;
    } else if (age > 40) {
      totalPay += 1.5 * cappedPay;
    }
  }

  resultEl.textContent = `Statutory Redundancy Pay: £${totalPay.toFixed(2)}`;
});
