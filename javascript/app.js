import { validate } from "./validation.js";
const form = document.getElementById("form");
const submitBtn = document.getElementById("submit");
const yearsNum = document.getElementById("years-number");
const monthsNum = document.getElementById("months-number");
const daysNum = document.getElementById("days-number");

// Form is submitted
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = new FormData(form, submitBtn);
  validate(data);
  const dataObject = Object.fromEntries(data.entries());
  calculate(dataObject);
});

/**
 *
 * @param {{day: string, month: string, year: string}} obj
 */
function calculate(obj) {
  const date = new Date();
  const currentDay = date.getDate();
  const currentMonth = date.getMonth() + 1;
  const currentYear = date.getFullYear();

  yearsNum.innerText = currentYear - parseInt(obj.year);
  let month = currentMonth - parseInt(obj.month);
  monthsNum.innerText = month < 0 ? month * -1 : month;

  let day = currentDay - parseInt(obj.day);
  console.log(day);
  console.log(currentDay);
  daysNum.innerText = day < 0 ? day * -1 : day;
}
