import {
  format,
  fromUnixTime,
  getUnixTime,
  addMonths,
  subMonths,
  eachDayOfInterval,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  isSameDay,
  isSameMonth,
} from 'date-fns'

console.log(`Lets make a date picker`)

const datePickerBtn = document.querySelector('.date-picker-button')
const datePicker = document.querySelector('.date-picker')
const datePickerHeader = document.querySelector('.current-month')
const nextMonthBtn = document.querySelector('.next-month-button')
const prevMonthBtn = document.querySelector('.prev-month-button')
const dateGrid = document.querySelector('.date-picker-grid-dates')
let currentDate = new Date()

datePickerBtn.addEventListener('click', () => {
  datePicker.classList.toggle('show')
  const selectedDate = fromUnixTime(datePickerBtn.dataset.selectedDate)
  currentDate = selectedDate
  setupDatePicker(selectedDate)
})

function setDate(date) {
  datePickerBtn.innerText = format(date, 'MMMM do, yyyy')
  datePickerBtn.dataset.selectedDate = getUnixTime(date)
}

function setupDatePicker(selectedDate) {
  datePickerHeader.innerText = format(currentDate, 'MMMM - yyyy')
  setupDates(selectedDate)
}

function setupDates(selectedDate) {
  const firstWeekStart = startOfWeek(startOfMonth(currentDate))
  const lastWeekEnd = endOfWeek(endOfMonth(currentDate))
  const dates = eachDayOfInterval({ start: firstWeekStart, end: lastWeekEnd })

  dateGrid.innerHTML = ''

  dates.forEach(date => {
    const dateEle = document.createElement('button')
    dateEle.classList.add('date')
    dateEle.innerText = date.getDate()
    dateGrid.appendChild(dateEle)

    if (!isSameMonth(date, currentDate)) {
      dateEle.classList.add('date-picker-other-month-date')
    }

    if (isSameDay(date, selectedDate)) {
      dateEle.classList.add('selected')
    }

    dateEle.addEventListener('click', () => {
      setDate(date)
      datePicker.classList.remove('show')
    })
  })
}

// function setupMonthArrows(selectedDate) {}

nextMonthBtn.addEventListener('click', () => {
  currentDate = addMonths(currentDate, 1)
  setupDatePicker(fromUnixTime(datePickerBtn.dataset.selectedDate))
})

prevMonthBtn.addEventListener('click', () => {
  currentDate = subMonths(currentDate, 1)
  setupDatePicker(fromUnixTime(datePickerBtn.dataset.selectedDate))
})

setDate(new Date())
