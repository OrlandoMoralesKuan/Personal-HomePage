var values, earnings, expenses, x;

function convertToNumber(value) {
  // Convert a string value to a number if possible
  let number_value = Number(value);
  if (Number.isNaN(number_value)) {
    return 0
  } else {
    return number_value
  }
}


values = [];
let element_earn = document.getElementById('earn');
element_earn.innerText = 0;
let element_expen = document.getElementById('expen');
element_expen.innerText = 0;
let element_total = document.getElementById('total');
element_total.innerText = 0;


document.getElementById('button_insert').addEventListener('click', (event) => {
  values.unshift(convertToNumber(document.getElementById('number').value));
  let new_li = document.createElement('li');
  let element_list = document.getElementById('list');
  element_list.innerText = values;

  event.target.appendChild(new_li);
  let element_button_insert = document.getElementById('button_insert');
  element_button_insert.replaceChildren();
  element_button_insert.innerText = 'Insert';

});

document.getElementById('button_calc').addEventListener('click', (event) => {
  earnings = [];
  expenses = [];
  values.forEach((x) => {
    let element_total2 = document.getElementById('total');
    element_total2.innerText = values.reduce((a,b) => a+b, 0);
  });
  values.forEach((x) => {
    let new_li2 = document.createElement('li');
    new_li2.innerText = convertToNumber(document.getElementById('number').value);
    if (x > 0) {
      earnings.unshift(x);
      let element_earn2 = document.getElementById('earn');
      element_earn2.innerText = earnings.reduce((a,b) => a+b, 0);
    }

    event.target.appendChild(new_li2);
    let element_button_calc = document.getElementById('button_calc');
    element_button_calc.replaceChildren();
    element_button_calc.innerText = 'Calculate';
  });
  values.forEach((x) => {
    let new_li3 = document.createElement('li');
    new_li3.innerText = convertToNumber(document.getElementById('number').value);
    if (x <= 0) {
      expenses.unshift(x);
      let element_expen2 = document.getElementById('expen');
      element_expen2.innerText = expenses.reduce((a,b) => a+b, 0);
    }

    event.target.appendChild(new_li3);
    let element_button_calc2 = document.getElementById('button_calc');
    element_button_calc2.replaceChildren();
    element_button_calc2.innerText = 'Calculate';
  });

});

document.getElementById('clear').addEventListener('click', (event) => {
  let element_list2 = document.getElementById('list');
  element_list2.replaceChildren();
  values = [];
  let element_earn3 = document.getElementById('earn');
  element_earn3.replaceChildren();
  element_earn3.innerText = 0;
  let element_expen3 = document.getElementById('expen');
  element_expen3.replaceChildren();
  element_expen3.innerText = 0;
  let element_total3 = document.getElementById('total');
  element_total3.replaceChildren();
  element_total3.innerText = 0;

});