/*
  TODO: 2. Select all elements needed
    * The form element (has the id `quiz-form`)
    * The answer inputs (have the class `answer`)
    * BONUS: The questions (have the class `question-item`)
    * BONUS: The alert (has the id `alert`)
*/

const form = document.getElementById('quiz-form')
const inputs = document.querySelectorAll('.answer')
const questions = document.querySelectorAll('.question-item')
const alert = document.getElementById('alert')

function checkAnswers() {
  inputs.forEach(e => {
    if (e.checked) {
      let parent = e.closest('.question-item')
      if (e.value === 'true') {
        parent.classList.add('correct')
        parent.classList.remove('incorrect')
      } else {
        parent.classList.remove('correct')
        parent.classList.add('incorrect')
      }
    }
  })
}

form.addEventListener('submit', e => {
  e.preventDefault()
  questions.forEach(e => {
    e.classList.add('incorrect')
  })
  checkAnswers()
})
