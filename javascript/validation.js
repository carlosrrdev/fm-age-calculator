const dayLabel = document.querySelector('label[for="day"]');
const dayInputEl = document.getElementById("day");
const dayErrorEl = document.getElementById("day-error");
const monthLabel = document.querySelector('label[for="month"]');
const monthInputEl = document.getElementById("month");
const monthErrorEl = document.getElementById("month-error");
const yearLabel = document.querySelector('label[for="year"]');
const yearInputEl = document.getElementById("year");
const yearErrorEl = document.getElementById("year-error");

/**
 * Function validates form input data
 * @param {FormData} data
 * @returns {boolean}
 */
export function validate(data) {
  const dayValue = data.get("day");
  const monthValue = data.get("month");
  const yearValue = data.get("year");

  const date = new Date();

  if (!dayValue) {
    setError(dayLabel, dayInputEl, dayErrorEl, "This field is required");
  } else if (
    !parseInt(dayValue) ||
    parseInt(dayValue) < 1 ||
    parseInt(dayValue) > 31
  ) {
    setError(dayLabel, dayInputEl, dayErrorEl, "Must be a valid day");
  } else {
    clearError(dayLabel, dayInputEl, dayErrorEl);
  }

  if (!monthValue) {
    setError(monthLabel, monthInputEl, monthErrorEl, "This field is required");
  } else if (
    !parseInt(monthValue) ||
    parseInt(monthValue) < 1 ||
    parseInt(monthValue) > 12
  ) {
    setError(monthLabel, monthInputEl, monthErrorEl, "Must be a valid month");
  } else {
    clearError(monthLabel, monthInputEl, monthErrorEl);
  }

  if (!yearValue) {
    setError(yearLabel, yearInputEl, yearErrorEl, "This field is required");
  } else if (
    !parseInt(yearValue) ||
    parseInt(yearValue) > date.getFullYear() ||
    parseInt(yearValue) < 1
  ) {
    setError(yearLabel, yearInputEl, yearErrorEl, "Must be a valid year");
  } else {
    clearError(yearLabel, yearInputEl, yearErrorEl);
  }
}

/**
 * Sets form input error styles and text
 * @param {Element} inputLabel
 * @param {HTMLElement} inputEl
 * @param {HTMLElement} inputErrorEl
 * @param {string} message
 */
function setError(inputLabel, inputEl, inputErrorEl, message) {
  inputLabel.classList.add("error-text");
  inputEl.classList.add("error-input");
  inputErrorEl.innerText = message;
}

/**
 * Clears form input error styles and text
 * @param {Element} inputLabel
 * @param {HTMLElement} inputEl
 * @param {HTMLElement} inputErrorEl
 */
function clearError(inputLabel, inputEl, inputErrorEl) {
  inputLabel.classList.remove("error-text");
  inputEl.classList.remove("error-input");
  inputErrorEl.innerText = "";
}
