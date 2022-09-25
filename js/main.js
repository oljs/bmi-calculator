const btn = document.getElementById('calculate');
let color1 = '#43C6AC';

btn.addEventListener('click', function () {
  let height = document.getElementById('height').value;
  let weight = document.getElementById('weight').value;

  if (height == '' || weight == '') {
    alert('Please fill out the input fields!');
    return;
  }

  // BMI = weight in kg / (height in m * height in m)

  let bmi = weight / (height * height / 10000);

  bmi = bmi.toFixed(2);

  document.getElementById('result').innerHTML = bmi;

  let status = '';

  if (bmi < 18.5) {
    status = 'Underweight';
    color1 = '#E2C507';
  }
  if (bmi >= 18.5 && bmi < 25) {
    status = 'Healthy';
    color1 = '#35DDBC';
  }
  if (bmi >= 25 && bmi < 30) {
    status = 'Overweight';
    color1 = '#6A2EAE';
  }
  if (bmi >= 30) {
    status = 'Obese';
    color1 = '#D32536';
  }
  document.querySelector('.comment').innerHTML = `You are <span id="comment">${status}</span>`;
  document.getElementById('result').style.color = color1;
  document.getElementById('comment').style.color = color1;
  
  myfunc();

});


