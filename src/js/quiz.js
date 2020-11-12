const quizForm = document.getElementById('quiz-form')
const answers = Array.from(document.querySelectorAll('.answer')) //kyle changed to array from node.list to expose filter
const questions = document.querySelectorAll('.question-item')
const congratsAlert = document.getElementById('alert')

function checkAnswers() {
  // kyle used filter to get an array of all selected answers
  let selectedAnswers = answers.filter(answer => answer.checked)

  // where I was trying to hold count
  let correctAnswers = 0

  answers.forEach(answer => {
    if (answer.checked) {
      let parent = answer.closest('.question-item')

      if (answer.value === 'true') {
        parent.classList.add('correct')
        parent.classList.remove('incorrect')

        correctAnswers++
      } else {
        parent.classList.remove('correct')
        parent.classList.add('incorrect')

        correctAnswers--
      }
    }
  })

  // kyle was then able to also check every answer for value true
  let allTrue = selectedAnswers.every(answer => answer.value === 'true')
  // then checked if all answers matched number of questions
  let allAnswered = selectedAnswers === questions.length

  // now you have two booleans to check against (kept my solution too)
  if (correctAnswers === 3 || (allTrue && allAnswered)) {
    congratsAlert.classList.add('active')
    setTimeout(() => congratsAlert.classList.remove('active'), 1500)
  }
}

quizForm.addEventListener('submit', e => {
  e.preventDefault()

  questions.forEach(e => {
    e.classList.add('incorrect')
  })

  checkAnswers()
})
