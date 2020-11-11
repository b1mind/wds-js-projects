const quizForm = document.getElementById('quiz-form')
const answers = document.querySelectorAll('.answer')
const questions = document.querySelectorAll('.question-item')
const congratsAlert = document.getElementById('alert')

function checkAnswers() {
  let correctAnswers = 0
  answers.forEach(e => {
    if (e.checked) {
      let parent = e.closest('.question-item')
      if (e.value === 'true') {
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

  if (correctAnswers === 3) {
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
